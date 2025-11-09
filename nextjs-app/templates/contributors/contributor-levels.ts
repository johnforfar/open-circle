export const contributorLevels = {
  title: "Open Circle Contributor Ecosystem",
  subtitle: "Distributed innovation & scalable engineering",
  description: "A comprehensive A-Z solution for beginners to learn, connect, build, grow, network, and influence. More than just career progression, networking, increasing productivity, and growing Web3 as a whole.",
  
  initiativeOutcomes: [
    "Bring Web3 a true decentralized management and contribution platform to build decentralized projects.",
    "A go-to place to learn, meet people, connect, and apply what you've learned. Find projects to work on and earn money for your contributions regardless of where you live and work, through OpenR&D. Gain more experience, be competitive by maintaining your rankings on the OpenR&D leaderboard, and be part of decision-making through Openmesh DAO voting.",
    "Providing a comprehensive A-Z solution for beginners to learn, connect, build, grow, network, and influence. It's more than just career progression, networking, increasing productivity, and growing Web3 as a whole.",
    "Building communities and loyalty through a clear pathway for skill development and recognition, actively working, governing lead, influencing, and building a strong network.",
    "Cultivating a community of developers and individuals proficient in Openmesh technologies and deeply committed to its success. Establishing a robust methodology and pathway to nurture a loyal and skilled community.",
    "Developing a solid educational component for the Openmesh Protocol, products, and ecosystem.",
    "Creating a go-to source for inspiration in developing Openmesh tech-related content.",
    "Empowering the community to serve as advocates and ambassadors to promote Openmesh and attract new participants."
  ],

  levels: [
    {
      id: "contributor",
      level: 1,
      title: "Contributor",
      tagline: "Initiate, Learn, Connect",
      summary: "The starting point for individuals new to the Open Circle Academy. These beginners are often recent university graduates or those transitioning from web2 careers to web3, looking to kickstart their careers in the web3 industry.",
      
      persona: [
        "Recently graduated or still studying",
        "Transitioning from web2 to web3",
        "Looking for a web3 career"
      ],
      
      highlights: [
        "Open Circle Academy courses available",
        "Users sign up to take courses on the academy",
        "Limited signups per period to maintain quality and exclusivity"
      ],
      
      access: [
        "Free education",
        "An entry-level stepping stone into operating in Web3",
        "Access to the network"
      ],
      
      outcomes: {
        educate: [
          "What is Openmesh? Big picture: Data+Infra+People = Web3",
          "What can Openmesh give them? Network of like-minded people and experts, resources to gain Web3 skills, resources to build with in a decentralized and distributed manner",
          "Familiarity with Open Circle Academy and OpenR&D platforms",
          "Clear path ahead of how to progress in the Openmesh ecosystem, and therefore progress in Web3"
        ],
        belongingness: [
          "Community and assistance to get started in Web3",
          "Access to support channels like Discord"
        ]
      },
      
      journey: [
        "Access to support channels (Discord) for help",
        "Successful academy course completers receive a digital certificate saved to IPFS as an NFT on the Polygon network",
        "During the course, users learn how to set up their Web3 wallet and how to receive/mint NFTs as part of the academy curriculum",
        "Graduates receive $1 worth of MATIC for gas fees",
        "Graduates receive promise of an airdrop of OPEN tokens as a prize once they graduate (released either vested or once TGE has concluded)",
        "Post-graduation, students are introduced to the OpenR&D platform to complete dummy tasks and apply learned skills",
        "Based on completed dummy project tags, graduates receive a Verified Contributor NFT with up to three expertise tags"
      ],
      
      functions: {
        proposeProjects: false,
        protocolGovernance: false,
        staking: "N/A",
        rewardRatio: "N/A",
        exclusiveNetworkAccess: false,
        implementingSolutions: false,
        rewardsAndFunding: false
      },
      
      painPoints: [
        "Crypto is hot, I want to be in the industry",
        "Passionate about the web3 industry but don't know where to start",
        "Want to jump into a career and don't know where to start",
        "I don't have time and money to spend on education",
        "Online courses are boring. I need to feel belonged to a community",
        "I don't have access in my region to the education I want"
      ]
    },
    
    {
      id: "verified-contributor",
      level: 2,
      title: "Verified Contributor",
      tagline: "Graduates, Gaining Skills",
      summary: "Individuals who have successfully completed the Open Circle Academy course and have been accepted as a Verified Contributor after submitting a successful dummy project.",
      
      persona: [
        "Graduates of the Open Circle Academy who have successfully completed the course",
        "Been accepted as a Verified Contributor after submitting a successful dummy project",
        "Individuals looking to apply their knowledge in practical settings and earn income",
        "Aspiring freelancers and remote workers in the web3 space"
      ],
      
      highlights: [
        "Find relevant projects, work and get paid",
        "Access to live OpenR&D projects",
        "Discord Verified Contributor Group access"
      ],
      
      access: [
        "Live OpenR&D projects",
        "Discord Verified Contributor Group",
        "Limited access to Openmesh resources like dataAPIs and small Xnode for experimentation"
      ],
      
      outcomes: {
        reward: [
          "First $OPEN airdrop to Verified Contributors",
          "Ability to stake NFT and earn $OPEN"
        ],
        incentivize: [
          "Verified Contributors can earn additional $OPEN from completing non-dummy OpenR&D tasks",
          "Verified Contributors can use their first $OPEN to vote in DAO governance (proposals) and job/task voting",
          "Ranking or score increases with successful project completions, based on the Recency and Monetary (RM) method"
        ]
      },
      
      journey: [
        "Receive Verified Contributor status and a Verified Contributor NFT",
        "Limited access to Openmesh resources like dataAPIs and a small Xnode for experimentation",
        "Shown higher in the list for projects matching their expertise areas and tags",
        "Can work and get paid for Openmesh tasks in stable coins or OPEN tokens, with payments directly sent to their wallet",
        "Each verified contributor can have up to 3 expertise tags",
        "A live leaderboard displays the scores",
        "Dispute and resolution mechanisms are in place to ensure fairness",
        "Access to enhanced support, such as NFT-gated channels in the Discord server"
      ],
      
      functions: {
        proposeProjects: false,
        protocolGovernance: "Not until OPEN tokens distributed",
        staking: true,
        rewardRatio: "Depending on your score (RM method)",
        exclusiveNetworkAccess: "Limited",
        implementingSolutions: false,
        rewardsAndFunding: false
      },
      
      painPoints: [
        "Need for practical experience to apply learned skills",
        "Desire for opportunities to work on real projects and earn income",
        "Need for clear guidance on transitioning from dummy tasks to live projects",
        "Seeking recognition and credibility as a skilled contributor in the web3 space"
      ]
    },
    
    {
      id: "active-contributor",
      level: 3,
      title: "Active Contributor",
      tagline: "Build, Innovate & Lead",
      summary: "Individuals who have advanced from Verified Contributor status by actively engaging in the OpenR&D platform and maintaining their Recency and Monetary (RM) score. They have the ability to work on live projects, create new projects with budgets funded by the Department DAO, and govern their respective departments.",
      
      persona: [
        "Individuals who have been actively working as Verified Contributors",
        "Maintained their Recency and Monetary (RM) score for a while",
        "Their Verified Contributor NFT is upgraded to an Active Contributor NFT (same ERC721 collection)",
        "They need to maintain their RM score, otherwise, they will lose their privileges"
      ],
      
      highlights: [
        "Act like the members of their departments, build and lead",
        "Access to live OpenR&D projects",
        "Access to Department Governance and community"
      ],
      
      access: [
        "Live OpenR&D projects",
        "Department Governance",
        "Community access"
      ],
      
      outcomes: {
        empowered: [
          "Ability to create jobs/tasks (as a department, any individual can create a task if they fund it themselves)",
          "Active Contributors can RFP for funding and post new jobs on OpenR&D to a limited amount",
          "Ability to become a mentor",
          "Enhanced powers in Discord to help onboard new beginners and new Verified Contributors"
        ],
        enhancedRewards: [
          "They have early access to projects and beta versions",
          "Consistent compensation (up to department to decide)"
        ]
      },
      
      journey: [
        "Can work on live projects as long as their NFT metadata matches the main tag attached to the project",
        "Can create new projects, set budgets, and get funded by the Department DAO (subject to approval)",
        "When submitting a new project for approval, other Active Contributors must vote; requires minimum 33% of department to vote and majority to agree",
        "Must govern their department, especially monitoring any project submissions from Verified Contributors and Active Contributors",
        "Openmesh team evaluates submissions to determine qualification"
      ],
      
      functions: {
        proposeProjects: true,
        protocolGovernance: "No until OPEN tokens distributed",
        beingActiveInVoting: "Must",
        staking: true,
        consistentCompensation: "Up to department to decide",
        rewardRatio: "Depending on your score (RM method)",
        showcasedRFPs: true,
        exclusiveNetworkAccess: "Limited",
        implementingSolutions: false,
        rewardsAndFunding: false
      },
      
      painPoints: [
        "Need for clear framework in managing and governing their departments",
        "Desire for fair and transparent processes in project approval and funding",
        "Worried about job opportunities within Department to maintain their RM score"
      ]
    },
    
    {
      id: "openmesh-expert",
      level: 4,
      title: "Openmesh Expert",
      tagline: "Innovate, Lead, Influence & Inspire",
      summary: "Individuals who have risen to the top of the Openmesh ecosystem through their consistent innovation, leadership, and influence. An Openmesh Expert is an individual or a company who acts as an independent SI and solution architect on behalf of Openmesh.",
      
      persona: [
        "Individuals or companies who have demonstrated consistent innovation, leadership, and influence in the Openmesh ecosystem",
        "Active Contributors who have maintained a good RM score and a strong track record",
        "Solution architects and system integrators with in-depth understanding and proficiency in Openmesh technologies and tools",
        "Leaders who actively participate in voting and governing projects on the OpenR&D platform",
        "More likely to be showcased on delegation page for OPEN holders (voting power)",
        "Members of the exclusive Openmesh Expert Network with access to private Openmesh events and early project access"
      ],
      
      highlights: [
        "Act like the owners of their departments, build and lead",
        "Access to live OpenR&D projects",
        "Access to more funds, exclusive parties and community"
      ],
      
      access: [
        "Live OpenR&D projects",
        "Higher funding through OpenR&D RFP method",
        "Exclusive Openmesh Expert Network",
        "Private Openmesh events",
        "Early project access and beta versions"
      ],
      
      outcomes: {
        listed: [
          "Listed as an expert on Openmesh Website",
          "Recognition among the web3 industry for expert-tier skillset",
          "Credibility & potentially more customers/clients for your business/ecosystem",
          "Trusted and verified source provider"
        ],
        enhancedOpportunities: [
          "Ability to create jobs/tasks with an increased level of funding",
          "Ability to become Parent DAO Owner",
          "Exclusive meetups and events (paid by $OPEN DAO)"
        ]
      },
      
      journey: [
        "Can work on live projects as long as their NFT metadata matches the job tag",
        "Can create new projects, set budgets, and get funded by the Openmesh parent DAO",
        "When submitting a new project for approval, other Active Contributors must vote; requires minimum 33% consensus",
        "Must govern their department, especially monitoring any project submissions",
        "Eligibility is based on RM score and governance activity score",
        "Openmesh Expert NFT can be staked to earn rewards based on their score",
        "Small rewards are given for participating in voting, in the form of MATIC and OPEN tokens",
        "They are responsible for hosting and managing events, including weekly, monthly, and quarterly gatherings",
        "Access to funds from the Openmesh parent DAO treasury"
      ],
      
      functions: {
        proposeProjects: true,
        protocolGovernance: "No until OPEN tokens are distributed",
        beingActiveInVoting: "Must",
        staking: true,
        rewardRatio: "Depending on your score (RM method)",
        createRFPs: true,
        exclusiveNetworkAccess: "Limited",
        implementingSolutions: false,
        rewardsAndFunding: false
      },
      
      painPoints: [
        "Need for clear guidelines and support in developing and integrating complex Openmesh solutions",
        "Desire for recognition and opportunities to lead and influence within the Openmesh ecosystem",
        "Requirement for access to resources and funding to execute high-budget projects"
      ]
    }
  ]
};

