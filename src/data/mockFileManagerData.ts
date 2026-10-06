import type {
  SidebarSection,
  FileManagerFolder,
  FileManagerFile,
  FileManagerDetails,
  FileKind
} from "../types/fileManager";



export const mockFolderDetailsById: Record<string, FileManagerDetails> = {
  f1: { type: "Folder", size: "5.6 GB", owner: "ArtTemplate", location: "My Files", modified: "Sep 12, 2020 2:10", created: "Aug 28, 2020 9:40" },
  f2: { type: "Folder", size: "3.2 GB", owner: "ArtTemplate", location: "My Files", modified: "Sep 17, 2020 4:25", created: "Sep 10, 2020 2:25" },
  f3: { type: "Folder", size: "16 GB", owner: "ArtTemplate", location: "My Files", modified: "Sep 15, 2020 11:05", created: "Jul 02, 2020 8:15" },
  f4: { type: "Folder", size: "1.7 GB", owner: "ArtTemplate", location: "My Files", modified: "Sep 14, 2020 6:50", created: "Jun 19, 2020 1:30" },
  f5: { type: "Folder", size: "440 MB", owner: "ArtTemplate", location: "My Files", modified: "Sep 11, 2020 3:00", created: "May 03, 2020 10:10" },
  f6: { type: "Folder", size: "151 MB", owner: "ArtTemplate", location: "My Files", modified: "Sep 16, 2020 9:45", created: "Apr 21, 2020 4:05" },
};

const FILE_KIND_LABEL: Record<FileKind, string> = {
  figma: "Figma File",
  sketch: "Sketch File",
  word: "Word Document",
  pdf: "PDF Document",
  photoshop: "Photoshop File",
  audio: "Audio File",
  image: "Image",
  other: "File",
};

export const mockFileDetailsById: Record<string, FileManagerDetails> = {
  file1: { type: FILE_KIND_LABEL.figma, size: "1.8 MB", owner: "ArtTemplate", location: "Projects", modified: "Sep 17, 2020 4:25", created: "Sep 10, 2020 2:25" },
  file2: { type: FILE_KIND_LABEL.sketch, size: "1.5 MB", owner: "ArtTemplate", location: "Projects", modified: "Sep 16, 2020 1:15", created: "Sep 08, 2020 10:40" },
  file3: { type: FILE_KIND_LABEL.sketch, size: "1.3 MB", owner: "ArtTemplate", location: "Projects", modified: "Sep 15, 2020 5:30", created: "Sep 05, 2020 3:20" },
  file4: { type: FILE_KIND_LABEL.word, size: "2.1 MB", owner: "ArtTemplate", location: "Documents", modified: "Sep 14, 2020 2:05", created: "Sep 02, 2020 9:15" },
  file5: { type: FILE_KIND_LABEL.audio, size: "1.6 MB", owner: "ArtTemplate", location: "Music", modified: "Sep 13, 2020 7:40", created: "Aug 30, 2020 11:00" },
  file6: { type: FILE_KIND_LABEL.photoshop, size: "2.5 MB", owner: "ArtTemplate", location: "Design", modified: "Sep 12, 2020 12:50", created: "Aug 25, 2020 8:05" },
  file7: { type: FILE_KIND_LABEL.word, size: "1.2 MB", owner: "ArtTemplate", location: "Documents", modified: "Sep 11, 2020 3:35", created: "Aug 20, 2020 4:45" },
  file8: { type: FILE_KIND_LABEL.pdf, size: "4.5 MB", owner: "ArtTemplate", location: "Documents", modified: "Sep 10, 2020 9:20", created: "Aug 14, 2020 1:10" },
};

export const SIDEBAR_SECTIONS: SidebarSection[] = [
  { id: "design", name: "Design", icon: "folder" },
  {
    id: "projects",
    name: "Projects",
    icon: "folder",
    children: [
      { id: "projects_01", name: "Projects_01" },
      { id: "projects_02", name: "Projects_02" },
      { id: "projects_03", name: "Projects_03" },
      { id: "projects_04", name: "Projects_04" },
    ],
  },
  { id: "music", name: "Music", icon: "music" },
  { id: "pictures", name: "Pictures", icon: "image" },
  { id: "documents", name: "Documents", icon: "doc" },
  { id: "downloads", name: "Downloads", icon: "download" },
];

export const TRASH_SECTION: SidebarSection = { id: "trash", name: "Trash", icon: "trash" };

export const STORAGE_USED_PERCENT = 70;

export const mockFolders: FileManagerFolder[] = [
  { id: "f1", name: "Design", size: "5.6 GB" },
  { id: "f2", name: "Projects", size: "3.2 GB" },
  { id: "f3", name: "Music", size: "16 GB" },
  { id: "f4", name: "Pictures", size: "1.7 GB" },
  { id: "f5", name: "Documents", size: "440 MB" },
  { id: "f6", name: "Downloads", size: "151 MB" },
];

export const mockFiles: FileManagerFile[] = [
  { id: "file1", name: "Rocket - Admin...", size: "1.8 MB", kind: "figma" },
  { id: "file2", name: "Rocket - Admin...", size: "1.5 MB", kind: "sketch" },
  { id: "file3", name: "Arion - Admin...", size: "1.3 MB", kind: "sketch" },
  { id: "file4", name: "Project Brief", size: "2.1 MB", kind: "word" },
  { id: "file5", name: "Design", size: "1.6 MB", kind: "audio" },
  { id: "file6", name: "vCard - Resume...", size: "2.5 MB", kind: "photoshop" },
  { id: "file7", name: "Project Brief", size: "1.2 MB", kind: "word" },
  { id: "file8", name: "Brand Styles Guide", size: "4.5 MB", kind: "pdf" },
];

export const mockFolderDetails: FileManagerDetails = {
  type: "Folder",
  size: "3.2 GB",
  owner: "ArtTemplate",
  location: "My Files",
  modified: "Sep 17, 2020 4:25",
  created: "Sep 10, 2020 2:25",
};