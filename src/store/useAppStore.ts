import { create } from 'zustand';

interface AppState {
  isPlaying: boolean;
  progress: number;
  viewMode: 'split' | 'spine' | 'dragonbones';
  togglePlayback: () => void;
  setProgress: (progress: number) => void;
  setViewMode: (mode: 'split' | 'spine' | 'dragonbones') => void;
}

export const useAppStore = create<AppState>((set) => ({
  isPlaying: false,
  progress: 15,
  viewMode: 'split',
  togglePlayback: () => set((state) => ({ isPlaying: !state.isPlaying })),
  setProgress: (progress) => set({ progress }),
  setViewMode: (viewMode) => set({ viewMode }),
}));
