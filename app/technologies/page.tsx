import Link from "next/link"
import {
  ArrowRightIcon,
  BracesIcon,
  CloudIcon,
  Code2Icon,
  ContainerIcon,
  DatabaseIcon,
  PlugZapIcon,
} from "lucide-react"

import { PageHero } from "@/components/PageHero"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { technologyGroups } from "@/content/capabilities"

const groupIcons = {
  Frontend: Code2Icon,
  Backend: BracesIcon,
  Databases: DatabaseIcon,
  "Cloud Platforms": CloudIcon,
  DevOps: ContainerIcon,
  Integration: PlugZapIcon,
}

export default function TechnologiesPage() {
  return (
    <>
      <PageHero
        title="A pragmatic technology stack for modern enterprise systems."
        description="We select technologies around reliability, integration fit, maintainability, security, and the operating realities of your organization."
      >
        <Button
          render={<Link href="/contact" />}
          nativeButton={false}
          size="lg"
        >
          Discuss your architecture
          <ArrowRightIcon data-icon="inline-end" />
        </Button>
      </PageHero>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {technologyGroups.map((group) => {
            const Icon =
              groupIcons[group.title as keyof typeof groupIcons] ?? Code2Icon

            return (
              <Card key={group.title} className="rounded-2xl">
                <CardHeader className="p-6">
                  <span className="mb-4 flex size-11 items-center justify-center rounded-xl bg-secondary text-secondary-foreground">
                    <Icon className="size-5" />
                  </span>
                  <CardTitle className="text-xl">{group.title}</CardTitle>
                  <CardDescription>
                    Production-ready tools selected for the needs of each
                    solution.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2 px-6 pb-7">
                  {group.items.map((item) => (
                    <Badge key={item} variant="secondary">
                      {item}
                    </Badge>
                  ))}
                </CardContent>
              </Card>
            )
          })}
        </div>
      </section>

      <section className="border-y bg-card">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 md:px-8 lg:grid-cols-3">
          {[
            {
              title: "Designed for integration",
              description:
                "API-first architecture and established middleware patterns connect enterprise applications without creating another silo.",
            },
            {
              title: "Built for operations",
              description:
                "Deployment, observability, security, and maintainability are considered from the beginning of delivery.",
            },
            {
              title: "Ready to evolve",
              description:
                "Modular architecture and current engineering practices make future change easier to manage.",
            },
          ].map((item) => (
            <div key={item.title}>
              <h2 className="text-xl font-semibold">{item.title}</h2>
              <p className="mt-3 leading-7 text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
