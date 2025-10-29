import type {
  CompanyProfile,
  CompanyMetadata,
  Motto,
  Banner,
  AboutUs,
  Advantage,
  ProductKatalog,
  ServiceKatalog,
  CompanyPortfolio,
} from '../types/type';

// ===============================
//  Company Metadata
// ===============================
export const companyMetadata: CompanyMetadata = {
    companyName: 'TechnoVolt Solutions',
    foundedAt: 2015,
    clients: 1250,
    instagram: 'https://instagram.com/technovoltsolutions',
    facebook: 'https://facebook.com/technovoltsolutions',
    youtube: 'https://youtube.com/@technovoltsolutions',
    whatsapp: 'https://wa.me/6281234567890',
    email: 'info@technovoltsolutions.com',
};

// ===============================
//  Motto
// ===============================
export const motto: Motto = {
  motto: 'Innovation Through Technology',
  description:
    'We deliver cutting-edge electronic solutions that transform businesses and empower communities. Our commitment to excellence drives us to create innovative products and services that exceed expectations.',
};

// ===============================
//  Banners
// ===============================
export const banners: Banner[] = [
  {
    type: 'desktop',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&h=600&fit=crop',
  },
  {
    type: 'mobile',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=768&h=600&fit=crop',
  },
];

// ===============================
//  About Us
// ===============================
export const aboutUs: AboutUs = {
  description:
    'Electronic Compro is a leading provider of innovative electronic solutions, specializing in industrial automation, IoT systems, and smart technology integration. Founded in 2015, we have been at the forefront of technological advancement, serving over 1,250 satisfied clients across various industries. Our team of experienced engineers and technicians is dedicated to delivering high-quality products and exceptional service.',
  image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop',
  footerMessage:
    'Partner with us to bring your electronic projects to life. We are committed to your success and ready to support you every step of the way.',
};

// ===============================
//  Advantages
// ===============================
export const advantages: Advantage[] = [
  {
    title: 'Innovative Solutions',
    description:
      'Cutting-edge electronic solutions tailored to your specific needs. We stay ahead of industry trends to provide you with the most advanced technology.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop',
  },
  {
    title: 'Quality Assured',
    description:
      'Premium quality products with comprehensive warranties and certifications. Every product undergoes rigorous testing to ensure reliability and performance.',
    image: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=400&h=300&fit=crop',
  },
  {
    title: 'Expert Support',
    description:
      'Dedicated support team ready to assist you 24/7. Our experienced technicians provide prompt and professional assistance whenever you need it.',
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=400&h=300&fit=crop',
  },
  {
    title: 'Fast Delivery',
    description:
      'Quick and reliable delivery services to ensure your projects stay on schedule. We maintain strategic partnerships for efficient logistics.',
    image: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=400&h=300&fit=crop',
  },
  {
    title: 'Competitive Pricing',
    description:
      'Best value for your investment without compromising on quality. We offer flexible payment options and volume discounts for bulk orders.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=cropI',
  },
  {
    title: 'Custom Solutions',
    description:
      'Bespoke electronic solutions designed specifically for your unique requirements. Our engineering team works closely with you to create perfect solutions.',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=300&fit=crop',
  },
];

