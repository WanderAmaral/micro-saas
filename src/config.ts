export const config = {
  stripe: {
    publishableKey: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
    secretKey: process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY,
    webhookSecret: "",
    plans: {
      free: {
        priceId: 'price_1P8jXuHr3DcNQzE0H7g69ux1',
        quota: {
          TASKS: 5
        }
      },
      pro: {
        priceId: 'price_1P8jYGHr3DcNQzE06sAdrNTF',
        quota: {
          TASKS: 100
        }
      }
    }
  },
};
