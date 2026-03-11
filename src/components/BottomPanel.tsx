import React from 'react';
import { useAppStore } from '../store/useAppStore';
import { Play, Pause, Square, Settings, Columns, PanelLeft, PanelRight } from 'lucide-react';
import { clsx } from 'clsx';

export function BottomPanel() {
  const { isPlaying, togglePlayback, progress, viewMode, setViewMode } = useAppStore();

  return (
    <div className="h-28 bg-[#202124] border-t border-[#303136] flex flex-col px-6 py-3 shrink-0">
      {/* Progress Bar Area */}
      <div className="flex items-center gap-4 mb-3">
        <span className="text-xs text-gray-400 w-20 select-none">ProgressBar</span>
        <div className="flex-1 h-1 bg-[#303136] rounded-full overflow-hidden relative cursor-pointer">
          <div 
            className="absolute top-0 left-0 h-full bg-[#4fd1c5] rounded-full transition-all duration-300 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>
        <span className="text-xs text-gray-400 w-20 text-right font-mono select-none">0:15 / 1:30</span>
      </div>

      {/* Controls Area */}
      <div className="flex items-center justify-center gap-6 mt-1">
        
        {/* View Mode Toggles */}
        <div className="flex items-center gap-1">
          <button 
            onClick={() => setViewMode('split')}
            title="Split View"
            className={clsx("p-2 rounded-md transition-colors border", viewMode === 'split' ? "bg-[#3b82f6] border-[#3b82f6] text-white" : "bg-transparent border-[#3f3f46] text-gray-400 hover:text-gray-200 hover:border-gray-500")}
          >
            <Columns size={18} />
          </button>
          <button 
            onClick={() => setViewMode('spine')}
            title="Spine2D Only"
            className={clsx("p-2 rounded-md transition-colors border", viewMode === 'spine' ? "bg-[#3b82f6] border-[#3b82f6] text-white" : "bg-transparent border-[#3f3f46] text-gray-400 hover:text-gray-200 hover:border-gray-500")}
          >
            <PanelLeft size={18} />
          </button>
          <button 
            onClick={() => setViewMode('dragonbones')}
            title="DragonBones Only"
            className={clsx("p-2 rounded-md transition-colors border", viewMode === 'dragonbones' ? "bg-[#3b82f6] border-[#3b82f6] text-white" : "bg-transparent border-[#3f3f46] text-gray-400 hover:text-gray-200 hover:border-gray-500")}
          >
            <PanelRight size={18} />
          </button>
        </div>

        {/* Playback Controls */}
        <div className="flex items-center gap-2">
          <button className="p-2 text-gray-400 hover:text-gray-200 bg-transparent hover:bg-[#383840] rounded-md border border-[#3f3f46] transition-colors">
            <Settings size={18} />
          </button>
          <button 
            onClick={togglePlayback}
            className="p-2 text-gray-200 bg-transparent hover:bg-[#383840] rounded-md border border-[#3f3f46] transition-colors"
          >
            {isPlaying ? <Pause size={18} fill="currentColor" /> : <Play size={18} fill="currentColor" />}
          </button>
          <button className="p-2 text-gray-200 bg-transparent hover:bg-[#383840] rounded-md border border-[#3f3f46] transition-colors">
            <Pause size={18} fill="currentColor" />
          </button>
          <button className="p-2 text-gray-200 bg-transparent hover:bg-[#383840] rounded-md border border-[#3f3f46] transition-colors">
            <Square size={18} fill="currentColor" />
          </button>
        </div>

        {/* Start Conversion Button */}
        <button className="px-6 py-2 bg-[#3f3f46] hover:bg-[#4b4b53] text-gray-200 text-sm font-medium rounded-md transition-colors border border-[#52525b]">
          Start Conversion
        </button>
      </div>
    </div>
  );
}
