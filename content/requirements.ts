export type IndustryProfile = {
  id: string
  title: string
  summary: string
  challenges: string[]
  solutions: string[]
  benefits: string[]
  technologies: string[]
}

export const industryProfiles: IndustryProfile[] = [
  {
    id: "manufacturing",
    title: "Manufacturing",
    summary:
      "Connect planning, production, quality, inventory, costing, maintenance, and supply operations.",
    challenges: ["Disconnected planning and execution", "Limited shop-floor visibility", "Cost and quality variance"],
    solutions: ["ERP modernization", "Production and quality workflows", "Integrated inventory and analytics"],
    benefits: ["More reliable production plans", "Improved traceability", "Faster operational decisions"],
    technologies: ["JD Edwards", "SAP S/4HANA", "Oracle Fusion", "Power BI"],
  },
  {
    id: "construction",
    title: "Construction",
    summary:
      "Improve project controls, procurement, resource planning, field visibility, and financial management.",
    challenges: ["Project cost leakage", "Field-to-office delays", "Fragmented procurement"],
    solutions: ["Project ERP", "Mobile field applications", "Automated approvals and reporting"],
    benefits: ["Stronger cost control", "Timelier project reporting", "Consistent procurement"],
    technologies: ["JD Edwards", "Oracle Fusion", "Dynamics 365", "React"],
  },
  {
    id: "distribution",
    title: "Distribution",
    summary:
      "Coordinate inventory, warehousing, fulfillment, supplier operations, and customer commitments.",
    challenges: ["Inventory inaccuracy", "Fulfillment delays", "Limited demand visibility"],
    solutions: ["Warehouse and inventory optimization", "Order integrations", "Demand dashboards"],
    benefits: ["Higher fulfillment accuracy", "Reduced stock imbalance", "Better service levels"],
    technologies: ["NetSuite", "Dynamics 365", "Oracle Database", "REST APIs"],
  },
  {
    id: "retail",
    title: "Retail",
    summary:
      "Unify commerce, inventory, customer experiences, finance, and operational reporting.",
    challenges: ["Channel data silos", "Inventory mismatch", "Slow financial reconciliation"],
    solutions: ["Commerce integrations", "Unified inventory", "Automated finance workflows"],
    benefits: ["Consistent customer experience", "Improved availability", "Faster close and reporting"],
    technologies: ["NetSuite", "SAP", "React", "MuleSoft"],
  },
  {
    id: "healthcare",
    title: "Healthcare",
    summary:
      "Connect finance, procurement, workforce, and operational systems with secure application integration.",
    challenges: ["Legacy system integration", "Complex workforce operations", "Sensitive data handling"],
    solutions: ["Secure integration architecture", "ERP and HCM modernization", "Managed application support"],
    benefits: ["More reliable data exchange", "Improved operational visibility", "Reduced support burden"],
    technologies: ["Oracle Fusion", "Azure", ".NET", "Oracle Integration Cloud"],
  },
  {
    id: "logistics",
    title: "Logistics",
    summary:
      "Connect transportation, tracking, warehouse automation, route operations, and enterprise data.",
    challenges: ["Shipment visibility gaps", "Manual exception handling", "Disconnected warehouse data"],
    solutions: ["Tracking integrations", "Workflow automation", "Operational dashboards"],
    benefits: ["Faster exception response", "Improved shipment visibility", "More productive operations"],
    technologies: ["Dynamics 365", "AWS", "Node.js", "Power BI"],
  },
  {
    id: "financial-services",
    title: "Financial Services",
    summary:
      "Modernize controlled financial workflows, reporting, data integration, and customer-facing applications.",
    challenges: ["Complex controls and reporting", "Legacy application constraints", "Manual data reconciliation"],
    solutions: ["Finance platform modernization", "Secure APIs", "Document and workflow automation"],
    benefits: ["Stronger controls", "Faster reporting cycles", "Reduced manual processing"],
    technologies: ["Oracle Fusion", "SAP", "Azure", "AI document processing"],
  },
]

export type CaseStudyScenario = {
  id: string
  title: string
  clientOverview: string
  challenge: string
  solution: string
  technologies: string[]
  outcomes: string[]
}

