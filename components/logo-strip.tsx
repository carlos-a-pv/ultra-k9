const logos = ["VetCare", "PetLife", "DogMagazine", "NaturalPet", "AnimalPlus"]

export function LogoStrip() {
  return (
    <section className="border-y border-border/60 bg-muted/40">
      <div className="mx-auto max-w-6xl px-5 py-8">
        <p className="mb-6 text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          Recomendado por expertos en nutrición animal
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {logos.map((logo) => (
            <span
              key={logo}
              className="font-heading text-xl font-semibold text-muted-foreground/70"
            >
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
