import { createFileRoute } from "@tanstack/react-router";
import { Scissors, Phone, MapPin, Clock, Star, Menu } from "lucide-react";
import heroImg from "@/assets/hero-barbershop.jpg";
import aboutImg from "@/assets/about-family.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Fine Barbershop — Classic Cuts in Quakertown, PA" },
      {
        name: "description",
        content:
          "Family-owned barbershop in Quakertown, PA offering classic cuts, hot towel shaves, and beard work. Book your appointment today.",
      },
      { property: "og:title", content: "The Fine Barbershop — Quakertown, PA" },
      {
        property: "og:description",
        content:
          "Classic cuts, hot towel shaves, and timeless service in the heart of Quakertown.",
      },
    ],
  }),
  component: Index,
});

const PHONE = "(267) 371-7133";
const PHONE_HREF = "tel:+12673717133";

const services = [
  { name: "Signature Haircut", desc: "Consultation, cut, hot towel, and style.", price: "~$35" },
  { name: "Beard Trim & Shape", desc: "Precision shaping with hot lather finish.", price: "~$20" },
  { name: "Hot Towel Shave", desc: "Traditional straight-razor shave experience.", price: "~$40" },
  { name: "The Works", desc: "Haircut, beard trim, and hot towel shave.", price: "~$75" },
  { name: "Father & Son", desc: "Two classic cuts, side by side.", price: "~$55" },
  { name: "Buzz Cut", desc: "Clean, single-guard cut with neckline.", price: "~$20" },
];

