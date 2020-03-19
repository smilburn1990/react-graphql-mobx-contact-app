import { createContext } from "react";
import { ContactStore } from "../store";

export const StoreContext = createContext<ContactStore>({} as ContactStore);
export const StoreProvider = StoreContext.Provider;
