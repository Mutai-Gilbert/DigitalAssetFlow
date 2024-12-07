import { handleSuccessfulPurchase } from '../utils/payment';
import { handleError } from '../utils/errorHandling';

export function initializeSuccessPage() {
  const urlParams = new URLSearchParams(window.location.search);
  const orderId = urlParams.get('orderId');
  const assetContainer = document.querySelector('#asset-container');

  if (!orderId || !assetContainer) {
    handleError(new Error('Missing order ID or container element'));
    return;
  }

  displayAssetDownload(orderId, assetContainer);
}

async function displayAssetDownload(orderId: string, container: Element) {
  try {
    const presignedUrl = await handleSuccessfulPurchase(orderId);
    
    const downloadLink = document.createElement('a');
    downloadLink.href = presignedUrl;
    downloadLink.className = 'download-button';
    downloadLink.textContent = 'Download Your Digital Asset';
    downloadLink.target = '_blank';
    
    container.innerHTML = `
      <h2>Thank you for your purchase!</h2>
      <p>Your digital asset is ready for download.</p>
    `;
    container.appendChild(downloadLink);
  } catch (error) {
    handleError(error);
  }
}