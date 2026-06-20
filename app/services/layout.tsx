import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Services | NM Global Technologies",
  description:
    "ERP consulting, custom software, cloud infrastructure, AI automation, integration, and managed support services.",
}

export default function ServicesLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children
}
