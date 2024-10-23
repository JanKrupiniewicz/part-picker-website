import { createContext } from "react";

const SelectedPartsContext = createContext({
  selectedParts: [],
  addPart: () => {},
  removePart: () => {},
});
