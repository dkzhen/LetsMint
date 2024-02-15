import { create } from "zustand";

export const useChainId = create((set) => ({
  id: 0, // State untuk menyimpan ID
  setId: (newId) => set({ id: newId }), // Fungsi untuk mengatur ID
}));
