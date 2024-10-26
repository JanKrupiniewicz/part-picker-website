import { HardDrive, Power, Zap } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useContext } from "react";
import { PartsContext } from "@/services/providers/PartsContext";

export default function BuilderListMenu() {
  const selectedPartsCtx = useContext(PartsContext);

  const saveBuild = () => {};

  return (
    <>
      <div className="flex justify-between  items-center bg-primary p-4 rounded-lg">
        <div className="flex items-center">
          <Zap className="hidden md:block mr-2" />
          <span>
            Kompatybilność: Nie znaleziono żadnych problemów ani niezgodności.
          </span>
        </div>
        <div>
          <div className="sm:block md:hidden">
            <span className="font-bold">
              {selectedPartsCtx.getEstimatedWattage() + "W"}
            </span>
          </div>
          <div className="hidden md:block">
            <span className="font-bold">
              Szacowane zużycie energii:{" "}
              {selectedPartsCtx.getEstimatedWattage() + "W"}
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center mb-4">
        <Input
          className="w-full md:w-1/3 lg:w-1/2"
          placeholder="https://pcpartpicker.com/list/kXkb3y"
        />
        <div className="space-x-2  my-3">
          <Button variant="outline">
            <Zap className="mr-2 h-4 w-4" /> Eksportuj
          </Button>
          <Button onClick={() => saveBuild()} variant="outline">
            <HardDrive className="mr-2 h-4 w-4" /> Zapisz jako
          </Button>
          <Button onClick={() => selectedPartsCtx.removeAllParts()}>
            <Power className="mr-2 h-4 w-4" /> Rozpocznij nowy
          </Button>
        </div>
      </div>
    </>
  );
}
