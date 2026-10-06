import React from "react";
import { Share2, Link2, Download, Pencil, Copy, FolderInput, Trash2 } from "lucide-react";

export type ContextMenuAction = "share" | "sharing-link" | "download" | "rename" | "copy" | "move" | "delete";

interface ItemContextMenuProps {
  rect: DOMRect;
  onClose: () => void;
  onAction: (action: ContextMenuAction) => void;
}

const MENU_WIDTH = 176;
const VIEWPORT_MARGIN = 12;

const ITEMS: { key: ContextMenuAction; label: string; icon: React.ElementType; danger?: boolean }[] = [
  { key: "share", label: "Share", icon: Share2 },
  { key: "sharing-link", label: "Sharing Link", icon: Link2 },
  { key: "download", label: "Download", icon: Download },
  { key: "rename", label: "Rename", icon: Pencil },
  { key: "copy", label: "Copy", icon: Copy },
  { key: "move", label: "Move", icon: FolderInput },
  { key: "delete", label: "Delete", icon: Trash2, danger: true },
];

export const ItemContextMenu: React.FC<ItemContextMenuProps> = ({ rect, onClose, onAction }) => {
  const overflowsRight = rect.left + MENU_WIDTH + VIEWPORT_MARGIN > window.innerWidth;
  const positionStyle: React.CSSProperties = overflowsRight
    ? { top: rect.bottom + 4, right: window.innerWidth - rect.right }
    : { top: rect.bottom + 4, left: rect.left };

  return (
    <>
      <div className="fixed inset-0 z-40" onClick={onClose} />

      <div
        className="fixed z-50 w-44 rounded-xl border border-gray-100 bg-white p-1.5 shadow-lg"
        style={positionStyle}
      >
        {ITEMS.map(({ key, label, icon: Icon, danger }) => (
          <React.Fragment key={key}>
            {key === "delete" && <div className="my-1 border-t border-gray-100" />}
            <button
              type="button"
              onClick={() => {
                onAction(key);
                onClose();
              }}
              className={`flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-left text-sm ${
                danger ? "text-red-500 hover:bg-red-50" : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              <Icon className="h-3.5 w-3.5 shrink-0" />
              {label}
            </button>
          </React.Fragment>
        ))}
      </div>
    </>
  );
};

export default ItemContextMenu;