import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import TagIcon from "@mui/icons-material/Tag";
import { OFFER } from "@/modules/offer";
import { DISCORD_CHANNELS } from "../content";

export function DiscordPreview() {
  return (
    <Paper className="overflow-hidden" elevation={6}>
      <div className="flex items-center justify-between gap-3 p-4">
        <div className="flex items-center gap-3">
          <Avatar>{OFFER.trader.initials}</Avatar>
          <div>
            <Typography variant="subtitle1">Inside {OFFER.membershipName} today</Typography>
            <Typography color="text.secondary" variant="body2">
              {OFFER.trader.name} · illustrative preview
            </Typography>
          </div>
        </div>
        <Chip label="DEMO" size="small" color="warning" />
      </div>
      <Divider />
      <div className="flex items-center gap-2 px-4 py-3">
        <TagIcon fontSize="small" />
        <Typography variant="subtitle2">{DISCORD_CHANNELS.dailyPlan.name.slice(1)}</Typography>
      </div>
      <Divider />
      <div className="p-5">
        <div className="mb-4 flex items-center gap-3">
          <Avatar className="h-9 w-9">{OFFER.trader.initials}</Avatar>
          <div>
            <Typography variant="subtitle2">{OFFER.trader.name}</Typography>
            <Typography color="text.secondary" variant="caption">
              Today at 8:42 a.m.
            </Typography>
          </div>
        </div>
        <Typography variant="h6" className="mb-4">
          Watching above 4.80
        </Typography>
        <dl className="grid gap-4">
          <div>
            <Typography component="dt" color="text.secondary" variant="caption">
              WHY IT IS ON THE LIST
            </Typography>
            <Typography component="dd">
              Strong premarket volume and a clean first-pullback structure.
            </Typography>
          </div>
          <div>
            <Typography component="dt" color="text.secondary" variant="caption">
              CONFIRMATION
            </Typography>
            <Typography component="dd">Price reclaims VWAP and holds above 4.80.</Typography>
          </div>
          <div>
            <Typography component="dt" color="text.secondary" variant="caption">
              INVALIDATION
            </Typography>
            <Typography component="dd">
              Price loses 4.55. No confirmation means no trade.
            </Typography>
          </div>
        </dl>
      </div>
      <Divider />
      <Typography color="text.secondary" variant="body2" className="p-4">
        Every setup includes the thesis, confirmation, invalidation, and review—not only an entry.
      </Typography>
    </Paper>
  );
}
