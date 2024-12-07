import { handleSubscriptionPurchase } from '../utils/payment';
import { handleError } from '../utils/errorHandling';

export function initializePurchaseButton() {
  const purchaseButton = document.querySelector('#purchase-button') as HTMLButtonElement;
  
  if (!purchaseButton) {
    console.error('Purchase button not found');
    return;
  }

  purchaseButton.addEventListener('click', async () => {
    try {
      purchaseButton.disabled = true;
      purchaseButton.textContent = 'Processing...';

      const checkout = await handleSubscriptionPurchase({
        priceId: 'pri_123', // Replace with your Paddle price ID
        quantity: 1,
        email: 'customer@example.com',
        successUrl: `${window.location.origin}/success`,
        cancelUrl: `${window.location.origin}/cancel`,
        collectionId: 'your_webflow_collection_id'
      });

      window.location.href = checkout.url;
    } catch (error) {
      handleError(error);
      purchaseButton.disabled = false;
      purchaseButton.textContent = 'Buy Now';
    }
  });
}