export interface Part {
  id: number;
  name: string;
  rating: number;
  price: number;
  wattage: number;
  category: string;
}

export const SAMPLE_PARTS: Part[] = [
  {
    id: 1,
    name: "AMD Ryzen 5 5600X",
    rating: 4.5,
    price: 299.99,
    wattage: 65,
    category: "CPU",
  },
  {
    id: 2,
    name: "Intel Core i5-12600K",
    rating: 4.5,
    price: 299.99,
    wattage: 125,
    category: "CPU",
  },
  {
    id: 3,
    name: "NVIDIA GeForce RTX 3080",
    rating: 4.8,
    price: 699.99,
    wattage: 320,
    category: "CPU",
  },
  {
    id: 4,
    name: "Corsair Vengeance LPX 16GB",
    rating: 4.7,
    price: 89.99,
    wattage: 10,
    category: "CPU",
  },
  {
    id: 5,
    name: "Samsung 970 EVO Plus 1TB",
    rating: 4.9,
    price: 169.99,
    wattage: 5,
    category: "CPU",
  },
  {
    id: 6,
    name: "ASUS ROG Strix B550-F",
    rating: 3.1,
    price: 189.99,
    wattage: 15,
    category: "CPU",
  },
  {
    id: 7,
    name: "Cooler Master Hyper 212",
    rating: 4.8,
    price: 34.99,
    wattage: 4,
    category: "CPU",
  },
  {
    id: 8,
    name: "EVGA SuperNOVA 750 G5",
    rating: 3.3,
    price: 129.99,
    wattage: 750,
    category: "CPU",
  },
  {
    id: 9,
    name: "Ania H510",
    rating: 5.0,
    price: 69.99,
    wattage: 0,
    category: "CPU",
  },
  {
    id: 10,
    name: "Artur 2TB HDD",
    rating: 4.9,
    price: 54.99,
    wattage: 6,
    category: "CPU",
  },
  {
    id: 11,
    name: "MSI Sebastian 32GB",
    rating: 2.6,
    price: 159.99,
    wattage: 15,
    category: "CPU",
  },
  {
    id: 12,
    name: "G. Krupiniewicz V 32GB",
    rating: 2.8,
    price: 149.99,
    wattage: 10,
    category: "CPU",
  },
  {
    id: 13,
    name: "NZ H51000",
    rating: 2.6,
    price: 69.99,
    wattage: 0,
    category: "CPU",
  },
  {
    id: 14,
    name: "Seagate 4TB",
    rating: 3.5,
    price: 54.99,
    wattage: 6,
    category: "CPU",
  },
  {
    id: 15,
    name: "MAG TOMAHAWK",
    rating: 3.6,
    price: 159.99,
    wattage: 15,
    category: "CPU",
  },
  {
    id: 16,
    name: "G.Skill 64GB",
    rating: 4.8,
    price: 149.99,
    wattage: 10,
    category: "CPU",
  },
];

export const SAMPLE_CPU = [
  {
    id: 1,
    name: "AMD Ryzen 5 5600X",
    rating: 4.5,
    price: 299.99,
    wattage: 65,
  },
  {
    id: 2,
    name: "Intel Core i5-12600K",
    rating: 4.5,
    price: 299.99,
    wattage: 125,
  },
];

export const SAMPLE_CPU_COOLERS = [
  {
    id: 1,
    name: "Cooler Master Hyper 212",
    rating: 4.4,
    price: 34.99,
    wattage: 4,
  },
  {
    id: 2,
    name: "Noctua NH-D15",
    rating: 4.9,
    price: 99.99,
    wattage: 5,
  },
];

export const SAMPLE_MOTHERBOARDS = [
  {
    id: 1,
    name: "ASUS ROG Strix B550-F",
    rating: 4.6,
    price: 189.99,
    wattage: 15,
  },
  {
    id: 2,
    name: "MSI MAG B550 TOMAHAWK",
    rating: 3.6,
    price: 159.99,
    wattage: 15,
  },
];
