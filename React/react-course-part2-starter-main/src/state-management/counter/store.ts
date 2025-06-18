import { create } from "zustand";
interface CounterStore {
  counter: number;
  increment: () => void;
  reset: () => void;
}
const useCounterStore = create<CounterStore>((set) => ({
  counter: 0,
  increment: () => set((state) => ({ counter: state.counter + 1 })),
  reset: () => set({ counter: 0 }),
}));
export default useCounterStore;
