import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { Check, Leaf, MapPin, Phone, Ruler, Send, Shirt, Sparkles, Truck } from "lucide-react";
import colors from "@/assets/trousers-colors.jpg";
import denim from "@/assets/trousers-denim.jpg";
import socks from "@/assets/hempko-socks.png";
import rack from "@/assets/trousers-rack.jpg";
import textured from "@/assets/trousers-textured.jpg";
import waistband from "@/assets/trousers-waistband.jpg";

const features = [
  {
    icon: Leaf,
    title: "Naturally breathable",
    text: "Hemp-cotton fabric stays airy through warm days, commutes, and long hours on your feet.",
  },
  {
    icon: Shirt,
    title: "Easy daily fit",
    text: "Relaxed trousers with a clean drape, textured handfeel, and enough structure for everyday plans.",
  },
  {
    icon: Sparkles,
    title: "Made to repeat",
    text: "Neutral colors, soft waistband comfort, and styling that works with tees, shirts, and sandals.",
  },
];

const details = [
  { icon: Truck, label: "Delivery", value: "All over Nepal" },
  { icon: Ruler, label: "Sizes", value: "M, L, XL" },
  { icon: Check, label: "Price", value: "Rs. 1399" },
];

const socksDetails = [
  { icon: Truck, label: "Delivery", value: "All over Nepal" },
  { icon: Ruler, label: "Fit", value: "Ask for sizes" },
  { icon: Check, label: "Order", value: "WhatsApp inquiry" },
];

const gallery: Array<{ src: StaticImageData; alt: string; className?: string }> = [
  { src: textured, alt: "Close view of textured hemp trousers", className: "md:row-span-2" },
  { src: waistband, alt: "Hempko trouser waistband and drawstring" },
  { src: colors, alt: "Available Hempko trouser colors" },
  { src: rack, alt: "Hempko trousers hanging on a rack" },
];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:py-18">
          <div className="max-w-2xl">
            <p className="mb-5 inline-flex rounded-full border border-primary/20 bg-cream px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Hemp-cotton trousers
            </p>
            <h1 className="text-5xl font-semibold leading-[1.02] text-foreground sm:text-6xl lg:text-7xl">
              Natural comfort for Nepal weather.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-muted-foreground sm:text-lg">
              Breathable hemp-cotton trousers with an easy relaxed fit, soft textured finish,
              and everyday colors made to move from home to street.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#shop"
                className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-7 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
              >
                Shop Rs. 1399
              </Link>
              <a
                href="https://wa.me/9779709139565"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-border bg-cream px-7 text-sm font-semibold transition hover:border-primary hover:text-primary"
              >
                <Send className="h-4 w-4" />
                Order on WhatsApp
              </a>
            </div>
          </div>
          <div className="relative min-h-[520px]">
            <Image
              src={denim}
              alt="Model wearing Hempko hemp-cotton trousers"
              priority
              placeholder="blur"
              className="absolute inset-0 h-full w-full rounded-[2rem] object-cover shadow-2xl shadow-foreground/10"
            />
            <div className="absolute bottom-5 left-5 right-5 grid grid-cols-3 gap-3 rounded-2xl border border-white/45 bg-cream/90 p-3 text-center text-xs font-semibold backdrop-blur sm:text-sm">
              <span>Rs. 1399</span>
              <span>M · L · XL</span>
              <span>Nepal delivery</span>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="bg-cream">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, text }) => (
            <article key={title} className="rounded-lg border border-border/70 bg-background p-6">
              <Icon className="mb-5 h-7 w-7 text-primary" />
              <h2 className="text-2xl font-semibold">{title}</h2>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="shop" className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Shop</p>
            <h2 className="mt-2 text-4xl font-semibold sm:text-5xl">Hempko essentials</h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-muted-foreground">
            Breathable hemp-cotton pieces for everyday comfort. Start with relaxed trousers,
            then ask about socks availability, size, and delivery.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-lg border border-border bg-cream p-6">
            <Image
              src={waistband}
              alt="Hempko trouser product detail"
              placeholder="blur"
              className="aspect-[4/5] w-full rounded-lg object-cover"
            />
            <div className="mt-6 space-y-4">
              {details.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-center justify-between border-b border-border/70 pb-4 last:border-0 last:pb-0">
                  <span className="inline-flex items-center gap-3 text-sm font-medium text-muted-foreground">
                    <Icon className="h-4 w-4 text-primary" />
                    {label}
                  </span>
                  <span className="text-sm font-semibold">{value}</span>
                </div>
              ))}
            </div>
            <a
              href="https://wa.me/9779709139565"
              className="mt-6 inline-flex h-11 w-full items-center justify-center rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
            >
              Order trousers
            </a>
          </div>

          <div className="rounded-lg border border-border bg-cream p-6">
            <Image
              src={socks}
              alt="Hempko socks"
              placeholder="blur"
              className="aspect-[4/5] w-full rounded-lg object-cover"
            />
            <div className="mt-6">
              <h3 className="text-3xl font-semibold">Hempko socks</h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                Soft natural comfort for daily wear. Message Hempko to confirm available
                colors, sizes, and delivery details.
              </p>
              <div className="mt-6 space-y-4">
                {socksDetails.map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-center justify-between border-b border-border/70 pb-4 last:border-0 last:pb-0">
                    <span className="inline-flex items-center gap-3 text-sm font-medium text-muted-foreground">
                      <Icon className="h-4 w-4 text-primary" />
                      {label}
                    </span>
                    <span className="text-sm font-semibold">{value}</span>
                  </div>
                ))}
              </div>
              <a
                href="https://wa.me/9779709139565"
                className="mt-6 inline-flex h-11 w-full items-center justify-center rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
              >
                Ask about socks
              </a>
            </div>
          </div>
        </div>

        <div className="mt-6 grid auto-rows-[260px] gap-4 md:grid-cols-2">
          {gallery.map((item) => (
            <div key={item.alt} className={item.className}>
              <Image
                src={item.src}
                alt={item.alt}
                placeholder="blur"
                className="h-full w-full rounded-lg object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="mb-3 inline-flex items-center gap-2 text-sm font-semibold">
              <MapPin className="h-4 w-4" />
              Made in Nepal
            </p>
            <h2 className="text-4xl font-semibold sm:text-5xl">Ready for all-day comfort.</h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-primary-foreground/80">
              Message Hempko to confirm color availability, size, and delivery details before ordering.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
            <a
              href="tel:9709139565"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-cream px-7 text-sm font-semibold text-foreground"
            >
              <Phone className="h-4 w-4" />
              9709139565
            </a>
            <a
              href="https://wa.me/9779709139565"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-primary-foreground/35 px-7 text-sm font-semibold"
            >
              <Send className="h-4 w-4" />
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
