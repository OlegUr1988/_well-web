import { create } from "zustand";
import { mountStoreDevtool } from "simple-zustand-devtools";
import EquipmentQuery from "../entities/EquipmentQuery";

interface EquipmentStore {
  equipmentQuery: EquipmentQuery;
  setPage: (page: number) => void;
  setSearchedName: (searchedName: string) => void;
}

const useEquipmentStore = create<EquipmentStore>((set) => ({
  equipmentQuery: { page: 1, pageSize: 10 },
  setPage: (page) =>
    set((store) => ({ equipmentQuery: { ...store.equipmentQuery, page } })),
  setSearchedName: (searchedName) =>
    set((store) => ({
      equipmentQuery: { ...store.equipmentQuery, searchedName },
    })),
}));

if (process.env.NODE_ENV === "development")
  mountStoreDevtool("useEquipment Store", useEquipmentStore);

export default useEquipmentStore;
