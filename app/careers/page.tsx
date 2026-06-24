import type { Metadata } from "next"
import {
  BriefcaseBusinessIcon,
  CheckIcon,
  GraduationCapIcon,
  HeartHandshakeIcon,
  LaptopIcon,
} from "lucide-react"

import { GoogleFormEmbed } from "@/components/GoogleFormEmbed"
import { PageHero } from "@/components/PageHero"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
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
import {
  careerGroups,
  employeeBenefits,
  graduateProgram,
  internshipProgram,
} from "@/content/requirements"

export const metadata: Metadata = {
  title: "Careers | NM Global Technologies",
  description:
    "Explore professional role categories, graduate opportunities, internships, and benefits at NM Global Technologies.",
}

export default function CareersPage() {
  return (
    <>
      <PageHero
        title="Join the team building the future of enterprise technology."
        description="Work with ERP, cloud, software engineering, AI, and digital transformation specialists solving practical business challenges."
      />

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <Alert className="mb-10">
          <BriefcaseBusinessIcon />
          <AlertTitle>Role categories, not confirmed vacancies</AlertTitle>
          <AlertDescription>
            The positions below describe recruitment areas from the approved
            requirements. Availability must be confirmed directly with NM
            Global before applying.
          </AlertDescription>
        </Alert>

        <Tabs defaultValue="positions">
          <TabsList
            variant="line"
            className="w-full justify-start overflow-x-auto border-b pb-3"
          >
            <TabsTrigger value="positions">Professional Roles</TabsTrigger>
            <TabsTrigger value="graduate">Graduate Program</TabsTrigger>
            <TabsTrigger value="internships">Internships</TabsTrigger>
            <TabsTrigger value="benefits">Benefits</TabsTrigger>
          </TabsList>

          <TabsContent value="positions" className="pt-10">
            <div className="grid gap-5 md:grid-cols-2">
              {careerGroups.map((group) => (
                <Card key={group.title}>
                  <CardHeader>
                    <CardTitle className="text-xl">{group.title}</CardTitle>
                    <CardDescription>
                      Professional role categories for future recruitment.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="flex flex-col gap-3">
                      {group.roles.map((role) => (
                        <li
                          key={role}
                          className="flex items-center gap-2 text-muted-foreground"
                        >
                          <CheckIcon className="size-4 text-primary" />
                          {role}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="graduate" className="pt-10">
            <ProgramPanel
              icon={GraduationCapIcon}
              title="Graduate Trainee Program"
              description="Early-career development across enterprise technology disciplines."
              groups={[
                ["Program areas", graduateProgram.areas],
                ["Eligibility", graduateProgram.eligibility],
              ]}
            />
          </TabsContent>

          <TabsContent value="internships" className="pt-10">
            <ProgramPanel
              icon={LaptopIcon}
              title="Internship Program"
              description="Structured exposure to consulting, engineering, automation, analysis, and digital marketing."
              groups={[
                ["Tracks", internshipProgram.tracks],
                ["Duration", internshipProgram.durations],
              ]}
            />
          </TabsContent>

          <TabsContent value="benefits" className="pt-10">
            <ProgramPanel
              icon={HeartHandshakeIcon}
              title="Employee Benefits"
              description="The benefit categories defined in the requirements, subject to final employment terms."
              groups={[["Benefits", employeeBenefits]]}
            />
          </TabsContent>
        </Tabs>
      </section>

      <section className="border-y bg-muted/40">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:px-8 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">
              Prepare an application
            </h2>
            <p className="mt-4 leading-7 text-muted-foreground">
              Submit your career details through the NM Global job application
              form.
              You can also contact{" "}
              <a
                href="mailto:hr@nmglobaltech.com"
                className="font-medium text-primary underline"
              >
                hr@nmglobaltech.com
              </a>
              .
            </p>
          </div>
          <Card>
            <CardContent className="p-6 md:p-8">
              <GoogleFormEmbed
                title="NM Global job application"
                description="Use this form to submit your profile for professional roles, graduate programs, or internships."
                embedUrl="https://docs.google.com/forms/d/e/1FAIpQLSexaoRmD6jLxFgA31Bw0YMqVq_ILoCI_qcHbM42p5pkXXrSGw/viewform?embedded=true"
                openUrl="https://docs.google.com/forms/d/e/1FAIpQLSexaoRmD6jLxFgA31Bw0YMqVq_ILoCI_qcHbM42p5pkXXrSGw/viewform?usp=publish-editor"
                mode="link-card"
                openLabel="Open job application form"
                note="The job application form opens directly in Google Forms so candidates get the complete application experience without the embedded preview limitation."
              />
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  )
}

function ProgramPanel({
  icon: Icon,
  title,
  description,
  groups,
}: {
  icon: typeof GraduationCapIcon
  title: string
  description: string
  groups: Array<[string, string[]]>
}) {
  return (
    <Card>
      <CardHeader className="p-7">
        <Icon className="mb-4 size-8 text-primary" />
        <CardTitle className="text-3xl">{title}</CardTitle>
        <CardDescription className="text-base leading-7">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-8 px-7 pb-8 md:grid-cols-2">
        {groups.map(([label, items]) => (
          <div key={label}>
            <h3 className="font-semibold">{label}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {items.map((item) => (
                <Badge key={item} variant="secondary">
                  {item}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
