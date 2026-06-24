import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRightIcon, CircleHelpIcon } from "lucide-react"

import { PageHero } from "@/components/PageHero"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { serviceFaqs } from "@/content/requirements"

export const metadata: Metadata = {
  title: "FAQs | NM Global Technologies",
  description:
    "Common questions about NM Global Technologies services, ERP platforms, cloud, integrations, AI automation, support, and consultations.",
}

export default function FAQsPage() {
  const categories = [...new Set(serviceFaqs.map((faq) => faq.category))]

  return (
    <>
      <PageHero
        title="Frequently asked questions about our services."
        description="Answers to common questions about ERP consulting, custom software, cloud platforms, integrations, AI automation, managed support, and engagement models."
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

      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-20 md:px-8 md:py-28 lg:grid-cols-[0.65fr_1.35fr]">
        <aside>
          <CircleHelpIcon className="size-8 text-primary" />
          <h2 className="mt-5 text-3xl font-semibold tracking-tight">
            Service FAQ categories
          </h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            These questions cover the most common early-stage topics for
            enterprise software, ERP, cloud, AI, and support engagements.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {categories.map((category) => (
              <Badge key={category} variant="secondary">
                {category}
              </Badge>
            ))}
          </div>
        </aside>

        <Card>
          <CardContent className="p-5 md:p-7">
            <Accordion>
              {serviceFaqs.map((faq) => (
                <AccordionItem key={faq.question} value={faq.question}>
                  <AccordionTrigger>
                    <span className="flex items-center gap-3">
                      <Badge variant="outline">{faq.category}</Badge>
                      <span>{faq.question}</span>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="leading-7 text-muted-foreground">
                      {faq.answer}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </section>
    </>
  )
}
