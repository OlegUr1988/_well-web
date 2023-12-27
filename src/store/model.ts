import { mountStoreDevtool } from "simple-zustand-devtools";
import { create } from "zustand";

interface ModelQuery {
  assetId: number;
  equipmentId: number;
}

interface ModelStore {
  modelQuery: ModelQuery;
  setAssetId: (assetId: number) => void;
  setEquipmentId: (assetId: number) => void;
}

const useModelStore = create<ModelStore>((set) => ({
  modelQuery: { assetId: 0, equipmentId: 0 },
  setAssetId: (assetId) =>
    set((store) => ({ modelQuery: { ...store.modelQuery, assetId } })),
  setEquipmentId: (equipmentId) =>
    set((store) => ({ modelQuery: { ...store.modelQuery, equipmentId } })),
}));

if (process.env.NODE_ENV === "development")
  mountStoreDevtool("useModel Store", useModelStore);

export default useModelStore;
