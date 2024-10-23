import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@radix-ui/react-separator";
import {
  Cpu,
  Microchip,
  HardDrive,
  Database,
  Monitor,
  Power,
} from "lucide-react";
import Link from "next/link";

export default function Component() {
  const categoriesCardClasses =
    "hover:bg-gray-200 hover:drop-shadow-2xl hover:text-gray-900";
  const categoriesCardIconClasses = "h-12 w-12 mb-2 hover:scale-105";
  const categoryListClasses = "hover:font-bold hover:tracking-wide";

  return (
    <div className="flex flex-col">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-black">
          <div className="px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                  Zbuduj swój{" "}
                  <span className="text-cyan-600 tracking-wide">idealny</span>{" "}
                  komputer
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
                  Wybieraj części, porównuj ceny, buduj swój komputer marzeń.
                </p>
              </div>
              <div className="space-x-4">
                <Button className="bg-white text-black rounded-2xl hover:bg-gray-200">
                  Rozpocznij budowę
                </Button>
              </div>
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
              <Card className={`${categoriesCardClasses}`}>
                <Link
                  className="flex flex-col items-center justify-center p-4 "
                  href="/"
                >
                  <Cpu className={`${categoriesCardIconClasses}`} />
                  <CardTitle className="text-center">Procesory</CardTitle>
                </Link>
              </Card>
              <Card className={`${categoriesCardClasses}`}>
                <Link
                  className="flex flex-col items-center justify-center p-4 "
                  href="/"
                >
                  <Microchip className={`${categoriesCardIconClasses}`} />
                  <CardTitle className="text-center">Chłodzenie CPU</CardTitle>
                </Link>
              </Card>
              <Card className={`${categoriesCardClasses}`}>
                <Link
                  className="flex flex-col items-center justify-center p-4 "
                  href="/"
                >
                  <Microchip className={`${categoriesCardIconClasses}`} />
                  <CardTitle className="text-center">Płyty główne</CardTitle>
                </Link>
              </Card>
              <Card className={`${categoriesCardClasses}`}>
                <Link
                  className="flex flex-col items-center justify-center p-4 "
                  href="/"
                >
                  <Database className={`${categoriesCardIconClasses}`} />
                  <CardTitle className="text-center">Pamięć RAM</CardTitle>
                </Link>
              </Card>
              <Card className={`${categoriesCardClasses}`}>
                <Link
                  className="flex flex-col items-center justify-center p-4 "
                  href="/"
                >
                  <HardDrive className={`${categoriesCardIconClasses}`} />
                  <CardTitle className="text-center">Magazyn danych</CardTitle>
                </Link>
              </Card>
              <Card className={`${categoriesCardClasses}`}>
                <Link
                  className="flex flex-col items-center justify-center p-4 "
                  href="/"
                >
                  <Power className={`${categoriesCardIconClasses}`} />
                  <CardTitle className="text-center">Zasilacze</CardTitle>
                </Link>
              </Card>
              <Card className={`${categoriesCardClasses}`}>
                <Link
                  className="flex flex-col items-center justify-center p-4 "
                  href="/"
                >
                  <Monitor className={`${categoriesCardIconClasses}`} />
                  <CardTitle className="text-center">Karty graficzne</CardTitle>
                </Link>
              </Card>
              <Card className={`${categoriesCardClasses}`}>
                <Link
                  className="flex flex-col items-center justify-center p-4 "
                  href="/"
                >
                  <Monitor className={`${categoriesCardIconClasses}`} />
                  <CardTitle className="text-center">Obudowy</CardTitle>
                </Link>
              </Card>
            </div>
          </div>
        </section>
        <section className="py-8 md:py-12 lg:py-24 px-4 md:px-6 bg-gray-100">
          <div className="flex flex-row flex-wrap justify-around gap-8">
            <div className="flex flex-col space-y-4">
              <div>
                <h2 className="text-xl font-bold mb-2">Urządzenia dodatkowe</h2>
                <ul className="space-y-0">
                  <li className={`${categoryListClasses}`}>Słuchawki</li>
                  <li className={`${categoryListClasses}`}>Klawiatury</li>
                  <li className={`${categoryListClasses}`}>Myszki</li>
                  <li className={`${categoryListClasses}`}>Głośniki</li>
                  <li className={`${categoryListClasses}`}>
                    Kamerki Internetowe
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="text-xl font-bold mb-2">Wyświetlacze</h2>
                <ul className="space-y-0">
                  <li className={`${categoryListClasses}`}>Monitory</li>
                  <li className={`${categoryListClasses}`}>Telewizory</li>
                  <li className={`${categoryListClasses}`}>Projektory</li>
                </ul>
              </div>
              <div>
                <h2 className="text-xl font-bold mb-2">Software</h2>
                <ul className="space-y-0">
                  <li className={`${categoryListClasses}`}>
                    Systemy Operacyjne
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col space-y-4">
              <div>
                <h2 className="text-xl font-bold mb-2">Rozszerzenia</h2>
                <ul className="space-y-0">
                  <li className={`${categoryListClasses}`}>Słuchawki</li>
                  <li className={`${categoryListClasses}`}>Klawiatury</li>
                  <li className={`${categoryListClasses}`}>Myszki</li>
                  <li className={`${categoryListClasses}`}>Głośniki</li>
                  <li className={`${categoryListClasses}`}>
                    Kamery Internetowe
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="text-xl font-bold mb-2">Akcesoria / Inne</h2>
                <ul className="space-y-0">
                  <li className={`${categoryListClasses}`}>Etui</li>
                  <li className={`${categoryListClasses}`}>Kontrolery</li>
                  <li className={`${categoryListClasses}`}>Wentylatory</li>
                  <li className={`${categoryListClasses}`}>
                    Zewnętrzne dyski twarde
                  </li>
                  <li className={`${categoryListClasses}`}>
                    Zasilacze bezprzewodowe
                  </li>
                  <li className={`${categoryListClasses}`}>Napędy optyczne</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
