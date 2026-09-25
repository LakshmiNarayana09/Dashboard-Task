import React, { useState } from "react";
import { X } from "lucide-react";

interface TagInputProps {
  tags: string[];
  onChange: (tags: string[]) => void;
  placeholder?: string;
}

export const TagInput: React.FC<TagInputProps> = ({ tags, onChange, placeholder = "Add a tag" }) => {
  const [draft, setDraft] = useState("");

  const addTag = () => {
    const value = draft.trim();
    if (value && !tags.includes(value)) {
      onChange([...tags, value]);
    }
    setDraft("");
  };

  const removeTag = (tag: string) => {
    onChange(tags.filter((t) => t !== tag));
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      addTag();
    } else if (e.key === "Backspace" && !draft && tags.length > 0) {
      removeTag(tags[tags.length - 1]);
    }
  };

  return (
    <div className="flex flex-wrap items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-2.5 py-2 focus-within:border-emerald-400 focus-within:ring-1 focus-within:ring-emerald-400">
      {tags.map((tag) => (
        <span
          key={tag}
          className="flex items-center gap-1 rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600"
        >
          {tag}
          <button
            type="button"
            onClick={() => removeTag(tag)}
            className="text-gray-400 hover:text-gray-600"
            aria-label={`Remove ${tag}`}
          >
            <X className="h-3 w-3" />
          </button>
        </span>
      ))}
      <input
        type="text"
        value={draft}
        onChange={(e) => setDraft(e.target.value)}
        onKeyDown={handleKeyDown}
        onBlur={addTag}
        placeholder={tags.length === 0 ? placeholder : ""}
        className="min-w-[80px] flex-1 border-none bg-transparent text-sm text-gray-700 outline-none placeholder:text-gray-400"
      />
    </div>
  );
};

export default TagInput;