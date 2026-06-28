import { cn } from '@/lib/utils'

export function Logo({
  className,
  textClassName,
}: {
  className?: string
  textClassName?: string
}) {
  return (
    <div className={cn('flex items-center gap-2.5', className)}>
      <svg
        viewBox="0 0 32 32"
        className="h-7 w-7"
        fill="none"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16 2L29 25H3L16 2Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path
          d="M16 11L21.5 21H10.5L16 11Z"
          fill="currentColor"
        />
        <circle cx="16" cy="22" r="1.6" fill="currentColor" />
      </svg>
      <span
        className={cn(
          'font-heading text-lg font-semibold tracking-tight',
          textClassName,
        )}
      >
        TRINETRA
        <span className="font-normal text-muted-foreground"> AEROSPACE</span>
      </span>
    </div>
  )
}
