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

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import { Star, Search } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { PartsContext } from "@/services/providers/PartsContext";
import { Part, SAMPLE_PARTS } from "@/constants/sample-parts";
import ProductsTable from "@/components/products-table";
import { SidebarFilters } from "@/components/sidebar-filters";

const manufacturers = [
  "All",
  "Corsair",
  "NZXT",
  "Montech",
  "Fractal Design",
  "Lian Li",
  "Cooler Master",
  "Phanteks",
  "Thermaltake",
  "be quiet!",
];

export default function Products() {
  const router = useRouter();
  const selectedPartsCtx = useContext(PartsContext);

  const [filteredParts, setFilteredParts] = useState<Part[]>(SAMPLE_PARTS);
  const [priceRange, setPriceRange] = useState([100, 200]);
  const [selectedManufacturers, setSelectedManufacturers] = useState(["All"]);
  const [selectedRatings, setSelectedRatings] = useState<number[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  const itemsPerPage = 10;

  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredParts.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredParts.length / itemsPerPage);

  const pathname = usePathname();
  const category = pathname.split("/")[2];

  function addPart(product: Part): void {
    if (selectedPartsCtx.parts.find((part) => part.id === product.id)) {
      return;
    }

    selectedPartsCtx.addPart(product);
    router.push("/list");
  }

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

  function clearFilters() {
    setPriceRange([100, 200]);
    setSelectedManufacturers(["All"]);
    setSelectedRatings([]);
    setSearchTerm("");
  }

  useEffect(() => {
    let filtered = SAMPLE_PARTS;

    filtered = filtered.filter((part) => part.price < priceRange[0]);

    // // if (!selectedManufacturers.includes("All")) {
    // //   filtered = filtered.filter((part) =>
    // //     selectedManufacturers.includes(part.manufacturer)
    // //   );
    // // }

    if (selectedRatings.length > 0) {
      filtered = filtered.filter((part) =>
        selectedRatings.includes(Math.floor(part.rating))
      );
    }

    if (searchTerm) {
      filtered = filtered.filter((part) =>
        part.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredParts(filtered);
  }, [priceRange, searchTerm, selectedManufacturers, selectedRatings]);

  return (
    <>
      <SiteTitle title={`Wybierz ${category}`}></SiteTitle>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/4 space-y-6">
            <div className="bg-white p-4 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-4">Part List</h2>
              <div className="flex justify-between">
                <span>Parts</span>
                <span>{selectedPartsCtx.getNumerOfParts()}</span>
              </div>
              <div className="flex justify-between">
                <span>Total</span>
                <span>{selectedPartsCtx.getFullPrice()}</span>
              </div>
              <div className="mt-2">
                <span className="text-sm text-gray-600">
                  Estimated wattage: {selectedPartsCtx.getEstimatedWattage()}
                </span>
              </div>
            </div>
            <SidebarFilters
              priceRange={priceRange}
              setPriceRange={setPriceRange}
              selectedManufacturers={selectedManufacturers}
              handleManufacturerChange={handleManufacturerChange}
              setSelectedRatings={setSelectedRatings}
              clearFilters={clearFilters}
              selectedRatings={selectedRatings}
            />
          </div>
          <ProductsTable
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            addPart={addPart}
            currentItems={currentItems}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalPages={totalPages}
          />
        </div>
      </div>
    </>
  );
}
