export const TICKER_ITEMS = [
  "Single-origin coffee",
  "Open 7am till late",
  "Full dinner & wine menu",
  "Reservations open",
  "Roasted weekly, in-house",
];

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "About" },
  { href: "/locations", label: "Locations" },
  { href: "/contact", label: "Contact" },
];

export const MENU_PREVIEW: {
  slug: string;
  title: string;
  description: string;
  image: string;
  badge?: string;
}[] = [
  {
    slug: "coffee",
    title: "Coffee & Espresso",
    description: "Single-origin pour-overs, espresso, and milk classics.",
    image:
      "https://images.unsplash.com/photo-1497636577773-f1231844b336?w=900&q=80",
  },
  {
    slug: "brunch",
    title: "Breakfast & Brunch",
    description: "A full morning spread, served until 2pm daily.",
    image:
      "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=900&q=80",
  },
  {
    slug: "dinner",
    title: "Dinner",
    description: "Seasonal mains from our open kitchen, from 5pm.",
    image:
      "https://images.unsplash.com/photo-1580476262798-bddd9f4b7369?w=900&q=80",
    badge: "Chef's pick",
  },
  {
    slug: "dessert",
    title: "Dessert",
    description: "House-made, plated to close out the evening right.",
    image:
      "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=900&q=80",
    badge: "Guest favorite",
  },
];

export type MenuItem = {
  name: string;
  description: string;
  price: string;
};

export type MenuCategory = {
  slug: string;
  title: string;
  items: MenuItem[];
};

export const MENU_CATEGORIES: MenuCategory[] = [
  {
    slug: "coffee",
    title: "Coffee & Espresso",
    items: [
      { name: "Drip Coffee", description: "Rotating single-origin, brewed fresh hourly.", price: "3.50" },
      { name: "Espresso", description: "Double shot, rich and syrupy.", price: "3.00" },
      { name: "Cappuccino", description: "Espresso, steamed milk, deep foam.", price: "4.50" },
      { name: "Flat White", description: "Ristretto shots, silky micro-foam.", price: "4.75" },
      { name: "Caffè Latte", description: "Espresso with steamed milk, light foam.", price: "4.75" },
      { name: "Pour Over", description: "Hand-poured, single cup, single origin.", price: "5.50" },
      { name: "Cold Brew", description: "Steeped 18 hours, smooth and bold.", price: "4.50" },
      { name: "Iced Matcha Latte", description: "Ceremonial-grade matcha, oat milk.", price: "5.50" },
    ],
  },
  {
    slug: "brunch",
    title: "Breakfast & Brunch",
    items: [
      { name: "Butter Croissant", description: "Laminated fresh each morning.", price: "3.75" },
      { name: "Almond Croissant", description: "Filled and topped with almond cream.", price: "4.50" },
      { name: "Belgian Waffle", description: "Whipped mascarpone, seasonal berries, maple.", price: "12.00" },
      { name: "Shakshuka", description: "Baked eggs, charred tomato, feta, grilled bread.", price: "13.50" },
      { name: "Granola Bowl", description: "House granola, yogurt, seasonal fruit.", price: "9.50" },
      { name: "Smoked Salmon Toast", description: "Sourdough, whipped ricotta, dill, capers.", price: "14.50" },
    ],
  },
  {
    slug: "lunch",
    title: "Lunch",
    items: [
      { name: "Avocado Toast", description: "Sourdough, chili flake, lemon, soft egg.", price: "12.50" },
      { name: "Roasted Chicken Salad", description: "Little gem, pear, walnut, blue cheese.", price: "15.00" },
      { name: "Turkey Pesto Panini", description: "Roasted turkey, pesto, provolone, fries.", price: "14.50" },
      { name: "Vietnamese Summer Rolls", description: "Herbs, rice noodle, peanut dip.", price: "13.00" },
      { name: "Soup of the Day", description: "Ask your server what's simmering.", price: "8.00" },
    ],
  },
  {
    slug: "dinner",
    title: "Dinner",
    items: [
      { name: "Seared Salmon", description: "Citrus salsa, sautéed greens, herb oil.", price: "28.00" },
      { name: "Braised Short Rib", description: "Root vegetable purée, red wine jus.", price: "32.00" },
      { name: "Wild Mushroom Risotto", description: "Parmesan, truffle oil, crisp sage.", price: "24.00" },
      { name: "Roast Chicken", description: "Confit potatoes, charred lemon, jus.", price: "26.00" },
      { name: "House Pasta", description: "Rotating seasonal preparation, made fresh daily.", price: "22.00" },
    ],
  },
  {
    slug: "wine",
    title: "Wine & Cocktails",
    items: [
      { name: "Amber Old Fashioned", description: "House bourbon, orange bitters, smoked sugar.", price: "15.00" },
      { name: "Espresso Martini", description: "Vodka, espresso, coffee liqueur.", price: "15.00" },
      { name: "House Red", description: "Glass of our rotating natural red.", price: "13.00" },
      { name: "House White", description: "Glass of our rotating natural white.", price: "13.00" },
      { name: "Seasonal Spritz", description: "Sparkling wine, bitter aperitivo, citrus.", price: "14.00" },
    ],
  },
  {
    slug: "dessert",
    title: "Dessert",
    items: [
      { name: "Brownie Sundae", description: "Warm brownie, vanilla bean ice cream, caramel.", price: "10.00" },
      { name: "Crème Brûlée", description: "Madagascar vanilla, torched sugar shell.", price: "9.50" },
      { name: "Tiramisu", description: "House espresso, mascarpone, cocoa.", price: "10.50" },
      { name: "Affogato", description: "Vanilla gelato, double espresso.", price: "7.50" },
    ],
  },
];

export const LOCATIONS = [
  {
    name: "Downtown",
    address: "214 Elm Street, Downtown",
    hours: "Mon–Sun · 7:00am – 10:00pm",
    image:
      "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=900&q=80",
  },
  {
    name: "Riverside",
    address: "88 Riverside Ave, Old Mill District",
    hours: "Mon–Sun · 7:00am – 11:00pm",
    image:
      "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?w=900&q=80",
  },
  {
    name: "Northgate",
    address: "1350 Northgate Blvd, Suite 4",
    hours: "Mon–Fri · 6:30am – 9:00pm",
    image:
      "https://images.unsplash.com/photo-1543007630-9710e4a00a20?w=900&q=80",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "Morning espresso, evening tasting menu — same warm room, same care either way. It's rare to find both done this well.",
    name: "Maria T.",
    initials: "MT",
    role: "Regular since 2019",
    rating: 5,
    source: "Google",
  },
  {
    quote:
      "The short rib alone is worth the reservation. Best flat white in the city too, no contest.",
    name: "Devon K.",
    initials: "DK",
    role: "Food blogger",
    rating: 5,
    source: "Yelp",
  },
  {
    quote:
      "I've worked from the Riverside spot every week for a year, and I've brought a dozen people back for dinner. Never rushed, always excellent.",
    name: "Priya S.",
    initials: "PS",
    role: "Remote worker",
    rating: 5,
    source: "In-store",
  },
];

export const STATS = [
  { value: 12, suffix: "+", label: "Years in the neighborhood" },
  { value: 24, suffix: "", label: "Single-origin lots this year" },
  { value: 3, suffix: "", label: "Locations, one standard" },
  { value: 6, suffix: "am–11pm", label: "Coffee to closing" },
];
