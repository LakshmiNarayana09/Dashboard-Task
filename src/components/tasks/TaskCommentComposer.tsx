import React, { useState } from "react";
import { Send } from "lucide-react";

interface TaskCommentComposerProps {
  onSubmit: (text: string) => void;
}

export const TaskCommentComposer: React.FC<TaskCommentComposerProps> = ({ onSubmit }) => {
  const [text, setText] = useState("");

  const handleSubmit = () => {
    if (!text.trim()) return;
    onSubmit(text.trim());
    setText("");
  };

  return (
    <div className="flex items-center gap-2 border-t border-gray-100 pt-3">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
        placeholder="Write a comment..."
        className="flex-1 rounded-full border border-gray-200 px-3.5 py-2 text-sm text-gray-700 placeholder:text-gray-400 focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
      />
      <button
        type="button"
        onClick={handleSubmit}
        aria-label="Send comment"
        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white hover:bg-emerald-600"
      >
        <Send className="h-3.5 w-3.5" />
      </button>
    </div>
  );
};

export default TaskCommentComposer;