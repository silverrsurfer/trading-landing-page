import Image from "next/image";
import heroTraderImage from "../../../../../imgs/hero-img-trader.jpg";

export function HeroBackground() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 -z-10 [mask-image:linear-gradient(to_bottom,black_0%,black_66%,transparent_100%)]"
    >
      <Image
        src={heroTraderImage}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-[64%_center] opacity-75"
      />
      <div className="absolute inset-0 bg-linear-to-b from-background/15 via-background/45 to-background" />
      <div className="absolute inset-0 bg-linear-to-r from-background/95 via-background/65 to-background/5" />
    </div>
  );
}
