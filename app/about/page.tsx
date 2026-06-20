import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowRightIcon,
  CompassIcon,
  Layers3Icon,
  LightbulbIcon,
  UsersIcon,
} from "lucide-react"

import { PageHero } from "@/components/PageHero"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export const metadata: Metadata = {
  title: "About | NM Global Technologies",
  description:
    "Learn about NM Global Technologies, our mission, vision, values, enterprise expertise, and coordinated delivery model.",
}

const principles = [
  {
    icon: CompassIcon,
    title: "Business context first",
    description:
      "Technology decisions start with operating goals, constraints, people, and measurable outcomes.",
  },
  {
    icon: Layers3Icon,
    title: "Connected architecture",
    description:
      "ERP, integrations, custom applications, cloud, and data are designed as one system.",
  },
  {
    icon: UsersIcon,
    title: "Practical partnership",
    description:
      "Teams work directly with specialists who can move from strategy into delivery and support.",
  },
  {
    icon: LightbulbIcon,
    title: "Useful innovation",
    description:
      "We apply modern engineering and AI where they simplify work or improve decision-making.",
  },
]

const expertise = [
  "JD Edwards",
  "Oracle Fusion Cloud",
  "NetSuite",
  "SAP",
  "Microsoft Dynamics",
  "AI Solutions",
  "Cloud Technologies",
  "Software Engineering",
]

const leadershipRoles = [
  "Founder",
  "ERP Consultants",
  "Architects",
  "Developers",
  "Project Managers",
]

const coreValues = [
  "Excellence",
  "Innovation",
  "Integrity",
  "Customer Success",
  "Continuous Learning",
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="Enterprise expertise without disconnected handoffs."
        description="NM Global brings platform consulting, software engineering, cloud, integration, automation, and support into a coordinated delivery model."
      >
        <Button
          render={<Link href="/contact" />}
          nativeButton={false}
          size="lg"
        >
          Work with NM Global
          <ArrowRightIcon data-icon="inline-end" />
        </Button>
      </PageHero>

      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:px-8 md:py-28 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <h2 className="text-4xl font-semibold tracking-tight">
            Transformation is more than a platform implementation.
          </h2>
        </div>
        <div className="flex flex-col gap-6 text-lg leading-8 text-muted-foreground">
          <p>
            Enterprise programs often cross functional processes, legacy
            systems, data, integrations, user experiences, and production
            support. Treating each of those as a separate project creates
            friction and weakens accountability.
          </p>
          <p>
            NM Global is structured to connect those disciplines. We help
            clients assess the current environment, define a practical
            roadmap, implement the right platforms, build what is missing, and
            support the resulting ecosystem.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <CardHeader className="p-7">
              <CardTitle className="text-2xl">Our mission</CardTitle>
              <CardDescription className="text-base leading-7">
                Empowering businesses through ERP, cloud, automation, and
                digital transformation solutions.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="p-7">
              <CardTitle className="text-2xl">Our vision</CardTitle>
              <CardDescription className="text-base leading-7">
                To become a trusted global technology consulting partner
                delivering measurable business value.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        <div className="mt-10">
          <h2 className="text-2xl font-semibold tracking-tight">Core values</h2>
          <div className="mt-5 flex flex-wrap gap-3">
            {coreValues.map((value) => (
              <span
                key={value}
                className="rounded-xl bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground"
              >
                {value}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">
              Enterprise expertise
            </h2>
            <p className="mt-4 leading-7 text-muted-foreground">
              Our delivery model brings platform, engineering, cloud, and
              automation disciplines into one coordinated team.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {expertise.map((item) => (
                <span
                  key={item}
                  className="rounded-full border bg-card px-3 py-1.5 text-sm text-muted-foreground"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">
              Leadership and delivery roles
            </h2>
            <p className="mt-4 leading-7 text-muted-foreground">
              Role categories describe the team structure. Individual
              biographies will be added only when approved company information
              is available.
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {leadershipRoles.map((role) => (
                <li
                  key={role}
                  className="rounded-xl border bg-card p-4 text-sm font-medium"
                >
                  {role}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-y bg-muted/40">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
          <div className="max-w-3xl">
            <h2 className="text-4xl font-semibold tracking-tight">
              How we approach the work
            </h2>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              A few principles guide architecture, delivery, and the way we
              collaborate.
            </p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {principles.map((principle) => (
              <Card key={principle.title}>
                <CardHeader className="p-6">
                  <span className="mb-4 flex size-11 items-center justify-center rounded-xl bg-secondary text-secondary-foreground">
                    <principle.icon className="size-5" />
                  </span>
                  <CardTitle className="text-xl">{principle.title}</CardTitle>
                  <CardDescription className="text-base leading-7">
                    {principle.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
