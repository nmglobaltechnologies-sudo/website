import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowRightIcon,
  BookOpenIcon,
  CircleHelpIcon,
  FileTextIcon,
  TrophyIcon,
} from "lucide-react"

import { NewsletterForm } from "@/components/RequirementForms"
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
import { resourceTopics } from "@/content/requirements"

export const metadata: Metadata = {
  title: "Resources | NM Global Technologies",
  description:
    "ERP insights, modernization whitepapers, success-story topics, and enterprise technology FAQs.",
}

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        title="Practical resources for enterprise technology decisions."
        description="Explore planned insight topics, whitepapers, success-story formats, and answers to common ERP and implementation questions."
      >
        <Button
          render={<Link href="/contact" />}
          nativeButton={false}
          size="lg"
        >
          Ask a specific question
          <ArrowRightIcon data-icon="inline-end" />
        </Button>
      </PageHero>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <Tabs defaultValue="blog">
          <TabsList
            variant="line"
            className="w-full justify-start overflow-x-auto border-b pb-3"
          >
            <TabsTrigger value="blog">Blog</TabsTrigger>
            <TabsTrigger value="whitepapers">Whitepapers</TabsTrigger>
            <TabsTrigger value="stories">Success Stories</TabsTrigger>
            <TabsTrigger value="faqs">FAQs</TabsTrigger>
          </TabsList>

          <TabsContent value="blog" className="pt-10">
            <ResourceGrid
              icon={BookOpenIcon}
              label="Planned insight topic"
              items={resourceTopics.blog}
              description="Editorial topics identified in the requirements. Articles will be published only when approved content is available."
            />
          </TabsContent>
          <TabsContent value="whitepapers" className="pt-10" id="whitepapers">
            <ResourceGrid
              icon={FileTextIcon}
              label="Planned whitepaper"
              items={resourceTopics.whitepapers}
              description="Downloadable assets are not yet available. These cards define the approved content roadmap."
            />
          </TabsContent>
          <TabsContent value="stories" className="pt-10">
            <ResourceGrid
              icon={TrophyIcon}
              label="Planned story format"
              items={resourceTopics.stories}
              description="No customer identity or outcome is published without verified evidence and approval."
            />
          </TabsContent>
          <TabsContent value="faqs" className="pt-10" id="faqs">
            <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
              <div>
                <CircleHelpIcon className="size-8 text-primary" />
                <h2 className="mt-5 text-3xl font-semibold tracking-tight">
                  Frequently asked questions
                </h2>
                <p className="mt-4 leading-7 text-muted-foreground">
                  Initial answers covering ERP strategy, implementation, and
                  support.
                </p>
              </div>
              <Accordion>
                {resourceTopics.faqs.map((item) => (
                  <AccordionItem key={item.question} value={item.question}>
                    <AccordionTrigger>{item.question}</AccordionTrigger>
                    <AccordionContent>
                      <p className="leading-7 text-muted-foreground">
                        {item.answer}
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </TabsContent>
        </Tabs>
      </section>

      <section className="border-y bg-muted/40">
        <div className="mx-auto max-w-3xl px-5 py-16 md:px-8">
          <h2 className="text-2xl font-semibold tracking-tight">
            Resource updates
          </h2>
          <p className="mt-3 mb-6 leading-7 text-muted-foreground">
            The subscription interface is ready, but collection remains
            disabled until an approved newsletter platform is configured.
          </p>
          <NewsletterForm />
        </div>
      </section>
    </>
  )
}

function ResourceGrid({
  icon: Icon,
  label,
  items,
  description,
}: {
  icon: typeof BookOpenIcon
  label: string
  items: string[]
  description: string
}) {
  return (
    <>
      <div className="max-w-3xl">
        <h2 className="text-3xl font-semibold tracking-tight">{label}s</h2>
        <p className="mt-4 leading-7 text-muted-foreground">{description}</p>
      </div>
      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <Card key={item}>
            <CardHeader>
              <Icon className="mb-4 size-6 text-primary" />
              <CardTitle className="text-xl">{item}</CardTitle>
              <CardDescription>{label}</CardDescription>
            </CardHeader>
            <CardContent>
              <Badge variant="outline">Content in preparation</Badge>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  )
}
