import { YarsaTech } from "@/images/logos";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { start } from "repl";

export const RESUME_DATA = {
  name: "Samman Shrestha",
  // initials: "BJ",
  location: "Bharatpur-15, Chitwan, Nepal",
  // locationLink: "https://www.google.com/maps/place/Wrocław",
  about:
    "Passionate Electronics Engineer with interest for Embedded System, IoT, PCB designing, Artificial Intelligence and Machine Learning",
  summary:
    "I'm a passionate Electronics, Communication, and Information Engineer with a strong focus on Embedded Systems, Robotics, and IoT development. I have a keen interest in the intersection of hardware and software, including areas like firmware development, PCB design, and BLE-based systems. I also actively explore Artificial Intelligence, Machine Learning and app development to complement my embedded projects. In my free time, I enjoy sketching as a creative outlet.",
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
    ],
  },
  education: [
    {
      school: "Pashchimanchal Campus, IOE",
      degree:
        "Bachelor of Engineering - BEI, Electronics, Communication and Information Engineering",
      start: "2019",
      end: "2024",
    },
    {
      school: "Fusemachine Nepal",
      degree: "Microdegree™, Artificial Intelligence",
      start: "2023",
      end: "2024",
    },
  ],
  courses: [
    {
      course: "Mastering Microcontroller and Embedded Driver Development",
      source:
        "Udemy, Fastbit Academy",
      start: "2024",
      end: "2025"
    },
    {
      course: "Microdegree™, Artificial Intelligence",
      source:
        "Fusemachine Nepal",
      start: "2023",
      end: "2024",
    },
    {
      course: " LangChain & Vector Databases in Production",
      source:
        "Activeloop",
      start: "2023",
      end: "2024"
    },
  ],
  work: [
    {
      company: "Yarsa Tech",
      link: "https://yarsa.tech/",
      badges: ["Embedded System", "PCB Design"],
      title: "Electronics Engineer",
      start: "2024",
      end: "Present",
      description: (
        <>
          {/* Senior developer and squad leader for an enterprise agile meeting
          platform. */}
          <ul className="list-inside list-disc">
            <li>
              Designed and developed the PCB and embedded firmware for a
              wireless barcode scanner using BLE technology, reducing power
              consumption.
            </li>
            <li>
              Engineered development boards and evaluated microcontrollers such
              as EC200U and F1C100s to support rapid prototyping and product
              innovation.
            </li>
            <li>
              Automated and streamlined key aspects of production and testing
              processes, reducing manual effort, faster defect identification,
              and better product quality and reliability.
            </li>
            <li>
              Designed embedded system architectures for consumer electronic
              products, ensuring scalability, robustness, and seamless
              hardware-software integration.
            </li>
          </ul>
        </>
      ),
    },
  ],
  skills: [
    "Bare Metal Programming",
    "BLE",
    "LVGL",
    "PCB Design",
    "Kicad",
    "Circuit Analysis",
    "AI and Machine Learning",
    "NLP",
    "C and C++",
    "Python",
    "Robotics",
  ],
  projects: [
    {
      title: "Delta Arm Waste Classifier",
      techStack: ["YoloV8", "OpenCv", "Roboflow", "Arduino", "Fusion360"],
      description:
        "Built a robotic delta arm integrated with a YOLOv8 model for waste identification and sorting into four categories: Biodegradable, Plastic, Paper, Metal",
      link: {
        href: "https://github.com/Instein125/Delta-Arm-Waste-Classifier",
      },
    },
    {
      title: "BLE Mesh Notification System",
      techStack: ["PB-O3M MCU", "Microvison Keil", "BLE 5.2", "SPI"],
      description:
        "Developed a BLE-based notification system enabling communication between nodes in a mesh topology for industrial and office notification applications.",
      link: {
        href: "",
      },
    },
    {
      title: "Development Board for EC200U",
      techStack: ["Kicad", "Circuit Analysis"],
      description:
        "Designed a high-performance 4-layer development board for EC200U MCU with MIPI camera and display interfaces and high speed USB lines.",
      link: {
        href: "",
      },
    },
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
  ],
} as const;
