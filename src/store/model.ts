import { mountStoreDevtool } from "simple-zustand-devtools";
import { create } from "zustand";

interface ModelQuery {
  areaId: number;
  assetId: number;
  equipmentId: number;
}

interface ModelStore {
  modelQuery: ModelQuery;
  setAreaId: (areaId: number) => void;
  setAssetId: (assetId: number) => void;
  setEquipmentId: (equipmentId: number) => void;
}

const useModelStore = create<ModelStore>((set) => ({
  modelQuery: { areaId: 0, assetId: 0, equipmentId: 0 },
  setAreaId: (areaId) =>
    set((store) => ({ modelQuery: { ...store.modelQuery, areaId } })),
  setAssetId: (assetId) =>
    set((store) => ({
      modelQuery: { ...store.modelQuery, assetId },
    })),
  setEquipmentId: (equipmentId) =>
    set((store) => ({
      modelQuery: { ...store.modelQuery, equipmentId },
    })),
}));

if (process.env.NODE_ENV === "development")
  mountStoreDevtool("useModel Store", useModelStore);

export default useModelStore;
