"use client";

import React, { createContext, useReducer, ReactNode, Dispatch } from "react";
import { Part } from "@/constants/sample-parts";

type Action =
  | { type: "ADD_PART"; part: Part }
  | { type: "REMOVE_PART"; part: Part }
  | { type: "REMOVE_ALL_PARTS" };

interface PartsContextType {
  parts: Part[];
  addPart: (part: Part) => void;
  removePart: (part: Part) => void;
  removeAllParts: () => void;
  getFullPrice: () => number;
  getNumerOfParts: () => number;
  getEstimatedWattage: () => number;
}

const PartsContext = createContext<PartsContextType>({
  parts: [],
  addPart: () => {},
  removePart: () => {},
  removeAllParts: () => {},
  getFullPrice: () => 0,
  getNumerOfParts: () => 0,
  getEstimatedWattage: () => 0,
});

function partReducer(state: Part[], action: Action): Part[] {
  switch (action.type) {
    case "ADD_PART":
      return [...state, action.part];
    case "REMOVE_PART":
      return state.filter((part) => part.id !== action.part.id);
    case "REMOVE_ALL_PARTS":
      return [];
    default:
      return state;
  }
}

interface PartsProviderProps {
  children: ReactNode;
}

function PartsContextProvider({ children }: PartsProviderProps) {
  const [parts, dispatchPartsAction] = useReducer(partReducer, []);

  function addPart(part: Part) {
    dispatchPartsAction({ type: "ADD_PART", part });
  }

  function removePart(part: Part) {
    dispatchPartsAction({ type: "REMOVE_PART", part });
  }

  function removeAllParts() {
    dispatchPartsAction({ type: "REMOVE_ALL_PARTS" });
  }

  function getFullPrice(): number {
    return parts.reduce((total, part) => total + part.price, 0);
  }

  function getNumerOfParts(): number {
    return parts.length;
  }

  function getEstimatedWattage(): number {
    return parts.reduce((total, part) => total + part.wattage, 0);
  }

  const context: PartsContextType = {
    parts,
    addPart,
    removePart,
    removeAllParts,
    getFullPrice,
    getNumerOfParts,
    getEstimatedWattage,
  };

  return (
    <PartsContext.Provider value={context}>{children}</PartsContext.Provider>
  );
}

export { PartsContext, PartsContextProvider };
