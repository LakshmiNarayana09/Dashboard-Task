import React, { useRef } from "react";
import { Plus } from "lucide-react";

interface ContactAvatarUploadProps {
  avatar: string;
  onChange: (url: string) => void;
}

export const ContactAvatarUpload: React.FC<ContactAvatarUploadProps> = ({ avatar, onChange }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="flex justify-center">
      <button
        type="button"
        onClick={() => inputRef.current?.click()}
        className="flex h-20 w-20 items-center justify-center overflow-hidden rounded-xl border-2 border-dashed border-gray-200 bg-gray-50 hover:border-emerald-300"
      >
        {avatar ? (
          <img src={avatar} alt="Avatar" className="h-full w-full object-cover" />
        ) : (
          <Plus className="h-5 w-5 text-gray-400" />
        )}
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
  );
};

export default ContactAvatarUpload;