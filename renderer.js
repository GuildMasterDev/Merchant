const resources = [
    {
        name: "Etsy",
        category: "marketplace",
        description: "Global marketplace for unique and creative goods. Perfect for handmade items, vintage goods, and craft supplies.",
        features: ["Handmade items", "Vintage marketplace", "Digital downloads", "Built-in audience", "SEO tools"],
        url: "https://www.etsy.com/sell"
    },
    {
        name: "Amazon Handmade",
        category: "marketplace",
        description: "Amazon's artisan-only marketplace for handcrafted products with access to millions of customers.",
        features: ["Prime eligibility", "Large customer base", "FBA available", "No monthly fees", "Custom profiles"],
        url: "https://sell.amazon.com/programs/handmade"
    },
    {
        name: "eBay",
        category: "marketplace",
        description: "One of the world's largest online marketplaces for selling new and used items.",
        features: ["Auction & fixed price", "Global reach", "Multiple categories", "Seller protection", "Mobile app"],
        url: "https://www.ebay.com/sl/sell"
    },
    {
        name: "Facebook Marketplace",
        category: "marketplace",
        description: "Local and nationwide marketplace integrated with Facebook's social network.",
        features: ["Local selling", "Social integration", "No listing fees", "Messenger chat", "Wide audience"],
        url: "https://www.facebook.com/marketplace"
    },
    {
        name: "Printful",
        category: "print-on-demand",
        description: "Print-on-demand dropshipping service for custom t-shirts, hoodies, accessories, and home decor.",
        features: ["No upfront costs", "Global fulfillment", "Mockup generator", "Integration tools", "White label"],
        url: "https://www.printful.com"
    },
    {
        name: "Printify",
        category: "print-on-demand",
        description: "Print-on-demand platform with a network of print providers worldwide.",
        features: ["Multiple print providers", "Competitive pricing", "Product designer", "API access", "Sample ordering"],
        url: "https://printify.com"
    },
    {
        name: "Redbubble",
        category: "print-on-demand",
        description: "Artist marketplace for print-on-demand products including apparel, stickers, and home goods.",
        features: ["Artist community", "No upfront costs", "Global shipping", "Marketing tools", "Analytics"],
        url: "https://www.redbubble.com/sell"
    },
    {
        name: "Teespring",
        category: "print-on-demand",
        description: "Platform for creating and selling custom apparel and merchandise with no upfront costs.",
        features: ["Free design tools", "YouTube integration", "Boosted listings", "Bulk discounts", "Analytics"],
        url: "https://teespring.com"
    },
    {
        name: "Society6",
        category: "print-on-demand",
        description: "Artist marketplace specializing in home decor, wall art, and lifestyle products.",
        features: ["Artist community", "Curated collections", "No inventory", "Global shipping", "Mobile app"],
        url: "https://society6.com/sell"
    },
    {
        name: "Shopify",
        category: "ecommerce",
        description: "Complete e-commerce platform for building your own online store with customizable themes.",
        features: ["Custom domain", "Payment processing", "Inventory management", "Marketing tools", "App store"],
        url: "https://www.shopify.com"
    },
    {
        name: "WooCommerce",
        category: "ecommerce",
        description: "Open-source e-commerce plugin for WordPress websites.",
        features: ["WordPress integration", "Flexible & customizable", "Extensions", "SEO friendly", "Free core plugin"],
        url: "https://woocommerce.com"
    },
    {
        name: "Square Online",
        category: "ecommerce",
        description: "E-commerce platform integrated with Square's payment processing and POS systems.",
        features: ["Free plan available", "POS integration", "Pickup & delivery", "Instagram shopping", "Inventory sync"],
        url: "https://squareup.com/us/en/online-store"
    },
    {
        name: "BigCommerce",
        category: "ecommerce",
        description: "Enterprise-grade e-commerce platform with built-in features and scalability.",
        features: ["Multi-channel selling", "B2B features", "API-first", "No transaction fees", "Built-in SEO"],
        url: "https://www.bigcommerce.com"
    },
    {
        name: "Wix eCommerce",
        category: "ecommerce",
        description: "Website builder with integrated e-commerce functionality and drag-and-drop design.",
        features: ["Drag & drop builder", "Mobile optimized", "Abandoned cart recovery", "Multi-currency", "Tax calculator"],
        url: "https://www.wix.com/ecommerce/website"
    },
    {
        name: "Stripe",
        category: "payment",
        description: "Developer-friendly payment processing platform with extensive API capabilities.",
        features: ["Global payments", "Subscription billing", "Fraud prevention", "Developer tools", "Mobile SDKs"],
        url: "https://stripe.com"
    },
    {
        name: "PayPal",
        category: "payment",
        description: "Widely recognized payment processor with buyer and seller protection.",
        features: ["Buyer protection", "International payments", "Invoice tools", "Mobile payments", "QR codes"],
        url: "https://www.paypal.com/us/business"
    },
    {
        name: "Square",
        category: "payment",
        description: "Payment processing with integrated POS systems and business tools.",
        features: ["POS system", "Online payments", "Invoicing", "Inventory management", "Analytics"],
        url: "https://squareup.com"
    },
    {
        name: "Mailchimp",
        category: "marketing",
        description: "Email marketing platform with automation and e-commerce integrations.",
        features: ["Email campaigns", "Automation", "Landing pages", "Social ads", "Analytics"],
        url: "https://mailchimp.com"
    },
    {
        name: "Hootsuite",
        category: "marketing",
        description: "Social media management platform for scheduling and analytics.",
        features: ["Multi-platform posting", "Content calendar", "Analytics", "Team collaboration", "Social listening"],
        url: "https://www.hootsuite.com"
    },
    {
        name: "Google Ads",
        category: "marketing",
        description: "Advertising platform for search, display, and shopping campaigns.",
        features: ["Search ads", "Shopping campaigns", "Display network", "YouTube ads", "Remarketing"],
        url: "https://ads.google.com"
    },
    {
        name: "Facebook Ads",
        category: "marketing",
        description: "Social media advertising across Facebook and Instagram platforms.",
        features: ["Targeted audiences", "Instagram integration", "Retargeting", "A/B testing", "Analytics"],
        url: "https://www.facebook.com/business/ads"
    },
    {
        name: "Canva",
        category: "design",
        description: "Easy-to-use design platform for creating marketing materials and product mockups.",
        features: ["Templates", "Brand kit", "Photo editor", "Animation tools", "Team collaboration"],
        url: "https://www.canva.com"
    },
    {
        name: "Adobe Creative Cloud",
        category: "design",
        description: "Professional design suite including Photoshop, Illustrator, and more.",
        features: ["Photoshop", "Illustrator", "InDesign", "Cloud storage", "Mobile apps"],
        url: "https://www.adobe.com/creativecloud.html"
    },
    {
        name: "Figma",
        category: "design",
        description: "Collaborative design tool for creating UI/UX designs and prototypes.",
        features: ["Real-time collaboration", "Prototyping", "Design systems", "Plugins", "Version control"],
        url: "https://www.figma.com"
    },
    {
        name: "PicMonkey",
        category: "design",
        description: "Online photo editor and design tool for creating product images and marketing materials.",
        features: ["Photo editing", "Templates", "Brand kit", "Background remover", "Touch up tools"],
        url: "https://www.picmonkey.com"
    },
    {
        name: "ShipStation",
        category: "shipping",
        description: "Multi-carrier shipping software for e-commerce order fulfillment.",
        features: ["Multi-carrier support", "Batch printing", "Automation rules", "Branded tracking", "Returns portal"],
        url: "https://www.shipstation.com"
    },
    {
        name: "Pirate Ship",
        category: "shipping",
        description: "Free shipping software with discounted USPS and UPS rates.",
        features: ["No monthly fees", "Discounted rates", "Batch shipping", "Address validation", "Simple interface"],
        url: "https://www.pirateship.com"
    },
    {
        name: "Fulfillment by Amazon (FBA)",
        category: "shipping",
        description: "Amazon's fulfillment service for storage, packing, and shipping.",
        features: ["Prime eligibility", "Customer service", "Returns handling", "Global fulfillment", "Multi-channel"],
        url: "https://sell.amazon.com/fulfillment-by-amazon"
    },
    {
        name: "ShipBob",
        category: "shipping",
        description: "Third-party logistics provider with fulfillment centers across the US.",
        features: ["2-day shipping", "Inventory management", "Returns processing", "International shipping", "Analytics"],
        url: "https://www.shipbob.com"
    },
    {
        name: "Easyship",
        category: "shipping",
        description: "Global shipping platform with access to 250+ courier services.",
        features: ["Global reach", "Rate calculator", "Taxes & duties", "Tracking", "Insurance"],
        url: "https://www.easyship.com"
    }
];

let currentCategory = 'all';
let searchTerm = '';

function renderResources() {
    const grid = document.getElementById('resourcesGrid');
    grid.innerHTML = '';
    
    let filteredResources = resources;
    
    if (currentCategory !== 'all') {
        filteredResources = filteredResources.filter(r => r.category === currentCategory);
    }
    
    if (searchTerm) {
        filteredResources = filteredResources.filter(r => 
            r.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            r.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            r.features.some(f => f.toLowerCase().includes(searchTerm.toLowerCase()))
        );
    }
    
    if (filteredResources.length === 0) {
        grid.innerHTML = '<div class="no-results">No resources found. Try a different search or category.</div>';
        return;
    }
    
    filteredResources.forEach(resource => {
        const card = document.createElement('div');
        card.className = 'resource-card';
        card.innerHTML = `
            <h3>${resource.name}</h3>
            <span class="category-tag">${formatCategory(resource.category)}</span>
            <p>${resource.description}</p>
            <div class="features">
                <h4>Key Features:</h4>
                <ul>
                    ${resource.features.map(f => `<li>${f}</li>`).join('')}
                </ul>
            </div>
            <button class="visit-btn" onclick="openResource('${resource.url}')">Visit Website</button>
        `;
        grid.appendChild(card);
    });
}

function formatCategory(category) {
    return category.split('-').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
}

function openResource(url) {
    if (window.electronAPI && window.electronAPI.openExternal) {
        window.electronAPI.openExternal(url);
    } else {
        window.open(url, '_blank');
    }
}

document.querySelectorAll('.category-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        currentCategory = e.target.dataset.category;
        renderResources();
    });
});

document.getElementById('searchInput').addEventListener('input', (e) => {
    searchTerm = e.target.value;
    renderResources();
});

renderResources();