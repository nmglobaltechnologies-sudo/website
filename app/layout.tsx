import type { Metadata } from "next"

import "./globals.css"
import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"
import { ThemeProvider } from "@/components/ThemeProvider"
import { TooltipProvider } from "@/components/ui/tooltip"

export const metadata: Metadata = {
  title: "NM Global Technologies | Enterprise Transformation",
  description:
    "ERP consulting, custom software, cloud-native platforms, AI automation, integrations, and managed services for enterprise teams.",
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider>
          <TooltipProvider>
            <Header />
            <main>{children}</main>
            <Footer />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
