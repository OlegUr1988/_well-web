import { mountStoreDevtool } from "simple-zustand-devtools";
import { create } from "zustand";
import { User, UserQuery } from "../entities/users";

interface UserStore {
  user: User | null;
  usersQuery: UserQuery;
  setUser: (user: User | null) => void;
  setPage: (page: number) => void;
  setSearchedName: (searchedName: string) => void;
}

const useUserStore = create<UserStore>((set) => ({
  user: null,
  usersQuery: { page: 1, pageSize: 10 },
  setUser: (user) => set(() => ({ user })),
  setPage: (page) =>
    set((store) => ({ usersQuery: { ...store.usersQuery, page } })),
  setSearchedName: (searchedName) =>
    set((store) => ({ usersQuery: { ...store.usersQuery, searchedName } })),
}));

if (process.env.NODE_ENV === "development")
  mountStoreDevtool("useUser Store", useUserStore);

export default useUserStore;