// ===============================
//  Product Catalog
// ===============================
export const productKatalog: ProductKatalog[] = [
  {
    name: 'Temperature Sensor TSX-100',
    description:
      'High-precision temperature sensor with digital output. Range: -40°C to +125°C. Accuracy: ±0.5°C. Compatible with all major PLC systems.',
    price: 450000,
    images: [
      'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=400&fit=crop&sat=-50',
    ],
  },
  {
    name: 'PLC Controller PLX-500',
    description:
      'Programmable logic controller for industrial automation. 32 I/O points, Ethernet connectivity, ladder logic programming. Perfect for medium-scale automation.',
    price: 3500000,
    images: [
      'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=400&fit=crop&sat=-50',
    ],
  },
  {
    name: 'Servo Motor SM-250',
    description:
      'High-torque servo motor with encoder feedback. Power: 250W, Speed: 3000 RPM, Torque: 0.8 Nm. Includes driver and cables.',
    price: 2100000,
    images: [
      'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=400&fit=crop',
    ],
  },
  {
    name: 'Power Supply Unit PSU-1000',
    description:
      'Industrial-grade power supply 1000W. Input: 220V AC, Output: 24V DC. Overload protection, short circuit protection, and thermal protection.',
    price: 1800000,
    images: [
      'https://images.unsplash.com/photo-1625948515291-69613efd103f?w=400&h=400&fit=crop',
    ],
  },
  {
    name: 'Proximity Sensor PRX-50',
    description:
      'Inductive proximity sensor with adjustable range. Detection distance: 2-8mm. PNP/NPN output. IP67 waterproof rating.',
    price: 320000,
    images: [
      'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=400&fit=crop&hue=180',
    ],
  },
  {
    name: 'HMI Touch Panel HMI-700',
    description:
      '7-inch color touch screen HMI panel. Resolution: 800x480. Modbus RTU/TCP support. Recipe management and data logging features.',
    price: 4200000,
    images: [
      'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=400&fit=crop',
    ],
  },
  {
    name: 'Pneumatic Valve PV-24V',
    description:
      'Solenoid pneumatic valve 24V DC. 5/2 way, port size: 1/4". Response time: <10ms. Suitable for air and inert gases.',
    price: 890000,
    images: [
      'https://images.unsplash.com/photo-1581092918484-8313b0702ee5?w=400&h=400&fit=crop',
    ],
  },
  {
    name: 'Cable Set CS-10M',
    description:
      'Shielded cable set 10 meters. Multi-core design with high-quality copper conductors. Suitable for signal transmission in industrial environments.',
    price: 250000,
    images: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop',
    ],
  },
  {
    name: 'DIN Rail Enclosure DRE-150',
    description:
      'Industrial DIN rail mounting enclosure. Size: 150x120x80mm. IP65 rated. Transparent door with mounting accessories included.',
    price: 650000,
    images: [
      'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=400&fit=crop&sat=-80',
    ],
  },
  {
    name: 'VFD Inverter VFD-750',
    description:
      'Variable Frequency Drive for motor control. Power: 0.75kW, Input: 3-phase 380V, Output frequency: 0-400Hz. V/F control and vector control.',
    price: 2750000,
    images: [
      'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=400&fit=crop&hue=270',
    ],
  },
  {
    name: 'Limit Switch LS-M5',
    description:
      'Heavy-duty limit switch with metal housing. Operating force: 5N. IP67 protection. Suitable for harsh industrial environments.',
    price: 180000,
    images: [
      'https://images.unsplash.com/photo-1625948515291-69613efd103f?w=400&h=400&fit=crop&hue=90',
    ],
  },
  {
    name: 'Relay Module RM-8CH',
    description:
      '8-channel relay module. 10A per channel, optocoupler isolation. Compatible with Arduino, Raspberry Pi, and PLC systems.',
    price: 420000,
    images: [
      'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=400&fit=crop&hue=120',
    ],
  },
];