export const caseStudyScenarios: CaseStudyScenario[] = [
  {
    id: "jde-performance",
    title: "JD Edwards Performance Optimization",
    clientOverview: "A representative enterprise operating a multi-environment JD Edwards landscape.",
    challenge: "Slow processing, unstable package activity, and limited visibility into recurring performance issues.",
    solution: "Assess CNC configuration, database behavior, workloads, package processes, and monitoring practices; then prioritize remediation.",
    technologies: ["JD Edwards EnterpriseOne", "Oracle Database", "CNC", "Monitoring"],
    outcomes: ["A prioritized optimization roadmap", "Improved operational visibility", "More predictable support processes"],
  },
  {
    id: "fusion-migration",
    title: "Oracle Fusion Cloud Migration",
    clientOverview: "A representative organization replacing fragmented finance and procurement processes.",
    challenge: "Legacy workflows, inconsistent master data, and complex integrations slowed business operations.",
    solution: "Define the target operating model, configure Fusion modules, migrate governed data, integrate dependencies, and train users.",
    technologies: ["Oracle Fusion Cloud", "OIC", "REST APIs", "Oracle Database"],
    outcomes: ["A unified cloud operating model", "Standardized workflows", "A supportable integration architecture"],
  },
  {
    id: "sap-integration",
    title: "SAP Integration Project",
    clientOverview: "A representative SAP environment connecting business partners and specialist applications.",
    challenge: "Point-to-point interfaces created fragile dependencies and slow issue resolution.",
    solution: "Create reusable integration services, governed interfaces, monitoring, and support documentation.",
    technologies: ["SAP", "SAP BTP", "REST APIs", "Middleware"],
    outcomes: ["Reduced interface complexity", "Improved traceability", "A scalable integration foundation"],
  },
  {
    id: "dynamics-transformation",
    title: "Microsoft Dynamics Transformation",
    clientOverview: "A representative growing business consolidating finance, operations, and customer processes.",
    challenge: "Disconnected systems limited reporting and made cross-functional workflows difficult to manage.",
    solution: "Sequence Dynamics 365 implementation, Power Platform automation, data conversion, and user adoption.",
    technologies: ["Dynamics 365", "Power Platform", "Azure", "Microsoft 365"],
    outcomes: ["Connected operational processes", "Improved reporting consistency", "A phased transformation roadmap"],
  },
  {
    id: "invoice-ai",
    title: "AI-Powered Invoice Processing",
    clientOverview: "A representative finance team handling high-volume, document-driven invoice workflows.",
    challenge: "Manual extraction, validation, routing, and exception handling consumed significant staff time.",
    solution: "Combine document processing, OCR, business rules, human review, and ERP integration in a controlled workflow.",
    technologies: ["OCR", "AI Automation", "Workflow APIs", "ERP Integration"],
    outcomes: ["Reduced repetitive data entry", "Consistent exception routing", "Better process visibility"],
  },
]

export const resourceTopics = {
  blog: [
    "JD Edwards Tips",
    "Oracle Fusion Best Practices",
    "SAP Trends",
    "Dynamics 365 Insights",
    "AI in ERP",
  ],
  whitepapers: [
    "ERP Modernization",
    "Cloud Migration Strategy",
    "AI Adoption Framework",
  ],
  stories: [
    "Customer Success Articles",
    "Digital Transformation Journeys",
  ],
  faqs: [
    {
      question: "How do you approach ERP modernization?",
      answer:
        "We assess business priorities, current platforms, integrations, data, support constraints, and adoption needs before sequencing the roadmap.",
    },
    {
      question: "Can NM Global support multiple enterprise platforms?",
      answer:
        "Yes. The service model covers JD Edwards, Oracle Fusion, NetSuite, SAP, Dynamics 365, custom software, cloud, and integration work.",
    },
    {
      question: "Do you provide post-implementation support?",
      answer:
        "Managed services can include monitoring, functional and technical support, release management, enhancements, and administration.",
    },
  ],
}

