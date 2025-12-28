import { create } from "zustand";

interface UIState {
  isNavVisible: boolean;
  setNavVisible: (visible: boolean) => void;
}

export const useUIStore = create<UIState>((set) => ({
  isNavVisible: false, 
  setNavVisible: (visible) => set({ isNavVisible: visible }),
}));