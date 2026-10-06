import React, { useState } from "react";
import { NotesToolbar } from "./NotesToolbar";
import { NoteCard } from "./NoteCard";
import { NoteDetailsModal } from "./NoteDetailsModal";
import { AddNoteModal } from "./AddNoteModal";
import { mockNotes } from "../../data/mockNotesData";
import type { Note, NoteFormValues } from "../../types/notes";

export const NotesPage: React.FC = () => {
  const [notes, setNotes] = useState<Note[]>(mockNotes);
  const [selectedNote, setSelectedNote] = useState<Note | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingNote, setEditingNote] = useState<Note | null>(null);

  const handleTogglePin = (noteId: string) => {
    setNotes((prev) =>
      prev.map((note) => (note.id === noteId ? { ...note, pinned: !note.pinned } : note))
    );
    setSelectedNote((prev) => (prev && prev.id === noteId ? { ...prev, pinned: !prev.pinned } : prev));
  };

  const handleNoteClick = (note: Note) => {
    setSelectedNote(note);
  };

  const handleEditNote = (note: Note) => {
    setSelectedNote(null);
    setEditingNote(note);
    setIsFormOpen(true);
  };

  const handleAddNote = () => {
    setEditingNote(null);
    setIsFormOpen(true);
  };

  const handleFilterClick = () => {
    console.log("Open notes filter");
  };

  const handleSaveNote = (values: NoteFormValues, existing?: Note | null) => {
    const formatDate = () =>
      new Date().toLocaleDateString("en-US", { day: "numeric", month: "long", year: "numeric" });

    if (existing) {
      setNotes((prev) =>
        prev.map((n) =>
          n.id === existing.id ? { ...n, title: values.title, body: values.description } : n
        )
      );
    } else {
      const newNote: Note = {
        id: `${Date.now()}`,
        date: formatDate(),
        title: values.title,
        body: values.description,
        pinned: false,
      };
      setNotes((prev) => [newNote, ...prev]);
    }

    setIsFormOpen(false);
    setEditingNote(null);
  };

  return (
    <div className="min-h-full bg-gray-50 p-6">
      <NotesToolbar onFilterClick={handleFilterClick} onAddNote={handleAddNote} />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {notes.map((note) => (
          <NoteCard key={note.id} note={note} onClick={handleNoteClick} onTogglePin={handleTogglePin} />
        ))}
        {notes.length === 0 && (
          <p className="col-span-full py-12 text-center text-sm text-gray-400">No notes yet</p>
        )}
      </div>

      <NoteDetailsModal
        note={selectedNote}
        onClose={() => setSelectedNote(null)}
        onEdit={handleEditNote}
        onTogglePin={handleTogglePin}
      />

      <AddNoteModal
        isOpen={isFormOpen}
        onClose={() => {
          setIsFormOpen(false);
          setEditingNote(null);
        }}
        note={editingNote}
        onSave={handleSaveNote}
      />
    </div>
  );
};

export default NotesPage;