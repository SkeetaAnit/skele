/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { Sidebar } from './components/Sidebar';
import { Viewports } from './components/Viewports';
import { BottomPanel } from './components/BottomPanel';
import { useAppStore } from './store/useAppStore';

export default function App() {
  const { isPlaying, setProgress } = useAppStore();

  // Simulate progress when playing
  useEffect(() => {
    let interval: number;
    if (isPlaying) {
      interval = window.setInterval(() => {
        setProgress(useAppStore.getState().progress >= 100 ? 0 : useAppStore.getState().progress + 1);
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isPlaying, setProgress]);

  return (
    <div className="h-screen w-screen flex bg-[#18181b] text-gray-300 font-sans overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <Viewports />
        <BottomPanel />
      </div>
    </div>
  );
}

