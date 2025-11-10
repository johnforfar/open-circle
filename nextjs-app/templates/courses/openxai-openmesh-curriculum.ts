export const curriculumData = {
  curriculumName: "OpenxAI & Openmesh Web3 Education Curriculum",
  description: "Comprehensive curriculum covering decentralized AI, blockchain infrastructure, and Web3 development based on OpenxAI and Openmesh technologies",
  version: "1.0.0",
  targetAudience: "Developers, AI engineers, and Web3 enthusiasts (18+)",
  duration: "Full academic year",
  courses: [
    {
      id: "blockchain-fundamentals",
      title: "Blockchain & Web3 Fundamentals",
      description: "Master the core concepts of blockchain technology, decentralization, and Web3 ecosystems",
      duration: "8 weeks",
      level: "Beginner",
      prerequisites: undefined,
      modules: [
        {
          moduleNumber: 1,
          title: "Introduction to Blockchain",
          topics: [
            "What is blockchain and why it matters",
            "Decentralization vs centralization",
            "Cryptographic foundations (hashing, digital signatures)",
            "Consensus mechanisms (Proof of Work, Proof of Stake)",
            "Blockchain architecture and data structures"
          ],
          duration: "2 weeks"
        },
        {
          moduleNumber: 2,
          title: "Web3 Ecosystem",
          topics: [
            "Web3 vs Web2 paradigm shift",
            "Cryptocurrencies and tokens",
            "Smart contracts introduction",
            "Decentralized applications (DApps)",
            "Wallets and key management"
          ],
          duration: "2 weeks"
        },
        {
          moduleNumber: 3,
          title: "Blockchain Networks",
          topics: [
            "Ethereum ecosystem",
            "Base blockchain (OP Stack, Coinbase)",
            "Layer 2 solutions",
            "Cross-chain interoperability",
            "Network comparison and use cases"
          ],
          duration: "2 weeks"
        },
        {
          moduleNumber: 4,
          title: "Assessment and Project",
          topics: [
            "Blockchain use case analysis",
            "Web3 wallet setup and interaction",
            "Final assessment"
          ],
          duration: "2 weeks"
        }
      ],
      learningOutcomes: [
        "Understand blockchain fundamentals and decentralization",
        "Navigate the Web3 ecosystem confidently",
        "Compare different blockchain networks and their use cases",
        "Set up and use Web3 wallets securely"
      ]
    },
    {
      id: "base-development",
      title: "Base Blockchain Development",
      description: "Learn to build on Base, the Ethereum L2 blockchain powering OpenxAI infrastructure",
      duration: "10 weeks",
      level: "Intermediate",
      prerequisites: ["blockchain-fundamentals"],
      modules: [
        {
          moduleNumber: 1,
          title: "Base Architecture",
          topics: [
            "Base L2 architecture (OP Stack)",
            "Ethereum compatibility",
            "Low-cost transactions",
            "Transaction processing and finality",
            "Network topology and sequencers"
          ],
          duration: "2 weeks"
        },
        {
          moduleNumber: 2,
          title: "Smart Contract Development",
          topics: [
            "Solidity programming for Base",
            "Ethereum development tools",
            "Writing and deploying contracts",
            "Contract testing with Hardhat/Foundry",
            "Error handling and security"
          ],
          duration: "3 weeks"
        },
        {
          moduleNumber: 3,
          title: "Base Client Development",
          topics: [
            "Ethers.js / viem for Base",
            "Wallet integration (Coinbase Wallet, MetaMask)",
            "Building frontend DApps",
            "Transaction signing and submission",
            "Interacting with Base contracts"
          ],
          duration: "3 weeks"
        },
        {
          moduleNumber: 4,
          title: "Assessment and Project",
          topics: [
            "Build a Base DApp",
            "Deploy contracts to Base Sepolia/mainnet",
            "Final assessment"
          ],
          duration: "2 weeks"
        }
      ],
      learningOutcomes: [
        "Understand Base's architecture and advantages",
        "Write and deploy smart contracts on Base",
        "Build client applications for Base",
        "Deploy production-ready DApps on Base"
      ],
      practicalProjects: [
        "Simple token contract",
        "NFT minting contract",
        "DApp with wallet integration"
      ]
    },
    {
      id: "decentralized-ai",
      title: "Decentralized AI Fundamentals",
      description: "Explore how blockchain and AI intersect to create decentralized AI systems",
      duration: "10 weeks",
      level: "Intermediate",
      prerequisites: ["blockchain-fundamentals"],
      modules: [
        {
          moduleNumber: 1,
          title: "AI & Blockchain Convergence",
          topics: [
            "Why decentralize AI?",
            "Centralized AI problems (cost, censorship, ownership)",
            "Decentralized AI benefits",
            "AI model ownership and data control",
            "Privacy-preserving AI"
          ],
          duration: "2 weeks"
        },
        {
          moduleNumber: 2,
          title: "Decentralized Compute",
          topics: [
            "Distributed computing for AI",
            "GPU marketplace concepts",
            "Compute resource allocation",
            "Federated learning",
            "Edge computing and AI"
          ],
          duration: "3 weeks"
        },
        {
          moduleNumber: 3,
          title: "AI Model Marketplace",
          topics: [
            "Model tokenization",
            "Model ownership and licensing",
            "Marketplace economics",
            "Model versioning and updates",
            "Quality assurance and validation"
          ],
          duration: "3 weeks"
        },
        {
          moduleNumber: 4,
          title: "Assessment and Project",
          topics: [
            "Design a decentralized AI system",
            "Model marketplace analysis",
            "Final assessment"
          ],
          duration: "2 weeks"
        }
      ],
      learningOutcomes: [
        "Understand the need for decentralized AI",
        "Design decentralized AI architectures",
        "Navigate AI model marketplaces",
        "Implement privacy-preserving AI solutions"
      ]
    },
    {
      id: "openxai-platform",
      title: "OpenxAI Platform Development",
      description: "Master the OpenxAI platform: X Engine, Playground, X Studio, and Marketplace",
      duration: "12 weeks",
      level: "Intermediate to Advanced",
      prerequisites: ["blockchain-fundamentals", "base-development", "decentralized-ai"],
      modules: [
        {
          moduleNumber: 1,
          title: "OpenxAI Architecture",
          topics: [
            "OpenxAI platform overview",
            "Decentralized hosting and VMs",
            "Compute resource management",
            "API Gateway architecture",
            "Smart contract integration"
          ],
          duration: "3 weeks"
        },
        {
          moduleNumber: 2,
          title: "X Engine Development",
          topics: [
            "LLM to ABFM conversion",
            "Market simulation and prediction",
            "X Engine framework",
            "Building with X Engine",
            "Advanced X Engine features"
          ],
          duration: "3 weeks"
        },
        {
          moduleNumber: 3,
          title: "X Studio & Playground",
          topics: [
            "X Studio interface and tools",
            "Model development workflow",
            "Playground for testing",
            "Model deployment pipeline",
            "Debugging and optimization"
          ],
          duration: "3 weeks"
        },
        {
          moduleNumber: 4,
          title: "Marketplace Integration",
          topics: [
            "Listing models on marketplace",
            "Model discovery and selection",
            "Pricing strategies",
            "Revenue sharing models",
            "Community governance"
          ],
          duration: "3 weeks"
        }
      ],
      learningOutcomes: [
        "Build applications on OpenxAI platform",
        "Develop and deploy AI models using X Engine",
        "Use X Studio and Playground effectively",
        "Navigate and contribute to the marketplace"
      ],
      practicalProjects: [
        "Deploy a model to OpenxAI",
        "Build an X Engine application",
        "Create a marketplace listing",
        "Full-stack OpenxAI DApp"
      ]
    },
    {
      id: "openmesh-infrastructure",
      title: "Openmesh & Xnode Infrastructure",
      description: "Learn to build and deploy on Openmesh data infrastructure and Xnode platform",
      duration: "10 weeks",
      level: "Intermediate",
      prerequisites: ["blockchain-fundamentals"],
      modules: [
        {
          moduleNumber: 1,
          title: "Openmesh Network",
          topics: [
            "Openmesh data infrastructure",
            "Decentralized data protocols",
            "Data marketplace concepts",
            "Network architecture",
            "Data privacy and security"
          ],
          duration: "2 weeks"
        },
        {
          moduleNumber: 2,
          title: "Xnode Platform",
          topics: [
            "Xnode deployment platform",
            "App store and templates",
            "One-click deployment",
            "Infrastructure management",
            "Scaling and optimization"
          ],
          duration: "3 weeks"
        },
        {
          moduleNumber: 3,
          title: "Building on Openmesh",
          topics: [
            "Data integration patterns",
            "API development",
            "Real-time data streaming",
            "Data validation and quality",
            "Performance optimization"
          ],
          duration: "3 weeks"
        },
        {
          moduleNumber: 4,
          title: "Assessment and Project",
          topics: [
            "Deploy app to Xnode",
            "Integrate Openmesh data",
            "Final assessment"
          ],
          duration: "2 weeks"
        }
      ],
      learningOutcomes: [
        "Understand Openmesh data infrastructure",
        "Deploy applications on Xnode",
        "Integrate Openmesh data sources",
        "Build scalable Web3 applications"
      ],
      practicalProjects: [
        "Deploy app to Xnode",
        "Build data integration",
        "Create Xnode template"
      ]
    },
    {
      id: "ai-model-development",
      title: "AI Model Development & Deployment",
      description: "Learn to develop, train, and deploy AI models on decentralized infrastructure",
      duration: "14 weeks",
      level: "Advanced",
      prerequisites: ["decentralized-ai", "openxai-platform"],
      modules: [
        {
          moduleNumber: 1,
          title: "AI Model Fundamentals",
          topics: [
            "Machine learning basics",
            "Deep learning architectures",
            "Model training pipelines",
            "Model evaluation and metrics",
            "Transfer learning"
          ],
          duration: "3 weeks"
        },
        {
          moduleNumber: 2,
          title: "Model Optimization",
          topics: [
            "Model quantization",
            "Pruning and compression",
            "Distributed training",
            "Performance optimization",
            "Cost optimization strategies"
          ],
          duration: "3 weeks"
        },
        {
          moduleNumber: 3,
          title: "Decentralized Training",
          topics: [
            "Federated learning",
            "Distributed training on GPU marketplace",
            "Privacy-preserving training",
            "Model versioning",
            "Training data management"
          ],
          duration: "4 weeks"
        },
        {
          moduleNumber: 4,
          title: "Deployment & Production",
          topics: [
            "Model deployment strategies",
            "API development for models",
            "Monitoring and maintenance",
            "A/B testing models",
            "Production best practices"
          ],
          duration: "4 weeks"
        }
      ],
      learningOutcomes: [
        "Develop and train AI models",
        "Optimize models for production",
        "Deploy models on decentralized infrastructure",
        "Manage model lifecycle in production"
      ],
      practicalProjects: [
        "Train a custom model",
        "Deploy model to OpenxAI",
        "Build model API",
        "Full ML pipeline project"
      ]
    },
    {
      id: "smart-contracts-ai",
      title: "Smart Contracts for AI",
      description: "Build smart contracts that manage AI models, compute resources, and marketplace transactions",
      duration: "12 weeks",
      level: "Advanced",
      prerequisites: ["base-development", "openxai-platform"],
      modules: [
        {
          moduleNumber: 1,
          title: "Smart Contract Patterns for AI",
          topics: [
            "Model ownership contracts",
            "Compute resource contracts",
            "Marketplace escrow contracts",
            "Revenue sharing contracts",
            "Governance contracts"
          ],
          duration: "3 weeks"
        },
        {
          moduleNumber: 2,
          title: "Tokenization & Economics",
          topics: [
            "Model tokenization",
            "Compute token economics",
            "Staking mechanisms",
            "Reward distribution",
            "Economic model design"
          ],
          duration: "3 weeks"
        },
        {
          moduleNumber: 3,
          title: "Advanced Contract Development",
          topics: [
            "Oracle integration for AI",
            "Cross-chain contracts",
            "Upgradeable contracts",
            "Security best practices",
            "Gas optimization"
          ],
          duration: "3 weeks"
        },
        {
          moduleNumber: 4,
          title: "Assessment and Project",
          topics: [
            "Build AI marketplace contract",
            "Implement compute resource contract",
            "Final assessment"
          ],
          duration: "3 weeks"
        }
      ],
      learningOutcomes: [
        "Design smart contracts for AI systems",
        "Implement tokenization models",
        "Build secure and efficient contracts",
        "Deploy production smart contracts"
      ],
      practicalProjects: [
        "Model ownership contract",
        "Compute marketplace contract",
        "Governance contract",
        "Full marketplace system"
      ]
    },
    {
      id: "full-stack-web3-ai",
      title: "Full-Stack Web3 AI Applications",
      description: "Build complete end-to-end Web3 applications integrating blockchain, AI, and decentralized infrastructure",
      duration: "16 weeks",
      level: "Advanced",
      prerequisites: ["openxai-platform", "openmesh-infrastructure", "ai-model-development", "smart-contracts-ai"],
      format: "Project-based",
      modules: [
        {
          moduleNumber: 1,
          title: "Architecture & Design",
          topics: [
            "System architecture design",
            "Technology stack selection",
            "Security architecture",
            "Scalability planning",
            "Project planning and management"
          ],
          duration: "2 weeks"
        },
        {
          moduleNumber: 2,
          title: "Development Phase",
          topics: [
            "Frontend development (React/Next.js)",
            "Backend/blockchain integration",
            "AI model integration",
            "Wallet integration",
            "Testing and debugging"
          ],
          duration: "10 weeks"
        },
        {
          moduleNumber: 3,
          title: "Deployment & Launch",
          topics: [
            "Deploy to Xnode",
            "Deploy smart contracts",
            "Deploy AI models",
            "Production monitoring",
            "Launch strategy"
          ],
          duration: "2 weeks"
        },
        {
          moduleNumber: 4,
          title: "Presentation & Portfolio",
          topics: [
            "Project documentation",
            "Presentation skills",
            "Portfolio development",
            "Community engagement",
            "Reflection and learning"
          ],
          duration: "2 weeks"
        }
      ],
      learningOutcomes: [
        "Design complete Web3 AI systems",
        "Build production-ready applications",
        "Deploy and maintain Web3 applications",
        "Create professional portfolio"
      ]
    },
    {
      id: "community-governance",
      title: "Community & Governance",
      description: "Learn about decentralized governance, community building, and contributing to Web3 projects",
      duration: "6 weeks",
      level: "All Levels",
      prerequisites: undefined,
      modules: [
        {
          moduleNumber: 1,
          title: "Decentralized Governance",
          topics: [
            "DAO (Decentralized Autonomous Organization) concepts",
            "Governance mechanisms",
            "Voting systems",
            "Proposal processes",
            "Community decision-making"
          ],
          duration: "2 weeks"
        },
        {
          moduleNumber: 2,
          title: "Community Building",
          topics: [
            "Building Web3 communities",
            "Community engagement strategies",
            "Content creation and marketing",
            "Developer relations",
            "Open source contribution"
          ],
          duration: "2 weeks"
        },
        {
          moduleNumber: 3,
          title: "Ecosystem Participation",
          topics: [
            "Contributing to OpenxAI",
            "Contributing to Openmesh",
            "Building on existing protocols",
            "Creating value in ecosystem",
            "Career opportunities in Web3"
          ],
          duration: "2 weeks"
        }
      ],
      learningOutcomes: [
        "Understand decentralized governance",
        "Build and engage communities",
        "Contribute to Web3 ecosystems",
        "Navigate Web3 career paths"
      ]
    }
  ],
  assessmentMethods: [
    "Quizzes and knowledge checks",
    "Hands-on coding assignments",
    "Project-based assessments",
    "Peer code reviews",
    "Community contributions",
    "Final capstone projects",
    "Portfolio presentations"
  ],
  resources: [
    "OpenxAI Documentation (docs.openxai.org)",
    "Openmesh Documentation (docs.openmesh.network)",
    "Base Documentation",
    "Solidity Programming Language",
    "React/Next.js Documentation",
    "AI/ML Frameworks (PyTorch, TensorFlow)",
    "Community forums and Discord",
    "Video tutorials and workshops"
  ],
  certification: {
    available: true,
    requirements: [
      "Complete all course modules",
      "Pass all assessments with 75% or higher",
      "Complete capstone project",
      "Contribute to OpenxAI or Openmesh ecosystem",
      "Submit professional portfolio"
    ],
    issuer: "OpenX Academy"
  },
  teacherTraining: {
    description: "Comprehensive training program for educators to teach Web3, decentralized AI, and blockchain technologies",
    duration: "10 weeks",
    topics: [
      "Web3 and blockchain fundamentals for educators",
      "Decentralized AI concepts and applications",
      "Hands-on platform training (OpenxAI, Openmesh)",
      "Teaching methodologies for technical subjects",
      "Student assessment and evaluation strategies",
      "Community engagement and support"
    ]
  }
};

