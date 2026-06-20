"use client"

import Link from "next/link"
import {
  ArrowRightIcon,
  BlocksIcon,
  BotIcon,
  BoxesIcon,
  CloudCogIcon,
  CodeXmlIcon,
  DatabaseZapIcon,
  NetworkIcon,
} from "lucide-react"

import { PageHero } from "@/components/PageHero"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { servicePlatforms } from "@/content/capabilities"

const platformIcons = {
  "jd-edwards": DatabaseZapIcon,
  "oracle-fusion": CloudCogIcon,
  netsuite: BoxesIcon,
  sap: BlocksIcon,
  "dynamics-365": NetworkIcon,
  "custom-software": CodeXmlIcon,
  "cloud-infrastructure": CloudCogIcon,
  "ai-automation": BotIcon,
}

const categories = [
  {
    value: "erp",
    label: "Enterprise platforms",
    description:
      "ERP consulting, implementation, modernization, integration, and managed support.",
  },
  {
    value: "development",
    label: "Software engineering",
    description:
      "Custom web, mobile, API, microservice, and cloud-native product delivery.",
  },
  {
    value: "cloud",
    label: "Cloud & infrastructure",
    description:
      "Cloud strategy, migration, DevOps, platform engineering, and managed infrastructure.",
  },
  {
    value: "intelligence",
    label: "AI & automation",
    description:
      "AI agents, intelligent workflows, business intelligence, and generative AI.",
  },
]

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="A complete technology service catalog, organized around your enterprise."
        description="From core ERP platforms to custom engineering and intelligent automation, NM Global connects strategy, implementation, integration, and support."
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button
            render={<Link href="/contact" />}
            nativeButton={false}
            size="lg"
          >
            Discuss your requirements
            <ArrowRightIcon data-icon="inline-end" />
          </Button>
          <Button
            render={<Link href="/technologies" />}
            nativeButton={false}
            variant="outline"
            size="lg"
          >
            View technology stack
          </Button>
        </div>
      </PageHero>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <Tabs defaultValue="erp">
          <TabsList
            variant="line"
            className="w-full justify-start overflow-x-auto border-b pb-3"
          >
            {categories.map((category) => (
              <TabsTrigger key={category.value} value={category.value}>
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((category) => {
            const platforms = servicePlatforms.filter(
              (platform) => platform.category === category.value
            )

            return (
              <TabsContent
                key={category.value}
                value={category.value}
                className="pt-10"
              >
                <div className="mb-10 max-w-3xl">
                  <h2 className="text-3xl font-semibold tracking-tight">
                    {category.label}
                  </h2>
                  <p className="mt-3 text-base leading-7 text-muted-foreground">
                    {category.description}
                  </p>
                </div>

                <div className="grid gap-6 lg:grid-cols-2">
                  {platforms.map((platform) => {
                    const Icon =
                      platformIcons[
                        platform.id as keyof typeof platformIcons
                      ]

                    return (
                      <Card
                        key={platform.id}
                        id={platform.id}
                        className="scroll-mt-28 rounded-2xl"
                      >
                        <CardHeader className="p-6 md:p-7">
                          <div className="mb-4 flex items-start justify-between gap-4">
                            <span className="flex size-11 items-center justify-center rounded-xl bg-secondary text-secondary-foreground">
                              <Icon className="size-5" />
                            </span>
                            <Badge variant="outline">
                              {platform.sections.length} service areas
                            </Badge>
                          </div>
                          <CardTitle className="text-2xl">
                            {platform.title}
                          </CardTitle>
                          <CardDescription className="text-base leading-7">
                            {platform.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="px-6 pb-7 md:px-7">
                          <Accordion>
                            {platform.sections.map((section) => (
                              <AccordionItem
                                key={section.title}
                                value={`${platform.id}-${section.title}`}
                              >
                                <AccordionTrigger>
                                  {section.title}
                                </AccordionTrigger>
                                <AccordionContent>
                                  <ul className="grid gap-2 pb-2 sm:grid-cols-2">
                                    {section.items.map((item) => (
                                      <li
                                        key={item}
                                        className="flex items-start gap-2 text-muted-foreground"
                                      >
                                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                                        {item}
                                      </li>
                                    ))}
                                  </ul>
                                </AccordionContent>
                              </AccordionItem>
                            ))}
                          </Accordion>
                        </CardContent>
                      </Card>
                    )
                  })}
                </div>
              </TabsContent>
            )
          })}
        </Tabs>
      </section>

      <section className="border-y bg-muted/40">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-5 py-16 md:px-8 lg:grid-cols-[1fr_auto]">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">
              Need a cross-platform roadmap?
            </h2>
            <p className="mt-3 max-w-2xl leading-7 text-muted-foreground">
              We can help sequence ERP modernization, integrations, custom
              applications, cloud services, and support as one program.
            </p>
          </div>
          <Button
            render={<Link href="/contact" />}
            nativeButton={false}
            size="lg"
          >
            Start a conversation
            <ArrowRightIcon data-icon="inline-end" />
          </Button>
        </div>
      </section>
    </>
  )
}
