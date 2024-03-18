import { mountStoreDevtool } from "simple-zustand-devtools";
import { create } from "zustand";
import { UnitQuery } from "../entities/units";

interface UnitStore {
  unitsQuery: UnitQuery;
  setPage: (page: number) => void;
  setSearchedName: (searchedName: string) => void;
}

const useUnitsStore = create<UnitStore>((set) => ({
  unitsQuery: { page: 1, pageSize: 10 },
  setPage: (page) =>
    set((store) => ({ unitsQuery: { ...store.unitsQuery, page } })),
  setSearchedName: (searchedName) =>
    set((store) => ({ unitsQuery: { ...store.unitsQuery, searchedName } })),
}));

if (process.env.NODE_ENV === "development")
  mountStoreDevtool("useUnits Store", useUnitsStore);

export default useUnitsStore;
