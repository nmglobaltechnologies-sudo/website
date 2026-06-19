import Link from "next/link"
import {
  ArrowRightIcon,
  Building2Icon,
  FactoryIcon,
  HeartPulseIcon,
  PackageIcon,
  ShoppingBagIcon,
  TruckIcon,
} from "lucide-react"

import { PageHero } from "@/components/PageHero"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const industries = [
  {
    icon: FactoryIcon,
    title: "Manufacturing",
    description:
      "Production, planning, quality, costing, inventory, maintenance, and supply chain systems.",
  },
  {
    icon: Building2Icon,
    title: "Construction",
    description:
      "Project operations, procurement, resource planning, cost control, and field visibility.",
  },
  {
    icon: PackageIcon,
    title: "Distribution",
    description:
      "Warehouse execution, fulfillment, inventory optimization, supplier coordination, and analytics.",
  },
  {
    icon: ShoppingBagIcon,
    title: "Retail",
    description:
      "Commerce integrations, customer experiences, inventory, finance, and operational reporting.",
  },
  {
    icon: HeartPulseIcon,
    title: "Healthcare",
    description:
      "Secure application integration, workforce systems, finance, procurement, and operational support.",
  },
  {
    icon: TruckIcon,
    title: "Logistics",
    description:
      "Transportation, tracking, warehouse automation, route operations, and connected enterprise data.",
  },
]

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        title="Enterprise technology grounded in industry operations."
        description="We combine platform knowledge with an understanding of process, data, integration, and support needs across complex operating environments."
      >
        <Button
          render={<Link href="/contact" />}
          nativeButton={false}
          size="lg"
        >
          Discuss your industry
          <ArrowRightIcon data-icon="inline-end" />
        </Button>
      </PageHero>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <Card key={industry.title}>
              <CardHeader className="p-6">
                <span className="mb-4 flex size-11 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                  <industry.icon className="size-5" />
                </span>
                <CardTitle className="text-xl">{industry.title}</CardTitle>
                <CardDescription className="text-base leading-7">
                  {industry.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>
    </>
  )
}
