import Link from "next/link"
import { ArrowUpRightIcon, MapPinIcon } from "lucide-react"

import { Separator } from "@/components/ui/separator"
import { Brand } from "@/components/Brand"

const companyLinks = [
  { href: "/about", label: "About" },
  { href: "/solutions", label: "Business solutions" },
  { href: "/industries", label: "Industries" },
  { href: "/contact", label: "Contact" },
]

const capabilityLinks = [
  { href: "/services#jd-edwards", label: "JD Edwards" },
  { href: "/services#oracle-fusion", label: "Oracle Fusion Cloud" },
  { href: "/services#sap", label: "SAP" },
  { href: "/services#custom-software", label: "Custom software" },
  { href: "/services#ai-automation", label: "AI & automation" },
]

export function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-18">
        <div className="grid gap-10 md:grid-cols-[1.4fr_0.8fr_0.8fr_1fr]">
          <div className="max-w-sm">
            <Brand />
            <p className="mt-5 text-sm leading-6 text-muted-foreground">
              Enterprise ERP, software engineering, cloud-native platforms,
              integrations, and intelligent automation delivered as one
              connected capability.
            </p>
          </div>

          <div>
            <h2 className="text-sm font-semibold">Company</h2>
            <ul className="mt-4 flex flex-col gap-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold">Capabilities</h2>
            <ul className="mt-4 flex flex-col gap-3">
              {capabilityLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold">Connect</h2>
            <div className="mt-4 flex flex-col gap-4 text-sm text-muted-foreground">
              <p className="flex items-start gap-2">
                <MapPinIcon className="mt-0.5 size-4 shrink-0" />
                <span>
                  9104 Farmer Dr
                  <br />
                  Fort Worth, TX 76244
                </span>
              </p>
              <a
                href="mailto:info@nmglobal.com"
                className="inline-flex items-center gap-1 hover:text-foreground"
              >
                info@nmglobal.com
                <ArrowUpRightIcon className="size-4" />
              </a>
            </div>
          </div>
        </div>

        <Separator className="my-10" />

        <div className="flex flex-col gap-4 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} NM Global Technologies. All rights
            reserved.
          </p>
          <div className="flex gap-5">
            <Link href="/privacy-policy" className="hover:text-foreground">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-foreground">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
