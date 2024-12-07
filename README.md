# WebflowPaddleConnect

A seamless integration solution for handling digital product sales through Paddle payment processing in Webflow sites, with secure digital asset delivery.

## 🚀 Features

- Paddle payment processing integration
- Automatic digital asset delivery after purchase
- Secure file access via presigned URLs
- Easy integration with Webflow
- Comprehensive error handling and logging
- Production-ready configuration

## 📋 Prerequisites

Before you begin, ensure you have:

- A Paddle account with vendor ID
- A Webflow site
- Digital assets ready for delivery
- AWS S3 bucket for asset storage (if using direct S3 integration)

## 🔧 Configuration

1. **Paddle Setup**
   ```javascript
   const PADDLE_VENDOR_ID = 'YOUR_VENDOR_ID';
   const PRICE_ID = 'YOUR_PRICE_ID';
   ```

2. **API Gateway Setup** (if using Lambda)
   ```javascript
   const API_GATEWAY_URL = 'YOUR_API_GATEWAY_URL';
   ```

3. **AWS S3 Setup** (if using direct S3)
   ```javascript
   const S3_BUCKET = 'YOUR_BUCKET_NAME';
   ```

## 📥 Installation

1. Copy the entire code from `index.html`
2. In Webflow:
   - Add a new Custom Code element
   - Paste the code in the head section of your page
   - Add a button with ID `soloPlanBtn`

## 🔌 Usage

1. **Basic Implementation**
   ```html
   <button id="soloPlanBtn">Buy Now</button>
   ```

2. **Custom Button Styling**
   - Add custom classes to match your Webflow design
   - Maintain the `soloPlanBtn` ID

## 🔍 Debugging

- Open browser console (F12) to view detailed logs
- Check for initialization success message
- Monitor checkout process logs
- Review any error messages

## 🔒 Security

- Uses secure presigned URLs for asset delivery
- Implements proper error handling
- Validates purchase status before delivery
- Temporary URL access (5-minute expiration)

## ⚠️ Important Notes

1. Always test in Paddle's sandbox environment first
2. Ensure digital assets are properly uploaded
3. Configure proper CORS settings if using S3
4. Keep your vendor ID and API keys secure

## 🛠️ Customization

You can customize:
- Button styling and placement
- Success/error messages
- Download behavior
- URL expiration time
- File path structure

## 📝 License

MIT License - feel free to use in your Webflow projects

## 🤝 Contributing

1. Fork the project
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📧 Support

For support:
1. Check the documentation
2. Review browser console logs
3. Open an issue in the repository

## 🔄 Updates

Stay updated with the latest version by watching this repository

---

Made with ❤️ for the Webflow community
