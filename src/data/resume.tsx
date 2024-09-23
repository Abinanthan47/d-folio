import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react"; // Removed unused `NotebookIcon`

export const DATA = {
  name: "Dinesh",
  initials: "S",
  url: "https://dillion.io",
  location: "Tiruchengode, Namakkal",
  locationLink: "https://www.google.com/maps/Namakkal",
  description:
    "Frontend Developer and UI/UX designer. I love building things and helping people.",
  summary:
    "Hi, I'm Dinesh, a final-year Electronics and Communication Engineering student at Sona College of Technology, Salem. Alongside my academic journey, I've developed a strong passion for Frontend Development and UI/UX Design.",
  avatarUrl: "/profile.jpg",
  skills: [
    "React",
    "HTML",
    "JavaScript", // Fixed the capitalization
    "CSS",
    "Figma",
    "Adobe Xd",
    "IoT", // Fixed the casing for IoT
    "Java",
    "C",
  ],
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "skdinesh2003@gmail.com",
    tel: "+91 93457 32570",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://dub.sh/dillion-github",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/dinesh-dk-03979b265",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/dinesh-dk",
        icon: Icons.x,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:skdinesh2003@gmail.com", // Added valid `mailto` link
        icon: Icons.email,
        navbar: false,
      },
    },
  },
  work: [
    {
      company: "Freelancer",
      href: "https://fiverr.com",
      badges: [],
      location: "Remote",
      title: "Freelance Designer",
      logoUrl: "/fiv-logo.webp",
      start: "Apr 2022",
      end: "Present",
      description:
        "I’ve worked as a freelance UI/UX Designer, honing my skills in creating visually appealing, user-friendly digital interfaces.",
    },
  ],
  education: [
    {
      school: "Sona College of Technology",
      href: "https://sonatech.ac.in",
      degree: "BE ECE",
      logoUrl: "/sona.webp",
      start: "2021",
      end: "2025",
    },
    {
      school: "Nalandas Higher secondary school",
      href: "https://uwaterloo.ca",
      degree: "SSLC , HSC", // Fixed text consistency
      logoUrl: "/nalogo.jpg",
      start: "2018",
      end: "2021",
    },
  ],
  projects: [
    {
      title: "Nexbot Landing Page",
      href: "https://3-d-robot-landing-page.vercel.app/",
      dates: "",
      active: true,
      description:
        "Redesigned a modern, interactive 3D and responsive landing page enhancing user engagement and improving overall functionality across devices.",
      technologies: ["HTML", "JavaScript", "CSS", "Spline"],
      links: [
        {
          type: "Website",
          href: "https://3-d-robot-landing-page.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/image.png",
      video: "",
    },
    {
      title: "Petshop Landing Page",
      href: "https://petshop-gray.vercel.app/",
      dates: "",
      active: true,
      description:
        "Designed, developed, and sold animated UI Petshop Landing Page with stunning UI and seamless user experience.",
      technologies: [
        "React.js",
        "JavaScript",
        "Vercel",
        "Figma",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://petshop-gray.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/petshop.png",
      video: "",
    },
    {
      title: "UI/UX Design Project",
      href: "https://earthyorigins.in/",
      dates: "",
      active: true,
      description:
        "Designed, wireframed, and prototyped the e-commerce web design project with seamless user interface and user experience.",
      technologies: ["Figma", "Adobe Xd", "Miro"],
      links: [
        {
          type: "Website",
          href: "https://earthyorigins.in/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/uiux.png",
      video: "",
    },
    {
      title: "Epileptic Seizure Detector (IoT-based)",
      href: "",
      dates: "",
      active: true,
      description:
        "Epileptic Seizure Detector (IoT-based) is a real-time monitoring system designed to detect and respond to epileptic seizures.",
      technologies: [
        "Heartbeat Sensor",
        "Arduino UNO",
        "Node MCU",
        "Temperature Sensor",
      ],
      links: [], // Removed empty links to prevent errors
      image: "/iot.jpeg",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "Professional Google UX Design",
      dates: "",
      location: "Remote - Coursera",
      description:
        "Completed Google UX Design certificate on Coursera with milestone projects.",
      image: "/google.jpg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Meta Frontend Developer",
      dates: "",
      location: "Remote - Coursera",
      description:
        "Completed Meta Frontend Developer certificate on Coursera with milestone projects.",
      image: "/metalogo.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
  ],
} as const;
