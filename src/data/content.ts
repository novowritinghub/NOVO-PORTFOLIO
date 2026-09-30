export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  included: string[];
  suitableClients: string[];
  iconName: string;
  category: 'web' | 'design' | 'support';
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  shortDescription: string;
  longDescription: string;
  technologies: string[];
  keyFeatures: string[];
  imagePlaceholderText: string;
  badge: string;
  demoAvailable: boolean;
  demoUrlPlaceholder?: string;
}

export interface SkillItem {
  name: string;
  category: 'Frontend' | 'Backend' | 'Design & Docs' | 'Services';
  iconName: string;
  description: string;
}

export interface ProcessStep {
  stepNumber: string;
  title: string;
  description: string;
  deliverables: string[];
  iconName: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'general' | 'services' | 'process' | 'billing';
}

export const BRAND_INFO = {
  name: "NOVO WRITING HUB",
  tagline: "We Write. You Shine.",
  owner: "Anand Krishnan",
  positioning: "Digital Services & Web Development",
  heroHeadline: "Digital solutions for ideas, projects, and businesses.",
  heroSubheadline: "Independent digital services by Anand Krishnan, focused on web development, presentations, documentation, technical solutions, and creative digital work.",
  introShort: "NOVO WRITING HUB is an independent digital-services brand operated by Anand Krishnan. We provide practical digital solutions for students, professionals, creators, and small businesses—combining modern web development, presentation design, technical documentation, and ongoing site maintenance.",
  mission: "To deliver practical, high-quality digital solutions with clear communication, technical precision, and absolute attention to detail.",
  
  // Official Verified Contact Details
  contact: {
    phone: "7540072112",
    phoneLink: "tel:7540072112",
    whatsapp: "7540072112",
    whatsappLink: "https://wa.me/917540072112",
    email: "novowrirtinghub@gmail.com",
    emailLink: "mailto:novowrirtinghub@gmail.com",
    location: "Thanjavur"
  },

  fiverr: {
    username: "@novowritinghub",
    displayName: "Anand Krishnan",
    title: "Digital Services And Web Development",
    heading: "Find NOVO on Fiverr",
    text: "NOVO WRITING HUB is now available on Fiverr for digital services and web development.",
    profileUrlPlaceholder: "https://www.fiverr.com/novowritinghub"
  },

  instagram: {
    username: "@novo_writing_hub",
    profileUrl: "https://www.instagram.com/novo_writing_hub"
  }
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "website-development",
    title: "Website Development",
    shortDesc: "Custom modern websites built for performance, responsiveness, and clear presentation.",
    fullDesc: "Clean web development using lightweight, modern frameworks. Custom built to meet specific project goals without unnecessary visual clutter or bloated templates.",
    included: [
      "Custom responsive design for desktop, tablet & mobile",
      "Fast page load speed & clean code architecture",
      "Semantic HTML & accessible structure",
      "Cross-browser testing & mobile ergonomics",
      "Deployment setup & launch guidance"
    ],
    suitableClients: [
      "Small business owners",
      "Freelancers & consultants",
      "Creators launching online projects"
    ],
    iconName: "Code",
    category: "web"
  },
  {
    id: "portfolio-websites",
    title: "Portfolio Websites",
    shortDesc: "Personalized showcase websites for professionals, developers, and creators.",
    fullDesc: "Sleek digital portfolios engineered to present your skills, technical projects, work samples, and contact links with maximum clarity.",
    included: [
      "Tailored layout reflecting your personal brand",
      "Clean project showcase cards & filterable views",
      "Resume & background presentation",
      "Direct client enquiry forms & contact links",
      "Mobile-optimized presentation for all devices"
    ],
    suitableClients: [
      "Software developers & tech professionals",
      "Designers & content creators",
      "Independent consultants & job seekers"
    ],
    iconName: "Briefcase",
    category: "web"
  },
  {
    id: "business-websites",
    title: "Business Websites",
    shortDesc: "Professional company websites that establish credibility and communicate services.",
    fullDesc: "Structured multi-page business websites designed to highlight key services, company background, client workflows, and project enquiry points.",
    included: [
      "Multi-page information architecture",
      "Service catalogs & feature outlines",
      "Lead enquiry forms & contact integration",
      "Clean brand color palette & typography setup",
      "SEO-friendly page metadata structure"
    ],
    suitableClients: [
      "Local service providers & small agencies",
      "Independent professional firms",
      "Growing business initiatives"
    ],
    iconName: "Building2",
    category: "web"
  },
  {
    id: "small-web-applications",
    title: "Small Web Applications",
    shortDesc: "Interactive web portals, utility tools, dashboards, and custom web prototypes.",
    fullDesc: "Custom web applications built to solve specific operational tasks, manage data entries, or provide interactive tools to users.",
    included: [
      "Interactive user interfaces with React / JavaScript",
      "Backend integration with Python / Flask",
      "Dynamic data tables, search, and filtering",
      "Clean user input handling & form validation",
      "Structured API endpoints & data handling"
    ],
    suitableClients: [
      "Businesses seeking custom utility tools",
      "Entrepreneurs testing digital prototypes",
      "Teams needing internal dashboard interfaces"
    ],
    iconName: "Cpu",
    category: "web"
  },
  {
    id: "presentation-design",
    title: "Presentation Design",
    shortDesc: "Visually clean pitch decks, business presentations, and technical slideshows.",
    fullDesc: "Transform raw outlines and technical notes into executive-ready presentation slide decks formatted in Microsoft PowerPoint and modern vector tools.",
    included: [
      "Custom slide layout master design",
      "Visual diagrams, process flowcharts & chart formatting",
      "Clean typography hierarchy & visual balance",
      "Editable PowerPoint (.pptx) & PDF outputs",
      "Data visualization for complex topics"
    ],
    suitableClients: [
      "Founders preparing pitch presentations",
      "Professionals delivering business updates",
      "Students & researchers presenting technical work"
    ],
    iconName: "Presentation",
    category: "design"
  },
  {
    id: "project-documentation",
    title: "Project Documentation",
    shortDesc: "Structured technical documentation, user guides, and project specifications.",
    fullDesc: "Detailed project documentation, user manuals, system specifications, and project briefs that make complex workflows clear for collaborators and readers.",
    included: [
      "System architecture outlines & workflow docs",
      "User manuals & step-by-step operating guides",
      "Technical specifications & feature breakdowns",
      "Educational project support & formatting guidance",
      "Clean Markdown, HTML, or PDF formatting"
    ],
    suitableClients: [
      "Software projects & technical teams",
      "Students needing documentation formatting",
      "Businesses documenting internal workflows"
    ],
    iconName: "FileText",
    category: "support"
  },
  {
    id: "website-maintenance",
    title: "Website Maintenance",
    shortDesc: "Regular content updates, code optimizations, link audits, and technical checks.",
    fullDesc: "Keep your website updated, secure, and running smoothly with ongoing technical maintenance, text revisions, dependency checks, and layout tweaks.",
    included: [
      "Content updates & text revisions",
      "Page speed check & image optimizations",
      "Broken link audits & cross-browser verification",
      "Minor UI adjustments & design polishes",
      "Regular backup management guidance"
    ],
    suitableClients: [
      "Website owners needing reliable updates",
      "Busy professionals without technical staff",
      "Small businesses maintaining active site content"
    ],
    iconName: "Wrench",
    category: "support"
  },
  {
    id: "technical-support",
    title: "Technical Support",
    shortDesc: "Assistance with domain setup, hosting configuration, SSL, and web troubleshooting.",
    fullDesc: "Direct technical assistance for domain pointing, hosting server setup, SSL configuration, form integration, and resolving web layout errors.",
    included: [
      "Domain DNS pointing & SSL setup guidance",
      "Web hosting configuration (Vercel, Netlify, cPanel)",
      "Debugging HTML/CSS/JavaScript layout issues",
      "Form submission & SMTP email configuration",
      "Step-by-step technical guidance"
    ],
    suitableClients: [
      "Individuals launching new domain setups",
      "Website managers facing technical bottlenecks",
      "Clients needing reliable web troubleshooting"
    ],
    iconName: "LifeBuoy",
    category: "support"
  },
  {
    id: "graphic-design",
    title: "Graphic Design",
    shortDesc: "Clean digital graphics, visual branding assets, hero banners, and social graphics.",
    fullDesc: "Professional digital graphic design tailored for website headers, digital banners, brand assets, social media imagery, and visual document elements.",
    included: [
      "Web headers, hero graphics & banner designs",
      "Brand visual consistency & color palette guides",
      "Social media graphics & visual assets",
      "Custom vector icons & diagram graphics",
      "High-resolution PNG, SVG & source files"
    ],
    suitableClients: [
      "Brands updating digital graphics",
      "Creators launching visual campaigns",
      "Businesses seeking cohesive graphical assets"
    ],
    iconName: "Palette",
    category: "design"
  }
];

