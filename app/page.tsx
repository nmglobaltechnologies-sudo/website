import Link from "next/link"
import {
  ArrowRightIcon,
  BlocksIcon,
  BotIcon,
  BoxesIcon,
  CheckIcon,
  CloudCogIcon,
  CodeXmlIcon,
  DatabaseZapIcon,
  NetworkIcon,
  WorkflowIcon,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { servicePlatforms, technologyGroups } from "@/content/capabilities"

const platformIcons = {
  "jd-edwards": DatabaseZapIcon,
  "oracle-fusion": CloudCogIcon,
  netsuite: BoxesIcon,
  sap: BlocksIcon,
  "dynamics-365": NetworkIcon,
  "custom-software": CodeXmlIcon,
  "ai-automation": BotIcon,
}

const deliverySteps = [
  {
    number: "01",
    title: "Discover",
    description:
      "Map business priorities, current systems, risks, and integration boundaries.",
  },
  {
    number: "02",
    title: "Architect",
    description:
      "Define the platform roadmap, delivery model, data strategy, and success measures.",
  },
  {
    number: "03",
    title: "Deliver",
    description:
      "Implement in clear increments with testing, training, migration, and adoption built in.",
  },
  {
    number: "04",
    title: "Operate",
    description:
      "Support, monitor, automate, and continuously improve the production environment.",
  },
]

export default function HomePage() {
  const featuredPlatforms = servicePlatforms.slice(0, 5)
  const software = servicePlatforms.find(
    (platform) => platform.id === "custom-software"
  )
  const intelligence = servicePlatforms.find(
    (platform) => platform.id === "ai-automation"
  )

  return (
    <>
      <section className="relative isolate overflow-hidden">
        <div className="cool-grid absolute inset-0 -z-20 opacity-70" />
        <div className="absolute -top-32 right-0 -z-10 size-[34rem] rounded-full bg-accent/60 blur-3xl" />
        <div className="absolute bottom-0 left-0 -z-10 size-[28rem] rounded-full bg-secondary/80 blur-3xl" />

        <div className="mx-auto grid min-h-[calc(100vh-4.5rem)] max-w-7xl items-center gap-16 px-5 py-20 md:px-8 lg:grid-cols-[1.08fr_0.92fr] lg:py-24">
          <div>
            <h1 className="max-w-4xl text-balance text-5xl font-semibold leading-[1.04] tracking-[-0.045em] md:text-7xl">
              Enterprise transformation, engineered end to end.
            </h1>
            <p className="mt-7 max-w-2xl text-pretty text-lg leading-8 text-muted-foreground md:text-xl">
              Connect ERP, custom software, cloud platforms, data, and
              intelligent automation into one operating system for your
              business.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button
                render={<Link href="/services" />}
                nativeButton={false}
                size="lg"
              >
                Explore capabilities
                <ArrowRightIcon data-icon="inline-end" />
              </Button>
              <Button
                render={<Link href="/contact" />}
                nativeButton={false}
                variant="outline"
                size="lg"
              >
                Talk to an expert
              </Button>
            </div>

            <div className="mt-12 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-4 border-t pt-7 text-sm text-muted-foreground sm:grid-cols-4">
              {["ERP strategy", "Implementation", "Integration", "Managed support"].map(
                (item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckIcon className="size-4 text-primary" />
                    <span>{item}</span>
                  </div>
                )
              )}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute inset-8 rounded-[2.5rem] bg-primary/12 blur-3xl" />
            <Card className="relative gap-0 rounded-3xl bg-card/92 py-0 shadow-2xl shadow-primary/10 backdrop-blur">
              <CardHeader className="border-b p-6">
                <CardTitle className="flex items-center gap-3 text-lg">
                  <span className="flex size-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                    <WorkflowIcon className="size-5" />
                  </span>
                  Connected enterprise architecture
                </CardTitle>
                <CardDescription>
                  One transformation roadmap across systems and teams.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    ["Core ERP", "JD Edwards · Fusion · SAP"],
                    ["Experience", "Web · Mobile · Portals"],
                    ["Intelligence", "AI agents · BI · Automation"],
                    ["Platform", "Cloud · APIs · DevOps"],
                  ].map(([title, detail]) => (
                    <div
                      key={title}
                      className="rounded-2xl border bg-background/70 p-4"
                    >
                      <p className="font-medium">{title}</p>
                      <p className="mt-1 text-xs leading-5 text-muted-foreground">
                        {detail}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="mt-4 rounded-2xl bg-muted p-5">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-sm font-medium">
                      Delivery continuity
                    </span>
                    <Badge variant="secondary">Strategy → Support</Badge>
                  </div>
                  <div className="flex items-center gap-2">
                    {[82, 58, 72, 46, 68, 88, 62, 78].map((height, index) => (
                      <div
                        key={`${height}-${index}`}
                        className="flex-1 rounded-full bg-primary/75"
                        style={{ height: `${height / 2}px` }}
                      />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="border-y bg-card">
        <div className="mx-auto max-w-7xl px-5 py-8 md:px-8">
          <p className="mb-5 text-xs font-semibold tracking-[0.18em] text-muted-foreground uppercase">
            Enterprise platform expertise
          </p>
          <div className="flex flex-wrap gap-2">
            {featuredPlatforms.map((platform) => (
              <Badge key={platform.id} variant="outline" className="h-7 px-3">
                {platform.title}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h2 className="text-balance text-4xl font-semibold tracking-tight md:text-5xl">
              Deep platform expertise. One connected delivery model.
            </h2>
            <p className="mt-5 text-lg leading-8 text-muted-foreground">
              Move from isolated technology projects to a coordinated
              transformation program with specialists across enterprise
              applications, engineering, cloud, and automation.
            </p>
            <Button
              render={<Link href="/services" />}
              nativeButton={false}
              variant="outline"
              className="mt-7"
            >
              View the complete service catalog
              <ArrowRightIcon data-icon="inline-end" />
            </Button>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {servicePlatforms.slice(0, 4).map((platform) => {
              const Icon =
                platformIcons[platform.id as keyof typeof platformIcons]

              return (
                <Card key={platform.id} id={platform.id}>
                  <CardHeader>
                    <span className="mb-3 flex size-10 items-center justify-center rounded-xl bg-secondary text-secondary-foreground">
                      <Icon className="size-5" />
                    </span>
                    <CardTitle className="text-lg">{platform.title}</CardTitle>
                    <CardDescription className="leading-6">
                      {platform.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Link
                      href={`/services#${platform.id}`}
                      className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                    >
                      Explore services
                      <ArrowRightIcon className="size-4" />
                    </Link>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      <section className="border-y bg-muted/45">
        <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
          <div className="max-w-3xl">
            <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
              Build beyond the ERP boundary.
            </h2>
            <p className="mt-5 text-lg leading-8 text-muted-foreground">
              Extend core platforms with tailored experiences, cloud-native
              services, intelligent workflows, and decision-ready data.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {[software, intelligence].map((platform) => {
              if (!platform) return null
              const Icon =
                platformIcons[platform.id as keyof typeof platformIcons]

              return (
                <Card key={platform.id} className="rounded-2xl">
                  <CardHeader className="p-6 md:p-8">
                    <span className="mb-5 flex size-12 items-center justify-center rounded-2xl bg-accent text-accent-foreground">
                      <Icon className="size-6" />
                    </span>
                    <CardTitle className="text-2xl">
                      {platform.title}
                    </CardTitle>
                    <CardDescription className="text-base leading-7">
                      {platform.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="grid gap-3 px-6 pb-7 md:grid-cols-2 md:px-8">
                    {platform.sections.map((section) => (
                      <div
                        key={section.title}
                        className="rounded-xl bg-muted/75 p-4"
                      >
                        <p className="font-medium">{section.title}</p>
                        <p className="mt-1 text-sm leading-6 text-muted-foreground">
                          {section.items.slice(0, 3).join(" · ")}
                        </p>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <div className="grid items-start gap-14 lg:grid-cols-[1fr_1.05fr]">
          <div>
            <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
              Technology choices aligned to the job.
            </h2>
            <p className="mt-5 text-lg leading-8 text-muted-foreground">
              Our engineering stack spans modern frontend and backend
              frameworks, databases, cloud platforms, DevOps, and integration
              technologies.
            </p>
            <Button
              render={<Link href="/technologies" />}
              nativeButton={false}
              variant="outline"
              className="mt-7"
            >
              Browse technologies
              <ArrowRightIcon data-icon="inline-end" />
            </Button>
          </div>

          <div className="grid gap-x-8 gap-y-7 sm:grid-cols-2">
            {technologyGroups.map((group) => (
              <div key={group.title}>
                <h3 className="font-medium">{group.title}</h3>
                <Separator className="my-3" />
                <p className="text-sm leading-7 text-muted-foreground">
                  {group.items.join(" · ")}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y bg-card">
        <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
          <div className="max-w-3xl">
            <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
              From roadmap to reliable operations.
            </h2>
            <p className="mt-5 text-lg leading-8 text-muted-foreground">
              A delivery sequence designed to maintain business context from
              the first workshop through production support.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-4">
            {deliverySteps.map((step, index) => (
              <div key={step.number}>
                <div className="flex items-center gap-4">
                  <span className="text-sm font-semibold text-primary">
                    {step.number}
                  </span>
                  {index < deliverySteps.length - 1 ? (
                    <Separator className="hidden md:block" />
                  ) : null}
                </div>
                <h3 className="mt-5 text-xl font-semibold">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-14 text-primary-foreground md:px-12 md:py-18">
          <div className="absolute -right-16 -top-20 size-72 rounded-full bg-accent/35 blur-3xl" />
          <div className="relative grid items-end gap-8 lg:grid-cols-[1fr_auto]">
            <div>
              <h2 className="max-w-3xl text-balance text-4xl font-semibold tracking-tight md:text-5xl">
                Make your next technology decision part of a coherent roadmap.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-primary-foreground/75">
                Bring us the business objective, the current environment, or
                the difficult integration. We’ll help define the next move.
              </p>
            </div>
            <Button
              render={<Link href="/contact" />}
              nativeButton={false}
              variant="secondary"
              size="lg"
            >
              Start a conversation
              <ArrowRightIcon data-icon="inline-end" />
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
