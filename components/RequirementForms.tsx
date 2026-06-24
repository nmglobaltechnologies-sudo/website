"use client"

import { useState, type FormEvent } from "react"
import { CircleAlertIcon, SendIcon } from "lucide-react"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
  NativeSelect,
  NativeSelectOption,
} from "@/components/ui/native-select"
import { Textarea } from "@/components/ui/textarea"

type FormStatus = "idle" | "not-configured"

function useLocalForm() {
  const [status, setStatus] = useState<FormStatus>("idle")

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget

    if (!form.reportValidity()) return
    setStatus("not-configured")
  }

  return { status, handleSubmit }
}

function ConfigurationNotice({
  email = "support@nmglobaltech.com",
}: {
  email?: string
}) {
  return (
    <Alert>
      <CircleAlertIcon />
      <AlertTitle>Submission is not connected yet</AlertTitle>
      <AlertDescription>
        No information was sent or uploaded. Please email the details to{" "}
        <a
          className="font-medium text-primary underline"
          href={`mailto:${email}`}
        >
          {email}
        </a>{" "}
        until a secure submission destination is configured.
      </AlertDescription>
    </Alert>
  )
}

export function ContactForm() {
  const { status, handleSubmit } = useLocalForm()

  return (
    <form onSubmit={handleSubmit} noValidate={false}>
      <FieldGroup>
        <div className="grid gap-5 md:grid-cols-2">
          <Field>
            <FieldLabel htmlFor="contact-name">Name</FieldLabel>
            <Input id="contact-name" name="name" autoComplete="name" required />
          </Field>
          <Field>
            <FieldLabel htmlFor="contact-email">Email</FieldLabel>
            <Input
              id="contact-email"
              name="email"
              type="email"
              autoComplete="email"
              required
            />
          </Field>
          <Field>
            <FieldLabel htmlFor="contact-company">Company</FieldLabel>
            <Input
              id="contact-company"
              name="company"
              autoComplete="organization"
              required
            />
          </Field>
          <Field>
            <FieldLabel htmlFor="contact-phone">Phone</FieldLabel>
            <Input
              id="contact-phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              required
            />
          </Field>
        </div>

        <Field>
          <FieldLabel htmlFor="contact-service">
            Service interested in
          </FieldLabel>
          <NativeSelect id="contact-service" name="service" required defaultValue="">
            <NativeSelectOption value="" disabled>
              Select a service
            </NativeSelectOption>
            <NativeSelectOption value="erp">ERP consulting</NativeSelectOption>
            <NativeSelectOption value="software">
              Custom software development
            </NativeSelectOption>
            <NativeSelectOption value="cloud">
              Cloud and infrastructure
            </NativeSelectOption>
            <NativeSelectOption value="ai">
              AI and automation
            </NativeSelectOption>
            <NativeSelectOption value="managed">
              Managed services
            </NativeSelectOption>
          </NativeSelect>
        </Field>

        <Field>
          <FieldLabel htmlFor="contact-message">Message</FieldLabel>
          <Textarea
            id="contact-message"
            name="message"
            placeholder="Describe the current environment, business objective, and target timeline."
            required
            minLength={20}
          />
          <FieldDescription>Minimum 20 characters.</FieldDescription>
        </Field>

        {status === "not-configured" ? <ConfigurationNotice /> : null}

        <Button type="submit" size="lg" className="w-fit">
          Prepare inquiry
          <SendIcon data-icon="inline-end" />
        </Button>
      </FieldGroup>
    </form>
  )
}

export function CareerApplicationForm() {
  const { status, handleSubmit } = useLocalForm()

  return (
    <form onSubmit={handleSubmit}>
      <FieldGroup>
        <div className="grid gap-5 md:grid-cols-2">
          <Field>
            <FieldLabel htmlFor="career-name">Name</FieldLabel>
            <Input id="career-name" name="name" autoComplete="name" required />
          </Field>
          <Field>
            <FieldLabel htmlFor="career-email">Email</FieldLabel>
            <Input
              id="career-email"
              name="email"
              type="email"
              autoComplete="email"
              required
            />
          </Field>
          <Field>
            <FieldLabel htmlFor="career-phone">Phone</FieldLabel>
            <Input
              id="career-phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              required
            />
          </Field>
          <Field>
            <FieldLabel htmlFor="career-position">
              Position applying for
            </FieldLabel>
            <Input id="career-position" name="position" required />
          </Field>
          <Field>
            <FieldLabel htmlFor="career-experience">
              Experience
            </FieldLabel>
            <Input
              id="career-experience"
              name="experience"
              placeholder="Example: 5 years"
              required
            />
          </Field>
          <Field>
            <FieldLabel htmlFor="career-location">Location</FieldLabel>
            <Input
              id="career-location"
              name="location"
              autoComplete="address-level2"
              required
            />
          </Field>
        </div>

        <Field>
          <FieldLabel htmlFor="career-linkedin">
            LinkedIn profile
          </FieldLabel>
          <Input
            id="career-linkedin"
            name="linkedin"
            type="url"
            placeholder="https://www.linkedin.com/in/..."
          />
        </Field>

        <Field>
          <FieldLabel htmlFor="career-resume">Resume</FieldLabel>
          <Input
            id="career-resume"
            name="resume"
            type="file"
            accept=".pdf,.doc,.docx"
            required
          />
          <FieldDescription>
            Accepted formats: PDF, DOC, or DOCX. The file remains on your
            device because uploads are not configured.
          </FieldDescription>
        </Field>

        <Field>
          <FieldLabel htmlFor="career-message">Message</FieldLabel>
          <Textarea id="career-message" name="message" required minLength={20} />
        </Field>

        {status === "not-configured" ? (
          <ConfigurationNotice email="hr@nmglobaltech.com" />
        ) : null}

        <Button type="submit" size="lg" className="w-fit">
          Prepare application
          <SendIcon data-icon="inline-end" />
        </Button>
      </FieldGroup>
    </form>
  )
}

export function NewsletterForm() {
  const { status, handleSubmit } = useLocalForm()

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <Field>
        <FieldLabel htmlFor="newsletter-email">Work email</FieldLabel>
        <div className="flex flex-col gap-2 sm:flex-row">
          <Input
            id="newsletter-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="Business email"
            required
          />
          <Button type="submit">Subscribe</Button>
        </div>
      </Field>
      {status === "not-configured" ? (
        <FieldDescription role="status">
          Newsletter delivery is not configured, so no email was submitted.
        </FieldDescription>
      ) : null}
    </form>
  )
}
