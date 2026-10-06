import React from "react";
import { Calendar, Pencil, Pin, MoreHorizontal, X, AlignLeft } from "lucide-react";
import type { Note } from "../../types/notes";

interface NoteDetailsModalProps {
  note: Note | null;
  onClose: () => void;
  onEdit: (note: Note) => void;
  onTogglePin: (noteId: string) => void;
}

export const NoteDetailsModal: React.FC<NoteDetailsModalProps> = ({
  note,
  onClose,
  onEdit,
  onTogglePin,
}) => {
  if (!note) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4" onClick={onClose}>
      <div
        className="w-full max-w-md rounded-2xl bg-white p-5 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-4 flex items-start justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <span
              className={`h-2.5 w-2.5 shrink-0 rounded-full ${note.accentClass ?? "bg-gray-300"}`}
            />
            <h2 className="text-base font-semibold text-gray-900">{note.title}</h2>
          </div>

          <div className="flex shrink-0 items-center gap-1">
            <button
              type="button"
              onClick={() => onEdit(note)}
              aria-label="Edit note"
              className="rounded-md p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-600"
            >
              <Pencil className="h-3.5 w-3.5" />
            </button>
            <button
              type="button"
              onClick={() => onTogglePin(note.id)}
              aria-label={note.pinned ? "Unpin note" : "Pin note"}
              className={`rounded-md p-1.5 hover:bg-gray-100 ${note.pinned ? "text-gray-700" : "text-gray-400 hover:text-gray-600"}`}
            >
              <Pin className="h-3.5 w-3.5" fill={note.pinned ? "currentColor" : "none"} />
            </button>
            <button
              type="button"
              aria-label="More options"
              className="rounded-md p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-600"
            >
              <MoreHorizontal className="h-3.5 w-3.5" />
            </button>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="rounded-md p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-600"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>

        <div className="mb-4 flex items-center gap-1.5 text-xs text-gray-400">
          <Calendar className="h-3.5 w-3.5" />
          {note.date}
        </div>

        <div className="flex items-start gap-2.5 text-sm leading-relaxed text-gray-600">
          <AlignLeft className="mt-0.5 h-4 w-4 shrink-0 text-gray-300" />
          <p className="whitespace-pre-line">{note.body}</p>
        </div>
      </div>
    </div>
  );
};

export default NoteDetailsModal;