import React, { useState } from "react";
import { Paperclip, Smile, Send } from "lucide-react";

interface MessageComposerProps {
  onSend: (text: string) => void;
}

export const MessageComposer: React.FC<MessageComposerProps> = ({ onSend }) => {
  const [text, setText] = useState("");

  const handleSend = () => {
    if (!text.trim()) return;
    onSend(text.trim());
    setText("");
  };

  return (
    <div className="flex items-center gap-2 border-t border-gray-100 px-4 py-3">
      <button
        type="button"
        aria-label="Attach file"
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-gray-400 hover:bg-gray-100 hover:text-gray-600"
      >
        <Paperclip className="h-4 w-4" />
      </button>
      <button
        type="button"
        aria-label="Add emoji"
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-gray-400 hover:bg-gray-100 hover:text-gray-600"
      >
        <Smile className="h-4 w-4" />
      </button>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSend()}
        placeholder="Type a message here..."
        className="flex-1 rounded-full border border-gray-200 px-4 py-2 text-sm text-gray-700 placeholder:text-gray-400 focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
      />
      <button
        type="button"
        onClick={handleSend}
        aria-label="Send message"
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white hover:bg-emerald-600"
      >
        <Send className="h-4 w-4" />
      </button>
    </div>
  );
};

export default MessageComposer;