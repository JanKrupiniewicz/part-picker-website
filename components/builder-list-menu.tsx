import { HardDrive, Power, Zap } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export default function BuilderListMenu() {
  return (
    <>
      <div className="flex justify-between items-center bg-primary p-4 rounded-lg">
        <div className="flex items-center">
          <Zap className="mr-2" />
          <span>Compatibility: No issues or incompatibilities found.</span>
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
    </>
  );
}
