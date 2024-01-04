import { mountStoreDevtool } from "simple-zustand-devtools";
import { create } from "zustand";
import { AssetQuery } from "../entities/assets";

interface AssetStore {
  assetQuery: AssetQuery;
  setSearchedName: (searchedName: string) => void;
}

const useAssetStore = create<AssetStore>((set) => ({
  assetQuery: {},
  setSearchedName: (searchedName) =>
    set((store) => ({
      assetQuery: { ...store.assetQuery, searchedName },
    })),
}));

if (process.env.NODE_ENV === "development")
  mountStoreDevtool("useAsset Store", useAssetStore);

export default useAssetStore;
