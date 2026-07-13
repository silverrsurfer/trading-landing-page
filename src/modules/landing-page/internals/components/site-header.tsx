"use client";

import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import { OFFER } from "@/modules/offer";
import { NAVIGATION_ITEMS } from "../content";
import { CheckoutForm } from "./checkout-form";

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <AppBar position="sticky" color="default" elevation={1}>
      <Toolbar className="mx-auto flex w-full max-w-7xl gap-4 px-4 sm:px-6 lg:px-8">
        <Typography component="a" href="#top" variant="h6" className="grow no-underline">
          {OFFER.membershipName}
        </Typography>

        <nav aria-label="Primary navigation" className="hidden items-center gap-1 lg:flex">
          {NAVIGATION_ITEMS.map((item) => (
            <Button key={item.href} color="inherit" href={item.href}>
              {item.label}
            </Button>
          ))}
        </nav>

        <div className="hidden sm:block">
          <CheckoutForm size="medium" />
        </div>

        <div className="lg:hidden">
          <IconButton aria-label="Open navigation" onClick={() => setIsOpen(true)}>
            <MenuIcon />
          </IconButton>
        </div>
      </Toolbar>

      <Drawer anchor="right" open={isOpen} onClose={() => setIsOpen(false)}>
        <div className="w-72 p-4" role="presentation">
          <Typography variant="h6" className="px-4 py-3">
            {OFFER.membershipName}
          </Typography>
          <List>
            {NAVIGATION_ITEMS.map((item) => (
              <ListItemButton key={item.href} href={item.href} onClick={() => setIsOpen(false)}>
                <ListItemText primary={item.label} />
              </ListItemButton>
            ))}
          </List>
          <div className="mt-4 px-4">
            <CheckoutForm fullWidth />
          </div>
        </div>
      </Drawer>
    </AppBar>
  );
}
