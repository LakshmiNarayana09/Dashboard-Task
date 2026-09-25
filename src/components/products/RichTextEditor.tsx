
import React, { useEffect, useRef } from "react";
import { Bold, Italic, Underline, AlignLeft, AlignCenter, AlignRight, ChevronDown } from "lucide-react";

interface RichTextEditorProps {
  value: string;
  onChange: (html: string) => void;
  placeholder?: string;
}

export const RichTextEditor: React.FC<RichTextEditorProps> = ({
  value,
  onChange,
  placeholder = "Type something",
}) => {
  const editorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (editorRef.current && editorRef.current.innerHTML !== value) {
      editorRef.current.innerHTML = value;
    }
    
  }, [value]);

  const exec = (command: string) => {
    editorRef.current?.focus();
    document.execCommand(command);
    onChange(editorRef.current?.innerHTML ?? "");
  };

  const ToolbarButton: React.FC<{ onClick: () => void; children: React.ReactNode; label: string }> = ({
    onClick,
    children,
    label,
  }) => (
    <button
      type="button"
      onMouseDown={(e) => e.preventDefault()}
      onClick={onClick}
      aria-label={label}
      className="flex h-6 w-6 items-center justify-center rounded text-gray-500 hover:bg-gray-100 hover:text-gray-700"
    >
      {children}
    </button>
  );

  return (
    <div className="rounded-lg border border-gray-200 focus-within:border-emerald-400 focus-within:ring-1 focus-within:ring-emerald-400">
      <div className="flex items-center gap-1 border-b border-gray-100 px-2 py-1.5">
        <button
          type="button"
          className="flex items-center gap-0.5 rounded px-1.5 py-0.5 text-xs font-medium text-gray-500 hover:bg-gray-100"
        >
          A
          <ChevronDown className="h-3 w-3" />
        </button>

        <div className="mx-1 h-4 w-px bg-gray-200" />

        <ToolbarButton onClick={() => exec("bold")} label="Bold">
          <Bold className="h-3.5 w-3.5" />
        </ToolbarButton>

        <ToolbarButton onClick={() => exec("italic")} label="Italic">
          <Italic className="h-3.5 w-3.5" />
        </ToolbarButton>

        <ToolbarButton onClick={() => exec("underline")} label="Underline">
          <Underline className="h-3.5 w-3.5" />
        </ToolbarButton>

        <div className="mx-1 h-4 w-px bg-gray-200" />

        <ToolbarButton onClick={() => exec("justifyLeft")} label="Align left">
          <AlignLeft className="h-3.5 w-3.5" />
        </ToolbarButton>

        <ToolbarButton onClick={() => exec("justifyCenter")} label="Align center">
          <AlignCenter className="h-3.5 w-3.5" />
        </ToolbarButton>

        <ToolbarButton onClick={() => exec("justifyRight")} label="Align right">
          <AlignRight className="h-3.5 w-3.5" />
        </ToolbarButton>

      </div>
      
      <div
        ref={editorRef}
        contentEditable
        suppressContentEditableWarning
        onInput={(e) => onChange(e.currentTarget.innerHTML)}
        data-placeholder={placeholder}
        className="min-h-[90px] resize-y overflow-auto rounded-b-lg px-3 py-2 text-sm text-gray-700 outline-none empty:before:text-gray-400 empty:before:content-[attr(data-placeholder)]"
      />
    </div>
  );
};

export default RichTextEditor;