import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRightIcon, CheckCircle2Icon } from "lucide-react"

import { PageHero } from "@/components/PageHero"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { caseStudyScenarios } from "@/content/requirements"

export const metadata: Metadata = {
  title: "Case Studies | NM Global Technologies",
  description:
    "Representative ERP, cloud, integration, Dynamics, and AI automation engagement scenarios from NM Global Technologies.",
}

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        title="Enterprise transformation scenarios, structured around outcomes."
        description="Explore representative engagement patterns across ERP optimization, cloud migration, integration, platform transformation, and AI automation."
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
        <Alert className="mb-10">
          <CheckCircle2Icon />
          <AlertTitle>Representative scenarios</AlertTitle>
          <AlertDescription>
            These are capability-based examples, not claims about named
            clients, completed projects, or measured results. Verified client
            evidence can replace them after approval.
          </AlertDescription>
        </Alert>

        <div className="flex flex-col gap-6">
          {caseStudyScenarios.map((scenario, index) => (
            <Card key={scenario.id} id={scenario.id} className="scroll-mt-28">
              <CardHeader className="p-6 md:p-8">
                <div className="flex items-center justify-between gap-4">
                  <Badge variant="secondary">
                    Scenario {String(index + 1).padStart(2, "0")}
                  </Badge>
                  <Badge variant="outline">Representative</Badge>
                </div>
                <CardTitle className="mt-4 text-2xl md:text-3xl">
                  {scenario.title}
                </CardTitle>
                <CardDescription className="text-base leading-7">
                  {scenario.clientOverview}
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-7 px-6 pb-8 md:px-8 lg:grid-cols-2">
                <div>
                  <h2 className="font-semibold">Challenge</h2>
                  <p className="mt-2 leading-7 text-muted-foreground">
                    {scenario.challenge}
                  </p>
                </div>
                <div>
                  <h2 className="font-semibold">Solution</h2>
                  <p className="mt-2 leading-7 text-muted-foreground">
                    {scenario.solution}
                  </p>
                </div>
                <div>
                  <h2 className="font-semibold">Technology stack</h2>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {scenario.technologies.map((technology) => (
                      <Badge key={technology} variant="secondary">
                        {technology}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h2 className="font-semibold">Expected outcomes</h2>
                  <ul className="mt-3 flex flex-col gap-2 text-muted-foreground">
                    {scenario.outcomes.map((outcome) => (
                      <li key={outcome} className="flex items-start gap-2">
                        <CheckCircle2Icon className="mt-0.5 size-4 shrink-0 text-primary" />
                        {outcome}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </>
  )
}
