import { ServiceItem, ProjectItem, WhyChooseUsItem } from '../types';

export const CONTACT_INFO = {
  phoneDisplay: "+91 96902 88828",
  phoneTel: "tel:+919690288828",
  whatsappUrl: "https://wa.me/919690288828?text=Hello%20MH%20Interior%20Design%20Amroha,%20I%20would%20like%20to%20inquire%20about%20interior%20services.",
  instagramUrl: "https://instagram.com/mh_interiordesign_amroha",
  youtubeUrl: "https://youtube.com/@mh_interiordesign",
  facebookUrl: "https://facebook.com",
  location: "Amroha District, Uttar Pradesh",
  email: "contact@mhinteriordesign.in"
};

export const HERO_DATA = {
  headline: "Turning Your Houses Into Dream Homes",
  subtitle: "Modern • Minimalist • Interiors",
  description: "Premier Interior Design Agency based in Amroha. We craft serene, elegant living spaces with bespoke 3D design, false ceilings, modular kitchens, and turnkey execution.",
  heroImages: [
    "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85",
    "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=85"
  ],
  stats: [
    { value: "350+", label: "Projects Completed" },
    { value: "100%", label: "Client Satisfaction" },
    { value: "Amroha", label: "District Flagship Studio" },
    { value: "3D Vastu", label: "Custom Layouts" }
  ]
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "residential",
    title: "Complete Home Interiors",
    description: "End-to-end turnkey interior design tailored to your lifestyle and budget with premium finishing.",
    icon: "Home"
  },
  {
    id: "kitchen",
    title: "Modular Kitchens",
    description: "Sleek, highly functional custom kitchens with soft-close hardware and seamless storage.",
    icon: "UtensilsCrossed"
  },
  {
    id: "ceiling",
    title: "False Ceiling & Lighting",
    description: "Architectural gypsum & wooden cove ceilings paired with ambient warm LED strip lighting.",
    icon: "Layers"
  },
  {
    id: "living",
    title: "Luxury Living Rooms",
    description: "Custom TV units, fluted wall panelling, Italian marble accents, and plush bespoke furniture.",
    icon: "Armchair"
  },
  {
    id: "commercial",
    title: "Commercial & Office",
    description: "Inspiring executive showrooms, boutique clinics, and modern corporate office environments.",
    icon: "Building2"
  },
  {
    id: "renovation",
    title: "3D Design & Renovation",
    description: "Realistic 3D Vastu walkthroughs and complete structural remodeling of existing residences.",
    icon: "Compass"
  }
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "p-1",
    title: "Modern Minimalist Villa",
    category: "Villa",
    location: "Amroha City",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=80",
    description: "Double-height living room featuring Italian marble flooring, warm cove lighting, and bespoke walnut panelling.",
    highlight: "Complete Turnkey Execution"
  },
  {
    id: "p-2",
    title: "Premium Modular Kitchen",
    category: "Modular Kitchen",
    location: "Amroha District",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=900&q=80",
    description: "Matte acrylic finish modular kitchen with built-in pantry units and concealed profile handles.",
    highlight: "Sintered Stone Countertop"
  },
  {
    id: "p-3",
    title: "Cove False Ceiling Suite",
    category: "False Ceiling",
    location: "Moradabad Road",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80",
    description: "Multi-layered gypsum ceiling with warm 3000K profile lights and modern geometric shadow gaps.",
    highlight: "Ambient Mood Lighting"
  },
  {
    id: "p-4",
    title: "Contemporary Residence",
    category: "Living Room",
    location: "Joya Road, Amroha",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=900&q=80",
    description: "Custom fluted TV console unit with tinted glass showcase cabinetry and designer lounge seating.",
    highlight: "Bespoke Furniture Design"
  },
  {
    id: "p-5",
    title: "Executive Residence Duplex",
    category: "Residential",
    location: "Amroha",
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=900&q=80",
    description: "Seamless indoor-outdoor living flow with custom glass partitions and Vastu-compliant spatial planning.",
    highlight: "Delivered On Time"
  },
  {
    id: "p-6",
    title: "Designer Bedroom Sanctuary",
    category: "Residential",
    location: "Amroha City",
    image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=900&q=80",
    description: "Upholstered acoustic bedhead wall with integrated reading sconces and minimalist sliding wardrobes.",
    highlight: "Custom Wardrobe Systems"
  }
];

export const WHY_CHOOSE_US_DATA: WhyChooseUsItem[] = [
  {
    id: "quality",
    title: "Premium Materials",
    description: "We use top-grade engineered woods, branded hardware, and durable luxury finishes.",
    icon: "ShieldCheck"
  },
  {
    id: "delivery",
    title: "On-Time Completion",
    description: "Systematic workflow ensuring project handover exactly on the promised schedule.",
    icon: "Clock"
  },
  {
    id: "transparent",
    title: "Transparent Consultation",
    description: "Clear itemized discussion with zero hidden costs or surprise charges.",
    icon: "FileText"
  },
  {
    id: "turnkey",
    title: "Single Point Contact",
    description: "From 3D blueprint to final decoration, our dedicated team handles 100% of the work.",
    icon: "Sparkles"
  }
];
