"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, FolderIcon, StickyNoteIcon as NoteIcon, Settings } from "lucide-react"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"

export default function Navbar() {
  const pathname = usePathname()

  const navItems = [
    { href: "/", label: "Inicio", icon: Home },
    { href: "/categories", label: "Categorías", icon: FolderIcon },
    { href: "/notes", label: "Notas", icon: NoteIcon },
    { href: "/settings", label: "Configuración", icon: Settings },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold sm:inline-block text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/70">
              JG-NOTES
            </span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "transition-colors hover:text-foreground/80 relative group",
                  pathname === item.href ? "text-primary font-semibold" : "text-foreground/60",
                )}
              >
                {item.label}
                {pathname === item.href && (
                  <span className="absolute -bottom-[21px] left-0 right-0 h-[2px] bg-primary" />
                )}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <nav className="flex items-center md:hidden">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "inline-flex items-center justify-center rounded-md p-2.5 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
                    isActive ? "bg-primary/10 text-primary" : "text-muted-foreground",
                  )}
                >
                  <Icon className="h-5 w-5" />
                  <span className="sr-only">{item.label}</span>
                </Link>
              )
            })}
          </nav>

          <Badge variant="outline" className="hidden md:flex bg-primary/10 text-primary">
            JG-NOTES v1.0
          </Badge>
        </div>
      </div>
    </header>
  )
}

