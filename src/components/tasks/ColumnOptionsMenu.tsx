import React from "react";
import { Move, ArrowDownUp, CheckSquare, Archive, Trash2, ChevronRight } from "lucide-react";
import { COLUMN_COLOR_OPTIONS } from "../../data/mockTasksData";

interface ColumnOptionsMenuProps {
  rect: DOMRect;
  currentColor: string;
  onClose: () => void;
  onMove: () => void;
  onSortTasks: () => void;
  onCompleteTasks: () => void;
  onArchiveTasks: () => void;
  onDeleteTasks: () => void;
  onColorChange: (colorClass: string) => void;
}

const MENU_WIDTH = 208; 
const VIEWPORT_MARGIN = 12;

export const ColumnOptionsMenu: React.FC<ColumnOptionsMenuProps> = ({
  rect,
  currentColor,
  onClose,
  onMove,
  onSortTasks,
  onCompleteTasks,
  onArchiveTasks,
  onDeleteTasks,
  onColorChange,
}) => {
  const close = (fn: () => void) => () => {
    fn();
    onClose();
  };

  
  const overflowsRight = rect.left + MENU_WIDTH + VIEWPORT_MARGIN > window.innerWidth;
  const positionStyle: React.CSSProperties = overflowsRight
    ? { top: rect.bottom + 6, right: window.innerWidth - rect.right }
    : { top: rect.bottom + 6, left: rect.left };

  return (
    <>
      <div className="fixed inset-0 z-40" onClick={onClose} />

      <div
        className="fixed z-50 w-52 rounded-xl border border-gray-100 bg-white p-1.5 shadow-lg"
        style={positionStyle}
      >
        <button
          type="button"
          onClick={close(onMove)}
          className="flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-left text-sm text-gray-700 hover:bg-gray-50"
        >
          <Move className="h-3.5 w-3.5 text-gray-400" />
          Move
        </button>
        <button
          type="button"
          onClick={close(onSortTasks)}
          className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm text-gray-700 hover:bg-gray-50"
        >
          <span className="flex items-center gap-2.5">
            <ArrowDownUp className="h-3.5 w-3.5 text-gray-400" />
            Sort Tasks
          </span>
          <ChevronRight className="h-3.5 w-3.5 text-gray-300" />
        </button>

        <div className="my-1 border-t border-gray-100" />

        <button
          type="button"
          onClick={close(onCompleteTasks)}
          className="flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-left text-sm text-gray-700 hover:bg-gray-50"
        >
          <CheckSquare className="h-3.5 w-3.5 text-gray-400" />
          Complete Tasks
        </button>
        <button
          type="button"
          onClick={close(onArchiveTasks)}
          className="flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-left text-sm text-gray-700 hover:bg-gray-50"
        >
          <Archive className="h-3.5 w-3.5 text-gray-400" />
          Archive Tasks
        </button>
        <button
          type="button"
          onClick={close(onDeleteTasks)}
          className="flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-left text-sm text-red-500 hover:bg-red-50"
        >
          <Trash2 className="h-3.5 w-3.5" />
          Delete Tasks
        </button>

        <div className="mt-1 grid grid-cols-5 gap-2 border-t border-gray-100 px-2 pt-2">
          {COLUMN_COLOR_OPTIONS.map((color) => (
            <button
              key={color}
              type="button"
              onClick={() => {
                onColorChange(color);
                onClose();
              }}
              aria-label={`Set color ${color}`}
              className={`h-5 w-5 rounded-full ${color} ${
                color === currentColor ? "ring-2 ring-offset-1 ring-gray-300" : ""
              }`}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ColumnOptionsMenu;