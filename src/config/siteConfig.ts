export const siteConfig = {
  companyName: "Masar Global",
  brandName: "Masar Global",
  description:
    "Masar Global helps ambitious companies clarify strategy, strengthen operations, and build market-ready digital growth systems.",
  logo: {
    src: "/brand/masar-global-mark.svg",
    alt: "Masar Global logo",
  },
  colors: {
    primary: "#82378C",
    blue: "#048ABF",
    cyan: "#04B2D9",
    accent: "#F27127",
    bgLight: "#F2F2F2",
  },
  navigationLinks: [
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],
  hero: {
    eyebrow: "Strategy, operations, and digital growth",
    title: "Build a clearer path from ambition to execution.",
    description:
      "Masar Global connects business strategy, financial clarity, market expansion, brand growth, and practical automation so teams can move with confidence.",
    primaryCta: { label: "Contact Us", href: "#contact" },
    secondaryCta: { label: "Explore Services", href: "#services" },
    highlights: ["Regional growth planning", "Operating clarity", "Digital market presence"],
  },
  services: [
    {
      title: "Strategy and Positioning",
      description:
        "Define the market direction, business model, priorities, and execution plan that keep leadership aligned.",
      points: ["Market direction", "Growth priorities", "Operating roadmap"],
    },
    {
      title: "Financial Advisory",
      description:
        "Improve reporting, cash visibility, budgeting, and decision support for teams that need reliable numbers.",
      points: ["Reporting clarity", "Budget planning", "Decision support"],
    },
    {
      title: "Market Expansion",
      description:
        "Prepare launch plans, compliance readiness, partner coordination, and operational foundations for new markets.",
      points: ["Launch planning", "Partner readiness", "Regional operations"],
    },
    {
      title: "Brand and Digital Growth",
      description:
        "Shape a clearer offer, stronger content direction, and customer journey across web and campaign channels.",
      points: ["Brand direction", "Campaign planning", "Digital journeys"],
    },
    {
      title: "Workflow Automation",
      description:
        "Reduce repeated work with practical automations, dashboards, alerts, and cleaner handoffs between teams.",
      points: ["Process mapping", "Automation flows", "Dashboards"],
    },
    {
      title: "Travel Business Accounting",
      description:
        "Organize travel transactions, supplier balances, trip profitability, and recurring management reporting.",
      points: ["Supplier matching", "Trip profitability", "Monthly reporting"],
    },
  ],
  stats: [
    { value: "3", label: "regional markets" },
    { value: "6", label: "connected service tracks" },
    { value: "1", label: "clear operating path" },
  ],
  about: {
    eyebrow: "Why Masar Global",
    title: "A practical partner for companies at a turning point.",
    description:
      "The landing page is structured as a reusable template: brand identity, service content, metrics, navigation, and contact behavior all come from one configuration file.",
    cards: [
      {
        title: "Connected thinking",
        text: "Strategy, finance, operations, and digital work are presented as one coherent business path.",
      },
      {
        title: "Template-ready content",
        text: "Swap the config and brand assets to adapt the page for another company without rewriting components.",
      },
      {
        title: "Focused conversion",
        text: "Every major call to action keeps visitors on the page and moves them toward the contact form.",
      },
    ],
  },
  contact: {
    sectionId: "contact",
    title: "Start the conversation",
    description: "Tell Masar Global what you are building, improving, or preparing to launch.",
    email: "hello@masar-global.com",
    phone: "+20 000 000 0000",
    location: "Egypt, Saudi Arabia, and UAE",
  },
  socialLinks: [
    { label: "LinkedIn", href: "" },
    { label: "Instagram", href: "" },
    { label: "Facebook", href: "" },
  ],
  contactEndpoint: import.meta.env.VITE_CONTACT_ENDPOINT?.trim() ?? "",
  mobileBanner: {
    label: "Contact Us",
    href: "#contact",
  },
};
