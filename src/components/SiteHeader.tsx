"use client";

import Image from "next/image";
import Link from "next/link";
import { ShoppingBag, Menu } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/hempko-logo.png";

const nav = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "#shop" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-background/85 border-b border-border/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <Image src={logo} alt="Hempko Online Store" className="h-9 w-auto" priority />
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="text-foreground/70 hover:text-primary transition-colors"
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <button
            aria-label="Cart"
            className="hidden sm:inline-flex h-10 w-10 items-center justify-center rounded-full hover:bg-accent transition"
          >
            <ShoppingBag className="h-5 w-5" />
          </button>
          <Link
            href="#shop"
            className="hidden sm:inline-flex items-center rounded-full bg-primary text-primary-foreground px-5 h-10 text-sm font-semibold hover:opacity-90 transition"
          >
            Shop Now
          </Link>
          <button
            aria-label="Menu"
            onClick={() => setOpen((o) => !o)}
            className="md:hidden h-10 w-10 inline-flex items-center justify-center rounded-full hover:bg-accent"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-border/60 bg-background">
          <div className="px-4 py-3 flex flex-col gap-1">
            {nav.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="px-2 py-2.5 rounded-md text-sm font-medium text-foreground/80 hover:bg-accent"
              >
                {n.label}
              </Link>
            ))}
            <Link
              href="#shop"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex justify-center items-center rounded-full bg-primary text-primary-foreground h-11 text-sm font-semibold"
            >
              Shop Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
