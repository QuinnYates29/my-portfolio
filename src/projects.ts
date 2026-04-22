import schematicImg from "./assets/schematic_example.png";

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
      description: 'Python-based Inkscape automation suite designed to standardize vehicle system documentation through custom CAD extensions. Features a "Smart Connector" for algorithmic orthogonal routing and recursive text-parsing for dynamic system hierarchy generation. Enforces a strict 20px grid architecture and hard-coded design standards to eliminate manual alignment errors and ensure high-precision, uniform schematics across complex engineering workflows.',
      tech: ["Python", "XML", "Inkex API", "Computational Geometry"],
      github: "https://github.com/QuinnYates29/RIT-theme-Inkscape-plugin",
      image: schematicImg
    },
    {
      title: "ECU Data Logger",
      description: "High-speed C++ firmware for real-time CAN bus monitoring and SD card logging.",
      tech: ["C++", "CAN Bus", "Embedded"],
      github: "https://github.com/QuinnYates29/ecu-logger"
    },
    {
      title: "Telemetry Dashboard",
      description: "React-based real-time visualization of vehicle sensors over a radio link.",
      tech: ["React", "TypeScript", "WebSockets"],
      github: "https://github.com/QuinnYates29/telemetry-dash"
    }
  ];