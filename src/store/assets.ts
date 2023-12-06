import { create } from "zustand";
import { mountStoreDevtool } from "simple-zustand-devtools";

interface AssetQuery {
  page?: number;
  pageSize?: number;
  searchedName?: string;
}

interface AssetStore {
  assetQuery: AssetQuery;
  setPage: (page: number) => void;
  setSearchedName: (searchedName: string) => void;
}

const useAssetStore = create<AssetStore>((set) => ({
  assetQuery: { page: 1, pageSize: 10 },
  setPage: (page) =>
    set((store) => ({ assetQuery: { ...store.assetQuery, page } })),
  setSearchedName: (searchedName) =>
    set((store) => ({ assetQuery: { ...store.assetQuery, searchedName } })),
}));

if (process.env.NODE_ENV === "development")
  mountStoreDevtool("useAsset Store", useAssetStore);

export default useAssetStore;
