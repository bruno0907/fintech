import { useContext } from "react";
import { HomeContext } from "../contexts/HomeContext";

export function useHome() {
  return useContext(HomeContext)
}
