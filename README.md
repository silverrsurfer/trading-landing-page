# The Momentum Room prototype

UX-first Next.js landing page for a fictional US momentum-trading educator. The app uses Material UI components, Tailwind CSS layout utilities, and server-created Stripe Checkout sessions in test mode.

## Local setup

1. Copy `.env.example` values into `.env`.
2. Set `STRIPE_SECRET_KEY` to a Stripe `sk_test_` key.
3. Optionally set `DISCORD_INVITE_URL` to test post-payment onboarding.
4. Run `bun install`.
5. Run `bun run dev`.

Hosted Stripe Checkout does not require a publishable key. The browser never receives the secret key.

## Validation

- `bun run format:check`
- `bun run typecheck`
- `bun run lint`
- `bun test`
- `bun run build`

Use Stripe test card `4242 4242 4242 4242`, any future expiry, and any three-digit CVC. Test payments create test-mode subscriptions only.
