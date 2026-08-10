export const SHOP = {
  name: "Balaji Pan & Bakery Shop",
  nameHi: "बालाजी पान एंड बेकरी शॉप",
  tagline: "Bandol ki Sabse Pasandida Dukaan",
  address: "Main Market, Bandol, Madhya Pradesh",
  hours: "8:00 AM - 10:00 PM",
  phone: "+91 8889836913",
  whatsapp: "91 8889836913",
  mapsUrl: "https://maps.app.goo.gl/QnYyra7REPgCbdpB7",
};

export function waLink(item?: string) {
  const base = "Namaste! Main Balaji Pan & Bakery Shop se order karna chahta/chahti hoon.";
  const text = item ? `${base} Item: ${item}` : base;
  return `https://wa.me/${SHOP.whatsapp}?text=${encodeURIComponent(text)}`;
}

export const telLink = `tel:${SHOP.phone.replace(/\s/g, "")}`;

export type Category = {
  slug: string;
  name: string;
  nameHi: string;
  emoji: string;
  count: string;
  image: string;
};

export const categories: Category[] = [
  {
    slug: "bakery",
    name: "Bakery & Cakes",
    nameHi: "बेकरी और केक",
    emoji: "🎂",
    count: "25+ items",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&h=600&fit=crop",
  },
  {
    slug: "drinks",
    name: "Cold Drinks",
    nameHi: "कोल्ड ड्रिंक्स",
    emoji: "🥤",
    count: "30+ items",
    image: "https://images.unsplash.com/photo-1581636625402-29b2a704ef13?w=800&h=600&fit=crop",
  },
  {
    slug: "pan",
    name: "Pan Corner",
    nameHi: "पान कॉर्नर",
    emoji: "🍬",
    count: "40+ items",
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=800&h=600&fit=crop",
  },
  {
    slug: "grocery",
    name: "Grocery",
    nameHi: "किराना",
    emoji: "🛒",
    count: "50+ items",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&h=600&fit=crop",
  },
];

export type Product = {
  id: string;
  name: string;
  nameHi: string;
  group: string;
  category: string;
  price: number;
  popular?: boolean;
  image: string;
};

export const products: Product[] = [
  {
    id: "birthday-cake",
    name: "Birthday Cake",
    nameHi: "बर्थडे केक",
    group: "Cakes",
    category: "bakery",
    price: 450,
    popular: true,
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&h=600&fit=crop",
  },
  {
    id: "black-forest",
    name: "Black Forest Cake",
    nameHi: "ब्लैक फॉरेस्ट केक",
    group: "Cakes",
    category: "bakery",
    price: 550,
    popular: true,
    image: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=600&h=600&fit=crop",
  },
  {
    id: "veg-patties",
    name: "Veg Patties",
    nameHi: "वेज पेटीज",
    group: "Pastries",
    category: "bakery",
    price: 25,
    popular: true,
    image: "https://images.unsplash.com/photo-1619221882220-947b3d3c8861?w=600&h=600&fit=crop",
  },
  {
    id: "cream-roll",
    name: "Cream Roll",
    nameHi: "क्रीम रोल",
    group: "Pastries",
    category: "bakery",
    price: 20,
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&h=600&fit=crop",
  },
  {
    id: "toast-rusk",
    name: "Toast Rusk",
    nameHi: "टोस्ट रस्क",
    group: "Bakery",
    category: "bakery",
    price: 60,
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&h=600&fit=crop",
  },
  {
    id: "coca-cola",
    name: "Coca-Cola",
    nameHi: "कोका-कोला",
    group: "Soft Drinks",
    category: "drinks",
    price: 40,
    popular: true,
    image: "https://images.unsplash.com/photo-1554866585-cd94860890b7?w=600&h=600&fit=crop",
  },
  {
    id: "thumbs-up",
    name: "Thumbs Up",
    nameHi: "थम्स अप",
    group: "Soft Drinks",
    category: "drinks",
    price: 40,
    popular: true,
    image: "https://images.unsplash.com/photo-1624517452488-04869289c4ca?w=600&h=600&fit=crop",
  },
  {
    id: "mango-frooti",
    name: "Mango Frooti",
    nameHi: "मैंगो फ्रूटी",
    group: "Juice",
    category: "drinks",
    price: 20,
    popular: true,
    image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=600&h=600&fit=crop",
  },
  {
    id: "cold-water",
    name: "Chilled Water Bottle",
    nameHi: "ठंडा पानी बोतल",
    group: "Water",
    category: "drinks",
    price: 20,
    image: "https://images.unsplash.com/photo-1560023907-5f339617ea30?w=600&h=600&fit=crop",
  },
  {
    id: "meetha-pan",
    name: "Meetha Pan",
    nameHi: "मीठा पान",
    group: "Pan",
    category: "pan",
    price: 30,
    popular: true,
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=600&h=600&fit=crop",
  },
  {
    id: "mouth-freshener",
    name: "Mouth Freshener",
    nameHi: "माउथ फ्रेशनर",
    group: "Freshener",
    category: "pan",
    price: 5,
    popular: true,
    image: "https://images.unsplash.com/photo-1571506165871-ee72a35bc9d4?w=600&h=600&fit=crop",
  },
  {
    id: "banarasi-pan",
    name: "Banarasi Pan",
    nameHi: "बनारसी पान",
    group: "Pan",
    category: "pan",
    price: 50,
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=600&h=600&fit=crop",
  },
  {
    id: "kurkure",
    name: "Kurkure Pack",
    nameHi: "कुरकुरे पैक",
    group: "Snacks",
    category: "grocery",
    price: 20,
    popular: true,
    image: "https://images.unsplash.com/photo-1599490659213-e2b9527bd087?w=600&h=600&fit=crop",
  },
  {
    id: "lays",
    name: "Lays Chips",
    nameHi: "लेज चिप्स",
    group: "Snacks",
    category: "grocery",
    price: 20,
    popular: true,
    image: "https://images.unsplash.com/photo-1566478989037-eec170784d0b?w=600&h=600&fit=crop",
  },
  {
    id: "biscuit-pack",
    name: "Biscuit Pack",
    nameHi: "बिस्कुट पैक",
    group: "Snacks",
    category: "grocery",
    price: 10,
    image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600&h=600&fit=crop",
  },
  {
    id: "tea-pack",
    name: "Tea Pack",
    nameHi: "चाय पत्ती",
    group: "Grocery",
    category: "grocery",
    price: 70,
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=600&h=600&fit=crop",
  },
];

export const popular = products.filter((p) => p.popular);
