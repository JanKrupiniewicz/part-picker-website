"use client";

import { SiteTitle } from "@/components/ui/site-title";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Star, Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

// Mock data for demonstration
const products = [
  {
    id: 1,
    name: "Corsair 4000D Airflow",
    type: "ATX Mid Tower",
    color: "Black",
    powerSupply: "None",
    sidePanel: "Tinted Tempered Glass",
    externalVolume: "48.6 L",
    internalBays: 2,
    rating: 4.5,
    reviews: 350,
    price: 104.99,
  },
  {
    id: 2,
    name: "NZXT H5 Flow (2022)",
    type: "ATX Mid Tower",
    color: "Black",
    powerSupply: "None",
    sidePanel: "Tempered Glass",
    externalVolume: "47.0 L",
    internalBays: 1,
    rating: 4.5,
    reviews: 37,
    price: 79.98,
  },
  {
    id: 3,
    name: "Montech XR",
    type: "ATX Mid Tower",
    color: "Black",
    powerSupply: "None",
    sidePanel: "Tempered Glass",
    externalVolume: "45.0 L",
    internalBays: 2,
    rating: 5,
    reviews: 4,
    price: 63.9,
  },
  // Add more products as needed
];

const manufacturers = [
  "All",
  "Corsair",
  "Fractal Design",
  "Lian Li",
  "Montech",
  "NZXT",
];

export default function Products() {
  const router = useRouter();
  // const { category } = router.query;
  const [priceRange, setPriceRange] = useState([0, 200]);
  const [selectedManufacturers, setSelectedManufacturers] = useState(["All"]);

  const handleManufacturerChange = (manufacturer: string) => {
    if (manufacturer === "All") {
      setSelectedManufacturers(["All"]);
    } else {
      const newSelected = selectedManufacturers.includes(manufacturer)
        ? selectedManufacturers.filter((m) => m !== manufacturer && m !== "All")
        : [...selectedManufacturers.filter((m) => m !== "All"), manufacturer];
      setSelectedManufacturers(newSelected.length ? newSelected : ["All"]);
    }
  };

  return (
    <>
      <SiteTitle title={`Wybierz CPU`}></SiteTitle>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <div className="w-full md:w-1/4 space-y-6">
            <div className="bg-white p-4 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-4">Part List</h2>
              <div className="flex justify-between">
                <span>Parts</span>
                <span>1</span>
              </div>
              <div className="flex justify-between">
                <span>Total</span>
                <span>$476.76</span>
              </div>
              <div className="mt-2">
                <span className="text-sm text-gray-600">
                  Estimated wattage: 162W
                </span>
              </div>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-4">Filters</h2>
              <div className="space-y-4">
                <div>
                  <Label>Price Range</Label>
                  <Slider
                    min={0}
                    max={200}
                    step={1}
                    value={priceRange}
                    onValueChange={setPriceRange}
                    className="mt-2"
                  />
                  <div className="flex justify-between mt-2">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>
                <div>
                  <Label>Manufacturer</Label>
                  {manufacturers.map((manufacturer) => (
                    <div
                      key={manufacturer}
                      className="flex items-center space-x-2 mt-2"
                    >
                      <Checkbox
                        id={manufacturer}
                        checked={selectedManufacturers.includes(manufacturer)}
                        onCheckedChange={() =>
                          handleManufacturerChange(manufacturer)
                        }
                      />
                      <Label htmlFor={manufacturer}>{manufacturer}</Label>
                    </div>
                  ))}
                </div>
                {/* More filters as needed in progress */}
              </div>
            </div>
          </div>
          {/* Main content */}
          <div className="w-full md:w-3/4">
            <div className="flex justify-between items-center mb-4">
              <div className="flex space-x-2">
                <Button variant="outline" size="sm">
                  Select All
                </Button>
                <Button variant="outline" size="sm">
                  Select None
                </Button>
                <Button variant="outline" size="sm">
                  Compare Selected
                </Button>
              </div>
              <div className="relative">
                <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input className="pl-8" placeholder="Search cases..." />
              </div>
            </div>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[250px]">Name</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Color</TableHead>
                  <TableHead>Side Panel</TableHead>
                  <TableHead>Volume</TableHead>
                  <TableHead>Rating</TableHead>
                  <TableHead className="text-right">Price</TableHead>
                  <TableHead></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {products.map((product) => (
                  <TableRow key={product.id}>
                    <TableCell className="font-medium">
                      {product.name}
                    </TableCell>
                    <TableCell>{product.type}</TableCell>
                    <TableCell>{product.color}</TableCell>
                    <TableCell>{product.sidePanel}</TableCell>
                    <TableCell>{product.externalVolume}</TableCell>
                    <TableCell>
                      <div className="flex items-center">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < Math.floor(product.rating)
                                ? "text-yellow-400 fill-current"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                        <span className="ml-1 text-sm text-gray-600">
                          ({product.reviews})
                        </span>
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      ${product.price.toFixed(2)}
                    </TableCell>
                    <TableCell>
                      <Button size="sm">Add</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </>
  );
}
