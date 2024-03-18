import { mountStoreDevtool } from "simple-zustand-devtools";
import { create } from "zustand";
import { ConstantQuery } from "../entities/constants";

interface ConstantStore {
  constantsQuery: ConstantQuery;
  setPage: (page: number) => void;
  setSearchedName: (searchedName: string) => void;
}

const useConstantsStore = create<ConstantStore>((set) => ({
  constantsQuery: { page: 1, pageSize: 10 },
  setPage: (page) =>
    set((store) => ({ constantsQuery: { ...store.constantsQuery, page } })),
  setSearchedName: (searchedName) =>
    set((store) => ({
      constantsQuery: { ...store.constantsQuery, searchedName },
    })),
}));

if (process.env.NODE_ENV === "development")
  mountStoreDevtool("useConstants Store", useConstantsStore);

export default useConstantsStore;
