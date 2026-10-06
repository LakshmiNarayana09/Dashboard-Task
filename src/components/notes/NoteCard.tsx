
import React from "react";
import { Calendar, Pin } from "lucide-react";
import type { Note } from "../../types/notes";

interface NoteCardProps {
  note: Note;
  onClick?: (note: Note) => void;
  onTogglePin: (noteId: string) => void;
}

export const NoteCard: React.FC<NoteCardProps> = ({
  note,
  onClick,
  onTogglePin,
}) => {
  return (
    <button
      type="button"
      onClick={() => onClick?.(note)}
      className="relative flex h-[220px] w-full flex-col overflow-hidden rounded-xl border border-gray-100 bg-white p-4 pt-7 text-left shadow-sm transition-shadow hover:shadow-md"
    >
      <div className="mb-2 flex h-6 shrink-0 items-center justify-between">
        <span className="flex items-center gap-1.5 text-xs text-gray-400">
          <Calendar className="h-3.5 w-3.5 shrink-0" />
          <span>{note.date}</span>
        </span>

        <span
          role="button"
          tabIndex={0}
          onClick={(e) => {
            e.stopPropagation();
            onTogglePin(note.id);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              e.stopPropagation();
              onTogglePin(note.id);
            }
          }}
          aria-label={note.pinned ? "Unpin note" : "Pin note"}
          className={`rounded-md p-1 ${
            note.pinned
              ? "text-gray-700"
              : "text-gray-300 hover:text-gray-500"
          }`}
        >
          <Pin
            className="h-3.5 w-3.5"
            fill={note.pinned ? "currentColor" : "none"}
          />
        </span>
      </div>

      
      <h3 className="mb-1.5 h-5 shrink-0 overflow-hidden text-sm font-semibold leading-5 text-gray-900">
        {note.title}
      </h3>

      
      <p className="line-clamp-5 h-[96px] overflow-hidden text-xs leading-[19px] text-gray-500">
        {note.body}
      </p>
    </button>
  );
};

export default NoteCard;

