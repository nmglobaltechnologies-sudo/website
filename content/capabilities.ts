export type CapabilitySection = {
  title: string
  items: string[]
}

export type ServicePlatform = {
  id: string
  title: string
  shortTitle: string
  description: string
  category: "erp" | "development" | "cloud" | "intelligence"
  sections: CapabilitySection[]
}

export const servicePlatforms: ServicePlatform[] = [
  {
    id: "jd-edwards",
    title: "Oracle JD Edwards EnterpriseOne",
    shortTitle: "JD Edwards",
    category: "erp",
    description:
      "Consulting, development, CNC administration, upgrades, automation, and managed support for EnterpriseOne.",
    sections: [
      {
        title: "Consulting Services",
        items: [
          "Functional Consulting",
          "Technical Consulting",
          "Business Process Optimization",
          "ERP Roadmap Planning",
        ],
      },
      {
        title: "Development Services",
        items: [
          "Custom Applications",
          "Business Functions",
          "Event Rules",
          "Reports & Forms",
        ],
      },
      {
        title: "CNC Administration",
        items: [
          "Environment Setup",
          "Security Management",
          "Package Builds",
          "Performance Optimization",
        ],
      },
      {
        title: "Upgrades & Migration",
        items: [
          "EnterpriseOne Upgrades",
          "Tools Release Upgrades",
          "Platform Migration",
          "Cloud Migration",
        ],
      },
      {
        title: "Orchestrator & Automation",
        items: [
          "Workflow Automation",
          "API Integrations",
          "Notifications",
          "RPA Enablement",
        ],
      },
      {
        title: "Managed Support",
        items: [
          "L1/L2/L3 Support",
          "Monitoring",
          "Issue Resolution",
          "SLA-Based Support",
        ],
      },
    ],
  },
  {
    id: "oracle-fusion",
    title: "Oracle Fusion Cloud",
    shortTitle: "Fusion Cloud",
    category: "erp",
    description:
      "Cloud ERP, HCM, SCM, implementation, integration, and managed services across the Oracle Fusion suite.",
    sections: [
      {
        title: "Fusion ERP Consulting",
        items: ["Financials", "Procurement", "Projects", "Risk Management"],
      },
      {
        title: "Fusion HCM",
        items: [
          "Core HR",
          "Payroll",
          "Talent Management",
          "Workforce Planning",
        ],
      },
      {
        title: "Fusion SCM",
        items: [
          "Inventory Management",
          "Supply Chain Planning",
          "Procurement",
          "Logistics",
        ],
      },
      {
        title: "Implementation Services",
        items: [
          "Greenfield Implementations",
          "Rollouts",
          "Data Migration",
          "User Training",
        ],
      },
      {
        title: "Integration Services",
        items: [
          "Oracle Integration Cloud (OIC)",
          "REST APIs",
          "Third-Party Integrations",
          "Middleware Solutions",
        ],
      },
      {
        title: "Managed Services",
        items: [
          "Production Support",
          "Release Management",
          "Functional Support",
          "Technical Support",
        ],
      },
    ],
  },
  {
    id: "netsuite",
    title: "Oracle NetSuite",
    shortTitle: "NetSuite",
    category: "erp",
    description:
      "Strategy, implementation, customization, integration, and ongoing administration for NetSuite.",
    sections: [
      {
        title: "NetSuite Consulting",
        items: [
          "Business Process Assessment",
          "ERP Strategy",
          "Solution Design",
          "Optimization",
        ],
      },
      {
        title: "Implementation Services",
        items: [
          "NetSuite ERP",
          "CRM",
          "Financial Management",
          "Inventory Management",
        ],
      },
      {
        title: "Customization",
        items: [
          "SuiteScript Development",
          "SuiteFlow Automation",
          "Custom Dashboards",
          "Saved Searches",
        ],
      },
      {
        title: "Integration Services",
        items: [
          "Shopify",
          "Salesforce",
          "Banking Systems",
          "E-Commerce Platforms",
        ],
      },
      {
        title: "Managed Support",
        items: [
          "Administration",
          "Enhancements",
          "User Support",
          "Performance Optimization",
        ],
      },
    ],
  },
  {
    id: "sap",
    title: "SAP",
    shortTitle: "SAP",
    category: "erp",
    description:
      "Business transformation, S/4HANA delivery, functional modules, integrations, and application managed services.",
    sections: [
      {
        title: "SAP Consulting",
        items: [
          "Business Transformation",
          "ERP Assessment",
          "Process Optimization",
          "Digital Transformation",
        ],
      },
      {
        title: "SAP S/4HANA",
        items: [
          "Greenfield Implementation",
          "Brownfield Migration",
          "Rollouts",
          "Support",
        ],
      },
      {
        title: "SAP Modules",
        items: [
          "SAP FICO",
          "SAP MM",
          "SAP SD",
          "SAP PP",
          "SAP HCM",
          "SAP SuccessFactors",
        ],
      },
      {
        title: "SAP Integration",
        items: ["SAP BTP", "APIs", "Middleware", "Enterprise Integrations"],
      },
      {
        title: "SAP Managed Services",
        items: [
          "Application Support",
          "AMS Services",
          "Monitoring",
          "Enhancements",
        ],
      },
    ],
  },
  {
    id: "dynamics-365",
    title: "Microsoft Dynamics 365",
    shortTitle: "Dynamics 365",
    category: "erp",
    description:
      "ERP, CRM, implementation, Power Platform integration, and managed services across Dynamics 365.",
    sections: [
      {
        title: "Dynamics 365 ERP",
        items: [
          "Finance & Operations",
          "Business Central",
          "Supply Chain Management",
          "Project Operations",
        ],
      },
      {
        title: "Dynamics CRM",
        items: ["Sales", "Customer Service", "Marketing", "Field Service"],
      },
      {
        title: "Implementation Services",
        items: [
          "New Implementations",
          "Migration Projects",
          "Data Conversion",
          "User Adoption",
        ],
      },
      {
        title: "Integration Services",
        items: [
          "Power Platform",
          "Azure Integration",
          "Microsoft 365",
          "Third-Party Systems",
        ],
      },
      {
        title: "Managed Services",
        items: [
          "Functional Support",
          "Technical Support",
          "Enhancements",
          "Administration",
        ],
      },
    ],
  },
  {
    id: "custom-software",
    title: "Custom Software Development",
    shortTitle: "Custom Software",
    category: "development",
    description:
      "Enterprise web, mobile, API, microservice, and cloud-native products built around your operating model.",
    sections: [
      {
        title: "Web Applications",
        items: [
          "Enterprise Portals",
          "SaaS Platforms",
          "Business Applications",
          "Customer Portals",
        ],
      },
      {
        title: "Mobile Applications",
        items: [
          "Android Applications",
          "iOS Applications",
          "Cross-Platform Apps",
          "Enterprise Mobility",
        ],
      },
      {
        title: "API Development",
        items: [
          "REST APIs",
          "GraphQL APIs",
          "Microservices",
          "Integration Platforms",
        ],
      },
      {
        title: "Cloud-Native Solutions",
        items: [
          "AWS",
          "Microsoft Azure",
          "Oracle Cloud Infrastructure (OCI)",
          "Google Cloud Platform",
        ],
      },
    ],
  },
  {
    id: "cloud-infrastructure",
    title: "Cloud & Infrastructure",
    shortTitle: "Cloud",
    category: "cloud",
    description:
      "Cloud strategy, migration, platform engineering, DevOps, and managed infrastructure across major providers.",
    sections: [
      {
        title: "Cloud Platforms",
        items: [
          "Amazon Web Services (AWS)",
          "Microsoft Azure",
          "Oracle Cloud Infrastructure (OCI)",
          "Google Cloud Platform",
        ],
      },
      {
        title: "Cloud Migration",
        items: [
          "Readiness Assessment",
          "Migration Planning",
          "Application Modernization",
          "Data Migration",
        ],
      },
      {
        title: "DevOps & Platform Engineering",
        items: [
          "CI/CD Pipelines",
          "Infrastructure as Code",
          "Containers & Kubernetes",
          "Observability",
        ],
      },
      {
        title: "Managed Infrastructure",
        items: [
          "Monitoring",
          "Environment Management",
          "Performance Optimization",
          "Operational Support",
        ],
      },
    ],
  },
  {
    id: "ai-automation",
    title: "AI & Automation Solutions",
    shortTitle: "AI & Automation",
    category: "intelligence",
    description:
      "Practical AI agents, workflow automation, business intelligence, and generative AI for enterprise teams.",
    sections: [
      {
        title: "AI Agents",
        items: [
          "Customer Support Agents",
          "ERP Support Assistants",
          "Knowledge Base Agents",
          "Internal Productivity Agents",
        ],
      },
      {
        title: "Intelligent Automation",
        items: [
          "Workflow Automation",
          "Document Processing",
          "OCR Solutions",
          "Approval Automation",
        ],
      },
      {
        title: "Business Intelligence",
        items: [
          "Power BI",
          "Tableau",
          "AI Dashboards",
          "Predictive Analytics",
        ],
      },
      {
        title: "Generative AI Solutions",
        items: [
          "Chatbots",
          "Enterprise Search",
          "Knowledge Management",
          "AI Assistants",
        ],
      },
    ],
  },
]

export const technologyGroups = [
  {
    title: "ERP Platforms",
    items: [
      "JD Edwards EnterpriseOne",
      "Oracle Fusion Cloud",
      "Oracle NetSuite",
      "SAP",
      "Microsoft Dynamics 365",
    ],
  },
  {
    title: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Angular", "Vue.js"],
  },
  {
    title: "Backend",
    items: ["Java", "Spring Boot", "Node.js", "Python", ".NET"],
  },
  {
    title: "Databases",
    items: [
      "Oracle Database",
      "Microsoft SQL Server",
      "PostgreSQL",
      "MySQL",
      "MongoDB",
    ],
  },
  {
    title: "Cloud Platforms",
    items: [
      "AWS",
      "Azure",
      "Oracle Cloud Infrastructure (OCI)",
      "Google Cloud Platform",
    ],
  },
  {
    title: "DevOps",
    items: ["Docker", "Kubernetes", "Jenkins", "GitHub Actions", "Terraform"],
  },
  {
    title: "Integration",
    items: [
      "REST APIs",
      "SOAP APIs",
      "Oracle Integration Cloud",
      "MuleSoft",
      "Boomi",
    ],
  },
]
