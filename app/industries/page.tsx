"use client"

import Link from "next/link"
import { ArrowRightIcon, CheckIcon } from "lucide-react"

import { PageHero } from "@/components/PageHero"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { industryProfiles } from "@/content/requirements"

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        title="Enterprise technology grounded in industry operations."
        description="Explore common challenges, recommended solutions, business benefits, and relevant technologies across seven operating environments."
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
        <Tabs defaultValue={industryProfiles[0].id}>
          <TabsList
            variant="line"
            className="w-full justify-start overflow-x-auto border-b pb-3"
          >
            {industryProfiles.map((industry) => (
              <TabsTrigger key={industry.id} value={industry.id}>
                {industry.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {industryProfiles.map((industry) => (
            <TabsContent
              key={industry.id}
              value={industry.id}
              className="pt-10"
            >
              <div className="max-w-3xl">
                <h2 className="text-3xl font-semibold tracking-tight">
                  {industry.title}
                </h2>
                <p className="mt-4 text-lg leading-8 text-muted-foreground">
                  {industry.summary}
                </p>
              </div>

              <div className="mt-10 grid gap-5 md:grid-cols-2">
                {[
                  ["Industry challenges", industry.challenges],
                  ["Recommended solutions", industry.solutions],
                  ["Business benefits", industry.benefits],
                ].map(([title, items]) => (
                  <Card key={title as string}>
                    <CardHeader>
                      <CardTitle className="text-xl">{title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="flex flex-col gap-3">
                        {(items as string[]).map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-3 text-muted-foreground"
                          >
                            <CheckIcon className="mt-0.5 size-4 shrink-0 text-primary" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}

                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">
                      Relevant technologies
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-wrap gap-2">
                    {industry.technologies.map((technology) => (
                      <Badge key={technology} variant="secondary">
                        {technology}
                      </Badge>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </section>
    </>
  )
}
