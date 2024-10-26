import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ListWithTitle from "@/components/ui/list-with-title";
import {
  MAIN_CATEGORIES,
  PERIPHERALS,
  DISPLAYS,
  SOFTWARE,
  EXPANSION,
  ACCESSORIES,
} from "@/constants/categories";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-black">
          <div className="px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-background">
                  Zbuduj swój{" "}
                  <span className="text-accent italic tracking-wider">
                    idealny
                  </span>{" "}
                  komputer
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
                  Wybieraj części, porównuj ceny, buduj swój komputer marzeń.
                </p>
              </div>
              <Link href="/list" className="space-x-4">
                <Button size="lg"> Rozpocznij budowę</Button>
              </Link>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">
              Szybki przewodnik po naszej platformie
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="hover:bg-white hover:drop-shadow-2xl ">
                <CardHeader>
                  <CardTitle>1. Wybierz swoje części</CardTitle>
                </CardHeader>
                <CardContent>
                  Wybierz komponenty, które pasują do Twojego budżetu i potrzeb
                  wydajnościowych.
                </CardContent>
              </Card>
              <Card className="hover:bg-white hover:drop-shadow-2xl ">
                <CardHeader>
                  <CardTitle>2. Porównaj ceny</CardTitle>
                </CardHeader>
                <CardContent>
                  Znajdź najlepsze oferty w różnych sklepach.
                </CardContent>
              </Card>
              <Card className="hover:bg-white hover:drop-shadow-2xl ">
                <CardHeader>
                  <CardTitle>3. Zbuduj swój komputer</CardTitle>
                </CardHeader>
                <CardContent>
                  Skorzystaj z naszych przewodników i zasięgnij pomocy naszej
                  społeczności, aby złożyć swój komputer.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-8 md:py-12 lg:py-24">
          <div className="px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">
              Popularne Kategorie
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {MAIN_CATEGORIES.map((category) => (
                <Card
                  key={category.name}
                  className="hover:bg-gray-200 hover:drop-shadow-2xl hover:text-foreground"
                >
                  <Link
                    className="flex flex-col items-center justify-center p-4 "
                    href={`/products/${category.name}`}
                  >
                    <category.icon className="h-12 w-12 mb-2 hover:scale-105" />
                    <CardTitle className="text-center">
                      {category.name}
                    </CardTitle>
                  </Link>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section className="py-8 md:py-12 lg:py-24 px-4 md:px-6 bg-gray-100">
          <div className="flex flex-row flex-wrap justify-around gap-8">
            <div className="flex flex-col space-y-4">
              <ListWithTitle
                title="Urządzenia dodatkowe"
                itemsList={PERIPHERALS}
              />
              <ListWithTitle title="Wyświetlacze" itemsList={DISPLAYS} />
              <ListWithTitle title="Software" itemsList={SOFTWARE} />
            </div>
            <div className="flex flex-col space-y-4">
              <ListWithTitle title="Rozszerzenia" itemsList={EXPANSION} />
              <ListWithTitle title="Akcesoria" itemsList={ACCESSORIES} />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
