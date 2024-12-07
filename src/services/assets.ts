import axios from 'axios';
import { AWS_CONFIG } from '../config/aws';

class AssetService {
  private apiUrl: string;

  constructor() {
    this.apiUrl = AWS_CONFIG.apiGatewayUrl;
  }

  async getAssetUrl(orderId: string): Promise<string> {
    try {
      const response = await axios.post(`${this.apiUrl}/get-asset`, {
        orderId
      });
      
      return response.data.presignedUrl;
    } catch (error) {
      console.error('Error fetching asset URL:', error);
      throw error;
    }
  }
}

export const assetService = new AssetService();