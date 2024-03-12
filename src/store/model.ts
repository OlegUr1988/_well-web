import { mountStoreDevtool } from "simple-zustand-devtools";
import { create } from "zustand";

interface ModelQuery {
  areaId: number;
  assetId: number;
  subassetId: number;
}

interface ModelStore {
  modelQuery: ModelQuery;
  setAreaId: (areaId: number) => void;
  setAssetId: (assetId: number) => void;
  setSubassetId: (subassetId: number) => void;
}

const useModelStore = create<ModelStore>((set) => ({
  modelQuery: { areaId: 0, assetId: 0, subassetId: 0 },
  setAreaId: (areaId) =>
    set((store) => ({ modelQuery: { ...store.modelQuery, areaId } })),
  setAssetId: (assetId) =>
    set((store) => ({
      modelQuery: { ...store.modelQuery, assetId },
    })),
  setSubassetId: (subassetId) =>
    set((store) => ({
      modelQuery: { ...store.modelQuery, subassetId },
    })),
}));

if (process.env.NODE_ENV === "development")
  mountStoreDevtool("useModel Store", useModelStore);

export default useModelStore;
