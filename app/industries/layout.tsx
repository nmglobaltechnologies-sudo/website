import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Industries | NM Global Technologies",
  description:
    "Enterprise technology solutions for manufacturing, construction, distribution, retail, healthcare, logistics, and financial services.",
}

export default function IndustriesLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children
}
