import { create } from 'zustand'

type BearsState = {
    bears: number,
    increasePopulation: () => void,
    removeAllBears: () => void,
    updateBears: (newBears: number) => void
}

export const useBearsStore = create<BearsState>((set) => ({
    bears: 0,
    increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
    removeAllBears: () => set({ bears: 0 }),
    updateBears: (newBears) => set({ bears: newBears }),
}))