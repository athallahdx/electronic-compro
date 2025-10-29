// ===============================
//  Global Type Helpers
// ===============================
type ImagePath = string; // e.g. "storage/product/imagename.png"
type Link = string;      // e.g. "https://instagram.com/company"

// ===============================
//  Company Metadata
// ===============================
export interface CompanyMetadata {
  companyName: string;
  foundedAt: number; // e.g. 2005
  clients: number;   // e.g. 1200
  instagram: Link;
  facebook: Link;
  youtube: Link;
  whatsapp: Link;
  email: string;
}

// ===============================
//  Motto
// ===============================
export interface Motto {
  motto: string;
  description: string;
}

// ===============================
//  Banner
// ===============================
export interface Banner {
  type: "mobile" | "desktop";
  image: ImagePath;
}

// ===============================
//  About Us
// ===============================
export interface AboutUs {
  description: string;
  image: ImagePath;
  footerMessage: string;
}

// ===============================
//  Advantage
// ===============================
export interface Advantage {
  title: string;
  description: string;
  image: ImagePath;
}

// ===============================
//  Product Catalog
// ===============================
export interface ProductKatalog {
  name: string;
  description: string;
  price: number;
  images: ImagePath[];
}

// ===============================
//  Service Catalog
// ===============================
export interface ServiceKatalog {
  name: string;
  description: string;
  price: number;
  images: ImagePath[];
}

// ===============================
//  Company Portfolio
// ===============================
export interface CompanyPortfolio {
  name: string;
  logo: ImagePath;
  website?: Link;
  description?: string;
  since?: number;
}

// ===============================
//  Example Root Schema (optional)
// ===============================
export interface CompanyProfile {
  metadata: CompanyMetadata;
  motto: Motto;
  banners: Banner[];
  aboutUs: AboutUs;
  advantages: Advantage[];
  productKatalog: ProductKatalog[];
  serviceKatalog: ServiceKatalog[];
  portfolio: CompanyPortfolio[];
}