import Image from "next/image"
import { Check } from "lucide-react"

const ingredients = [
  "Salmón y trucha",
  "Calabaza",
  "Arándanos",
  "Aceite de oliva extra virgen",
  "Sin conservantes, ni aditivos",
  "Sin azúcares añadidos",
]

export function Product() {
  return (
    <section id="producto" className="bg-muted/40 py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-2">
        <div className="relative order-2 md:order-1">
          <div className="absolute -left-6 top-1/2 size-48 -translate-y-1/2 rounded-full bg-accent/50 blur-3xl" aria-hidden="true" />
          <div className="relative overflow-hidden rounded-[2rem] shadow-sm">
            <Image
              src="/product.png"
              alt="Tazón con comida húmeda natural para perros"
              width={640}
              height={640}
              className="h-160 w-full object-cover"
              loading="eager"
            />
          </div>
        </div>

        <div className="order-1 flex flex-col items-start gap-6 md:order-2">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Nuestra receta
          </p>
          <h2 className="font-heading text-3xl font-semibold tracking-tight text-balance md:text-4xl">
            Ingredientes reales que puedes reconocer
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground text-pretty">
            Cocinamos al vapor para evitar altas temperaturas y así conservar todos los nutrientes.
          </p>

          <ul id="ingredientes" className="grid w-full gap-3 sm:grid-cols-2">
            {ingredients.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
                  <Check className="size-4" />
                </span>
                <span className="text-sm font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
