import { afterEach, describe, expect, test } from "bun:test";
import { getDiscordInviteUrl } from "./discord-invite";

const originalDiscordInviteUrl = process.env.DISCORD_INVITE_URL;
const originalNodeEnv = process.env.NODE_ENV;
const mutableProcessEnv = process.env as Record<string, string | undefined>;

afterEach(() => {
  process.env.DISCORD_INVITE_URL = originalDiscordInviteUrl;
  mutableProcessEnv.NODE_ENV = originalNodeEnv;
});

describe("Discord invite configuration", () => {
  test("accepts a secure Discord invite URL", () => {
    process.env.DISCORD_INVITE_URL = "https://discord.gg/momentum-room";

    expect(getDiscordInviteUrl()).toBe("https://discord.gg/momentum-room");
  });

  test("rejects a non-Discord URL", () => {
    process.env.DISCORD_INVITE_URL = "https://example.com/invite";

    expect(() => getDiscordInviteUrl()).toThrow(
      "DISCORD_INVITE_URL must be an HTTPS Discord invite URL",
    );
  });

  test("rejects a Discord URL that is not an invite", () => {
    process.env.DISCORD_INVITE_URL = "https://discord.com/channels/community";

    expect(() => getDiscordInviteUrl()).toThrow(
      "DISCORD_INVITE_URL must be an HTTPS Discord invite URL",
    );
  });

  test("requires the invite before production checkout", () => {
    delete process.env.DISCORD_INVITE_URL;
    mutableProcessEnv.NODE_ENV = "production";

    expect(() => getDiscordInviteUrl()).toThrow("DISCORD_INVITE_URL is required in production");
  });
});
