import { mountStoreDevtool } from "simple-zustand-devtools";
import { create } from "zustand";

interface ModelQuery {
  assetId: number;
  equipmentId: number;
  partId: number;
}

interface ModelStore {
  modelQuery: ModelQuery;
  setAssetId: (assetId: number) => void;
  setEquipmentId: (equipmentId: number) => void;
  setPartId: (partId: number) => void;
}

const useModelStore = create<ModelStore>((set) => ({
  modelQuery: { assetId: 0, equipmentId: 0, partId: 0 },
  setAssetId: (assetId) =>
    set((store) => ({ modelQuery: { ...store.modelQuery, assetId } })),
  setEquipmentId: (equipmentId) =>
    set((store) => ({ modelQuery: { ...store.modelQuery, equipmentId } })),
  setPartId: (partId) =>
    set((store) => ({ modelQuery: { ...store.modelQuery, partId } })),
}));

if (process.env.NODE_ENV === "development")
  mountStoreDevtool("useModel Store", useModelStore);

export default useModelStore;
