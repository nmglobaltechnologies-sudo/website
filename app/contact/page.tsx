import type { Metadata } from "next"
import {
  CalendarClockIcon,
  ClockIcon,
  MailIcon,
  MapIcon,
  MapPinIcon,
  MessageCircleIcon,
  Share2Icon,
} from "lucide-react"

import { ContactForm, NewsletterForm } from "@/components/RequirementForms"
import { PageHero } from "@/components/PageHero"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Contact | NM Global Technologies",
  description:
    "Contact NM Global Technologies about ERP, custom software, cloud, AI automation, integration, or managed services.",
}

const contactMethods = [
  {
    icon: MailIcon,
    title: "Email",
    description: "Send requirements or request a consultation.",
    content: (
      <a
        href="mailto:info@nmglobal.com"
        className="font-medium text-primary hover:underline"
      >
        info@nmglobal.com
      </a>
    ),
  },
  {
    icon: MapPinIcon,
    title: "Office",
    description: "NM Global Technologies",
    content: (
      <address className="not-italic text-muted-foreground">
        9104 Farmer Dr
        <br />
        Fort Worth, TX 76244
      </address>
    ),
  },
  {
    icon: ClockIcon,
    title: "Business hours",
    description: "Central Time",
    content: (
      <p className="text-muted-foreground">
        Monday-Friday, 9:00 AM-6:00 PM
      </p>
    ),
  },
]

const pendingIntegrations = [
  {
    icon: MessageCircleIcon,
    title: "Phone & WhatsApp",
    description: "Awaiting an approved company number.",
  },
  {
    icon: CalendarClockIcon,
    title: "Meeting scheduler",
    description: "Awaiting an approved Calendly or scheduling URL.",
  },
  {
    icon: MapIcon,
    title: "Google Maps",
    description: "Awaiting an approved embed configuration.",
  },
  {
    icon: Share2Icon,
    title: "Social media",
    description: "Awaiting verified company profile URLs.",
  },
]

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Let’s start with the business objective."
        description="Tell us about the platform, process, integration, application, or operational challenge you are working through."
      />

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">
              Connect with NM Global
            </h2>
            <p className="mt-4 max-w-xl leading-7 text-muted-foreground">
              Share the current environment and desired outcome. We will route
              the conversation to the right platform, engineering, or support
              specialist.
            </p>

            <div className="mt-8 grid gap-4">
              {contactMethods.map((method) => (
                <Card key={method.title}>
                  <CardHeader className="p-5">
                    <div className="flex gap-4">
                      <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-secondary text-secondary-foreground">
                        <method.icon className="size-5" />
                      </span>
                      <div>
                        <CardTitle>{method.title}</CardTitle>
                        <CardDescription className="mt-1">
                          {method.description}
                        </CardDescription>
                        <div className="mt-3 text-sm">{method.content}</div>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>

          <Card className="rounded-3xl">
            <CardHeader className="p-7 md:p-9">
              <CardTitle className="text-3xl">Tell us what you need</CardTitle>
              <CardDescription className="text-base leading-7">
                Fields validate locally. Nothing is transmitted until a secure
                submission service is configured.
              </CardDescription>
            </CardHeader>
            <CardContent className="px-7 pb-9 md:px-9">
              <ContactForm />
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="border-y bg-muted/40">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-semibold tracking-tight">
              Additional contact options
            </h2>
            <p className="mt-4 leading-7 text-muted-foreground">
              These interfaces are ready for configuration but are not linked
              to unverified destinations.
            </p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {pendingIntegrations.map((item) => (
              <Card key={item.title}>
                <CardHeader>
                  <item.icon className="mb-3 size-5 text-primary" />
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription className="leading-6">
                    {item.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          <Alert className="mt-8">
            <MapIcon />
            <AlertTitle>Map and booking embeds are intentionally inactive</AlertTitle>
            <AlertDescription>
              Activating them requires verified URLs and a privacy review
              because third-party embeds may store cookies or process visitor
              data.
            </AlertDescription>
          </Alert>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-20 md:px-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Enterprise insights</CardTitle>
            <CardDescription>
              Newsletter collection is prepared but remains disconnected until
              an approved email platform is configured.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <NewsletterForm />
          </CardContent>
        </Card>
      </section>
    </>
  )
}
