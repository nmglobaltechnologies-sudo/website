import type { Metadata } from "next"

import { PageHero } from "@/components/PageHero"

export const metadata: Metadata = {
  title: "Cookie Policy | NM Global Technologies",
  description:
    "Information about cookies and third-party integrations on the NM Global Technologies website.",
}

export default function CookiePolicyPage() {
  return (
    <>
      <PageHero
        title="Cookie policy"
        description="How this website currently uses browser storage and what must change when analytics or third-party services are activated."
      />
      <article className="mx-auto max-w-3xl px-5 py-20 md:px-8">
        <div className="flex flex-col gap-10 leading-7 text-muted-foreground">
          <section>
            <h2 className="text-xl font-semibold text-foreground">
              Current website behavior
            </h2>
            <p className="mt-3">
              The current website does not use advertising cookies, analytics
              cookies, embedded maps, scheduling widgets, or newsletter
              tracking. The theme preference may be stored in the browser so
              the selected light or dark appearance can be restored.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-foreground">
              Third-party services
            </h2>
            <p className="mt-3">
              Google Maps, Calendly, analytics, social media widgets,
              newsletters, and similar services are not currently active.
              These providers may set cookies or process visitor data if they
              are enabled later.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-foreground">
              Future review requirement
            </h2>
            <p className="mt-3">
              This policy and the website’s consent controls must be reviewed
              before any analytics, advertising, embedded map, scheduling,
              social media, or newsletter integration is activated.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-foreground">
              Contact
            </h2>
            <p className="mt-3">
              Questions about this policy can be sent to{" "}
              <a
                href="mailto:support@nmglobal.com"
                className="font-medium text-primary underline"
              >
                support@nmglobal.com
              </a>
              .
            </p>
          </section>
        </div>
      </article>
    </>
  )
}
