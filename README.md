# Merchant Directory

A comprehensive Electron-based directory application for entrepreneurs looking to start their online business. This desktop app provides curated resources for e-commerce, including marketplaces, print-on-demand services, payment processors, and more.

## Features

- **30+ Curated Resources** - Carefully selected platforms and tools for online selling
- **7 Categories** - Organized into Marketplaces, Print on Demand, E-commerce Platforms, Payment Processing, Marketing Tools, Design Tools, and Shipping & Fulfillment
- **Search Functionality** - Quickly find resources by name, description, or features
- **Category Filtering** - Browse resources by specific category
- **External Link Handling** - All resource links open in your default browser
- **Modern UI** - Clean, card-based interface with gradient design

## Resource Categories

### Marketplaces
- Etsy, Amazon Handmade, eBay, Facebook Marketplace

### Print on Demand
- Printful, Printify, Redbubble, Teespring, Society6

### E-commerce Platforms
- Shopify, WooCommerce, Square Online, BigCommerce, Wix

### Payment Processing
- Stripe, PayPal, Square

### Marketing Tools
- Mailchimp, Hootsuite, Google Ads, Facebook Ads

### Design Tools
- Canva, Adobe Creative Cloud, Figma, PicMonkey

### Shipping & Fulfillment
- ShipStation, Pirate Ship, Amazon FBA, ShipBob, Easyship

## Installation

### Prerequisites
- Node.js (v14 or higher)
- npm

### Setup
```bash
# Clone the repository
git clone https://github.com/GuildMasterDev/Merchant.git
cd Merchant

# Install dependencies
npm install
```

## Usage

### Development
```bash
# Run the app in development mode
npm start
```

### Building

```bash
# Package for distribution
npm run dist

# Create unpacked build for testing
npm run pack
```

## Tech Stack

- **Electron** - Cross-platform desktop application framework
- **Vanilla JavaScript** - No framework dependencies
- **Pure CSS** - Custom styling without libraries
- **ImageMagick** - Icon generation

## Project Structure

```
Merchant/
├── main.js           # Main Electron process
├── preload.js        # Preload script for security
├── renderer.js       # Frontend application logic
├── index.html        # Main application HTML
├── styles.css        # Application styles
├── assets/           # Icons and images
│   ├── icon.png
│   ├── icon.ico
│   └── icon.icns
└── package.json      # Project configuration
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For issues, questions, or suggestions, please open an issue on GitHub.

---

Built with ❤️ for entrepreneurs and small business owners