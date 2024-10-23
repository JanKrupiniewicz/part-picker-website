import { Cpu, Zap, Laptop, HardDrive, Monitor, Power } from "lucide-react";

export const MAIN_CATEGORIES = [
  { name: "CPU", icon: Cpu },
  { name: "Chłodzenie CPU", icon: Zap },
  { name: "Płyta główna", icon: Laptop },
  { name: "Pamięć", icon: HardDrive },
  { name: "Karta graficzna", icon: Monitor },
  { name: "Obudowa", icon: Laptop },
  { name: "Zasilacz", icon: Power },
  { name: "System operacyjny", icon: Laptop },
  { name: "Monitor", icon: Monitor },
];

export const PERIPHERALS = [
  { name: "Klawiatura", icon: Laptop },
  { name: "Mysz", icon: Laptop },
  { name: "Słuchawki", icon: Laptop },
  { name: "Mikrofon", icon: Laptop },
  { name: "Kamera", icon: Laptop },
  { name: "Głośniki", icon: Laptop },
  { name: "Podkładka", icon: Laptop },
];

export const DISPLAYS = [
  { name: "Monitor", icon: Monitor },
  { name: "Projektor", icon: Monitor },
];

export const SOFTWARE = [
  { name: "System operacyjny", icon: Laptop },
  { name: "Oprogramowanie", icon: Laptop },
];

export const EXPANSION = [
  { name: "Karta dźwiękowa", icon: Laptop },
  { name: "Karta sieciowa", icon: Laptop },
  { name: "Karta rozszerzeń", icon: Laptop },
];

export const ACCESSORIES = [
  { name: "Kontrolery", icon: Laptop },
  { name: "Wentylator", icon: Laptop },
  { name: "Zewnętrzny dysk twardy", icon: Laptop },
  { name: "Zasilacz bezprzewodowy", icon: Laptop },
  { name: "Napęd optyczny", icon: Laptop },
];
