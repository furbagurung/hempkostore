import Image from "next/image";
import Link from "next/link";
import { Phone, MessageCircle, Send, Mail } from "lucide-react";
import logo from "@/assets/hempko-logo.png";

export function SiteFooter() {
  return (
    <footer id="contact" className="bg-cream border-t border-border/60 mt-16">
      <div className="mx-auto max-w-7xl px-6 py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <Image src={logo} alt="Hempko" className="h-10 w-auto mb-4" />
          <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
            Breathable hemp-cotton trousers, made in Nepal for Nepal weather. Light on the
            skin, easy through the day.
          </p>
          <a
            href="tel:9709139565"
            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary"
          >
            <Phone className="h-4 w-4" /> 9709139565
          </a>
        </div>
        <div>
          <h4 className="text-xs font-semibold tracking-widest uppercase text-foreground/60 mb-4">
            Shop
          </h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="#shop" className="hover:text-primary">All Trousers</Link></li>
            <li><Link href="#about" className="hover:text-primary">Our Story</Link></li>
            <li><Link href="#contact" className="hover:text-primary">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs font-semibold tracking-widest uppercase text-foreground/60 mb-4">
            Connect
          </h4>
          <div className="flex items-center gap-3">
            <a aria-label="Messenger" href="#" className="h-9 w-9 rounded-full bg-background border border-border flex items-center justify-center hover:text-primary"><MessageCircle className="h-4 w-4" /></a>
            <a aria-label="WhatsApp" href="https://wa.me/9779709139565" className="h-9 w-9 rounded-full bg-background border border-border flex items-center justify-center hover:text-primary"><Send className="h-4 w-4" /></a>
            <a aria-label="Email" href="mailto:hello@hempko.com" className="h-9 w-9 rounded-full bg-background border border-border flex items-center justify-center hover:text-primary"><Mail className="h-4 w-4" /></a>
          </div>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="mx-auto max-w-7xl px-6 py-5 text-xs text-muted-foreground flex flex-col sm:flex-row justify-between gap-2">
          <span>© {new Date().getFullYear()} Hempko Online Store. Made in Nepal.</span>
          <span>All Over Nepal Delivery · Rs. 1399</span>
        </div>
      </div>
    </footer>
  );
}
