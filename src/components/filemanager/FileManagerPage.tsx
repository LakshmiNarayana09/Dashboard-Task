import React, { useMemo, useState } from "react";
import { FileManagerSidebar } from "./FileManagerSidebar";
import { FileManagerToolbar } from "./FileManagerToolbar";
import { FolderCard, AddFolderCard } from "./FolderCard";
import { FileCard } from "./FileCard";
import { FileDetailsPanel } from "./FileDetailsPanel";
import type { ContextMenuAction } from "./ItemContextMenu";
import { UploadProgressPanel } from "./UploadProgressPanel";

import {
  mockFolders as INITIAL_FOLDERS,
  mockFiles as INITIAL_FILES,
  mockFolderDetailsById,
  mockFileDetailsById,
} from "../../data/mockFileManagerData";
import type { SelectedFileManagerItem, FileManagerFolder, FileManagerFile, UploadingFile } from "../../types/fileManager";

export const FileManagerPage: React.FC = () => {
  const [folders, setFolders] = useState<FileManagerFolder[]>(INITIAL_FOLDERS);
  const [files, setFiles] = useState<FileManagerFile[]>(INITIAL_FILES);
  const [activeSidebarId, setActiveSidebarId] = useState("projects");
  const [search, setSearch] = useState("");
  const [selectedItem, setSelectedItem] = useState<SelectedFileManagerItem | null>({
    type: "folder",
    id: "f2",
  });

  const [uploadingFiles, setUploadingFiles] = useState<UploadingFile[]>([]);

  const filteredFolders = useMemo(
    () => folders.filter((f) => f.name.toLowerCase().includes(search.toLowerCase())),
    [folders, search]
  );

  const filteredFiles = useMemo(
    () => files.filter((f) => f.name.toLowerCase().includes(search.toLowerCase())),
    [files, search]
  );

  const selectedFolder =
    selectedItem?.type === "folder" ? folders.find((f) => f.id === selectedItem.id) : undefined;
  const selectedFile =
    selectedItem?.type === "file" ? files.find((f) => f.id === selectedItem.id) : undefined;

  const panelName = selectedFolder?.name ?? selectedFile?.name ?? "—";
  const panelDetails = selectedItem
    ? selectedItem.type === "folder"
      ? mockFolderDetailsById[selectedItem.id]
      : mockFileDetailsById[selectedItem.id]
    : undefined;

  const handleFolderAction = (folder: FileManagerFolder, action: ContextMenuAction) => {
    if (action === "delete") {
      setFolders((prev) => prev.filter((f) => f.id !== folder.id));
      setSelectedItem((prev) =>
        prev?.type === "folder" && prev.id === folder.id ? null : prev
      );
      return;
    }
    console.log(action, "on folder", folder.id);
  };

  const handleFileAction = (file: FileManagerFile, action: ContextMenuAction) => {
    if (action === "delete") {
      setFiles((prev) => prev.filter((f) => f.id !== file.id));
      setSelectedItem((prev) =>
        prev?.type === "file" && prev.id === file.id ? null : prev
      );
      return;
    }
    console.log(action, "on file", file.id);
  };

  const handleUploadClick = () => {
    const batch: UploadingFile[] = [
      { id: "u1", name: "Rocket – Admin Dashboard & UI Kit.fig", size: "1.8 MB", kind: "figma", status: "done", progress: 100 },
      { id: "u2", name: "Rocket – Admin Dashboard & UI Kit.sketch", size: "1.5 MB", kind: "sketch", status: "done", progress: 100 },
      { id: "u3", name: "Arion – Admin Dashboard & UI Kit.sketch", size: "1.2 MB", kind: "sketch", status: "done", progress: 100 },
      { id: "u4", name: "Project Brief.docx", size: "1.4 MB", kind: "word", status: "failed", progress: 0 },
      { id: "u5", name: "Design.zip", size: "1.8 MB", kind: "other", status: "uploading", progress: 95 },
      { id: "u6", name: "vCard – Resume.psd", size: "2.5 MB", kind: "photoshop", status: "uploading", progress: 75 },
      { id: "u7", name: "Brand Styles Guide.pdf", size: "4.5 MB", kind: "pdf", status: "uploading", progress: 50 },
    ];
    setUploadingFiles(batch);

    
    const interval = setInterval(() => {
      setUploadingFiles((prev) => {
        const stillUploading = prev.some((f) => f.status === "uploading" && f.progress < 100);
        if (!stillUploading) {
          clearInterval(interval);
          return prev;
        }
        return prev.map((f) =>
          f.status === "uploading"
            ? f.progress >= 100
              ? { ...f, status: "done", progress: 100 }
              : { ...f, progress: Math.min(100, f.progress + 5) }
            : f
        );
      });
    }, 300);
  };

const handleRetryUpload = (fileId: string) => {
  setUploadingFiles((prev) =>
    prev.map((f) => (f.id === fileId ? { ...f, status: "uploading", progress: 0 } : f))
  );
};

  return (
    <div className="flex min-h-full overflow-hidden rounded-2xl border border-gray-100 bg-gray-50">
      <FileManagerSidebar activeId={activeSidebarId} onSelect={setActiveSidebarId} />

      <div className="min-w-0 flex-1 overflow-y-auto p-6">
        <FileManagerToolbar
          searchValue={search}
          onSearchChange={setSearch}
          onUpload={handleUploadClick}
        />

        <h1 className="mb-3 text-xl font-semibold text-gray-900">Folders</h1>
        <div className="mb-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {filteredFolders.map((folder) => (
            <FolderCard
              key={folder.id}
              folder={folder}
              isActive={selectedItem?.type === "folder" && selectedItem.id === folder.id}
              onClick={() => setSelectedItem({ type: "folder", id: folder.id })}
              onAction={handleFolderAction}
            />
          ))}
          <AddFolderCard onClick={() => console.log("Open add-folder dialog")} />
        </div>

        <h2 className="mb-3 text-xl font-semibold text-gray-900">Files</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {filteredFiles.map((file) => (
            <FileCard
              key={file.id}
              file={file}
              isActive={selectedItem?.type === "file" && selectedItem.id === file.id}
              onClick={() => setSelectedItem({ type: "file", id: file.id })}
              onAction={handleFileAction}
            />
          ))}
        </div>
      </div>

      {panelDetails && (
        <FileDetailsPanel
          name={panelName}
          details={panelDetails}
          fileKind={selectedFile?.kind}
        />
      )}

      <UploadProgressPanel
        files={uploadingFiles}
        onClose={() => setUploadingFiles([])}
        onRetry={handleRetryUpload}
      />
    </div>
  );
};

export default FileManagerPage;