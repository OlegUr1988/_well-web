import { mountStoreDevtool } from "simple-zustand-devtools";
import { create } from "zustand";
import { AreaQuery } from "../entities/areas";

interface AssetStore {
  areaQuery: AreaQuery;
  setSearchedName: (searchedName: string) => void;
}

const useAreaStore = create<AssetStore>((set) => ({
  areaQuery: {},
  setSearchedName: (searchedName) =>
    set((store) => ({ areaQuery: { ...store.areaQuery, searchedName } })),
}));

if (process.env.NODE_ENV === "development")
  mountStoreDevtool("useArea Store", useAreaStore);

export default useAreaStore;
