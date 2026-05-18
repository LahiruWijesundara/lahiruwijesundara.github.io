// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-portfolio",
          title: "Portfolio",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/portfolio/";
          },
        },{id: "post-hello-blog",
        
          title: "Hello, Blog",
        
        description: "A placeholder post to kick off writing — game dev, AI, and engineering thoughts coming soon.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/hello-world/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "portfolio-nom-boy-39-s-love-for-the-world",
          title: 'Nom Boy&amp;#39;s Love For The World',
          description: "Associated with MSc Commercial Games Development Program, University of The West of England, United Kingdom",
          section: "Portfolio",handler: () => {
              window.location.href = "/nomboy/";
            },},{id: "portfolio-blood-reckoning-the-eternal-war-dark-fantasy-mmorpg",
          title: 'Blood Reckoning - The Eternal War  Dark-Fantasy MMORPG',
          description: "Lead Unreal Engine Gameplay Programmer (Oct 2024 – Present)  Zukel Investment Group, USA (Remote)",
          section: "Portfolio",handler: () => {
              window.location.href = "/blood-reckoning/";
            },},{id: "portfolio-a-depth-first-search-based-approach-to-improving-the-molecular-pathway-search",
          title: 'A Depth-First Search-Based Approach To Improving The Molecular Pathway Search',
          description: "Final Year Bachelor&#39;s Thesis  Associated with University of Perdeniya, Sri Lanka",
          section: "Portfolio",handler: () => {
              window.location.href = "/bsc-thesis/";
            },},{id: "portfolio-certifications",
          title: 'Certifications',
          description: "",
          section: "Portfolio",handler: () => {
              window.location.href = "/portfolio/certifications/";
            },},{id: "portfolio-combat-beans-total-mayhem-third-person-shooter-multiplayer",
          title: 'Combat Beans - Total Mayhem  Third-Person Shooter Multiplayer',
          description: "Senior Unreal Engine Gameplay Programmer (July 2021– Sep 2023)  Peanut Brain Studios, Japan (Remote)",
          section: "Portfolio",handler: () => {
              window.location.href = "/combat-beans/";
            },},{id: "portfolio-cse-pulse-full-stack-ai-powered-portfolio-tracker",
          title: 'CSE Pulse  Full-Stack AI-Powered Portfolio Tracker',
          description: "AI Engineer (Jan 2026 – Present)  CSE Pulse, Sri Lanka",
          section: "Portfolio",handler: () => {
              window.location.href = "/cse-pulse/";
            },},{id: "portfolio-the-edge-of-the-world-open-world-action-rpg",
          title: 'The Edge Of The World  Open-World Action RPG',
          description: "Unreal Engine Gameplay Programmer (May 2021 – Dec 2021)  Ksavage Media, USA (Remote)",
          section: "Portfolio",handler: () => {
              window.location.href = "/edge-of-the-world/";
            },},{id: "portfolio-all-elephants-go-to-heaven-epic-mega-jam-2020",
          title: 'All Elephants Go To Heaven  Epic Mega Jam 2020',
          description: "Virtual Reality(VR) game designed for the Oculus Rift S and Oculus Quest, featuring an endless wave-based gameplay format.",
          section: "Portfolio",handler: () => {
              window.location.href = "/gamejam-1/";
            },},{id: "portfolio-under-the-ice-unreal-spring-jam-2020",
          title: 'Under The Ice  Unreal Spring Jam 2020',
          description: "A multiplayer game where players must cooperate to escape a trapped ice cave, with the twist that one of them is secretly an enemy.",
          section: "Portfolio",handler: () => {
              window.location.href = "/gamejam-2/";
            },},{id: "portfolio-a-comparative-study-of-dqn-and-ppo-algorithms-in-a-2d-fighting-game-using-unity-ml-agents",
          title: 'A Comparative Study of DQN and PPO Algorithms in a 2D Fighting Game...',
          description: "Master&#39;s Dissertation - Associated with University of The West of England, UK",
          section: "Portfolio",handler: () => {
              window.location.href = "/msc-dissertation/";
            },},{id: "portfolio-driving-down-emissions-a-serious-game-approach-to-transport-decarbonisation",
          title: 'Driving Down Emissions A Serious Game Approach to Transport Decarbonisation',
          description: "Research Associated with University of The West of England, UK",
          section: "Portfolio",handler: () => {
              window.location.href = "/msc-research-2/";
            },},{id: "portfolio-saf-tac-vr-pc-military-defence-simulation",
          title: 'SAF-TAC  VR/PC Military Defence Simulation',
          description: "Senior Software Engineer (April 2018 – Sep 2023)  SimCentric, Sri Lanka",
          section: "Portfolio",handler: () => {
              window.location.href = "/saf-tac/";
            },},{id: "portfolio-sigma-phi-laboratory-serious-game",
          title: 'Sigma Phi Laboratory  Serious Game',
          description: "Unreal Engine Gameplay Programmer (Mar 2023 – Aug 2023)  Sigma Phi Labs, China (Remote)",
          section: "Portfolio",handler: () => {
              window.location.href = "/sigma-phi-laboratory/";
            },},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/lahiru-wijesundara", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6C%6D%77%69%6A%65%73%75%6E%64%61%72%61@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/IamLahiruW", "_blank");
        },
      },{
        id: 'social-discord',
        title: 'Discord',
        section: 'Socials',
        handler: () => {
          window.open("https://discord.com/users/460104965369888768", "_blank");
        },
      },{
        id: 'social-bluesky',
        title: 'Bluesky',
        section: 'Socials',
        handler: () => {
          window.open("https://bsky.app/profile/iamlahiruw.bsky.social", "_blank");
        },
      },{
        id: 'social-instagram',
        title: 'Instagram',
        section: 'Socials',
        handler: () => {
          window.open("https://instagram.com/iamlahiruw", "_blank");
        },
      },{
        id: 'social-facebook',
        title: 'Facebook',
        section: 'Socials',
        handler: () => {
          window.open("https://facebook.com/iamlahiruw", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
