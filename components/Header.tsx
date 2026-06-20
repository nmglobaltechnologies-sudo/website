"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ArrowRightIcon, MenuIcon } from "lucide-react"

import { ThemeToggle } from "@/components/ThemeToggle"
import { Brand } from "@/components/Brand"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import { navigation, type NavigationEntry } from "@/content/site"

function isGroup(
  entry: NavigationEntry
): entry is Extract<NavigationEntry, { items: unknown }> {
  return "items" in entry
}

export function Header() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-40 border-b bg-background/88 backdrop-blur-xl">
      <div className="mx-auto flex h-18 max-w-7xl items-center gap-4 px-5 md:px-8">
        <Link href="/" className="shrink-0" aria-label="NM Global home">
          <Brand compact />
        </Link>

        <nav
          aria-label="Primary navigation"
          className="ml-auto hidden items-center xl:flex"
        >
          <NavigationMenu>
            <NavigationMenuList>
              {navigation.map((entry) => {
                if (isGroup(entry)) {
                  const active = entry.items.some((item) =>
                    pathname.startsWith(item.href)
                  )

                  return (
                    <NavigationMenuItem key={entry.label}>
                      <NavigationMenuTrigger
                        className={cn(
                          "text-muted-foreground",
                          active && "bg-muted text-foreground"
                        )}
                      >
                        {entry.label}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className="w-80 p-2">
                        <div className="flex flex-col gap-1">
                          {entry.items.map((item) => (
                            <NavigationMenuLink
                              key={item.href}
                              render={<Link href={item.href} />}
                              active={pathname.startsWith(item.href)}
                              className="flex-col items-start gap-1 p-3"
                            >
                              <span className="font-medium">{item.label}</span>
                              <span className="text-xs leading-5 text-muted-foreground">
                                {item.description}
                              </span>
                            </NavigationMenuLink>
                          ))}
                        </div>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  )
                }

                const active =
                  entry.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(entry.href)

                return (
                  <NavigationMenuItem key={entry.href}>
                    <NavigationMenuLink
                      render={<Link href={entry.href} />}
                      active={active}
                      className={cn(
                        "px-2.5 py-2 text-muted-foreground",
                        active && "bg-muted text-foreground"
                      )}
                    >
                      {entry.label}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                )
              })}
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        <div className="ml-auto flex items-center gap-2 lg:ml-2">
          <ThemeToggle />
          <Button
            render={<Link href="/contact" />}
            nativeButton={false}
            className="hidden md:inline-flex"
          >
            Start a conversation
            <ArrowRightIcon data-icon="inline-end" />
          </Button>

          <Sheet>
            <SheetTrigger
              render={
                <Button
                  variant="outline"
                  size="icon"
                  className="xl:hidden"
                  aria-label="Open navigation"
                />
              }
            >
              <MenuIcon />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>NM Global Technologies</SheetTitle>
                <SheetDescription>
                  Enterprise software and digital transformation services.
                </SheetDescription>
              </SheetHeader>
              <nav
                aria-label="Mobile navigation"
                className="flex flex-col gap-1 px-4"
              >
                {navigation.map((entry) =>
                  isGroup(entry) ? (
                    <div key={entry.label} className="flex flex-col gap-1">
                      <p className="px-3 pt-3 text-xs font-semibold tracking-[0.16em] text-muted-foreground uppercase">
                        {entry.label}
                      </p>
                      {entry.items.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className={cn(
                            "rounded-lg px-3 py-2.5 text-base font-medium text-muted-foreground hover:bg-muted hover:text-foreground",
                            pathname.startsWith(item.href) &&
                              "bg-muted text-foreground"
                          )}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <Link
                      key={entry.href}
                      href={entry.href}
                      className={cn(
                        "rounded-lg px-3 py-2.5 text-base font-medium text-muted-foreground hover:bg-muted hover:text-foreground",
                        (entry.href === "/"
                          ? pathname === "/"
                          : pathname.startsWith(entry.href)) &&
                          "bg-muted text-foreground"
                      )}
                    >
                      {entry.label}
                    </Link>
                  )
                )}
              </nav>
              <div className="mt-auto p-4">
                <Button
                  render={<Link href="/contact" />}
                  nativeButton={false}
                  size="lg"
                  className="w-full"
                >
                  Start a conversation
                  <ArrowRightIcon data-icon="inline-end" />
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
