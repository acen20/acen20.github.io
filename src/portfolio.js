/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: false, // set false to disable splash screen
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
    "Passionate AI developer 🚀 having experience of developing machine learning and deep learning solutions with Python / PyTorch and many other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/acen20",
  linkedin: "https://www.linkedin.com/in/ahsen-nazir10/",
  gmail: "ahsenmailbox@gmail.com",
  gitlab: "https://gitlab.com/acen20",
  facebook: "https://www.facebook.com/acen20",
  medium: "https://medium.com/@ahsen1330",
  stackoverflow: "https://stackoverflow.com/users/13940093/ahsen-nazir",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY AI DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Build and train optimal AI models for Computer Vision / Static / NLP applications"
    ),
    emoji("⚡ Use state-of-the-art (SOTA) deep architectures "),
    emoji("⚡ Deployment of AI models on Heroku / Azure")
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
      skillName: "cuda",
      fontAwesomeClassname: "fas fa-microchip"
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
      duration: "November 2020 - September 2022",
      desc: "IT scholarship awardee. Majored in Deep Neural Networks / AI, participated in the research of Network Intrusion Detection and ranked in the top decile with 3.65 / 4.00 CGPA",
      descBullets: [
      	"Studied several AI courses including Machine Learning, Digital Image Processing, Computer Vision, Image and Video Understanding, Deep Neural Networks, Pattern Classification and Recognition, Artificial Intelligence",
        "Developed a high precision NIDS to detect anomalies using a deep ensemble architecture",
        "The system achieved remarkable performance with robustness to zero day attacks"
      ]
    },
    {
      schoolName: "Bahria University",
      logo: require("./assets/images/bahria.jpeg"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2015 - February 2020",
      desc: "Highest grade in the final year project",
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
      Stack: "Deep Neural Networks", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Computer Vision",
      progressPercentage: "90%"
    },
    {
      Stack: "Data Analysis",
      progressPercentage: "85%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "AI Developer",
      company: "Upwork (Freelancer)",
      companylogo: require("./assets/images/upworkLogo.png"),
      date: "June 2021 – Present",
      desc: "Build and deploy AI models",
      descBullets: [
        "Analyze and process data of different modalities such as Vision, Static, Acoustic and Text",
        "Construct training and inference pipelines",
        "Research"
      ]
    },
    {
      role: "Front-End Developer",
      company: "Fiverr (Freelancer)",
      companylogo: require("./assets/images/fiverrLogo.png"),
      date: "May 2020 – June 2022",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Software Engineer Intern",
      company: "Smart Solutions",
      companylogo: require("./assets/images/smartSolLogo.png"),
      date: "October 2019 – December 2019",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
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
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
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
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
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
  number: "+92-0000000000",
  email_address: "saadpasta70@gmail.com"
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
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