// ===============================
//  Service Catalog
// ===============================
export const serviceKatalog: ServiceKatalog[] = [
  {
    name: 'Smart Home Automation',
    description:
      'Complete home automation system with intelligent control. Includes lighting control, climate management, security integration, and voice assistant compatibility. Professional installation and configuration included.',
    price: 15000000,
    images: [
      'https://images.unsplash.com/photo-1558002038-1055907df827?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1558002038-1055907df827?w=600&h=400&fit=crop&sat=-30',
    ],
  },
  {
    name: 'Industrial Control System',
    description:
      'Advanced control system for manufacturing facilities. Custom PLC programming, SCADA integration, process monitoring, and optimization. Complete with documentation and training.',
    price: 45000000,
    images: [
      'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=400&fit=crop',
    ],
  },
  {
    name: 'Security System Integration',
    description:
      'Comprehensive security solution with CCTV, access control, alarm system, and fire detection. Cloud storage, mobile monitoring, and 24/7 recording capabilities.',
    price: 25000000,
    images: [
      'https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=600&h=400&fit=crop',
    ],
  },
  {
    name: 'Energy Management System',
    description:
      'Smart energy monitoring and optimization system. Real-time power consumption tracking, cost analysis, automated load management, and renewable energy integration support.',
    price: 18000000,
    images: [
      'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&h=400&fit=crop',
    ],
  },
  {
    name: 'Building Automation',
    description:
      'Intelligent building management and automation. HVAC control, lighting management, energy optimization, and centralized monitoring system for commercial buildings.',
    price: 35000000,
    images: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop',
    ],
  },
  {
    name: 'Retail Point of Sale',
    description:
      'Modern POS system with inventory management. Multi-location support, barcode scanning, receipt printing, payment integration, and comprehensive reporting features.',
    price: 12000000,
    images: [
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
    ],
  },
];

// ===============================
//  Company Portfolio
// ===============================
export const companyPortfolio: CompanyPortfolio[] = [
  {
    name: 'PT Industri Manufaktur Indonesia',
    logo: 'https://images.unsplash.com/photo-1565373679280-b6bdbd62ce99?w=200&h=100&fit=crop&q=80',
    website: 'https://example.com',
    description:
      'Complete industrial automation system for automotive parts manufacturing. Implemented automated quality control and production monitoring.',
    since: 2018,
  },
  {
    name: 'CV Elektronik Nusantara',
    logo: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=200&h=100&fit=crop&q=80',
    website: 'https://example.com',
    description:
      'Supply chain management system integration with barcode tracking and real-time inventory monitoring.',
    since: 2019,
  },
  {
    name: 'Hotel Grand Luxury',
    logo: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=200&h=100&fit=crop&q=80',
    description:
      'Smart building automation including HVAC control, lighting management, and guest room automation system.',
    since: 2020,
  },
  {
    name: 'Supermarket Chain XYZ',
    logo: 'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=200&h=100&fit=crop&q=80',
    website: 'https://example.com',
    description:
      'Multi-branch POS system with centralized inventory management and real-time sales analytics.',
    since: 2017,
  },
  {
    name: 'PT Energi Terbarukan',
    logo: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=200&h=100&fit=crop&q=80',
    description:
      'Solar power monitoring system with energy management and automated grid switching.',
    since: 2021,
  },
  {
    name: 'Pabrik Makanan Sejahtera',
    logo: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=200&h=100&fit=crop&q=80',
    website: 'https://example.com',
    description:
      'Food processing automation with temperature control, packaging line automation, and quality assurance systems.',
    since: 2019,
  },
  {
    name: 'Rumah Sakit Modern',
    logo: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=200&h=100&fit=crop&q=80',
    description:
      'Hospital building automation including climate control, emergency power management, and medical equipment monitoring.',
    since: 2020,
  },
  {
    name: 'Warehouse Logistics Pro',
    logo: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=200&h=100&fit=crop&q=80',
    website: 'https://example.com',
    description:
      'Automated warehouse management system with conveyor control, sorting system, and inventory tracking.',
    since: 2018,
  },
  {
    name: 'Shopping Mall Plaza',
    logo: 'https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?w=200&h=100&fit=crop&q=80',
    description:
      'Integrated security and building automation system for large shopping complex with 500+ stores.',
    since: 2022,
  },
];

// ===============================
//  Complete Company Profile
// ===============================
export const companyProfile: CompanyProfile = {
  metadata: companyMetadata,
  motto: motto,
  banners: banners,
  aboutUs: aboutUs,
  advantages: advantages,
  productKatalog: productKatalog,
  serviceKatalog: serviceKatalog,
  portfolio: companyPortfolio,
};
