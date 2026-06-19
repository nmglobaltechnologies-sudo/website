import Image from "next/image"

import { cn } from "@/lib/utils"

type BrandProps = {
  compact?: boolean
  className?: string
}

export function Brand({ compact = false, className }: BrandProps) {
  return (
    <span className={cn("inline-flex items-center gap-3", className)}>
      <span
        className={cn(
          "relative shrink-0 overflow-hidden rounded-full",
          compact ? "size-10" : "size-13"
        )}
      >
        <Image
          src="/images/logo.png"
          alt=""
          width={500}
          height={500}
          priority={compact}
          className={cn(
            "absolute max-w-none",
            compact
              ? "size-[126px] -translate-x-[10px] -translate-y-[41px]"
              : "size-[164px] -translate-x-[14px] -translate-y-[54px]"
          )}
        />
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-semibold tracking-[-0.035em] text-foreground",
            compact ? "text-lg" : "text-2xl"
          )}
        >
          NM Global
        </span>
        <span
          className={cn(
            "mt-1 font-medium tracking-[0.2em] text-muted-foreground uppercase",
            compact ? "text-[0.58rem]" : "text-[0.68rem]"
          )}
        >
          Technologies
        </span>
      </span>
    </span>
  )
}

