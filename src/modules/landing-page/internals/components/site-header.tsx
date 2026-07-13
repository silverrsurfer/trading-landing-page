import { Menu } from "lucide-react";
import {
  Button,
  buttonVariants,
  Separator,
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/modules/design-system";
import { cn } from "@/lib/utils";
import { OFFER } from "@/modules/offer";
import { PAGE_CONTAINER } from "../constants";
import { NAVIGATION_ITEMS } from "../content";
import { CheckoutForm } from "./checkout-form";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b bg-background/90 backdrop-blur-xl">
      <div className={`${PAGE_CONTAINER} flex h-16 items-center gap-4`}>
        <a href="#top" className="mr-auto text-sm font-semibold tracking-tight sm:text-base">
          {OFFER.membershipName}
        </a>

        <nav aria-label="Primary navigation" className="hidden items-center gap-1 xl:flex">
          {NAVIGATION_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(buttonVariants({ variant: "ghost" }))}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden sm:block">
          <CheckoutForm size="default" />
        </div>

        <Sheet>
          <SheetTrigger
            render={
              <Button
                variant="outline"
                size="icon"
                className="xl:hidden"
                aria-label="Open navigation"
              />
            }
          >
            <Menu />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>{OFFER.membershipName}</SheetTitle>
              <SheetDescription>
                Trading education, organized around one repeatable process.
              </SheetDescription>
            </SheetHeader>
            <Separator />
            <nav aria-label="Mobile navigation" className="grid gap-1 p-4">
              {NAVIGATION_ITEMS.map((item) => (
                <SheetClose
                  key={item.href}
                  nativeButton={false}
                  render={
                    <a
                      href={item.href}
                      className="rounded-xl px-3 py-3 text-sm font-medium hover:bg-muted"
                    />
                  }
                >
                  {item.label}
                </SheetClose>
              ))}
            </nav>
            <SheetFooter>
              <CheckoutForm fullWidth />
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
