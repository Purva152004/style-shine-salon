import logoNew from "@/assets/logonew.png";

export const LOGO_URL = logoNew;

export const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/hair", label: "Hair" },
  { to: "/skin", label: "Skin" },
  { to: "/bridal-makeup", label: "Bridal & Makeup" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;

export const BRAND = {
  name: "Style & Shine",
  fullName: "Style & Shine Salon",
  tagline: "Refined Beauty. Honest Care. Real Results.",
  values: ["Trust", "Transformation", "Transparency"],
  phone: "9741029513",
  phoneDisplay: "+91 97410 29513",
  instagram: "@styleandshinesalon",
  instagramUrl: "https://instagram.com/styleandshinesalon",
  address: "Vijaynagar, Bangalore",
  hours: [
    { day: "Mon – Sat", time: "10:00 AM – 9:00 PM" },
    { day: "Sunday", time: "11:00 AM – 7:00 PM" },
  ],
};
