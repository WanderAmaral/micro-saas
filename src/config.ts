export const config = {
  stripe: {
    publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
    secretKey: process.env.STRIPE_SECRET_KEY,
    webhookSecret: process.env.STRIPE_WEBHOOK_SECRET,
    plans: {
      free: {
        priceId: "price_1P8jXuHr3DcNQzE0H7g69ux1",
        quota: {
          TASKS: 5,
        },
      },
      pro: {
        priceId: "price_1P8jYGHr3DcNQzE06sAdrNTF",
        quota: {
          TASKS: 100,
        },
      },
    },
  },
};
