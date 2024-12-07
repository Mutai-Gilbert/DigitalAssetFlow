import { initializePurchaseButton } from './ui/purchaseButton';
import { setupErrorHandling } from './utils/errorHandling';

document.addEventListener('DOMContentLoaded', () => {
  setupErrorHandling();
  initializePurchaseButton();
});