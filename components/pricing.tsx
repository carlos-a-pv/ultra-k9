import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

const plans = [
  {
    name: "Prueba",
    price: "90.000",
    period: "/ pack",
    description: "Perfecto para conocer a Ultra K9.",
    features: ["7 porciones individuales", "Envío estándar"],
    highlighted: false,
  },
  {
    name: "Plan Mensual",
    price: "349.000",
    period: "/ mes",
    description: "La opción favorita de nuestros clientes.",
    features: [
      "30 porciones al mes",
      "Envío gratis a domicilio",
    ],
    highlighted: true,
  },
  {
    name: "Suscripción",
    price: "329.000",
    period: "/ mes",
    description: "Ideal para tu bolsillo.",
    features: [
      "30 porciones al mes",
      "Envío gratis prioritario",
      "Asesoría nutricional",
    ],
    highlighted: false,
  },
]

export function Pricing() {
  return (
    <section id="precios" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
      <div className="mx-auto mb-14 max-w-2xl text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
          Precios
        </p>
        <h2 className="font-heading text-3xl font-semibold tracking-tight text-balance md:text-4xl">
          Elige el plan ideal para tu compañero
        </h2>
      </div>

      <div className="grid items-start gap-6 md:grid-cols-3">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`flex flex-col gap-6 rounded-3xl border p-7 ${
              plan.highlighted
                ? "border-primary bg-card shadow-lg md:-translate-y-3"
                : "border-border bg-card"
            }`}
          >
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <h3 className="font-heading text-xl font-semibold">{plan.name}</h3>
                {plan.highlighted && (
                  <span className="rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                    Popular
                  </span>
                )}
              </div>
              <p className="text-sm text-muted-foreground">{plan.description}</p>
            </div>

            <div className="flex items-baseline gap-1">
              <span className="font-heading text-4xl font-semibold">${plan.price}</span>
              <span className="text-sm text-muted-foreground">{plan.period}</span>
            </div>

            <ul className="flex flex-col gap-3">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
                    <Check className="size-3.5" />
                  </span>
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>

            <Button
              render={<a href="#contacto" />}
              nativeButton={false}
              className="mt-auto w-full rounded-full"
              variant={plan.highlighted ? "default" : "outline"}
            >
              Elegir plan
            </Button>
          </div>
        ))}
      </div>
    </section>
  )
}
