export interface Note {
  id: string;
  date: string; 
  title: string;
  body: string;
  pinned: boolean;
  accentClass?: string; 
}

export interface NoteFormValues {
  title: string;
  description: string;
  accentClass?: string;
}