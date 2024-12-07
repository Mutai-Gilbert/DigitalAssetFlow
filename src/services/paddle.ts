import Paddle from '@paddle/paddle-js';
import { PADDLE_CONFIG } from '../config/paddle';

class PaddleService {
  private paddle: Paddle;

  constructor() {
    this.paddle = new Paddle({
      seller: PADDLE_CONFIG.seller,
      environment: PADDLE_CONFIG.environment as 'sandbox' | 'production',
      apiKey: PADDLE_CONFIG.apiKey
    });
  }

  async createCheckout(options: {
    items: Array<{
      priceId: string;
      quantity: number;
    }>;
    customerEmail?: string;
    successUrl?: string;
    cancelUrl?: string;
  }) {
    try {
      return await this.paddle.Checkout.create({
        items: options.items,
        customer_email: options.customerEmail,
        success_url: options.successUrl,
        cancel_url: options.cancelUrl
      });
    } catch (error) {
      console.error('Error creating Paddle checkout:', error);
      throw error;
    }
  }

  async getSubscription(subscriptionId: string) {
    try {
      return await this.paddle.Subscription.get(subscriptionId);
    } catch (error) {
      console.error('Error fetching subscription:', error);
      throw error;
    }
  }
}

export const paddleService = new PaddleService();