const reviews = [
  {
    name: "Michael R.",
    text: "Best cut I've had in Bucks County. The hot towel shave is a ritual you don't want to miss.",
  },
  {
    name: "David K.",
    text: "Walked in a stranger, left feeling like family. These guys know their craft.",
  },
  {
    name: "Anthony P.",
    text: "Brought my eight-year-old for his first real haircut. He hasn't stopped talking about it.",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="absolute inset-x-0 top-0 z-30">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
          <a href="#top" className="flex items-center gap-2">
            <Scissors className="h-5 w-5 text-gold" />
            <span className="font-display text-lg font-bold tracking-wide">
              The Fine Barbershop
            </span>
          </a>
          <div className="hidden items-center gap-8 text-sm font-medium md:flex">
            <a href="#services" className="text-muted-foreground transition-colors hover:text-gold">Services</a>
            <a href="#about" className="text-muted-foreground transition-colors hover:text-gold">About</a>
            <a href="#reviews" className="text-muted-foreground transition-colors hover:text-gold">Reviews</a>
            <a href="#contact" className="text-muted-foreground transition-colors hover:text-gold">Contact</a>
          </div>
          <a
            href={PHONE_HREF}
            className="hidden rounded-md border border-gold/40 px-4 py-2 text-sm font-semibold text-gold transition-colors hover:bg-gold hover:text-primary-foreground sm:inline-flex"
          >
            Book Now
          </a>
          <a href="#contact" className="text-gold sm:hidden" aria-label="Open menu">
            <Menu className="h-6 w-6" />
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section id="top" className="relative min-h-[100svh] overflow-hidden">
        <img
          src={heroImg}
          alt="Interior of The Fine Barbershop"
          width={1600}
          height={1100}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-6 pt-32 pb-20">
          <span className="font-display text-sm uppercase tracking-[0.35em] text-gold">
            Est. Quakertown, PA
          </span>
          <h1 className="mt-6 max-w-3xl font-display text-5xl font-bold leading-[1.05] sm:text-6xl md:text-7xl lg:text-8xl">
            Sharp cuts.
            <br />
            <span className="text-gold">Timeless service.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
            A family-owned barbershop dedicated to the craft. Classic haircuts,
            traditional shaves, and a chair you'll want to come back to.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-2 rounded-md bg-gold px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02]"
            >
              <Phone className="h-4 w-4" /> Book by Phone
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-md border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-gold hover:text-gold"
            >
              View Services
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="border-t border-border/60 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <span className="font-display text-sm uppercase tracking-[0.35em] text-gold">
              The Menu
            </span>
            <h2 className="mt-4 text-4xl font-bold sm:text-5xl">Services & Pricing</h2>
            <p className="mt-4 text-muted-foreground">
              Walk-ins welcome when chairs are open. Reservations recommended on
              Fridays and Saturdays.
            </p>
          </div>

          <div className="mt-14 grid gap-px overflow-hidden rounded-xl border border-border/60 bg-border/60 md:grid-cols-2">
            {services.map((s) => (
              <div
                key={s.name}
                className="grid grid-cols-[minmax(0,1fr)_auto] gap-6 bg-card p-8 transition-colors hover:bg-secondary"
              >
                <div className="min-w-0">
                  <h3 className="truncate text-xl font-semibold">{s.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                </div>
                <div className="shrink-0 font-display text-2xl font-bold text-gold">
                  {s.price}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="border-t border-border/60 py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
          <div className="relative">
            <img
              src={aboutImg}
              alt="The father and son barber team"
              width={1200}
              height={1400}
              loading="lazy"
              className="aspect-[4/5] w-full rounded-xl object-cover"
            />
            <div className="absolute -bottom-6 -right-6 hidden rounded-xl border border-gold/30 bg-card px-6 py-4 sm:block">
              <div className="font-display text-3xl font-bold text-gold">25+</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">
                Years of craft
              </div>
            </div>
          </div>
          <div>
            <span className="font-display text-sm uppercase tracking-[0.35em] text-gold">
              Our Story
            </span>
            <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
              A family business, sharpened by tradition.
            </h2>
            <p className="mt-6 text-muted-foreground">
              The Fine Barbershop opened its doors in 1998 with one goal:
              bring back the classic barbershop experience that Quakertown
              grew up with. Our team carries on that tradition, with decades
              of combined craft sharpened right here in the community.
            </p>
            <p className="mt-4 text-muted-foreground">
              We're not a chain. We're not a salon. We're a neighborhood shop
              that takes pride in every neckline, every fade, and every shave —
              for grandfathers, fathers, sons, and the kid getting his first
              real cut.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-6 border-t border-border pt-8">
              <div>
                <div className="font-display text-2xl font-bold text-gold">1998</div>
                <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                  Founded
                </div>
              </div>
              <div>
                <div className="font-display text-2xl font-bold text-gold">2</div>
                <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                  Generations
                </div>
              </div>
              <div>
                <div className="font-display text-2xl font-bold text-gold">10k+</div>
                <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                  Cuts a year
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="border-t border-border/60 bg-card/40 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <span className="font-display text-sm uppercase tracking-[0.35em] text-gold">
              Word on the Street
            </span>
            <h2 className="mt-4 text-4xl font-bold sm:text-5xl">What our regulars say</h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {reviews.map((r) => (
              <figure
                key={r.name}
                className="flex h-full flex-col rounded-xl border border-border bg-card p-8"
              >
                <div className="flex gap-1 text-gold">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Star key={i} className="h-4 w-4 fill-gold" />
                  ))}
                </div>
                <blockquote className="mt-6 flex-1 text-base leading-relaxed text-foreground/90">
                  "{r.text}"
                </blockquote>
                <figcaption className="mt-6 font-display text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  — {r.name}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="border-t border-border/60 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-2xl border border-gold/30 bg-gradient-to-br from-card to-background p-10 sm:p-16">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <span className="font-display text-sm uppercase tracking-[0.35em] text-gold">
                  Book Your Chair
                </span>
                <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
                  Give us a call.
                </h2>
                <p className="mt-4 text-muted-foreground">
                  The easiest way to book is by phone. We'll get you in with
                  the right barber at the right time.
                </p>
                <a
                  href={PHONE_HREF}
                  className="mt-8 inline-flex items-center gap-3 font-display text-3xl font-bold text-gold transition-colors hover:text-gold-soft sm:text-4xl"
                >
                  <Phone className="h-7 w-7" />
                  {PHONE}
                </a>
              </div>
              <div className="grid gap-6">
                <div className="flex items-start gap-4 rounded-xl border border-border bg-card/60 p-5">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                  <div className="min-w-0">
                    <div className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                      Visit
                    </div>
                    <div className="mt-1 font-medium">
                      1408-5 W Broad St
                      <br />
                      Quakertown, PA 18951
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4 rounded-xl border border-border bg-card/60 p-5">
                  <Clock className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                  <div className="min-w-0">
                    <div className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                      Hours
                    </div>
                    <dl className="mt-2 space-y-1 text-sm">
                      <div className="flex justify-between gap-6">
                        <dt className="text-muted-foreground">Monday</dt>
                        <dd>11:00 AM – 7:00 PM</dd>
                      </div>
                      <div className="flex justify-between gap-6">
                        <dt className="text-muted-foreground">Tue – Fri</dt>
                        <dd>8:00 AM – 7:00 PM</dd>
                      </div>
                      <div className="flex justify-between gap-6">
                        <dt className="text-muted-foreground">Saturday</dt>
                        <dd>8:00 AM – 4:00 PM</dd>
                      </div>
                      <div className="flex justify-between gap-6">
                        <dt className="text-muted-foreground">Sunday</dt>
                        <dd>Closed</dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border/60 py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-sm text-muted-foreground sm:flex-row">
          <div className="flex items-center gap-2">
            <Scissors className="h-4 w-4 text-gold" />
            <span className="font-display font-semibold text-foreground">
              The Fine Barbershop
            </span>
          </div>
          <div>© {new Date().getFullYear()} The Fine Barbershop · Quakertown, PA</div>
        </div>
      </footer>
    </div>
  );
}
