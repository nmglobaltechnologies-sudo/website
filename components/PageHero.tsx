import type { ReactNode } from "react"

type PageHeroProps = {
  title: string
  description: string
  children?: ReactNode
}

export function PageHero({ title, description, children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b bg-muted/35">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,color-mix(in_oklch,var(--accent),transparent_35%),transparent_35%),radial-gradient(circle_at_85%_30%,color-mix(in_oklch,var(--secondary),transparent_20%),transparent_30%)]" />
      <div className="relative mx-auto flex max-w-7xl flex-col gap-6 px-5 py-20 md:px-8 md:py-28">
        <div className="max-w-4xl">
          <h1 className="text-balance text-4xl font-semibold tracking-tight md:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-3xl text-pretty text-lg leading-8 text-muted-foreground md:text-xl">
            {description}
          </p>
        </div>
        {children}
      </div>
    </section>
  )
}

