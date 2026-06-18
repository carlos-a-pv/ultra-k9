import Image from "next/image"
import { Star, PawPrint } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-2 md:py-24">
        <div className="flex flex-col items-start gap-6">
          <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-sm font-semibold text-secondary-foreground">
            <PawPrint className="size-4" />
            100% ingredientes naturales
          </span>

          <h1 className="font-heading text-4xl font-semibold leading-[1.05] tracking-tight text-balance md:text-6xl">
            Concetrado liofilizado que tu perro va a {" "}
            <span className="text-secondary">amar</span>
          </h1>

          <p className="max-w-md text-lg leading-relaxed text-muted-foreground text-pretty">
            Una formulación balanceada elaborada con salmón gourmet de alta calidad, libre de alérgenos, 
            conservantes y aditivos artificiales, que contribuye a la salud de la piel, favorece la digestión
            y mejora la calidad de vida de tu mascota.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button
              render={<a href="#precios" />}
              nativeButton={false}
              size="lg"
              className="rounded-full px-8 text-base"
            >
              Probar ahora
            </Button>
            <Button
              render={<a href="#ingredientes" />}
              nativeButton={false}
              size="lg"
              variant="outline"
              className="rounded-full border-border bg-transparent px-8 text-base"
            >
              Ver ingredientes
            </Button>
          </div>

          <div className="flex items-center gap-3 pt-2">
            <div className="flex">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} className="size-4 fill-accent-foreground text-accent-foreground" />
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">+12.000</span> perros felices
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -right-6 -top-6 size-40 rounded-full bg-accent/60 blur-2xl" aria-hidden="true" />
          <div className="absolute -bottom-8 -left-8 size-48 rounded-full bg-secondary/60 blur-2xl" aria-hidden="true" />
          <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card shadow-sm">
            <Image
              src="/dog.jpeg"
              alt="Perro feliz y saludable"
              width={540}
              height={340}
              className="h-full w-full object-cover"
              priority
            />
          </div>
          <div className="absolute -bottom-6 left-6 flex items-center gap-3 rounded-2xl border border-border bg-card px-4 py-3 shadow-md">
            <span className="flex size-10 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
              <PawPrint className="size-5" />
            </span>
            <div>
              <p className="text-sm font-semibold leading-tight">Aprobado por veterinarios</p>
              <p className="text-xs text-muted-foreground">Nutrición balanceada</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
