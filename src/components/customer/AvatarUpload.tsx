
import React, { useRef } from "react";
import { Pencil, User } from "lucide-react";

interface AvatarUploadProps {
  avatar: string;
  onChange: (url: string) => void;
}

export const AvatarUpload: React.FC<AvatarUploadProps> = ({ avatar, onChange }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="flex justify-center">
      <div className="relative">
        <div className="flex h-24 w-24 items-center justify-center overflow-hidden rounded-full border-2 border-dashed border-gray-200 bg-gray-50">
          {avatar ? (
            <img src={avatar} alt="Avatar" className="h-full w-full object-cover" />
          ) : (
            <User className="h-10 w-10 text-gray-300" strokeWidth={1.25} />
          )}
        </div>
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          aria-label="Change avatar"
          className="absolute -right-1 top-0 flex h-7 w-7 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 shadow-sm hover:bg-gray-50"
        >
          <Pencil className="h-3.5 w-3.5" />
        </button>
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) onChange(URL.createObjectURL(file));
          }}
        />
      </div>
    </div>
  );
};

export default AvatarUpload;