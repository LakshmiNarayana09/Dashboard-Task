import React from "react";
import { Search, Upload } from "lucide-react";

interface FileManagerToolbarProps {
  searchValue: string;
  onSearchChange: (value: string) => void;
  onUpload?: () => void;
}

export const FileManagerToolbar: React.FC<FileManagerToolbarProps> = ({
  searchValue,
  onSearchChange,
  onUpload,
}) => {
  return (
    <div className="mb-5 flex items-center gap-3">
      <div className="relative flex-1 max-w-sm">
        <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          value={searchValue}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search..."
          className="w-full rounded-lg border border-gray-200 bg-gray-50 py-2 pl-9 pr-3 text-sm text-gray-700 placeholder:text-gray-400 focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
        />
      </div>
      <button
        type="button"
        onClick={onUpload}
        className="ml-auto flex items-center gap-1.5 rounded-lg bg-emerald-500 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-600"
      >
        <Upload className="h-4 w-4" />
        Upload
      </button>
    </div>
  );
};

export default FileManagerToolbar;