export const PORTFOLIO_SAMPLES: ProjectItem[] = [
  {
    id: "custom-web-portal-concept",
    title: "Custom Web Application Portal",
    category: "Sample Work",
    shortDescription: "A modern responsive web interface prototype built with React, TypeScript, and clean CSS styling.",
    longDescription: "This prototype demonstrates modern web frontend architecture, featuring real-time data table filtering, responsive layout design, dark charcoal visual aesthetic with warm gold accents, and clean component state management.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "HTML5", "CSS3"],
    keyFeatures: [
      "Responsive layout for mobile, tablet, and desktop",
      "Clean dark charcoal interface with logo-derived warm gold highlights",
      "Dynamic search and filter capabilities",
      "Accessible typography and semantic HTML"
    ],
    imagePlaceholderText: "Web Application Prototype UI",
    badge: "Web Prototype",
    demoAvailable: true,
    demoUrlPlaceholder: "[Interactive Component Preview]"
  },
  {
    id: "presentation-deck-sample",
    title: "Executive Presentation Slide Deck",
    category: "Sample Work",
    shortDescription: "A structured, visually polished Microsoft PowerPoint presentation template created for technical & business briefs.",
    longDescription: "Demonstrates presentation design principles, including custom master slide templates, clear visual hierarchy, vector iconography, and formatted data charts.",
    technologies: ["Microsoft PowerPoint", "Infographic Design", "Vector Graphics", "Typography"],
    keyFeatures: [
      "Custom master slide theme",
      "Technical architecture breakdown slides",
      "Custom chart formatting & data visual layout",
      "Clean executive typography spacing"
    ],
    imagePlaceholderText: "PowerPoint Slide Deck Sample",
    badge: "Presentation Design",
    demoAvailable: false
  },
  {
    id: "technical-documentation-sample",
    title: "Technical Documentation & User Manual",
    category: "Sample Work",
    shortDescription: "Structured technical user manual and system documentation formatted for software projects.",
    longDescription: "A sample documentation guide illustrating clear technical writing, section indexing, code block formatting, and standard operating procedures.",
    technologies: ["Technical Writing", "Markdown", "Project Documentation", "Process Flowcharts"],
    keyFeatures: [
      "Structured section indexing & table of contents",
      "Step-by-step user onboarding procedures",
      "Clean developer-friendly formatting",
      "Exportable in PDF and Markdown"
    ],
    imagePlaceholderText: "Technical Manual Document",
    badge: "Documentation",
    demoAvailable: false
  }
];

