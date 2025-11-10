"use client";

import { useEffect, useRef, useState } from "react";

export default function EarthGlobe() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<any>(null);
  const rendererRef = useRef<any>(null);
  const animationIdRef = useRef<number | null>(null);
  const earthRef = useRef<any>(null);
  const starsRef = useRef<any>(null);
  const earthGroupRef = useRef<any>(null);
  const cameraRef = useRef<any>(null);

  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isSmallMobile, setIsSmallMobile] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted || !containerRef.current || typeof window === "undefined") return;

    let THREE: any;
    const initGlobe = async () => {
      THREE = await import("three");

      const checkDeviceType = () => {
        const width = window.innerWidth;
        setIsSmallMobile(width < 468);
        setIsMobile(width >= 468 && width < 768);
        setIsTablet(width >= 768 && width < 1024);
      };

      checkDeviceType();
      window.addEventListener("resize", checkDeviceType);

      const scene = new THREE.Scene();
      sceneRef.current = scene;

      const aspectRatio = window.innerWidth / window.innerHeight;
      let fov = 80;
      let cameraZ = 3.0;
      
      if (isSmallMobile) {
        fov = 60;
        cameraZ = 3.5;
      } else if (isMobile) {
        fov = 65;
        cameraZ = 3.3;
      } else if (isTablet) {
        fov = 75;
        cameraZ = 3.2;
      }
      
      const camera = new THREE.PerspectiveCamera(fov, aspectRatio, 0.1, 1000);
      cameraRef.current = camera;
      camera.position.z = cameraZ;
      camera.position.y = 0.2;
      camera.lookAt(0, -0.3, 0);

      const renderer = new THREE.WebGLRenderer({
        antialias: !isMobile && !isSmallMobile,
        alpha: false,
        powerPreference: "high-performance",
      });
      rendererRef.current = renderer;
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setClearColor(0x000000, 1);
      if (isMobile || isSmallMobile) {
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      } else {
        renderer.setPixelRatio(window.devicePixelRatio);
      }
      renderer.domElement.style.position = "absolute";
      renderer.domElement.style.top = "0";
      renderer.domElement.style.left = "0";
      renderer.domElement.style.zIndex = "1";
      renderer.domElement.style.pointerEvents = "none";

      if (containerRef.current) {
        containerRef.current.appendChild(renderer.domElement);
      }

      const getEarthRadius = () => {
        if (isSmallMobile) return 0.8;
        if (isMobile) return 1.0;
        if (isTablet) return 1.2;
        return 1.4;
      };

      const earthGroup = new THREE.Group();
      
      let earthYPosition = -0.5;
      if (isSmallMobile) {
        earthYPosition = -0.2;
      } else if (isMobile) {
        earthYPosition = -0.1;
      } else if (isTablet) {
        earthYPosition = -0.4;
      }
      
      earthGroup.position.y = earthYPosition;
      earthGroupRef.current = earthGroup;
      scene.add(earthGroup);

      const createStarField = () => {
        const starGroup = new THREE.Group();
        const sphereGeometry = new THREE.SphereGeometry(500, 64, 32);
        const textureLoader = new THREE.TextureLoader();

        textureLoader.load(
          "/8k_stars_milky_way.jpg",
          (texture: any) => {
            texture.mapping = THREE.EquirectangularReflectionMapping;
            texture.wrapS = THREE.ClampToEdgeWrapping;
            texture.wrapT = THREE.ClampToEdgeWrapping;
            texture.minFilter = THREE.LinearFilter;
            texture.magFilter = THREE.LinearFilter;
            texture.flipY = false;
            texture.colorSpace = THREE.SRGBColorSpace;

            const sphereMaterial = new THREE.MeshBasicMaterial({
              map: texture,
              side: THREE.BackSide,
              transparent: false,
              fog: false,
            });

            const backgroundSphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
            starGroup.add(backgroundSphere);
          },
          undefined,
          () => {
            const fallbackMaterial = new THREE.MeshBasicMaterial({
              color: 0x000011,
              side: THREE.BackSide,
            });
            const fallbackSphere = new THREE.Mesh(sphereGeometry, fallbackMaterial);
            starGroup.add(fallbackSphere);
          }
        );

        starsRef.current = starGroup;
        scene.add(starGroup);
      };

      const createEarth = () => {
        const earthRadius = getEarthRadius();
        const segments = isSmallMobile || isMobile ? 64 : 128;
        const geometry = new THREE.SphereGeometry(earthRadius, segments, segments);

        const textureLoader = new THREE.TextureLoader();
        const material = new THREE.MeshPhongMaterial({
          color: 0x001122,
          emissive: 0x001122,
          emissiveIntensity: 0.3,
          shininess: 25,
          specular: 0x222222,
        });

        const earth = new THREE.Mesh(geometry, material);
        earthRef.current = earth;
        earthGroup.add(earth);

        textureLoader.load(
          "/earth_night_2.png",
          (texture: any) => {
            texture.wrapS = THREE.ClampToEdgeWrapping;
            texture.wrapT = THREE.ClampToEdgeWrapping;
            texture.repeat.set(1, 1);
            texture.flipY = false;
            texture.minFilter = THREE.LinearFilter;
            texture.magFilter = THREE.LinearFilter;

            material.map = texture;
            material.color.setHex(0xffffff);
            material.emissive.setHex(0x001122);
            material.emissiveIntensity = 0.3;
            material.needsUpdate = true;

            textureLoader.load(
              "/2k_earth_normal_map_2.png",
              (normalTexture: any) => {
                normalTexture.wrapS = THREE.ClampToEdgeWrapping;
                normalTexture.wrapT = THREE.ClampToEdgeWrapping;
                normalTexture.repeat.set(1, 1);
                normalTexture.flipY = false;
                normalTexture.minFilter = THREE.LinearFilter;
                normalTexture.magFilter = THREE.LinearFilter;

                material.normalMap = normalTexture;
                material.normalScale.set(0.8, 0.8);
                material.needsUpdate = true;
              }
            );
          }
        );

        const ambientLight = new THREE.AmbientLight(0x606060, 0.5);
        scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 1.4);
        directionalLight.position.set(-1, 0.5, 1);
        scene.add(directionalLight);

        const rimLight = new THREE.DirectionalLight(0xadd8e6, 0.4);
        rimLight.position.set(0.5, 1, -0.5);
        scene.add(rimLight);
      };

      const createAtmosphere = () => {
        const earthRadius = getEarthRadius();
        const segments = isSmallMobile || isMobile ? 32 : 64;
        const geometry = new THREE.SphereGeometry(earthRadius + 0.02, segments, segments);
        const material = new THREE.ShaderMaterial({
          uniforms: {
            time: { value: 1.0 },
          },
          vertexShader: `
            varying vec3 vNormal;
            void main() {
              vNormal = normalize(normalMatrix * normal);
              gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
          `,
          fragmentShader: `
            uniform float time;
            varying vec3 vNormal;
            void main() {
              float intensity = pow(0.5 - dot(vNormal, vec3(0, 0, 1.0)), 2.0);
              gl_FragColor = vec4(0.3, 0.6, 1.0, 1.0) * intensity;
            }
          `,
          side: THREE.BackSide,
          blending: THREE.AdditiveBlending,
          transparent: true,
        });

        const atmosphere = new THREE.Mesh(geometry, material);
        earthGroup.add(atmosphere);
      };

      createStarField();
      createEarth();
      createAtmosphere();

      const animate = () => {
        animationIdRef.current = requestAnimationFrame(animate);

        if (earthGroupRef.current) {
          earthGroupRef.current.rotation.y += 0.0003 * 3;
        }

        if (starsRef.current) {
          starsRef.current.rotation.y += 0.0002 * 3;
          starsRef.current.rotation.x += 0.0001;
        }

        if (rendererRef.current && sceneRef.current && cameraRef.current) {
          rendererRef.current.render(sceneRef.current, cameraRef.current);
        }
      };

      animate();

      const onWindowResize = () => {
        if (cameraRef.current && rendererRef.current) {
          checkDeviceType();
          const aspectRatio = window.innerWidth / window.innerHeight;
          let fov = 80;
          let cameraZ = 3.0;
          
          if (isSmallMobile) {
            fov = 60;
            cameraZ = 3.5;
          } else if (isMobile) {
            fov = 65;
            cameraZ = 3.3;
          } else if (isTablet) {
            fov = 75;
            cameraZ = 3.2;
          }
          
          cameraRef.current.fov = fov;
          cameraRef.current.aspect = aspectRatio;
          cameraRef.current.position.z = cameraZ;
          cameraRef.current.position.y = 0.2;
          cameraRef.current.lookAt(0, -0.3, 0);
          cameraRef.current.updateProjectionMatrix();
          rendererRef.current.setSize(window.innerWidth, window.innerHeight);
          if (isMobile || isSmallMobile) {
            rendererRef.current.setPixelRatio(Math.min(window.devicePixelRatio, 2));
          } else {
            rendererRef.current.setPixelRatio(window.devicePixelRatio);
          }
        }
      };

      window.addEventListener("resize", onWindowResize);

      return () => {
        if (animationIdRef.current) {
          cancelAnimationFrame(animationIdRef.current);
        }
        if (rendererRef.current && containerRef.current) {
          try {
            containerRef.current.removeChild(rendererRef.current.domElement);
          } catch (e) {
            // Element already removed
          }
          if (rendererRef.current) {
            rendererRef.current.dispose();
          }
        }
        window.removeEventListener("resize", checkDeviceType);
        window.removeEventListener("resize", onWindowResize);
      };
    };

    initGlobe();
  }, [isMounted, isMobile, isTablet, isSmallMobile]);

  if (!isMounted) {
    return null;
  }

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}
