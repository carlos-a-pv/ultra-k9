import { Star } from "lucide-react"

const testimonials = [
  {
    quote:
      "Mi labrador era muy quisquilloso con la comida. Desde que probamos Ultra K9, devora su plato y su pelaje nunca había brillado tanto.",
    name: "María González",
    role: "Mamá de Toby",
  },
  {
    quote:
      "Los problemas digestivos de mi perrita desaparecieron en dos semanas. Estoy increíblemente agradecida con esta marca.",
    name: "Carlos Ramírez",
    role: "Papá de Luna",
  },
  {
    quote:
      "Como veterinaria, recomiendo Ultra K9 a mis pacientes. Ingredientes transparentes y nutrición real. Excelente producto.",
    name: "Dra. Ana Torres",
    role: "Veterinaria",
  },
]

export function Testimonials() {
  return (
    <section id="opiniones" className="bg-accent py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            Opiniones
          </p>
          <h2 className="font-heading text-3xl font-semibold tracking-tight text-balance md:text-4xl text-popover">
            Miles de colas moviéndose de felicidad
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col gap-4 rounded-3xl border border-border bg-card p-7"
            >
              <div className="flex bg-secondary">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star
                    key={i}
                    className="size-4 fill-accent-foreground text-accent-foreground"
                  />
                ))}
              </div>
              <blockquote className="text-sm leading-relaxed text-foreground text-pretty">
                {`"${t.quote}"`}
              </blockquote>
              <figcaption className="mt-auto">
                <p className="font-heading text-base font-semibold">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
