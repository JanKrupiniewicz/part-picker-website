// components/SidebarFilters.tsx
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

type SidebarFiltersProps = {
  priceRange: number[];
  setPriceRange: (range: number[]) => void;
  selectedManufacturers: string[];
  handleManufacturerChange: (manufacturer: string) => void;
  selectedRatings: number[];
  setSelectedRatings: (
    ratings: number[] | ((prev: number[]) => number[])
  ) => void;
  clearFilters: () => void;
};

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

export const SidebarFilters: React.FC<SidebarFiltersProps> = ({
  priceRange,
  setPriceRange,
  selectedManufacturers,
  handleManufacturerChange,
  setSelectedRatings,
  clearFilters,
}) => (
  <>
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
          <div key={manufacturer} className="flex items-center space-x-2 mt-2">
            <Checkbox
              id={manufacturer}
              checked={selectedManufacturers.includes(manufacturer)}
              onCheckedChange={() => handleManufacturerChange(manufacturer)}
            />
            <Label htmlFor={manufacturer}>{manufacturer}</Label>
          </div>
        ))}
      </div>
      <div>
        <Label>Rating</Label>
        {[5, 4, 3].map((rating) => (
          <div key={rating} className="flex items-center space-x-2 mt-2">
            <Checkbox
              onClick={() =>
                setSelectedRatings((prev: number[]) =>
                  prev.includes(rating)
                    ? prev.filter((r: number) => r !== rating)
                    : [...prev, rating]
                )
              }
              id={String(rating)}
            />
            <Label htmlFor={String(rating)}>{rating} Stars</Label>
          </div>
        ))}
      </div>
      <Button onClick={() => clearFilters()} variant="outline" size="sm">
        Clear Filters
      </Button>
    </div>
  </>
);
