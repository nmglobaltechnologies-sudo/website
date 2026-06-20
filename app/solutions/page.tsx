import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowRightIcon,
  BoxesIcon,
  FactoryIcon,
  HandCoinsIcon,
  PackageSearchIcon,
  TruckIcon,
  UsersIcon,
} from "lucide-react"

import { PageHero } from "@/components/PageHero"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Business Solutions | NM Global Technologies",
  description:
    "Finance, procurement, manufacturing, inventory, supply chain, and human resources solutions.",
}

const solutions = [
  {
    icon: HandCoinsIcon,
    title: "Finance",
    description:
      "Connected financial operations, reporting, planning, controls, and decision support.",
    capabilities: [
      "Financial management",
      "Reporting",
      "Forecasting",
      "Compliance",
    ],
  },
  {
    icon: PackageSearchIcon,
    title: "Procurement",
    description:
      "Structured purchasing, supplier collaboration, approvals, contract tracking, and spend visibility.",
    capabilities: [
      "Vendor management",
      "Purchase automation",
      "Spend control",
      "Approval workflows",
    ],
  },
  {
    icon: FactoryIcon,
    title: "Manufacturing",
    description:
      "Production planning and execution connected to inventory, quality, costing, and supply.",
    capabilities: [
      "Production planning",
      "Shop floor control",
      "Quality management",
      "Cost control",
    ],
  },
  {
    icon: BoxesIcon,
    title: "Inventory",
    description:
      "Real-time inventory visibility and warehouse processes designed for accuracy and availability.",
    capabilities: [
      "Warehouse optimization",
      "Inventory tracking",
      "Cycle counting",
      "Replenishment planning",
    ],
  },
  {
    icon: TruckIcon,
    title: "Supply Chain",
    description:
      "Planning and execution across suppliers, logistics, warehouses, demand, and customer commitments.",
    capabilities: [
      "Logistics",
      "Distribution",
      "Demand planning",
      "Supply analytics",
    ],
  },
  {
    icon: UsersIcon,
    title: "HR & Payroll",
    description:
      "Core workforce processes, talent, payroll, benefits, and employee services.",
    capabilities: [
      "Core HR",
      "Payroll",
      "Talent management",
      "Workforce planning",
    ],
  },
]

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        title="Technology organized around the way your business operates."
        description="Combine enterprise platforms, integrations, automation, and decision support around the processes that matter most."
      >
        <Button
          render={<Link href="/contact" />}
          nativeButton={false}
          size="lg"
        >
          Schedule consultation
          <ArrowRightIcon data-icon="inline-end" />
        </Button>
      </PageHero>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution) => (
            <Card key={solution.title}>
              <CardHeader className="p-6">
                <span className="mb-4 flex size-11 items-center justify-center rounded-xl bg-secondary text-secondary-foreground">
                  <solution.icon className="size-5" />
                </span>
                <CardTitle className="text-xl">{solution.title}</CardTitle>
                <CardDescription className="leading-6">
                  {solution.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="px-6 pb-7">
                <ul className="grid gap-2 text-sm text-muted-foreground">
                  {solution.capabilities.map((capability) => (
                    <li key={capability} className="flex items-center gap-2">
                      <span className="size-1.5 rounded-full bg-primary" />
                      {capability}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </>
  )
}
