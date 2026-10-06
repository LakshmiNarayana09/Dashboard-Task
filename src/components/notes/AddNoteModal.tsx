import React, { useEffect, useState } from "react";
import { X } from "lucide-react";
import type { Note, NoteFormValues } from "../../types/notes";

interface AddNoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  note?: Note | null; // present = edit mode, null/undefined = add mode
  onSave: (values: NoteFormValues, note?: Note | null) => void;
}

const EMPTY_FORM: NoteFormValues = {
  title: "",
  description: "",
};

export const AddNoteModal: React.FC<AddNoteModalProps> = ({ isOpen, onClose, note, onSave }) => {
  const [values, setValues] = useState<NoteFormValues>(EMPTY_FORM);

  useEffect(() => {
    if (isOpen) {
      setValues(
        note
          ? { title: note.title, description: note.body, accentClass: note.accentClass }
          : EMPTY_FORM
      );
    }
  }, [isOpen, note]);

  if (!isOpen) return null;

  const handleCreate = () => {
    if (!values.title.trim()) return;
    onSave(values, note);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4" onClick={onClose}>
      <div
        className="w-full max-w-md rounded-2xl bg-white p-5 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-900">{note ? "Edit Note" : "Add Note"}</h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="rounded-md p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <label className="mb-1.5 block text-xs font-medium text-gray-500">Title</label>
            <input
              type="text"
              value={values.title}
              onChange={(e) => setValues((v) => ({ ...v, title: e.target.value }))}
              placeholder="The title of a note"
              className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-700 focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
            />
          </div>

          <div>
            <label className="mb-1.5 block text-xs font-medium text-gray-500">Description</label>
            <textarea
              value={values.description}
              onChange={(e) => setValues((v) => ({ ...v, description: e.target.value }))}
              rows={5}
              placeholder="Type something"
              className="w-full resize-y rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-700 placeholder:text-gray-400 focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
            />
          </div>
        </div>

        <div className="mt-5 flex justify-end">
          <button
            type="button"
            onClick={handleCreate}
            className="rounded-lg bg-emerald-500 px-6 py-2.5 text-sm font-medium text-white hover:bg-emerald-600"
          >
            {note ? "Save" : "Create"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddNoteModal;