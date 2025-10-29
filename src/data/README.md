# Mock Data Documentation

This file contains all the mock data used throughout the Electronic Compro website, structured according to the TypeScript interfaces defined in `src/types/type.ts`.

## Data Structure Overview

### Company Metadata
- Company name, founding year, client count
- Social media links (Instagram, Facebook, YouTube, WhatsApp)
- Contact email

### Motto
- Company motto and detailed description

### Banners
- Desktop and mobile banner images
- Used on the landing page

### About Us
- Company description
- Featured image
- Footer message
- Statistics (founded year, client count, years in business)

### Advantages (6 items)
- Title, description, and image for each advantage
- Displayed on the landing page as feature cards
- Examples: Innovative Solutions, Quality Assured, Expert Support, etc.

### Product Catalog (12 items)
- Electronic components and equipment
- Each product includes:
  - Name and description
  - Price (in IDR)
  - Multiple product images
- Categories: Sensors, Controllers, Motors, Power Supplies, Accessories

### Service Catalog (6 items)
- Professional services offered
- Each service includes:
  - Name and detailed description
  - Starting price (in IDR)
  - Service images
- Examples: Smart Home Automation, Industrial Control Systems, etc.

### Company Portfolio (9 items)
- Client companies and projects
- Each portfolio item includes:
  - Company name and logo
  - Optional website link
  - Project description
  - Partnership start year

## Usage in Pages

### Landing Page (`src/pages/LandingPage.tsx`)
- Uses: `companyMetadata`, `motto`, `aboutUs`, `advantages`
- Displays hero section, features, and about section

### Portfolio Page (`src/pages/Portfolio.tsx`)
- Uses: `companyMetadata`, `companyPortfolio`
- Displays grid of client projects and partnerships

### Katalog Page (`src/pages/Katalog.tsx`)
- Uses: `companyMetadata`, `productKatalog`
- Displays filterable product catalog with categories
- Includes pricing and stock status

### Services Page (`src/pages/Services.tsx`)
- Uses: `companyMetadata`, `serviceKatalog`
- Displays professional services offered
- Includes pricing and contact CTA

## Importing Data

```typescript
import { 
  companyMetadata, 
  motto, 
  aboutUs, 
  advantages,
  productKatalog,
  serviceKatalog,
  companyPortfolio,
  companyProfile // Complete profile object
} from '../data/mockData';
```

## Price Formatting

Prices are stored as numbers (in IDR) and formatted using:

```typescript
const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(price);
};
```

## Images

All images currently use placeholder URLs from:
- Unsplash (for realistic images)
- via.placeholder.com (for logos and simple placeholders)

Replace these with actual company images in production.
