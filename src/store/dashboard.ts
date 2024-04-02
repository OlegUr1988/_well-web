import { mountStoreDevtool } from "simple-zustand-devtools";
import { create } from "zustand";

export type Trend =
  | "bad actors"
  | "production"
  | "energy consumption"
  | "specific energy consumption"
  | "CO2 emission";

interface DashboardStore {
  dashboardQuery: {
    trend: Trend;
  };
  setTrend: (trend: Trend) => void;
}

const useDashboardsStore = create<DashboardStore>((set) => ({
  dashboardQuery: {
    trend: "bad actors",
  },
  setTrend: (trend) =>
    set((store) => ({ dashboardQuery: { ...store.dashboardQuery, trend } })),
}));

if (process.env.NODE_ENV === "development")
  mountStoreDevtool("useDashboard Store", useDashboardsStore);

export default useDashboardsStore;
