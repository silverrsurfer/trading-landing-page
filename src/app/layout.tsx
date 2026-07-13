import type { Metadata } from "next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v16-appRouter";
import { OFFER, getOfferDeliveryLabel } from "@/modules/offer";
import { AppThemeProvider } from "@/modules/ui";
import "./globals.css";

export const metadata: Metadata = {
  title: `${OFFER.membershipName} | Learn the Decision Process`,
  description: `A fictional prototype for a ${getOfferDeliveryLabel()} led by ${OFFER.trader.name}.`,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <AppThemeProvider>{children}</AppThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
