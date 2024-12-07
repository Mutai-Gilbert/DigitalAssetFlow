export const PADDLE_CONFIG = {
  seller: import.meta.env.VITE_PADDLE_SELLER_ID,
  environment: import.meta.env.VITE_PADDLE_ENVIRONMENT || 'sandbox',
  apiKey: import.meta.env.VITE_PADDLE_API_KEY
};