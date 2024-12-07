import { Webflow } from '@webflow/webflow-cli';
import { WEBFLOW_CONFIG } from '../config/webflow';

class WebflowService {
  private webflow: Webflow;

  constructor() {
    this.webflow = new Webflow({
      token: WEBFLOW_CONFIG.token
    });
  }

  async getSite(siteId: string) {
    try {
      return await this.webflow.site({ siteId }).get();
    } catch (error) {
      console.error('Error fetching Webflow site:', error);
      throw error;
    }
  }

  async updateCollection(collectionId: string, data: any) {
    try {
      return await this.webflow.collection({ collectionId }).update(data);
    } catch (error) {
      console.error('Error updating Webflow collection:', error);
      throw error;
    }
  }
}

export const webflowService = new WebflowService();