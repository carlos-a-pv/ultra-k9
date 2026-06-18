import { PawPrint, Mail, Phone, MapPin } from "lucide-react"

const footerLinks = [
  {
    title: "Producto",
    links: ["Recetas", "Ingredientes", "Planes", "Precios"],
  },
  {
    title: "Empresa",
    links: ["Sobre nosotros", "Blog", "Trabaja con nosotros", "Prensa"],
  },
  {
    title: "Ayuda",
    links: ["Preguntas frecuentes", "Envíos", "Contacto", "Devoluciones"],
  },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div className="flex flex-col gap-4">
            <a href="#inicio" className="flex items-center gap-2">
              <span className="flex size-9 items-center justify-center rounded-full bg-primary text-primary-foreground">
                 <img
                  src="/logo.png"
                  alt="Ultra K9"
                  className="size-10 object-contain"
                />
              </span>
              <span className="font-heading text-xl font-semibold">Ultra K9</span>
            </a>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              Concentrado liofilizado elaborado con salmón de alta calidad, rico en proteína, libre de conservantes y aditivos artificiales, diseñado para brindar una nutrición más natural y funcional a tu perro.
            </p>
            <div className="flex flex-col gap-2 pt-1">
              <a href="mailto:hola@ultrak9.com" className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground">
                <Mail className="size-4" />
                hola@ultrak9.com
              </a>
              <a href="tel:+10000000000" className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground">
                <Phone className="size-4" />
                +57 (321) 222-1234
              </a>
              <span className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="size-4" />
                Bogotá, CO
              </span>
            </div>
          </div>

          {footerLinks.map((col) => (
            <div key={col.title} className="flex flex-col gap-3">
              <h3 className="font-heading text-sm font-semibold">{col.title}</h3>
              <ul className="flex flex-col gap-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Ultra K9. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Privacidad
            </a>
            <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Términos
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
