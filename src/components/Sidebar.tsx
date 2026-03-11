import React from 'react';
import { Tree, NodeRendererProps } from 'react-arborist';
import { Folder, List, Plus } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import useMeasure from 'react-use-measure';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const initialData = [
  { id: "1", name: "Knight_Spine_Project" },
  { id: "2", name: "Mage_DragonBones_Project" },
  { id: "3", name: "Goblin_Animation" }
];

function Node({ node, style, dragHandle }: NodeRendererProps<any>) {
  return (
    <div
      style={style}
      ref={dragHandle}
      className={cn(
        "flex items-center px-2 py-1 cursor-pointer text-sm select-none transition-colors",
        node.isSelected ? "bg-[#3b4252] text-white" : "text-gray-400 hover:bg-[#2e3440]"
      )}
      onClick={() => node.select()}
    >
      <div className="mr-2 ml-1">
        <Folder size={14} className="text-blue-400" />
      </div>
      <span className="truncate">{node.data.name}</span>
    </div>
  );
}

export function Sidebar() {
  const [ref, bounds] = useMeasure();

  return (
    <div className="w-64 bg-[#1e1e22] border-r border-[#2c2c32] flex flex-col h-full shrink-0">
      <div className="p-3 border-b border-[#2c2c32] flex items-center justify-between">
        <span className="text-sm font-medium text-gray-300">Project List</span>
        <div className="flex items-center gap-1">
          <button className="p-1 hover:bg-[#2c2c32] rounded text-gray-400 transition-colors" title="Import Project">
            <Plus size={16} />
          </button>
          <button className="p-1 hover:bg-[#2c2c32] rounded text-gray-400 transition-colors">
            <List size={16} />
          </button>
        </div>
      </div>
      
      <div className="flex-1 overflow-hidden" ref={ref}>
        {bounds.height > 0 && (
          <Tree
            initialData={initialData}
            width={bounds.width}
            height={bounds.height}
            indent={16}
            rowHeight={28}
            padding={4}
          >
            {Node}
          </Tree>
        )}
      </div>
    </div>
  );
}
