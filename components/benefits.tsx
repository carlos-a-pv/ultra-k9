import { Heart, Leaf, ShieldCheck, Sparkles } from "lucide-react"

const benefits = [
  {
    icon: Leaf,
    title: "Ingredientes naturales",
    description:
      "Salmón, trucha, verduras y frutas seleccionadas. Sin colorantes ni conservantes artificiales.",
  },
  {
    icon: Heart,
    title: "Digestión saludable",
    description:
      "Fórmula equilibrada que promueve una digestión saludable, mejora el aprovechamiento de los nutrientes.",
  },
  {
    icon: ShieldCheck,
    title: "Aprobado por veterinarios",
    description:
      "Cada receta está formulada y validada por especialistas en nutrición canina.",
  },
  {
    icon: Sparkles,
    title: "Pelaje brillante",
    description:
      "Rico en Omega 3 y 6 para una piel sana y un pelaje suave y radiante.",
  },
]

export function Benefits() {
  return (
    <section id="beneficios" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
      <div className="mx-auto mb-14 max-w-2xl text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
          Por qué 
          <span className="text-accent"> Ultra</span> 
          <span className="text-secondary">K9</span> 
        </p>
        <h2 className="font-heading text-3xl font-semibold tracking-tight text-balance md:text-4xl">
          Todo lo que tu perro necesita en cada porción
        </h2>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {benefits.map((b) => (
          <div
            key={b.title}
            className="flex flex-col gap-4 rounded-3xl border border-border bg-card p-6 transition-shadow hover:shadow-md"
          >
            <span className="flex size-12 items-center justify-center rounded-2xl bg-secondary text-secondary-foreground">
              <b.icon className="size-6" />
            </span>
            <h3 className="font-heading text-lg font-semibold">{b.title}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {b.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
