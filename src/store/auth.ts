import { mountStoreDevtool } from "simple-zustand-devtools";
import { create } from "zustand";
import { User } from "../entities/users";

interface UserStore {
  user: User | null;
  setUser: (user: User | null) => void;
}

const useUserStore = create<UserStore>((set) => ({
  user: null,
  setUser: (user) => set(() => ({ user })),
}));

if (process.env.NODE_ENV === "development")
  mountStoreDevtool("useUser Store", useUserStore);

export default useUserStore;
