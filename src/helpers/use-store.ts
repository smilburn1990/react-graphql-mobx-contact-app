import { useContext } from "react";
import { StoreContext } from "./store-provider";
import { ContactStore } from "../store";

export const useStore = (): ContactStore => useContext(StoreContext);
