import schematicImg from "./assets/schematic_example3.png";
import SWENhomepageImg from "./assets/homepage.png";
import SWENadmincupboardImg from "./assets/admin_cupboard.png";
import SWENadminhipposImg from "./assets/admin_hippos.png";
import SWENhelpercupImg from "./assets/helper_cupboard.png";
import SWENhelperhipposImg from "./assets/helper_hippos.png";

export interface Project {
    title: string;
    description: string;
    tech: string[];
    link?: string;
    github?: string;
    image?: string[];
  }
  
  export const projects: Project[] = [
    {
      title: "Schematic Builder",
      description: 'Python-based Inkscape automation suite designed to standardize vehicle system documentation through \
      custom CAD extensions. Features a "Smart Connector" for algorithmic orthogonal routing and recursive text-parsing for \
      dynamic system hierarchy generation. Enforces a strict, standardized grid architecture and hard-coded design standards to eliminate \
      manual alignment errors and ensure high-precision, uniform schematics.',
      tech: ["Python", "XML", "Inkex API", "Computational Geometry"],
      github: "https://github.com/QuinnYates29/RIT-theme-Inkscape-plugin",
      image: [schematicImg]
    },
    {
      title: "PCB Vibration Tester",
      description: "ESP32-based automation platform designed for high-stress reliability testing of component assemblies \
      within controlled environments. Features a custom hardware interface with display and I/O, allowing for specification of \
      testing parameters. Reliably executes automated test cycles up to ~40G of acceleration.",
      tech: ["C++", "ESP-32", "CAN Bus", "Embedded I/O","Rapid Prototyping"],
      github: "https://github.com/QuinnYates29/Vibe-Thermal-Testing"
    },
    {
      title: "Low-Power GPS Tracker",
      description: "An open-source low-power platform developed to support sustainable fishing oversight and safety for \
      small fishing boats. Contributed 150+ hours toward the software of a cost-optimized GPS tracking solution for over \
      1,000 small vessels. Features SOS systems and state management, enabling reliable long-term operation in remote environments.",
      tech: ["Micropython", "GPS/GNSS", "State Management", "Rapid Prototyping", "System Integration"]
    },
    {
      title: "Fundraising Website",
      description: `Directed a cross-functional team in an Agile/Scrum environment to deliver a full-stack CRUD application \
      designed to simulate global conservation funding. Spearheaded the development of a centralized administrative dashboard \
      featuring authentication and an interactive geospatial interface for real-time asset tracking. \
      Engineered a persistent backend architecture to manage relational data mapping for simulated users and global assets, \
      ensuring data integrity across high-velocity development sprints.`,
      tech: ["Angular", "TypeScript", "Spring Boot", "Java", "JaCoCo", "SonarQube"],
      github: "gitpage",
      image: [SWENhomepageImg, SWENadmincupboardImg, SWENadminhipposImg, SWENhelpercupImg, SWENhelperhipposImg]
    },
    {
      title: "Wireless Telemetry System",
      description: "Real-time data acquisition architecture developed to bridge vehicle CAN bus networks with long-range \
      radio transmission. Engineered Python-based parsing software to decode raw CAN data into usable vehicle metrics while also \
      implementing a C-based LoRa firmware for wireless transmission. The system serves as a developmental foundation for remote diagnostics, \
      focused on low-latency data transfer and reliable communication in varying high-interference environments.",
      tech: ["Python", "C", "LoRa (RF)", "CAN Bus", "Embedded Firmware", "Serial Interfacing"]
    }
  ];