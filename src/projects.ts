import schematicImg from "./assets/schematic_example3.png";

export interface Project {
    title: string;
    description: string;
    tech: string[];
    link?: string;
    github?: string;
    image?: string;
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
      image: schematicImg
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
      description: "and aodhoa doaihdoia doihd ioahoaidh oafh ao aofihfaoi foih oa o aoih ofih oiaf hoiaf hiof oia oif oiaf oiahfoih foahfo ljakbjgb",
      tech: ["Angular", "TypeScript", "Spring Boot", "Java", "JaCoCo", "SonarQube"],
      github: "gitpage",
      image: "placeholder.png"
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