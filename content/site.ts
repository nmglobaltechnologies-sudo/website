export type NavigationItem = {
  href: string
  label: string
  description?: string
}

export type NavigationGroup = {
  label: string
  items: NavigationItem[]
}

export type NavigationEntry = NavigationItem | NavigationGroup

export const navigation: NavigationEntry[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  {
    label: "Services",
    items: [
      {
        href: "/services",
        label: "Services",
        description: "ERP, engineering, cloud, AI, and managed services.",
      },
      {
        href: "/solutions",
        label: "Solutions",
        description: "Technology aligned to core business processes.",
      },
      {
        href: "/technologies",
        label: "Technologies",
        description: "Enterprise platforms and modern engineering tools.",
      },
    ],
  },
  { href: "/industries", label: "Industries" },
  {
    label: "Resources",
    items: [
      {
        href: "/resources",
        label: "Resources",
        description: "Insights, whitepapers, success stories, and FAQs.",
      },
      {
        href: "/case-studies",
        label: "Case Studies",
        description: "Representative enterprise engagement scenarios.",
      },
    ],
  },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
]

export const footerCompanyLinks = [
  { href: "/about", label: "About" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
]

export const footerResourceLinks = [
  { href: "/resources", label: "Resources" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/resources#whitepapers", label: "Whitepapers" },
  { href: "/resources#faqs", label: "FAQs" },
]
