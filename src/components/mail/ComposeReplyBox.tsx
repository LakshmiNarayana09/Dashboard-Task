import React, { useState } from "react";
import {
  Bold,
  Italic,
  Underline,
  Strikethrough,
  Link as LinkIcon,
  Image as ImageIcon,
  List,
  ListOrdered,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  Paperclip,
  Clock,
  Send,
  X,
} from "lucide-react";

interface ComposeReplyBoxProps {
  toName: string;
  onSend: (body: string) => void;
}

export const ComposeReplyBox: React.FC<ComposeReplyBoxProps> = ({ toName, onSend }) => {
  const [body, setBody] = useState("");
  const [showCcBcc, setShowCcBcc] = useState(false);

  const toolbarButtons: { icon: React.ElementType; label: string }[] = [
    { icon: Bold, label: "Bold" },
    { icon: Italic, label: "Italic" },
    { icon: Underline, label: "Underline" },
    { icon: Strikethrough, label: "Strikethrough" },
    { icon: LinkIcon, label: "Link" },
    { icon: ImageIcon, label: "Image" },
    { icon: List, label: "Bullet list" },
    { icon: ListOrdered, label: "Numbered list" },
    { icon: AlignLeft, label: "Align left" },
    { icon: AlignCenter, label: "Align center" },
    { icon: AlignRight, label: "Align right" },
    { icon: AlignJustify, label: "Justify" },
  ];

  const handleSend = () => {
    if (!body.trim()) return;
    onSend(body);
    setBody("");
  };

  return (
    <div className="border-t border-gray-100 p-4">
      <div className="rounded-xl border border-gray-200">
        <div className="flex items-center gap-2 border-b border-gray-100 px-3 py-2 text-sm">
          <span className="text-gray-400">To:</span>
          <span className="flex items-center gap-1 rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-700">
            {toName}
            <button type="button" aria-label="Remove recipient" className="text-gray-400 hover:text-gray-600">
              <X className="h-3 w-3" />
            </button>
          </span>
          <div className="ml-auto flex items-center gap-2 text-xs text-gray-400">
            <button type="button" onClick={() => setShowCcBcc((v) => !v)} className="hover:text-gray-600">
              Cc
            </button>
            <button type="button" onClick={() => setShowCcBcc((v) => !v)} className="hover:text-gray-600">
              Bcc
            </button>
          </div>
        </div>

        {showCcBcc && (
          <div className="space-y-1 border-b border-gray-100 px-3 py-2 text-sm">
            <input
              type="text"
              placeholder="Cc"
              className="w-full border-none p-0 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none"
            />
            <input
              type="text"
              placeholder="Bcc"
              className="w-full border-none p-0 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none"
            />
          </div>
        )}

        <div className="flex flex-wrap items-center gap-1 border-b border-gray-100 px-3 py-1.5">
          <select className="mr-1 rounded-md border-none bg-transparent text-xs text-gray-500 focus:outline-none">
            <option>A</option>
          </select>
          {toolbarButtons.map(({ icon: Icon, label }) => (
            <button
              key={label}
              type="button"
              aria-label={label}
              className="flex h-6 w-6 items-center justify-center rounded text-gray-500 hover:bg-gray-100 hover:text-gray-700"
            >
              <Icon className="h-3.5 w-3.5" />
            </button>
          ))}
        </div>

        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="Type something"
          rows={3}
          className="w-full resize-none border-none px-3 py-2.5 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none"
        />

        <div className="flex items-center gap-2 px-3 pb-3">
          <button
            type="button"
            onClick={handleSend}
            className="flex items-center gap-1.5 rounded-lg bg-emerald-500 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-600"
          >
            Send
            <Send className="h-3.5 w-3.5" />
          </button>
          <button
            type="button"
            aria-label="Schedule send"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-50"
          >
            <Clock className="h-4 w-4" />
          </button>
          <button
            type="button"
            aria-label="Attach file"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-50"
          >
            <Paperclip className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ComposeReplyBox;