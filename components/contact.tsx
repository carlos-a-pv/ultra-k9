"use client"

import type React from "react"
import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contacto" className="bg-muted/40 py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-2">
        <div className="relative hidden md:block">
          <div className="absolute -right-6 -top-6 size-40 rounded-full bg-accent/50 blur-2xl" aria-hidden="true" />
          <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card shadow-sm">
            <Image
              src="/dog2.jpeg"
              alt="Dueño alimentando a su perro en casa"
              width={600}
              height={680}
              className="h-auto max-h-[560px] w-full object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
              Contacto
            </p>
            <h2 className="font-heading text-3xl font-semibold tracking-tight text-balance md:text-4xl">
              ¿Tienes preguntas? Hablemos
            </h2>
            <p className="mt-3 text-lg leading-relaxed text-muted-foreground text-pretty">
              Déjanos tus datos y nuestro equipo de nutrición te ayudará a
              elegir la mejor opción para tu perro.
            </p>
          </div>

          {submitted ? (
            <div className="rounded-3xl border border-secondary bg-secondary/40 p-8 text-center">
              <p className="font-heading text-xl font-semibold text-secondary-foreground">
                ¡Gracias por escribirnos!
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Te responderemos muy pronto a tu correo.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-sm font-medium">
                    Nombre
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Tu nombre"
                    className="rounded-xl border border-border bg-card px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-ring/30"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-sm font-medium">
                    Correo
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="tu@correo.com"
                    className="rounded-xl border border-border bg-card px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-ring/30"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-sm font-medium">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  placeholder="Cuéntanos sobre tu perro..."
                  className="resize-none rounded-xl border border-border bg-card px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-ring/30"
                />
              </div>
              <Button type="submit" size="lg" className="rounded-full">
                Enviar mensaje
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
