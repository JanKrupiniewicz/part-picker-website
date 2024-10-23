import { SubsiteTitle } from "@/components/subside-title-bar";
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Cpu, HardDrive, Laptop, Monitor, Power, Zap } from "lucide-react";
import Link from "next/link";

export default function BuilderPage() {
  const components = [
    {
      name: "CPU",
      icon: Cpu,
      selected: "AMD Ryzen 7 7800X3D 4.2 GHz 8-Core Processor",
      price: 476.76,
    },
    { name: "CPU Cooler", icon: Zap },
    { name: "Motherboard", icon: Laptop },
    { name: "Memory", icon: HardDrive },
    { name: "Storage", icon: HardDrive },
    { name: "Video Card", icon: Monitor },
    { name: "Case", icon: Laptop },
    { name: "Power Supply", icon: Power },
    { name: "Operating System", icon: Laptop },
    { name: "Monitor", icon: Monitor },
  ];

  return (
    <>
      <SubsiteTitle title="Wybierz swoje części" />
      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="overview" className="w-full">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="prices">Prices By Merchant</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="space-y-4">
            <div className="flex justify-between items-center bg-green-100 dark:bg-green-900 p-4 rounded-lg">
              <div className="flex items-center">
                <Zap className="mr-2" />
                <span>
                  Compatibility: No issues or incompatibilities found.
                </span>
              </div>
              <div>
                <span className="font-bold">Estimated Wattage: 162W</span>
              </div>
            </div>
            <div className="flex justify-between items-center mb-4">
              <Input
                className="w-1/3"
                placeholder="https://pcpartpicker.com/list/kXkb3y"
              />
              <div className="space-x-2">
                <Button variant="outline">
                  <Zap className="mr-2 h-4 w-4" /> Export
                </Button>
                <Button variant="outline">
                  <HardDrive className="mr-2 h-4 w-4" /> Save As
                </Button>
                <Button>
                  <Power className="mr-2 h-4 w-4" /> Start New
                </Button>
              </div>
            </div>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[250px]">Component</TableHead>
                  <TableHead>Selection</TableHead>
                  <TableHead className="text-right">Price</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {components.map((component) => (
                  <TableRow key={component.name}>
                    <TableCell className="font-medium">
                      <div className="flex items-center">
                        <component.icon className="mr-2 h-4 w-4" />
                        {component.name}
                      </div>
                    </TableCell>
                    <TableCell>
                      {component.selected ? (
                        <div className="flex justify-between items-center">
                          <span>{component.selected}</span>
                          <Button variant="ghost" size="sm">
                            Remove
                          </Button>
                        </div>
                      ) : (
                        <Button variant="outline" size="sm">
                          Choose {component.name}
                        </Button>
                      )}
                    </TableCell>
                    <TableCell className="text-right">
                      {component.price ? `$${component.price.toFixed(2)}` : ""}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <div className="flex justify-between items-center mt-4">
              <span className="text-2xl font-bold">Total:</span>
              <span className="text-2xl font-bold">$476.76</span>
            </div>
            <Button className="w-full mt-4">Buy From Amazon</Button>
          </TabsContent>
          <TabsContent value="prices">
            <p>Prices by merchant content goes here.</p>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
}
