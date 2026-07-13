export type CheckoutConfirmation = {
  status: "confirmed" | "pending";
  customerEmail?: string;
};
