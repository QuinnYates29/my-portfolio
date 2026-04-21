export interface Project {
    title: string;
    description: string;
    tech: string[];
    link?: string;
    github?: string;
  }
  
  export const projects: Project[] = [
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