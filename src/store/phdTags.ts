import { mountStoreDevtool } from "simple-zustand-devtools";
import { create } from "zustand";
import { PHDTagQuery } from "../entities/PHDTags";

interface PHDTagStore {
  PHDTagsQuery: PHDTagQuery;
  setPage: (page: number) => void;
  setSearchedName: (searchedName: string) => void;
}

const usePHDTagStore = create<PHDTagStore>((set) => ({
  PHDTagsQuery: { page: 1, pageSize: 10 },
  setPage: (page) =>
    set((store) => ({ PHDTagsQuery: { ...store.PHDTagsQuery, page } })),
  setSearchedName: (searchedName) =>
    set((store) => ({ PHDTagsQuery: { ...store.PHDTagsQuery, searchedName } })),
}));

if (process.env.NODE_ENV === "development")
  mountStoreDevtool("usePHDTag Store", usePHDTagStore);

export default usePHDTagStore;
