# Stripe sandbox demo cards

Use these cards only with Stripe test or sandbox keys. For every card, enter a future expiry date such as `12/34`. Use any three-digit CVC unless noted otherwise.

| Test case | Card type | Number | CVC | Expected result |
| --- | --- | --- | --- | --- |
| Successful Visa | Visa | `4242 4242 4242 4242` | Any 3 digits | Payment succeeds |
| Successful Mastercard | Mastercard | `5555 5555 5555 4444` | Any 3 digits | Payment succeeds |
| Successful American Express | American Express | `3782 822463 10005` | Any 4 digits | Payment succeeds |
| Successful Discover | Discover | `6011 1111 1111 1117` | Any 3 digits | Payment succeeds |
| Generic decline | Visa decline scenario | `4000 0000 0000 0002` | Any 3 digits | Payment is declined with `card_declined` / `generic_decline` |

## Notes

- Do not use real card details in test or live environments.
- These card numbers are for interactive payment forms. For server-side test code, prefer Stripe test `PaymentMethod` IDs.
- The generic decline card validates the checkout error state and should not create a paid order or membership.

Source: [Stripe testing documentation](https://docs.stripe.com/testing?testing-method=card-numbers)