export const serviceFaqs = [
  {
    question: "What services does NM Global Technologies provide?",
    answer:
      "NM Global Technologies provides ERP consulting, cloud and infrastructure services, custom software development, integrations, AI automation, business intelligence, and managed support.",
    category: "General",
  },
  {
    question: "Which ERP platforms do you support?",
    answer:
      "The service catalog covers JD Edwards EnterpriseOne, Oracle Fusion Cloud, Oracle NetSuite, SAP, and Microsoft Dynamics 365.",
    category: "ERP",
  },
  {
    question: "Can you help with both implementation and ongoing support?",
    answer:
      "Yes. Engagements can include assessment, roadmap planning, implementation, migration, integration, user training, production support, monitoring, enhancements, and managed services.",
    category: "Delivery",
  },
  {
    question: "Do you work with existing ERP systems or only new implementations?",
    answer:
      "Both. NM Global can support new implementations, upgrades, migrations, optimization programs, integrations, and improvements to existing environments.",
    category: "ERP",
  },
  {
    question: "Can NM Global build custom applications around an ERP system?",
    answer:
      "Yes. Custom web applications, mobile apps, portals, APIs, microservices, and cloud-native products can be built around existing enterprise systems.",
    category: "Software",
  },
  {
    question: "What cloud platforms do you work with?",
    answer:
      "Cloud services cover AWS, Microsoft Azure, Oracle Cloud Infrastructure, and Google Cloud Platform, including migration, DevOps, observability, and managed infrastructure.",
    category: "Cloud",
  },
  {
    question: "Can you integrate ERP systems with third-party tools?",
    answer:
      "Yes. Integration services include REST APIs, SOAP APIs, Oracle Integration Cloud, MuleSoft, Boomi, middleware patterns, and third-party system integrations.",
    category: "Integration",
  },
  {
    question: "Do you provide AI and automation solutions?",
    answer:
      "Yes. Services include AI agents, chatbots, workflow automation, document processing, OCR, predictive analytics, business intelligence, and generative AI solutions.",
    category: "AI",
  },
  {
    question: "Which industries do you serve?",
    answer:
      "The website covers manufacturing, construction, distribution, retail, healthcare, logistics, and financial services.",
    category: "Industries",
  },
  {
    question: "How does a typical engagement start?",
    answer:
      "A typical engagement starts with discovery: business goals, current systems, integrations, risks, users, timelines, and target outcomes are reviewed before recommending a roadmap.",
    category: "Delivery",
  },
  {
    question: "Can you provide staff augmentation?",
    answer:
      "Yes. NM Global can support staff augmentation needs across ERP consultants, developers, project managers, QA engineers, support analysts, and related technical roles.",
    category: "Staffing",
  },
  {
    question: "How can we request a consultation?",
    answer:
      "Use the contact Google Form on the Contact page or email support@nmglobaltech.com with your company details, service interest, and project context.",
    category: "Contact",
  },
]

export const careerGroups = [
  {
    title: "ERP Consulting",
    roles: [
      "JD Edwards Functional Consultant",
      "JD Edwards Technical Consultant",
      "CNC Consultant",
      "Oracle Fusion Consultant",
      "SAP Consultant",
      "Dynamics Consultant",
    ],
  },
  {
    title: "Engineering",
    roles: [
      "Full Stack Developer",
      "Java Developer",
      "React Developer",
      "Python Developer",
      "DevOps Engineer",
    ],
  },
  {
    title: "AI & Automation",
    roles: ["AI Engineer", "Automation Developer", "Data Engineer"],
  },
  {
    title: "Support",
    roles: [
      "ERP Support Analyst",
      "Technical Support Engineer",
      "Application Support Engineer",
    ],
  },
]

export const graduateProgram = {
  areas: [
    "ERP Consulting",
    "Software Development",
    "QA Testing",
    "Cloud Technologies",
    "Technical Support",
  ],
  eligibility: ["B.Tech", "MCA", "MBA", "B.Com", "M.Com"],
}

export const internshipProgram = {
  tracks: [
    "ERP Consulting",
    "Software Development",
    "AI & Automation",
    "Business Analysis",
    "Digital Marketing",
  ],
  durations: ["3 Months", "6 Months"],
}

export const employeeBenefits = [
  "Health Insurance",
  "Performance Bonuses",
  "Certification Sponsorship",
  "Paid Time Off",
  "Learning Budget",
  "Flexible Work Arrangements",
  "Career Development Plans",
]
