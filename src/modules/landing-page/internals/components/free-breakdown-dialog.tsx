"use client";

import { useState } from "react";
import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutlined";

const BREAKDOWN_CHAPTERS = [
  ["0:00", "Plan", "Premarket volume and structure put the stock on the watchlist."],
  ["4:00", "Confirmation", "Price reclaimed VWAP but still needed to hold above 4.80."],
  ["8:00", "Invalidation", "A loss of 4.55 would end the thesis before any entry."],
  ["12:00", "Review", "No confirmation appeared, so staying out was the correct process decision."],
] as const;

export function FreeBreakdownDialog() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        variant="outlined"
        size="large"
        className="mt-7"
        startIcon={<PlayCircleOutlineIcon />}
        onClick={() => setIsOpen(true)}
      >
        Watch a Free Trade Breakdown
      </Button>
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} fullWidth maxWidth="sm">
        <DialogTitle>Complete trade breakdown</DialogTitle>
        <DialogContent>
          <Alert severity="info" className="mb-5">
            Illustrative prototype lesson. No trade or performance result is being claimed.
          </Alert>
          <div className="grid gap-4">
            {BREAKDOWN_CHAPTERS.map(([time, title, description], index) => (
              <div key={time}>
                {index > 0 ? <Divider className="mb-4" /> : null}
                <div className="flex gap-4">
                  <Typography color="primary" className="w-12 shrink-0 font-mono">
                    {time}
                  </Typography>
                  <div>
                    <Typography variant="subtitle1">{title}</Typography>
                    <Typography color="text.secondary" variant="body2">
                      {description}
                    </Typography>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setIsOpen(false)}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
