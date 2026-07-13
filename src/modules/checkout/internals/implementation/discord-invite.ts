export function getDiscordInviteUrl() {
  const configuredUrl = process.env.DISCORD_INVITE_URL;

  if (!configuredUrl) {
    if (process.env.NODE_ENV === "production") {
      throw new Error("DISCORD_INVITE_URL is required in production");
    }

    return undefined;
  }

  const inviteUrl = new URL(configuredUrl);
  const pathSegments = inviteUrl.pathname.split("/").filter(Boolean);
  const isShortInvite = inviteUrl.hostname === "discord.gg" && pathSegments.length === 1;
  const isFullInvite =
    inviteUrl.hostname === "discord.com" &&
    pathSegments.length === 2 &&
    pathSegments[0] === "invite";

  if (inviteUrl.protocol !== "https:" || (!isShortInvite && !isFullInvite)) {
    throw new Error("DISCORD_INVITE_URL must be an HTTPS Discord invite URL");
  }

  return inviteUrl.toString();
}
