import { Truck, Ruler, Tag } from "lucide-react";

export function AnnouncementBar() {
  const items = [
    { icon: Truck, text: "All Over Nepal Delivery" },
    { icon: Ruler, text: "Sizes M · L · XL" },
    { icon: Tag, text: "Rs. 1399" },
  ];
  return (
    <div className="bg-primary text-primary-foreground text-xs sm:text-[13px]">
      <div className="mx-auto max-w-7xl px-4 py-2.5 flex items-center justify-center gap-6 sm:gap-10 flex-wrap">
        {items.map(({ icon: Icon, text }) => (
          <span key={text} className="inline-flex items-center gap-2 tracking-wide">
            <Icon className="h-3.5 w-3.5 opacity-90" />
            <span>{text}</span>
          </span>
        ))}
      </div>
    </div>
  );
}