import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { OFFER, getOfferDeliveryLabel } from "@/modules/offer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: `${OFFER.membershipName} | Learn the Decision Process`,
  description: `A fictional prototype for a ${getOfferDeliveryLabel()} led by ${OFFER.trader.name}.`,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={cn("dark font-sans", inter.variable)}>
      <body className="min-h-dvh antialiased">{children}</body>
    </html>
  );
}
