import { useContext } from "react";
import Image from "next/image";
import { PartsContext } from "@/services/providers/PartsContext";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Part } from "@/constants/sample-parts";
import { ChevronRight } from "lucide-react";

interface Merchant {
  name: string;
  logo: string;
}

interface PriceInfo {
  base: number;
  promo: number;
  shipping: number;
  tax: number;
}

interface PartPricing {
  part: Part;
  prices: Record<string, PriceInfo>;
}

const merchants: Merchant[] = [
  { name: "Amazon", logo: "/logos/amazon.png" },
  { name: "Newegg", logo: "/logos/newegg.png" },
  { name: "MemoryC", logo: "/logos/memoryc.png" },
];

export function PricesByMerchant() {
  const { parts } = useContext(PartsContext);

  const partPricing: PartPricing[] = parts.map((part) => ({
    part: {
      id: part.id,
      name: part.name,
      category: part.category,
      rating: part.rating,
      price: part.price,
      wattage: part.wattage,
    },
    prices: {
      Amazon: { base: part.price, promo: 0, shipping: 0, tax: 0 },
      Newegg: { base: part.price * 0.98, promo: 0, shipping: 5, tax: 0 },
      MemoryC: { base: part.price * 1.05, promo: 10, shipping: 0, tax: 0 },
    },
  }));

  const calculateTotal = (merchant: string) => {
    return partPricing.reduce((total, item) => {
      const price = item.prices[merchant];
      return total + price.base - price.promo + price.shipping + price.tax;
    }, 0);
  };

  return (
    <div className="space-y-8">
      {merchants.map((merchant) => (
        <div key={merchant.name} className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex space-x-5 items-center mb-4">
            <ChevronRight width="50" height="50" />
            <h2 className="text-2xl font-bold">{merchant.name}</h2>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Komponent</TableHead>
                <TableHead>Wybór</TableHead>
                <TableHead className="text-right">Cena podstawowa</TableHead>
                <TableHead className="text-right">Promocja</TableHead>
                <TableHead className="text-right">Wysyłka</TableHead>
                <TableHead className="text-right">Podatek</TableHead>
                <TableHead className="text-right">Cena</TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {partPricing.map((item) => {
                const price = item.prices[merchant.name];
                const totalPrice =
                  price.base - price.promo + price.shipping + price.tax;
                return (
                  <TableRow key={item.part.id}>
                    <TableCell>{item.part.category}</TableCell>
                    <TableCell className="flex items-center">
                      {item.part.name}
                    </TableCell>
                    <TableCell className="text-right">
                      ${price.base.toFixed(2)}
                    </TableCell>
                    <TableCell className="text-right">
                      ${price.promo.toFixed(2)}
                    </TableCell>
                    <TableCell className="text-right">
                      ${price.shipping.toFixed(2)}
                    </TableCell>
                    <TableCell className="text-right">
                      ${price.tax.toFixed(2)}
                    </TableCell>
                    <TableCell className="text-right font-bold">
                      ${totalPrice.toFixed(2)}
                    </TableCell>
                    <TableCell>
                      <Button size="sm">Kup</Button>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
          <div className="flex justify-between items-center mt-4 text-xl font-bold">
            {partPricing.length === 1 ? (
              <span>Razem {partPricing.length} przedmiot:</span>
            ) : (
              <span>Razem {partPricing.length} przedmiotów:</span>
            )}
            <span>${calculateTotal(merchant.name).toFixed(2)}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
