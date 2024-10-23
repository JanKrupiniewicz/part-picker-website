import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function Footer() {
  return (
    <footer className="w-full py-12 md:py-24 lg:py-32 bg-black text-white">
      <div className="px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Bądź na bieżąco
            </h2>
            <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Otrzymuj najnowsze wiadomości o częściach PC, ofertach i
              przewodnikach budowy.
            </p>
          </div>
          <div className="w-full max-w-sm space-y-2">
            <form className="flex space-x-2">
              <Input
                className="max-w-lg flex-1"
                placeholder="Wpisz swój email"
                type="email"
              />
              <Button type="submit">Subskrybuj</Button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}
