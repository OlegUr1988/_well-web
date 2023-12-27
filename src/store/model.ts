import { mountStoreDevtool } from "simple-zustand-devtools";
import { create } from "zustand";

interface ModelQuery {
  assetId: number;
}

interface ModelStore {
  modelQuery: ModelQuery;
  setAssetId: (assetId: number) => void;
}

const useModelStore = create<ModelStore>((set) => ({
  modelQuery: { assetId: 0 },
  setAssetId: (assetId) =>
    set((store) => ({ modelQuery: { ...store.modelQuery, assetId } })),
}));

if (process.env.NODE_ENV === "development")
  mountStoreDevtool("useModel Store", useModelStore);

export default useModelStore;
