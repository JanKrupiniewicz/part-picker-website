"use client";

import { SiteTitle } from "@/components/ui/site-title";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import { MAIN_CATEGORIES } from "@/constants/categories";
import BuilderListMenu from "@/components/builder-list-menu";
import { useContext } from "react";
import { PartsContext } from "@/services/providers/PartsContext";

export default function Builder() {
  const selectedPartsCtx = useContext(PartsContext);

  function displayPartsForCategory(category: string) {
    const parts = selectedPartsCtx.parts.filter(
      (part) => part.category === category
    );

    if (parts.length === 0) {
      return (
        <Button className="md:w-60 lg:w-90" variant="default" size="sm">
          <Link href={`products/${category}`}>Wybierz {category}</Link>
        </Button>
      );
    } else {
      return parts.map((part) => {
        return (
          <div key={part.id} className="flex m-2 justify-between items-center">
            <span>{part.name}</span>
            <Button
              onClick={() => selectedPartsCtx.removePart(part)}
              variant="destructive"
              size="sm"
            >
              Remove
            </Button>
          </div>
        );
      });
    }
  }

  function displayCategoryPrice(category: string) {
    const parts = selectedPartsCtx.parts.filter(
      (part) => part.category === category
    );

    return parts.reduce((acc, part) => acc + part.price, 0);
  }

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
            <BuilderListMenu />
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
                      <Link
                        href={`products/${category.name}`}
                        className="flex items-center"
                      >
                        <category.icon className="mr-2 h-4 w-4" />
                        {category.name}
                      </Link>
                    </TableCell>
                    <TableCell>
                      {displayPartsForCategory(category.name)}
                    </TableCell>
                    <TableCell className="text-right">
                      {displayCategoryPrice(category.name).toFixed(2)}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <div className="flex justify-between items-center mt-4">
              <span className="text-2xl font-bold">Total:</span>
              <span className="text-2xl font-bold">
                {selectedPartsCtx.getFullPrice()}
              </span>
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
