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

  const itemsPerPage = 4;

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
          {/* Sidebar */}
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
                    onValueChange={(e) => setPriceRange(e)}
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
                <div>
                  <Label>Rating</Label>
                  <div className="flex items-center space-x-2 mt-2">
                    <Checkbox
                      onClick={() =>
                        setSelectedRatings((prevState) =>
                          prevState.includes(5)
                            ? prevState.filter((rating) => rating !== 5)
                            : [...prevState, 5]
                        )
                      }
                      id="5"
                    />
                    <Label htmlFor="5">5 Stars</Label>
                  </div>
                  <div className="flex items-center space-x-2 mt-2">
                    <Checkbox
                      onClick={() =>
                        setSelectedRatings((prevState) =>
                          prevState.includes(4)
                            ? prevState.filter((rating) => rating !== 4)
                            : [...prevState, 4]
                        )
                      }
                      id="4"
                    />
                    <Label htmlFor="4">4 Stars</Label>
                  </div>
                  <div className="flex items-center space-x-2 mt-2">
                    <Checkbox
                      onClick={() =>
                        setSelectedRatings((prevState) =>
                          prevState.includes(3)
                            ? prevState.filter((rating) => rating !== 3)
                            : [...prevState, 3]
                        )
                      }
                      id="3"
                    />
                    <Label htmlFor="3">3 Stars</Label>
                  </div>
                </div>
                <Button
                  onClick={() => clearFilters()}
                  variant="outline"
                  size="sm"
                >
                  Clear Filters
                </Button>
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
                <Input
                  className="pl-8"
                  placeholder="Search cases..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[250px]">Name</TableHead>
                  <TableHead>Rating</TableHead>
                  <TableHead className="text-right">Price</TableHead>
                  <TableHead></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {currentItems.map((product) => (
                  <TableRow key={product.id}>
                    <TableCell className="font-medium">
                      {product.name}
                    </TableCell>
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
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      ${product.price.toFixed(2)}
                    </TableCell>
                    <TableCell>
                      <Button onClick={() => addPart(product)} size="sm">
                        Add
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>

            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    href="#"
                    onClick={() =>
                      setCurrentPage((prev) => Math.max(prev - 1, 1))
                    }
                    aria-disabled={currentPage === 1}
                  />
                </PaginationItem>
                {[...Array(totalPages)].map((_, index) => (
                  <PaginationItem key={index}>
                    <PaginationLink
                      href="#"
                      onClick={() => setCurrentPage(index + 1)}
                      isActive={currentPage === index + 1}
                    >
                      {index + 1}
                    </PaginationLink>
                  </PaginationItem>
                ))}
                <PaginationItem>
                  <PaginationNext
                    href="#"
                    onClick={() =>
                      setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                    }
                    aria-disabled={currentPage === totalPages}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      </div>
    </>
  );
}
