const steps = [
  {
    number: "01",
    title: "Elige tu plan",
    description: "Cuéntanos sobre tu perro: peso, edad, raza y nivel de actividad",
  },
  {
    number: "02",
    title: "Recibe en casa",
    description: "Te enviamos las porciones perfectas directamente a tu puerta.",
  },
  {
    number: "03",
    title: "Sirve y disfruta",
    description: "Abre, sirve y agrega agua tibia... Observa la felicidad de tu mascota en cada bocado.",
  },
]

export function HowItWorks() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 md:py-28">
      <div className="mx-auto mb-14 max-w-2xl text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
          Cómo funciona
        </p>
        <h2 className="font-heading text-3xl font-semibold tracking-tight text-balance md:text-4xl">
          Alimentación saludable en 3 simples pasos
        </h2>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {steps.map((step) => (
          <div
            key={step.number}
            className="relative flex flex-col gap-4 rounded-3xl border border-border bg-card p-8"
          >
            <span className="font-heading text-5xl font-semibold text-secondary/70">
              {step.number}
            </span>
            <h3 className="font-heading text-xl font-semibold">{step.title}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
