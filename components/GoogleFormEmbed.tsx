import { ExternalLinkIcon } from "lucide-react"

import { Button } from "@/components/ui/button"

type GoogleFormEmbedProps = {
  title: string
  description: string
  embedUrl: string
  openUrl: string
  height?: number
  mode?: "embed" | "link-card"
  openLabel?: string
  note?: string
}

export function GoogleFormEmbed({
  title,
  description,
  embedUrl,
  openUrl,
  height = 760,
  mode = "embed",
  openLabel = "Open form in new tab",
  note,
}: GoogleFormEmbedProps) {
  return (
    <div className="flex flex-col gap-5">
      <div>
        <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
        <p className="mt-2 text-sm leading-6 text-muted-foreground">
          {description}
        </p>
      </div>

      {mode === "embed" ? (
        <div className="overflow-hidden rounded-2xl border bg-background">
          <iframe
            src={embedUrl}
            title={title}
            className="w-full"
            style={{ height }}
            loading="lazy"
          >
            Loading...
          </iframe>
        </div>
      ) : (
        <div className="rounded-2xl border bg-gradient-to-br from-primary/10 via-background to-secondary/60 p-6">
          <p className="max-w-2xl text-sm leading-6 text-muted-foreground">
            {note ??
              "This Google Form opens in a separate tab for a smoother submission experience."}
          </p>
          <Button
            className="mt-5"
            nativeButton={false}
            render={<a href={openUrl} target="_blank" rel="noreferrer" />}
          >
            {openLabel}
            <ExternalLinkIcon data-icon="inline-end" />
          </Button>
        </div>
      )}

      {mode === "embed" ? (
        <Button
          nativeButton={false}
          render={<a href={openUrl} target="_blank" rel="noreferrer" />}
        >
          {openLabel}
          <ExternalLinkIcon data-icon="inline-end" />
        </Button>
      ) : null}
    </div>
  )
}
