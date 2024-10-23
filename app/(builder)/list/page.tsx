import { SiteTitle } from "@/components/ui/site-title";
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
import { MAIN_CATEGORIES } from "@/constants/categories";

export default function Builder() {
  return (
    <>
      <SiteTitle title="Wybierz swoje części" />
      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="overview" className="w-full">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="prices">Prices By Merchant</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="space-y-4">
            <div className="flex justify-between items-center bg-primary p-4 rounded-lg">
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
                  <TableHead className="w-[250px]">Komponent</TableHead>
                  <TableHead>Twój wybór</TableHead>
                  <TableHead className="text-right">Cena</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {MAIN_CATEGORIES.map((category) => (
                  <TableRow key={category.name}>
                    <TableCell className="font-medium">
                      <div className="flex items-center">
                        <category.icon className="mr-2 h-4 w-4" />
                        {category.name}
                      </div>
                    </TableCell>
                    <TableCell>
                      <Button
                        className="md:w-60 lg:w-90"
                        variant="default"
                        size="sm"
                      >
                        <Link href={`products/${category.name}`}>
                          Wybierz {category.name}
                        </Link>
                      </Button>
                      {/* <div className="flex justify-between items-center">
                        <span>{category.name}</span>
                        <Button variant="destructive" size="sm">
                          Remove
                        </Button>
                      </div> */}
                    </TableCell>
                    <TableCell className="text-right">
                      {/* {component.price ? `$${component.price.toFixed(2)}` : ""} */}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <div className="flex justify-between items-center mt-4">
              <span className="text-2xl font-bold">Total:</span>
              <span className="text-2xl font-bold">$476.76</span>
            </div>
            <div className="flex justify-center">
              <Button className="md:w-1/4 mt-4">Kup</Button>
            </div>
          </TabsContent>
          <TabsContent value="prices">
            <p>Prices by merchant content goes here.</p>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
}