export const SKILLS_DATA: SkillItem[] = [
  {
    name: "HTML",
    category: "Frontend",
    iconName: "Code2",
    description: "Semantic HTML5 markup, web accessibility structure, clean document hierarchy, and SEO metadata."
  },
  {
    name: "CSS",
    category: "Frontend",
    iconName: "Palette",
    description: "Modern CSS3 layouts, Flexbox, CSS Grid, Glassmorphism, animations, and responsive media queries."
  },
  {
    name: "JavaScript",
    category: "Frontend",
    iconName: "FileCode",
    description: "ES6+ modern syntax, asynchronous fetch requests, DOM manipulation, and interactive web logic."
  },
  {
    name: "Python",
    category: "Backend",
    iconName: "Terminal",
    description: "Modular Python scripting, backend data processing, automation scripts, and server logic."
  },
  {
    name: "Flask",
    category: "Backend",
    iconName: "Server",
    description: "Lightweight Python web framework, REST API endpoints, request routing, and template handling."
  },
  {
    name: "Responsive Web Design",
    category: "Frontend",
    iconName: "Smartphone",
    description: "Mobile-first ergonomic responsive layout ensuring seamless display across all screen sizes."
  },
  {
    name: "Web Development",
    category: "Frontend",
    iconName: "Globe",
    description: "End-to-end web architecture, component frameworks, code optimization, and modern web standards."
  },
  {
    name: "Presentation Design",
    category: "Design & Docs",
    iconName: "Presentation",
    description: "Visual slide design, master template layout, infographics, and structured presentation decks."
  },
  {
    name: "Microsoft PowerPoint",
    category: "Design & Docs",
    iconName: "FileSpreadsheet",
    description: "PowerPoint formatting, vector graphics integration, slide transitions, and clean layout spacing."
  },
  {
    name: "Technical Support",
    category: "Services",
    iconName: "LifeBuoy",
    description: "Domain DNS setup, hosting configuration, SSL certificates, bug troubleshooting, and deployment assistance."
  },
  {
    name: "Website Maintenance",
    category: "Services",
    iconName: "Wrench",
    description: "Content updates, link auditing, page speed maintenance, dependency security updates, and backups."
  },
  {
    name: "Graphic Design",
    category: "Design & Docs",
    iconName: "Layout",
    description: "Digital web banners, UI graphic elements, social visuals, and visual asset preparation."
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    stepNumber: "01",
    title: "Requirement Discussion",
    description: "We review your project goals, scope, target audience, brand aesthetic, and specific deliverables to establish clear alignment.",
    deliverables: ["Project Summary", "Scope Definition"],
    iconName: "MessageSquareText"
  },
  {
    stepNumber: "02",
    title: "Planning",
    description: "We outline the site architecture, page sitemap, content structure, and technical tools tailored to your requirements.",
    deliverables: ["Site Architecture Map", "Content Outline"],
    iconName: "MapPin"
  },
  {
    stepNumber: "03",
    title: "Design",
    description: "Crafting the visual layout, typography, color scheme, and component UI focused on a modern dark charcoal aesthetic with warm logo-derived accents.",
    deliverables: ["UI Mockups", "Layout Preview"],
    iconName: "LayoutTemplate"
  },
  {
    stepNumber: "04",
    title: "Development",
    description: "Writing clean, modular code. We assemble pages, build interactive frontend logic, optimize code, and integrate APIs.",
    deliverables: ["Clean Codebase", "Responsive Pages"],
    iconName: "Code2"
  },
  {
    stepNumber: "05",
    title: "Testing",
    description: "Quality verification across mobile, tablet, and desktop devices. We check page load speed, cross-browser compatibility, links, and forms.",
    deliverables: ["Cross-Browser Check", "Mobile Ergonomic Test"],
    iconName: "CheckCircle2"
  },
  {
    stepNumber: "06",
    title: "Delivery",
    description: "Deploying your site or delivering final completed assets (source code, PowerPoint decks, documentation files) with full access.",
    deliverables: ["Production Deployment", "Final Asset Package"],
    iconName: "Rocket"
  },
  {
    stepNumber: "07",
    title: "Support",
    description: "Providing post-delivery guidance, technical answers, minor tweaks, and ongoing maintenance options as needed.",
    deliverables: ["Post-Launch Support", "Maintenance Guidance"],
    iconName: "ShieldCheck"
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    question: "What services does NOVO provide?",
    answer: "NOVO WRITING HUB specializes in website development, portfolio websites, business websites, small web applications, presentation design (PowerPoint), technical project documentation, graphic design, website maintenance, and technical support.",
    category: "services"
  },
  {
    question: "How can I start a project?",
    answer: "You can start a project by submitting an inquiry via our Contact page form, sending us a direct WhatsApp message (7540072112), emailing us at novowrirtinghub@gmail.com, or hiring NOVO on Fiverr (@novowritinghub).",
    category: "general"
  },
  {
    question: "Do you build custom websites?",
    answer: "Yes, all websites are custom-coded using lightweight modern web standards (React, HTML5, CSS3/Tailwind, JavaScript, Python/Flask) to ensure fast loading speeds and clean architecture without unnecessary template bloat.",
    category: "services"
  },
  {
    question: "Can I request a custom service?",
    answer: "Absolutely. If your project involves a combination of web development, documentation, or presentation design, submit your details on the Contact page, and we will prepare a tailored package.",
    category: "general"
  },
  {
    question: "Do you provide website maintenance?",
    answer: "Yes, we offer website maintenance services including content updates, link audits, page speed checks, layout tweaks, and technical troubleshooting.",
    category: "services"
  },
  {
    question: "How long does a project take?",
    answer: "Project timelines depend on the specific scope and complexity. Standard websites and portfolio pages typically take a few business days, while presentation decks or documentation projects are delivered according to agreed milestone schedules.",
    category: "process"
  },
  {
    question: "Do you provide revisions?",
    answer: "Yes, every project includes dedicated revision rounds to ensure the final output matches your specifications and requirements before project sign-off.",
    category: "process"
  },
  {
    question: "How does the project process work?",
    answer: "Our workflow follows a 7-step process: 01 Requirement Discussion, 02 Planning, 03 Design, 04 Development, 05 Testing, 06 Delivery, and 07 Support. We keep you informed at every step.",
    category: "process"
  },
  {
    question: "How can I contact NOVO?",
    answer: "You can contact Anand Krishnan directly by Phone or WhatsApp at 7540072112, by Email at novowrirtinghub@gmail.com, via the Contact page form, or on Fiverr (@novowritinghub). We are located in Thanjavur.",
    category: "general"
  }
];
