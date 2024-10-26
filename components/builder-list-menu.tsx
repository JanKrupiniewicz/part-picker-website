import { HardDrive, Power, Zap } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useContext } from "react";
import { PartsContext } from "@/services/providers/PartsContext";

export default function BuilderListMenu() {
  const selectedPartsCtx = useContext(PartsContext);

  return (
    <>
      <div className="flex justify-between items-center bg-primary p-4 rounded-lg">
        <div className="flex items-center">
          <Zap className="mr-2" />
          <span>
            Kompatybilność: Nie znaleziono żadnych problemów ani niezgodności.
          </span>
        </div>
        <div>
          <span className="font-bold">Szacowane zużycie energii: 162W</span>
        </div>
      </div>
      <div className="flex justify-between items-center mb-4">
        <Input
          className="w-1/3"
          placeholder="https://pcpartpicker.com/list/kXkb3y"
        />
        <div className="space-x-2">
          <Button variant="outline">
            <Zap className="mr-2 h-4 w-4" /> Eksportuj
          </Button>
          <Button variant="outline">
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
