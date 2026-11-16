import { BriefcaseBusiness, Cable, House, Mail, Users, Workflow } from 'lucide-react';

export const brand = {
  email: 'reach.stratify@gmail.com',
  phone: '+63 960 0283 349',
  phoneHref: 'tel:+639600283349',
  facebook: 'https://www.facebook.com/share/1Q218BfuWr/?mibextid=wwXIfr',
};

// Temporarily hide the team section from the public site without removing its content.
export const showTeamSection = false;

export const navigation = [
  { id: 'home', label: 'Overview', icon: House },
  { id: 'projects', label: 'Selected work', icon: BriefcaseBusiness },
  ...(showTeamSection ? [{ id: 'team', label: 'Team', icon: Users }] : []),
  { id: 'services', label: 'Services', icon: Cable },
  { id: 'approach', label: 'Our approach', icon: Workflow },
  { id: 'contact', label: 'Contact', icon: Mail },
];

function projectAsset(path) {
  return import.meta.env.BASE_URL + path.slice(1);
}

export const projects = [
  {
    number: "7",
    title: "AccountingSuite",
    type: "ACCOUNTING SYSTEM / CUSTOMIZATION",
    description: "Business-specific AccountingSuite extensions spanning Philippine tax and financial reporting, approval workflows, role-based access, and custom REST/OData interfaces.",
    challenge: "Adapt an accounting system to operational requirements, reporting needs, and local compliance workflows.",
    delivered: "Developed reporting modules, approval flows, access restrictions, and integrations; supported deployments, troubleshooting, and client demonstrations.",
    details: {
      role: "Business systems development, extensions, integrations, deployment, and technical support.",
      highlights: [
        "Philippine tax and financial reporting customizations",
        "Approval workflows and role-based access restrictions",
        "REST/OData services and external system integrations",
        "Client demonstrations, troubleshooting, and deployment support"
      ]
    },
    icon: "workflow",
    featured: false,
    stack: ["1C:Enterprise", "AccountingSuite", "REST / OData", "BIR Reporting", "Workflow Automation"],
    cover: "/projects/accountingsuite/accountingsuite-cover.webp",
    coverFit: "contain",
    screenshots: [
      {
        src: "/projects/accountingsuite/accountingsuite-cover.webp",
        alt: "AccountingSuite application logo",
        caption: "AccountingSuite"
      }
    ],
    note: "Professional work · Proprietary implementation"
  },
  {
    number: "8",
    title: "AutoCount",
    type: "BUSINESS SOFTWARE / CUSTOMER SUPPORT",
    description: "Hands-on customer support and business-specific AutoCount customizations, including extensions tailored to client workflows and operational requirements.",
    challenge: "Help customers address day-to-day issues and adapt business software to their processes.",
    delivered: "Provided direct technical support, investigated customer issues, and implemented custom extensions to support business needs.",
    details: {
      role: "Customer-facing support, troubleshooting, and extension customization.",
      highlights: [
        "Hands-on customer support and issue resolution",
        "Business-specific extensions and customizations",
        "Troubleshooting and workflow adjustments"
      ]
    },
    icon: "workflow",
    featured: false,
    stack: ["AutoCount", "Customer Support", "Extensions", "Business Workflows"],
    cover: "/projects/autocount/autocount-cover.webp",
    screenshots: [
      {
        src: "/projects/autocount/autocount-cover.webp",
        alt: "AutoCount desktop application showing business transaction modules",
        caption: "AutoCount business software interface"
      }
    ],
    note: "Professional work · Customer implementation"
  },
  {
    number: "1",
    title: "StratifyPOS",
    type: "POINT OF SALE",
    description: "Interactive café point-of-sale demo with sample orders, menu management, inventory tracking, and sales reporting.",
    icon: "wallet",
    featured: true,
    stack: [
      "Point of Sale",
      "Inventory Management",
      "Sales Reporting"
    ],
    cover: "/projects/stratify-pos/point-of-sale.webp",
    screenshots: [
      {
        src: "/projects/stratify-pos/point-of-sale.webp",
        alt: "StratifyPOS checkout workspace with a café menu and order panel",
        caption: "Point-of-sale workspace"
      },
      {
        src: "/projects/stratify-pos/business-dashboard.webp",
        alt: "StratifyPOS dashboard with simulated sales and recent transactions",
        caption: "Business dashboard"
      },
      {
        src: "/projects/stratify-pos/inventory.webp",
        alt: "StratifyPOS inventory workspace with stock levels and reorder alerts",
        caption: "Inventory management"
      }
    ],
    href: "https://stratify-pos-demo.vercel.app/",
    action: "Live demo"
  },
  {
    number: "2",
    title: "Her Opportunity Portal · Her UGC Academy",
    type: "CREATOR MARKETPLACE",
    description: "An invitation-only marketplace where creators and brands manage profiles, find campaigns, and coordinate opportunities.",
    challenge: "Bring creators, vetted brands, and campaign opportunities into one managed platform.",
    delivered: "The demo shows role-based onboarding, creator and brand profiles, campaign discovery, and administrative tools.",
    icon: "users",
    featured: false,
    stack: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "RBAC"
    ],
    cover: "/projects/her-ugc/creator-dashboard.webp",
    screenshots: [
      {
        src: "/projects/her-ugc/creator-dashboard.webp",
        alt: "HER UGC creator dashboard",
        caption: "Creator workspace overview"
      },
      {
        src: "/projects/her-ugc/opportunities.webp",
        alt: "HER UGC campaign discovery page",
        caption: "Campaign discovery"
      }
    ],
    href: "https://her-ugc-demo.vercel.app/",
    action: "Live demo"
  },
  {
    number: "3",
    title: "Al-PALMS · Academic Information",
    type: "EDUCATION",
    description: "An academic information system for managing student records and day-to-day campus administration.",
    challenge: "Organize institutional information into accessible workflows.",
    delivered: "The demo includes an administration dashboard and a searchable student directory.",
    icon: "graduation",
    featured: false,
    stack: [
      "Node.js",
      "React",
      "MySQL"
    ],
    cover: "/projects/al-palms/campus-dashboard.webp",
    screenshots: [
      {
        src: "/projects/al-palms/campus-dashboard.webp",
        alt: "Al-PALMS campus administration dashboard",
        caption: "Campus administration dashboard"
      },
      {
        src: "/projects/al-palms/student-directory.webp",
        alt: "Al-PALMS student directory with sample records",
        caption: "Student directory"
      }
    ],
    href: "https://al-palms-demo.vercel.app/",
    action: "Live demo"
  },
  {
    number: "4",
    title: "Getfoodie.online",
    type: "FOOD DELIVERY",
    description: "Food delivery web application with administration dashboards, rider tracking, and email verification workflows.",
    icon: "shopping",
    featured: false,
    stack: [
      "PHP",
      "MySQL",
      "JavaScript",
      "Bootstrap"
    ],
    cover: "/projects/getfoodie/customer-discovery.webp",
    screenshots: [
      {
        src: "/projects/getfoodie/customer-discovery.webp",
        alt: "GetFoodie customer workspace for browsing restaurants and dishes",
        caption: "Customer food discovery"
      },
      {
        src: "/projects/getfoodie/restaurant-dashboard.webp",
        alt: "GetFoodie restaurant dashboard with the order queue and menu availability",
        caption: "Restaurant order management"
      }
    ],
    href: "https://getfoodie-demo.vercel.app/",
    action: "Live demo"
  },
  {
    number: "5",
    title: "HariNgTari",
    type: "EVENT OPERATIONS",
    description: "An event operations prototype with real-time event management, odds, agent commissions, and payout workflows.",
    icon: "workflow",
    featured: false,
    stack: [
      "PHP",
      "JavaScript",
      "MySQL",
      "Bootstrap"
    ],
    cover: "/projects/haringtari/operations-overview.webp",
    screenshots: [
      {
        src: "/projects/haringtari/operations-overview.webp",
        alt: "HariNgTari operations overview with fictional event summaries",
        caption: "Operations overview"
      },
      {
        src: "/projects/haringtari/event-directory.webp",
        alt: "HariNgTari event directory with fictional schedules and statuses",
        caption: "Event directory"
      }
    ],
    href: "https://haringtari-demo.vercel.app/",
    action: "Live demo"
  },
  {
    number: "6",
    title: "JuanCast",
    type: "FAN-VOTING PLATFORM",
    description: "A live Philippine fan-voting platform where supporters vote for their favorite idols, musicians, and entertainment nominees through recurring polls and awards.",
    challenge: "Give Filipino fan communities an accessible way to support artists and participate in voting campaigns.",
    delivered: "JuanCast is available as a website and Android app, featuring active polls, entertainment categories, fan projects, and promotional campaigns.",
    icon: "users",
    featured: false,
    stack: [
      "Fan Voting",
      "Polls & Awards",
      "Web",
      "Android"
    ],
    cover: "/projects/juancast/cover.webp",
    screenshots: [
      {
        src: "/projects/juancast/brand.webp",
        alt: "JuanCast branding and Every Juan's Choice tagline",
        caption: "JuanCast · Every Juan's Choice"
      },
      {
        src: "/projects/juancast/app.webp",
        alt: "JuanCast mobile experience and voting-category preview",
        caption: "Mobile app and voting categories"
      },
      {
        src: "/projects/juancast/voting.webp",
        alt: "JuanCast Vote For Your Idols campaign artwork",
        caption: "Vote for your idols"
      },
      {
        src: "/projects/juancast/billboards.webp",
        alt: "JuanCast promotional artwork featuring outdoor digital screens",
        caption: "Campaign promotion and digital billboards"
      }
    ],
    href: "https://juancast.ph/",
    playStoreHref: "https://play.google.com/store/apps/details?id=com.JuanCast.myapplication",
    action: "Website"
  }
].map((project) => ({
  ...project,
  cover: projectAsset(project.cover),
  screenshots: project.screenshots.map((shot) => ({ ...shot, src: projectAsset(shot.src) })),
}));
