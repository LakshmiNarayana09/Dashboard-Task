export type FileKind = "figma" | "sketch" | "word" | "pdf" | "photoshop" | "audio" | "image" | "other";

export interface FolderTreeItem {
  id: string;
  name: string;
  children?: FolderTreeItem[];
}

export interface SidebarSection {
  id: string;
  name: string;
  icon: "folder" | "music" | "image" | "doc" | "download" | "trash";
  children?: FolderTreeItem[];
}

export interface FileManagerFolder {
  id: string;
  name: string;
  size: string;
  itemCount?: number;
}

export interface FileManagerFile {
  id: string;
  name: string;
  size: string;
  kind: FileKind;
}

export interface FileManagerDetails {
  type: string;
  size: string;
  owner: string;
  location: string;
  modified: string;
  created: string;
}

export interface SelectedFileManagerItem {
  type: "folder" | "file";
  id: string;
}

export type UploadFileStatus = "done" | "failed" | "uploading";

export interface UploadingFile {
  id: string;
  name: string;
  size: string;
  kind: FileKind;
  status: UploadFileStatus;
  progress: number; 
}