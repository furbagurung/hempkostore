import Image from "next/image";
import whatsapp from "@/assets/whatsapp.png";

const whatsappHref =
  "https://wa.me/9779709139565?text=Hi%20HEMPKO%2C%20I%20want%20to%20order%20the%20hemp-cotton%20trousers.%20Can%20you%20help%20me%20with%20size%2C%20color%2C%20and%20delivery%3F";

export function WhatsAppButton() {
  return (
    <a
      href={whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Order on WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-foreground/20 transition hover:-translate-y-0.5 hover:bg-[#1fbd5a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:w-auto sm:gap-2 sm:px-5"
    >
      <Image src={whatsapp} alt="" className="h-6 w-6" />
      <span className="hidden text-sm font-semibold sm:inline">WhatsApp</span>
    </a>
  );
}
