import { paddleService } from '../services/paddle';
import { webflowService } from '../services/webflow';
import { assetService } from '../services/assets';

export async function handleSubscriptionPurchase({
  priceId,
  quantity,
  email,
  successUrl,
  cancelUrl,
  collectionId
}: {
  priceId: string;
  quantity: number;
  email: string;
  successUrl: string;
  cancelUrl: string;
  collectionId: string;
}) {
  try {
    // Create Paddle checkout
    const checkout = await paddleService.createCheckout({
      items: [{ priceId, quantity }],
      customerEmail: email,
      successUrl,
      cancelUrl
    });

    // Update Webflow collection with order details
    await webflowService.updateCollection(collectionId, {
      checkoutId: checkout.id,
      customerEmail: email,
      status: 'pending'
    });

    return checkout;
  } catch (error) {
    console.error('Error processing subscription purchase:', error);
    throw error;
  }
}

export async function handleSuccessfulPurchase(orderId: string): Promise<string> {
  try {
    // Get presigned URL from AWS
    const presignedUrl = await assetService.getAssetUrl(orderId);
    return presignedUrl;
  } catch (error) {
    console.error('Error handling successful purchase:', error);
    throw error;
  }
}