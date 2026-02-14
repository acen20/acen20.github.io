/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "AhsenNazir",
  title: "Hi all, I'm Ahsen",
  subTitle: emoji(
    "AI Engineer with 4+ years of experience designing, deploying, and scaling production-grade AI systems across Computer Vision, Natural Language Processing, and Generative AI. Currently working on research-driven AI initiatives focused on modernizing legacy systems. Experienced in building end-to-end AI pipelines, LLM-powered applications, and automation workflows."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1FdTTZCA5VbFh3Z3H3nPGXhBbMyBIVNP9/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/acen20",
  linkedin: "https://www.linkedin.com/in/ahsennazir/",
  gmail: "ahsenmailbox@gmail.com",
  gitlab: "",
  facebook: "https://www.facebook.com/acen20",
  medium: "",
  stackoverflow: "https://stackoverflow.com/users/13940093/ahsen-nazir",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Curious AI Developer on a Mission to Explore All the Tech Stacks! Let's Uncover the Wonders of Technology! 🚀💡",
  skills: [
    emoji(
      "⚡ Build and train AI models for various applications."
    ),
    emoji("⚡ Use state-of-the-art (SOTA) deep learning architectures."),
    emoji("⚡ Streamlining of AI models."),
    emoji("⚡ Integrate and Derive insights from Data using latest Analytics stack."),
    emoji("⚡ API Development."),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "pytorch",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "fastAPI",
      fontAwesomeClassname: "fas fa-bolt"
    },
    {
      skillName: "numpy",
      fontAwesomeClassname: "fas fa-cube"
    },
    {
      skillName: "pandas",
      fontAwesomeClassname: "fas fa-grip-lines-vertical"
    },
    {
      skillName: "matplotlib",
      fontAwesomeClassname: "fas fa-chart-pie"
    },
    {
      skillName: "torchvision",
      fontAwesomeClassname: "fas fa-eye"
    },
    {
      skillName: "torchaudio",
      fontAwesomeClassname: "fas fa-assistive-listening-systems"
    },
    {
      skillName: "scikit-learn",
      fontAwesomeClassname: "fas fa-chart-bar"
    },
    {
      skillName: "jupyter-notebook",
      fontAwesomeClassname: "fas fa-book"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "django",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "azure",
      fontAwesomeClassname: "fab fa-adn"
    },
    {
      skillName: "heroku",
      fontAwesomeClassname: "fas fa-h-square"
    },
    {
      skillName: "linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "colab",
      fontAwesomeClassname: "fab fa-google"
    },
    {
      skillName: "kaggle",
      fontAwesomeClassname: "fab fa-kaggle"
    },
    {
      skillName: "wandb",
      fontAwesomeClassname: "fas fa-braille"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName:
        "Pakistan Institute of Engineering and Applied Sciences (PIEAS)",
      logo: require("./assets/images/pieas.jpg"),
      subHeader: "Master of Science in Computer Science",
      duration: "November 2020 - October 2022",
      desc: "IT scholarship awardee. Majored in Deep Neural Networks / AI, participated in the research of Network Intrusion Detection and ranked in the top decile with 3.65 / 4.00 CGPA",
      descBullets: [
      	"Studied several AI courses including Machine Learning, Digital Image Processing, Computer Vision, Image and Video Understanding, Deep Neural Networks, Pattern Classification and Recognition, Artificial Intelligence",
        "Developed a high precision NIDS to detect anomalies using a deep ensemble architecture with robustness to zero day attacks",
      ]
    },
    {
      schoolName: "Bahria University",
      logo: require("./assets/images/bahria.jpeg"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2015 - February 2020",
      desc: "Distinction in the final year project",
      descBullets: ["Studied courses about Object-oriented Programming, Software Engineering, Data Warehousing, Management Information Systems, Database Management Systems, Web Engineering, Software Project Management and Computer Graphics",
      "Developed a web application that served as a 'Lost and Found' repository powered by a custom semantic matching algorithm"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Deep Learning", //Insert stack or technology you have experience in
      progressPercentage: "100%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Machine Learning",
      progressPercentage: "90%"
    },
    {
      Stack: "Computer Vision",
      progressPercentage: "90%"
    },
    {
      Stack: "DevOps/MLOps",
      progressPercentage: "95%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Assistant Manager (AI)",
      company: "AITeC, NCP",
      companylogo: require("./assets/images/aitec.png"),
      date: "April 2023 – Present",
      desc: "Planning, coordination, and execution of AI projects",
      descBullets: [
        "Assist in planning and executing AI projects.",
        "Analyze data and provide insights for model improvement.",
        "Stay updated on AI advancements and contribute to R&D.",
        "Collaborate with cross-functional teams for AI integration.",
        "Maintain detailed documentation of AI projects.",
      ]
    },
    {
      role: "AI Developer",
      company: "Upwork (Freelancer)",
      companylogo: require("./assets/images/upworkLogo.png"),
      date: "June 2021 – December 2022",
      desc: "Build and deploy AI models",
      descBullets: [
        "Analyze and process data of different modalities such as Vision, Static, Acoustic and Text.",
        "Construct training and inference pipelines.",
        "Research."
      ]
    },
    {
      role: "Front-End Developer",
      company: "Fiverr (Freelancer)",
      companylogo: require("./assets/images/fiverrLogo.png"),
      date: "May 2020 – June 2022",
      desc: "Develop Front-End for websites",
      descBullets:[
		    "Develop clean and consistent front-end designs.",
		    "Incorporate JS and CSS frameworks (ReactJS, Bootstrap, MaterialUI).",
		    "Integrate API endpoints."
      ]
    },
    {
      role: "Software Engineer Intern",
      company: "Smart Solutions",
      companylogo: require("./assets/images/smartSolLogo.png"),
      date: "October 2019 – December 2019",
      desc: "Develop Full-stack .NET desktop applications",
      descBullets:[
      	"Develop n-tier ERP applications for web and desktop",
      	"Requirements engineering",
      	"Test and report bugs in the software"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: true, // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Featured Projects Section

const featuredProjects = {
  title: "Featured Projects",
  subtitle: "Showcasing innovative AI solutions and cutting-edge technologies",
  projects: [
    {
      title: "AI-based Information Extraction from General Arrangements (OD + OCR)",
      description:
        "Production-ready pipeline that detects tables, nozzles, notes, and views in GA engineering drawings with YOLOv8, then extracts text and tabular data via PaddleOCR and DONUT to deliver clean JSON/CSV for downstream CAD/BIM systems.",
      image: require("./assets/images/ga.png"), // Placeholder - user will add image
      descBullets: [],
      footerLink: [
        {
          name: "Details",
          url: "https://github.com/acen20/ga-analysis" // Add URL when available
        }
      ]
    },
    {
      title: "Automated Social Media Posting",
      description:
        "Agentic content planner and autoposter powered by local LLMs (Qwen2.5, Llama3.1) orchestrated in n8n; performs research via SerpAPI, drafts captions and hashtags, then posts to Facebook/Instagram (Graph API) and X with scheduling, retries, and audit logging.",
      image: require("./assets/images/n8n-social.png"), // Placeholder - user will add image
      descBullets: [],
      footerLink: [
        {
          name: "Details",
          url: "https://www.linkedin.com/feed/update/urn:li:activity:7343909911744929792/" // Add URL when available
        }
      ]
    },
    {
      title: "Video Synthesis for Animal Faces",
      description:
        "Image+audio to talking-face video for animal characters using Stable Diffusion + LivePortrait pipelines in ComfyUI, with face alignment, lip-sync, and temporal smoothing for coherent motion; GPU-friendly batch graph for rapid iteration.",
      image: require("./assets/images/comfy.jpg"), // Placeholder - user will add image
      descBullets: [],
      footerLink: [
        {
          name: "Details",
          url: "https://www.linkedin.com/feed/update/urn:li:activity:7285134021288689664/" // Add URL when available
        }
      ]
    },
    {
      title: "Headshot Generator (SD 1.5)",
      description:
        "Personalized headshot studio on SD 1.5 with DreamBooth/LoRA fine-tuning, Automatic1111 orchestration, style presets, prompt guardrails, batch renders, and auto-cleanup of training artifacts for repeatable high-quality portraits.",
      image: require("https://github.com/acen20/acen20.github.io/raw/refs/heads/master/src/assets/images/headshot.gif"), // Placeholder - user will add image
      descBullets: [],
      footerLink: [
        {
          name: "Details",
          url: "https://www.youtube.com/watch?v=Ke2XJu4kcpg" // Add URL when available
        }
      ]
    },
    {
      title: "OCR-Free Document Parsing (End-to-End Automation)",
      description:
        "End-to-end document understanding stack using LayoutLMv3 + DONUT for OCR-free key-value and table extraction where possible, with Dockerized multi-GPU workers, Streamlit review UI, and structured JSON/CSV export for analytics pipelines.",
      image: require("./assets/images/invoice.png"), // Placeholder - user will add image
      descBullets: [],
      footerLink: [
        {
          name: "Details",
          url: "https://www.youtube.com/watch?v=t-DcJj4SkAs" // Add URL when available
        }
      ]
    },
    {
      title: "Invoice Parsing for BI using AgenticAI",
      description:
        "Agentic invoice-to-BI pipeline: n8n orchestrates Qwen2.5VL + Gemma3 for multimodal understanding, validates outputs, normalizes vendor-specific layouts, and writes clean tables to Postgres for dashboards and downstream analytics.",
      image: require("./assets/images/n8n-invoice.png"), // Placeholder - user will add image
      descBullets: [],
      footerLink: [
        {
          name: "Details",
          url: "https://www.linkedin.com/feed/update/urn:li:activity:7339185830537687040/" // Add URL when available
        }
      ]
    },
    {
      title: "Object Detection and Segmentation (End-to-End Automation)",
      description:
        "Small-object-first detection and instance segmentation using Detectron2 + SAHI tiling, with Celery + RabbitMQ distributed inference, queue/backpressure monitoring, and automated mask/box delivery to downstream systems for production use.",
      image: require("./assets/images/od.png"), // Placeholder - user will add image
      descBullets: [],
      footerLink: [
        {
          name: "Details",
          url: "https://www.youtube.com/watch?v=VpQ59AW-TbQ" // Add URL when available
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Best AI Poster Award",
      subtitle:
        'Won 2nd Best Poster Award for "Precision Agriculture: Wheat Crop Classification and Yield Estimation"',
      image: require("./assets/images/poster.png"),
      footerLink: [
        {
          name: "Certificate",
          url: "https://drive.google.com/file/d/1F2wGyjl_SL2U9oqKc8zUpkyrMsyfFSHq/view?usp=drive_link"
        }
      ],
      extraImg: require("./assets/images/2medal.webp")
    },
    {
      title: "ISAIMP-2023",
      subtitle:
        "In charge of enrolling participants for the International Symposium on AI Medical Imaging and Pattern Recognition - 2023",
      image: require("./assets/images/aitec.png"),
      footerLink: [
        {
          name: "Certificate",
          url: "https://drive.google.com/file/d/1chsB49V9DGGWt0ecV3K72-2CONroF4dq/view?usp=drive_link"
        },
        {
          name: "Gallery",
          url: "https://www.ncp.edu.pk/galleryimages.php?dir=WWVhciAyMDIzL0ludGVybmF0aW9uYWwgU3ltcG9zaXVtIG9uIEFJIE1lZGljYWwgSW1hZ2luZyBhbmQgUGF0dGVybiBSZWNvZ25pdGlvbiAyNC0yNS0wNy0yMDIz"
        }
      ]
    },
    {
      title: "2nd NAIS Organizer",
      subtitle:
        "A key member of the committee overseeing participant registration",
      image: require("./assets/images/ncp.jpg"),
      footerLink: [
        {
          name: "Organizer Certificate",
          url: "https://drive.google.com/file/d/1vbqF7XGlNtG3l2pH_RLEN2qo_KPzNn5I/view?usp=drive_link"
        },
        {
          name: "Gallery",
          url: "https://www.ncp.edu.pk/galleryimages.php?dir=WWVhciAyMDIzLzJuZCBBcnRpZmljaWFsIEludGVsbGlnZW5jZSBTZW1pbmFyIE5BSVMgMjAtMDYtMjAyMw=="
        }
      ]
    },
    {
      title: "AI Fellowship 🥇",
      subtitle:
        "A 3-month fellowship course on Artificial Intelligence leading to job.",
      image: require("./assets/images/aitec.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1L6UaSa1AKDhpvNRnBidLsEjc0i3viQsf/view?usp=drive_link"
        }
      ],
      extraImg: require("./assets/images/1medal.png")
    },
    {
      title: "Enterprise Design Thinking Practitioner",
      subtitle:
        "Acquired knowledge of applying Enterprise Design Thinking and its value.",
      image: require("./assets/images/ibm_practitioner.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://www.credly.com/badges/7482f568-c2e3-4ce6-a81f-597832468b93/public_url"
        },
        {
          name: "IBM Award Letter",
          url: "https://drive.google.com/file/d/1w_xdj9Pmvvrbkq6MMbhKAdWPizKPklkt/view?usp=sharing"
        },
      ]
    },
    {
      title: "Participated in the 1st NAIS",
      subtitle:
        "Participated in the first National Artificial Intelligence Seminar (NAIS) at AITeC, Islamabad",
      image: require("./assets/images/aitec.png"),
      footerLink: [

      ]
    },

    {
      title: "ITEF Scholarship Awardee",
      subtitle: "Sponsored by the HEC for higher studies in the field of Computer Science at PIEAS, Islamabad",
      image: require("./assets/images/pieas.jpg"),
      footerLink: [
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-3239991330",
  email_address: "ahsenmailbox@gmail.com",
  display: true
};

// Twitter Section

const twitterDetails = {
  userName: "ahsen_nazir", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  featuredProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
