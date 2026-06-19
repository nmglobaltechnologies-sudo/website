import {
  ClockIcon,
  MailIcon,
  MapPinIcon,
  MessageSquareTextIcon,
} from "lucide-react"

import { PageHero } from "@/components/PageHero"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const contactMethods = [
  {
    icon: MailIcon,
    title: "Email",
    description: "Send your requirements or request a consultation.",
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
      <p className="text-muted-foreground">Monday–Friday, 9:00 AM–6:00 PM</p>
    ),
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
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">
              Connect with NM Global
            </h2>
            <p className="mt-4 max-w-xl leading-7 text-muted-foreground">
              Share the current environment and the outcome you need. We will
              route the conversation to the right platform, engineering, or
              support specialist.
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

          <Card className="rounded-3xl bg-primary text-primary-foreground">
            <CardHeader className="p-7 md:p-10">
              <span className="mb-5 flex size-12 items-center justify-center rounded-2xl bg-primary-foreground/12">
                <MessageSquareTextIcon className="size-6" />
              </span>
              <CardTitle className="text-3xl">
                A useful first message includes:
              </CardTitle>
              <CardDescription className="text-base leading-7 text-primary-foreground/70">
                This context helps us prepare the right specialists before the
                first discussion.
              </CardDescription>
            </CardHeader>
            <div className="grid gap-4 px-7 pb-9 md:px-10">
              {[
                "The business process or system in scope",
                "Your current ERP, cloud, or application environment",
                "Important integrations or data dependencies",
                "The target timeline and desired outcome",
              ].map((item, index) => (
                <div
                  key={item}
                  className="flex items-start gap-4 rounded-2xl bg-primary-foreground/8 p-4"
                >
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-primary-foreground text-xs font-semibold text-primary">
                    {index + 1}
                  </span>
                  <p className="pt-0.5 text-sm leading-6">{item}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>
    </>
  )
}
