import { create } from "zustand";
import { mountStoreDevtool } from "simple-zustand-devtools";
import moment from "moment";
import timeFormat from "../constants/timeFormat";

interface TimeRange {
  startTime: string;
  endTime: string;
  previousStartTime: string;
  previousEndTime: string;
  isChanging: boolean;
}

interface TimePeriodStore {
  interval: number;
  timeRange: TimeRange;
  setInterval: (interval: number) => void;
  setStartTime: (startTime: string) => void;
  setEndTime: (endTime: string) => void;
  setPreviousStartTime: (previousStartTime: string) => void;
  setPreviousEndTime: (previousEndTime: string) => void;
  setIsChanged: (isChanging: boolean) => void;
}

const useTimePeriodStore = create<TimePeriodStore>((set) => ({
  interval: 0,
  timeRange: {
    startTime: moment().subtract(7, "days").format(timeFormat),
    endTime: moment().format(timeFormat),
    previousStartTime: moment().subtract(7, "days").format(timeFormat),
    previousEndTime: moment().format(timeFormat),
    isChanging: false,
  },
  setInterval: (interval) => set({ interval }),
  setStartTime: (startTime) =>
    set((store) => ({
      ...store,
      timeRange: {
        ...store.timeRange,
        startTime: moment(startTime).format(timeFormat),
      },
    })),
  setEndTime: (endTime) =>
    set((store) => ({
      ...store,
      timeRange: {
        ...store.timeRange,
        endTime: moment(endTime).format(timeFormat),
      },
    })),
  setPreviousStartTime: (previousStartTime) =>
    set((store) => ({
      ...store,
      timeRange: {
        ...store.timeRange,
        previousStartTime: moment(previousStartTime).format(timeFormat),
      },
    })),
  setPreviousEndTime: (previousEndTime) =>
    set((store) => ({
      ...store,
      timeRange: {
        ...store.timeRange,
        previousEndTime: moment(previousEndTime).format(timeFormat),
      },
    })),
  setIsChanged: (isChanging) =>
    set((store) => ({
      ...store,
      timeRange: { ...store.timeRange, isChanging },
    })),
}));

if (process.env.NODE_ENV === "development")
  mountStoreDevtool("Time Period Store", useTimePeriodStore);

export default useTimePeriodStore;
