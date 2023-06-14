import { create } from 'zustand'

interface CalculationState {
    sum: number
}

export const useCalculationStore = create<CalculationState>(() => ({
    sum: 0
}))
