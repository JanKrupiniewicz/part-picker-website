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
    category: "GPU",
  },
  {
    id: 4,
    name: "Corsair Vengeance LPX 16GB",
    rating: 4.7,
    price: 89.99,
    wattage: 10,
    category: "RAM",
  },
  {
    id: 5,
    name: "Samsung 970 EVO Plus 1TB",
    rating: 4.9,
    price: 169.99,
    wattage: 5,
    category: "Storage",
  },
  {
    id: 6,
    name: "ASUS ROG Strix B550-F",
    rating: 4.6,
    price: 189.99,
    wattage: 15,
    category: "Motherboard",
  },
  {
    id: 7,
    name: "Cooler Master Hyper 212",
    rating: 4.4,
    price: 34.99,
    wattage: 4,
    category: "Cooling",
  },
  {
    id: 8,
    name: "EVGA SuperNOVA 750 G5",
    rating: 4.7,
    price: 129.99,
    wattage: 750,
    category: "PSU",
  },
  {
    id: 9,
    name: "NZXT H510",
    rating: 4.6,
    price: 69.99,
    wattage: 0,
    category: "Case",
  },
  {
    id: 10,
    name: "Seagate Barracuda 2TB",
    rating: 4.5,
    price: 54.99,
    wattage: 6,
    category: "Storage",
  },
  {
    id: 11,
    name: "MSI MAG B550 TOMAHAWK",
    rating: 3.6,
    price: 159.99,
    wattage: 15,
    category: "Motherboard",
  },
  {
    id: 12,
    name: "G.Skill Ripjaws V 32GB",
    rating: 4.8,
    price: 149.99,
    wattage: 10,
    category: "RAM",
  },
];
