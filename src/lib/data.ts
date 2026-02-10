import workStoneMind from "@/assets/work-stone-mind.jpg";
import workSphere from "@/assets/work-sphere.jpg";
import workImac from "@/assets/work-imac.jpg";
import workTorn from "@/assets/work-torn.jpg";
import stonesDetail from "@/assets/stones-detail.jpg";

export interface Project {
  slug: string;
  title: string;
  image: string;
  industry: string;
  client: string;
  year: string;
  experience: string;
  about: string;
  challenge: string;
  results: string;
  detailImage: string;
}

export const projects: Project[] = [
  {
    slug: "stone-mind",
    title: "Stone Mind",
    image: workStoneMind,
    industry: "ART & DESIGN",
    client: "GRANITE VISIONS",
    year: "2023",
    experience: "3D MODELING",
    about: "Stone Mind is a unique 3D design project that brings together the concept of a human head sculpted from meticulously arranged digital stones. Inspired by traditional sculpture, this model captures the essence of natural durability and artistry. The goal was to blend classic sculptural form with digital techniques, creating a design with depth and aesthetic appeal. The final model was optimized for product photography, resulting in impactful visuals that could be used in marketing, advertising, or art portfolios.",
    challenge: "The primary challenge in this project was to achieve a realistic stone texture that would evoke a tangible, physical presence while maintaining accurate human proportions and detail. Each \"stone\" had to be carefully placed and adjusted for visual harmony.",
    results: "The finished model and photographs produced for STONE MIND exceeded expectations. The product photos delivered a powerful visual impact, highlighting the unique texture and structure of the stones under varied lighting. The model became a striking artistic centerpiece, serving both as an art piece and an effective marketing asset.",
    detailImage: stonesDetail,
  },
  {
    slug: "celestial-orb",
    title: "Celestial Orb",
    image: workSphere,
    industry: "DIGITAL ART",
    client: "NOVA STUDIOS",
    year: "2023",
    experience: "3D RENDERING",
    about: "An ethereal sphere rendered in vibrant purples and deep blacks, capturing the essence of cosmic energy in a single, mesmerizing form.",
    challenge: "Creating realistic light refraction and glow effects that convey depth and movement within a static image.",
    results: "The final renders were used as hero visuals for Nova Studios' brand campaign, generating significant engagement across digital platforms.",
    detailImage: workSphere,
  },
  {
    slug: "workspace",
    title: "iMac 24\"",
    image: workImac,
    industry: "PRODUCT DESIGN",
    client: "TECH MINIMAL",
    year: "2024",
    experience: "PHOTOGRAPHY",
    about: "A clean, minimal product photography series showcasing modern workspace aesthetics with the iMac 24 inch as the centerpiece.",
    challenge: "Achieving the perfect balance of natural and artificial light to highlight the product while maintaining a moody, editorial feel.",
    results: "The series was featured in multiple design publications and became a reference for workspace photography in the minimal design community.",
    detailImage: workImac,
  },
  {
    slug: "torn",
    title: "Torn",
    image: workTorn,
    industry: "GRAPHIC DESIGN",
    client: "BOLD PRESS",
    year: "2022",
    experience: "TYPOGRAPHY",
    about: "A bold typographic exploration using deconstructed letterforms to create visual impact and raw emotional expression.",
    challenge: "Balancing readability with artistic expression while maintaining the powerful visual impact of the distressed type treatment.",
    results: "The project won recognition at several design awards and inspired a new direction in the client's brand identity.",
    detailImage: workTorn,
  },
];

export const services = [
  "ILLUSTRATION",
  "BRAND ART",
  "PHOTO",
  "UI&UX DESIGN",
  "VIDEO EDIT",
];

export const clients = [
  "Seoul",
  "venice.",
  "Sitemark",
  "Rise",
  "Kansas",
  "Aurora",
];

export const faqs = [
  {
    question: "What is your creative design process like?",
    answer: "My design process starts with fully understanding your goals and needs. I begin with research and brainstorming to gather insights, followed by sketching initial concepts. Once we agree on a creative direction, I develop detailed designs and make revisions based on your feedback. I strive for a seamless, collaborative process, ensuring that each step brings us closer to the perfect solution.",
  },
  {
    question: "What is your typical project timeline?",
    answer: "Timelines vary depending on project scope and complexity. A typical branding project takes 4-6 weeks, while a full website design can take 6-10 weeks. I always provide detailed timelines upfront and keep you updated throughout the process.",
  },
  {
    question: "How do I get started on a project with you?",
    answer: "Simply reach out via the contact form or email. We'll schedule an initial call to discuss your vision, goals, and requirements. From there, I'll provide a proposal with scope, timeline, and pricing.",
  },
  {
    question: "What should I do if you're fully booked?",
    answer: "If I'm currently at capacity, I'll add you to my waitlist and reach out as soon as a spot opens up. I can also recommend trusted colleagues who might be available to help with your project.",
  },
];
