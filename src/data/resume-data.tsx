import { GitHubIcon, LinkedInIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Samman Shrestha",
  // initials: "BJ",
  location: "Bharatpur-15, Chitwan, Nepal",
  // locationLink: "https://www.google.com/maps/place/Wrocław",
  about:
    "Passionate Electronics Engineer with interest for Machine Learning, Deep Learning, Natural Language Processing, Computer Vision and Flutter",
  summary:
    "I'm a passionate Electronics Communication and Information Engineer with a profound interest in the ever-evolving realms of Data Science and Flutter app development. I am currently focused on honing my skills in Natural Language Processing (NLP). I enjoy  Robotics, Machine Learning, Deep Learning and App development. As a hobby I like to sketch.",
  avatarUrl: "https://avatars.githubusercontent.com/u/83692376?s=96&v=4",
  personalWebsiteUrl: "https://sammanshrestha.com.np/#/",
  contact: {
    email: "shresthasamman125@gmail.com",
    tel: "+9779840430802",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/Instein125",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/samman-stha/",
        icon: LinkedInIcon,
      },
      // {
      //   name: "X",
      //   url: "https://x.com/BartoszJarocki",
      //   icon: XIcon,
      // },
    ],
  },
  education: [
    {
      school: "Fusemachine Nepal",
      degree: "Microdegree™, Artificial Intelligence",
      start: "2023",
      end: "2024",
    },
    {
      school: "Pashchimanchal Campus, IOE",
      degree:
        "Bachelor of Engineering - BEI, Electronics, Information and Communication Engineering",
      start: "2019",
      end: "2024",
    },
  ],
  // work: [
  //   {
  //     company: "Parabol",
  //     link: "https://parabol.co",
  //     badges: ["Remote"],
  //     title: "Senior Full Stack Developer",
  //     logo: ParabolLogo,
  //     start: "2021",
  //     end: "2024",
  //     description:
  //       "Implemented new features, led squad, worked on improving the way developers ship the code, started migration from Emotion to Tailwind CSS and more. Technologies: React, TypeScript, GraphQL",
  //   },
  //   {
  //     company: "Clevertech",
  //     link: "https://clevertech.biz",
  //     badges: ["Remote"],
  //     title: "Lead Android Developer → Full Stack Developer",
  //     logo: ClevertechLogo,
  //     start: "2015",
  //     end: "2021",
  //     description:
  //       "Created Android mobile apps and led teams for companies like Vision Media, DKMS, or AAA. Built live streaming application for Evercast from scratch. Technologies: Android, Kotlin, React, TypeScript, GraphQL",
  //   },
  //   {
  //     company: "Jojo Mobile",
  //     link: "https://bsgroup.eu/",
  //     badges: [],
  //     title: "Android Developer → Lead Android Developer",
  //     logo: JojoMobileLogo,
  //     start: "2012",
  //     end: "2015",
  //     description:
  //       "Built an Android team, created Android apps for biggest Polish companies like LOT, Polskie Radio, Agora, PolskaPress",
  //   },
  //   {
  //     company: "Nokia Siemens Networks",
  //     link: "https://www.nokia.com",
  //     badges: [],
  //     title: "C/C++ Developer",
  //     logo: NSNLogo,
  //     start: "2010",
  //     end: "2012",
  //     description: "Creating and testing software for LTE base stations",
  //   },
  // ],
  skills: [
    "Machine Learning",
    "Deep Learning",
    "NLP",
    "Flutter",
    "Python",
    "Robotics",
  ],
  // skills: {
  //   "Machine Learning": [
  //     "Supervised",
  //     "Unsupervised and Reinforcement learning",
  //     "Artificial Neural Networks",
  //     "CNN",
  //     "RNN"
  //   ],
  //   "Programming": ["Python", "C", "C++", "Dart"],
  //   "Tools and Software": [
  //     "Scikit-learn",
  //     "Tensorflow",
  //     "Scipy",
  //     "Pandas",
  //     "Matplotlib",
  //     "Seaborn"
  //   ],
  //   "App Development": ["Flutter", "Firebase", "Provider", "GetX"],
  // },
  projects: [
    {
      title: "Banking Customer Chat System with Speech Recognition",
      techStack: [
        "Langchain",
        "Gemini",
        "Openai Whisper",
        "StreamLit",
        "gTTs",
        "Sentence Transformers",
      ],
      description:
        "Designed and implemented a sophisticated customer support system capable of handling both audio and text inputs,with advanced intent classification and response generation capabilities.",
      // logo: ConsultlyLogo,
      link: {
        // label: "consultly.com",
        href: "https://github.com/Instein125/Banking-customer-support-chatbot",
      },
    },
    {
      title: "Delta Arm Waste Classifier",
      techStack: ["YoloV8", "OpenCv", "Roboflow", "Arduino", "Fusion360"],
      description:
        "Built a robotic delta arm integrated with a YOLOv8 model for waste identification and sorting into four categories: Biodegradable, Plastic, Paper, Metal",
      // logo: ConsultlyLogo,
      link: {
        // label: "consultly.com",
        href: "https://github.com/Instein125/Delta-Arm-Waste-Classifier",
      },
    },
    {
      title: "Speech Denoiser using Deep Learning",
      techStack: ["TensorFlow", "Librosa", "Unet", "StreamLit"],
      description:
        "Trained UNET architecture that is able to remove the background noise from the speech audio producing a clean speech.",
      // logo: ConsultlyLogo,
      link: {
        // label: "consultly.com",
        href: "https://github.com/Instein125/Speech-Denoiser-using-Deep-Learning",
      },
    },
    {
      title: "Discord Bot for Toxic Comment Detection",
      techStack: ["Keras", "TensorFlow", "Sentence Transformer", "MLflow"],
      description:
        "Discord bot that can identify toxic comment and filter it out.I have used MLflow for experimentation tracking.",
      // logo: MonitoLogo,
      link: {
        // label: "monito.dev",
        href: "https://github.com/Instein125/toxic-comment-classification",
      },
    },
    {
      title: "Sajilo Ambulance",
      techStack: [
        "Flutter",
        "Firebase",
        "Geolocator",
        "Geocoding",
        "Emailjs",
        "Firebase messaging",
      ],
      description:
        "Uber like app for Ambulance with triage predication feature and hospital recommendation. It was done as a AI hackathon project.",
      // logo: JarockiMeLogo,
      link: {
        // label: "github.com",
        href: "https://github.com/Instein125/Gritfeat_AI_Hackathon",
      },
    },
    {
      title: "Access Control System",
      techStack: [
        "Flutter",
        "Cloud firestore",
        "Push notifications",
        "Provider",
      ],
      description:
        "IOT based applications that allows user to remotely access the door, light and smoke sensor. Intregated ESP32 to develop the overall system.",
      // logo: Minimal,
      link: {
        // label: "useminimal.com",
        href: "https://github.com/Instein125/Access-Control-System",
      },
    },
    {
      title: "Hospital Management System with OPD",
      techStack: ["Flutter", "MySQL", "PHP"],
      description:
        "Desktop applications for managing the doctors, patients, appointments and drugs. I have used MySQL as database and PHP as backend.",
      // logo: BarepapersLogo,
      link: {
        // label: "barepapers.com",
        href: "https://github.com/Instein125/Hospital_management_system",
      },
    },
    {
      title: "Malware Memory Analysis",
      techStack: ["Scikit-learn", "XGboost", "Seaborn", "Matplotlib"],
      description:
        "Machine learning project for detecting whether the memory dumps are either Benign Spyware Trojan Horse or ransomware",
      // logo: YearProgressLogo,
      link: {
        // label: "getyearprogress.com",
        href: "https://github.com/Instein125/Malware-Memory-Analysis-for-Intrusion-Detection",
      },
    },
  ],
} as const;
