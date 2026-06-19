"use client"

import { useState } from "react"
import { Menu, X, PawPrint } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { label: "Producto", href: "#producto" },
  { label: "Beneficios", href: "#beneficios" },
  { label: "Ingredientes", href: "#ingredientes" },
  { label: "Opiniones", href: "#opiniones" },
  { label: "Precios", href: "#precios" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4">
        <a href="#inicio" className="flex items-center gap-2">
          <span className="flex size-12 items-center justify-center rounded-full">
            <img
              src="/logo.PNG"
              alt="Ultra K9"
              className="size-10 object-contain"
            />
          </span>
          <span className="font-heading text-xl font-semibold tracking-tight">Ultra</span>
          <span className="font-heading text-xl font-semibold tracking-tight text-secondary">K9</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[18px] font-medium text-muted-foreground transition-colors hover:text-foreground hover:bg-accent/10 rounded-lg px-3 py-2"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button render={<a href="#precios" />} nativeButton={false} className="rounded-full">
            Comprar ahora
          </Button>
        </div>

        <button
          type="button"
          aria-label="Abrir menú"
          className="flex size-12 items-center justify-center rounded-full text-foreground md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border/60 bg-background md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <Button
              render={<a href="#precios" onClick={() => setOpen(false)} />}
              nativeButton={false}
              className="mt-2 rounded-full"
            >
              Comprar ahora
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
