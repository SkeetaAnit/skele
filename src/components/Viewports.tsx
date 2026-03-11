import React from 'react';
import { useAppStore } from '../store/useAppStore';
import { Image as ImageIcon } from 'lucide-react';

export function Viewports() {
  const viewMode = useAppStore(state => state.viewMode);

  return (
    <div className="flex-1 flex gap-4 p-4 bg-[#18181b] overflow-hidden">
      {/* Left Viewport - Spine2D */}
      {(viewMode === 'split' || viewMode === 'spine') && (
        <div className="flex-1 bg-[#27272a] rounded-lg border border-[#3f3f46] relative flex items-center justify-center overflow-hidden shadow-inner">
          <div className="absolute top-4 right-4 text-gray-500 text-sm font-medium tracking-wider select-none">
            Spine2D Source Player
          </div>
          <div className="flex flex-col items-center justify-center text-[#3f3f46] select-none">
            <ImageIcon size={64} className="mb-4 opacity-50" />
            <span className="text-sm font-medium">Spine2D Canvas Placeholder</span>
          </div>
        </div>
      )}

      {/* Right Viewport - DragonBones */}
      {(viewMode === 'split' || viewMode === 'dragonbones') && (
        <div className="flex-1 bg-[#27272a] rounded-lg border border-[#3f3f46] relative flex items-center justify-center overflow-hidden shadow-inner">
          <div className="absolute top-4 right-4 text-gray-500 text-sm font-medium tracking-wider select-none">
            DragonBones Output Player
          </div>
          <div className="flex flex-col items-center justify-center text-[#3f3f46] select-none">
            <ImageIcon size={64} className="mb-4 opacity-50" />
            <span className="text-sm font-medium">DragonBones Canvas Placeholder</span>
          </div>
        </div>
      )}
    </div>
  );
}
