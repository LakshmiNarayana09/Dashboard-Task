import React from "react";
import { X, Minus, Maximize2, Paperclip, Trash2 } from "lucide-react";

interface ComposeMailProps {
  onClose: () => void;
}

const ComposeMail: React.FC<ComposeMailProps> = ({ onClose }) => {
  return (
    <div className="fixed bottom-0 right-6 z-50 w-[520px] overflow-hidden rounded-t-xl border border-gray-200 bg-white shadow-2xl">
      
      <div className="flex h-12 items-center justify-between bg-[#f3f4f6] px-4">
        <h2 className="text-sm font-semibold text-gray-700">
          New Message
        </h2>

        <div className="flex items-center gap-1">
          <button
            type="button"
            className="flex h-7 w-7 items-center justify-center rounded hover:bg-gray-200"
          >
            <Minus className="h-4 w-4 text-gray-600" />
          </button>

          <button
            type="button"
            className="flex h-7 w-7 items-center justify-center rounded hover:bg-gray-200"
          >
            <Maximize2 className="h-3.5 w-3.5 text-gray-600" />
          </button>

          <button
            type="button"
            onClick={onClose}
            className="flex h-7 w-7 items-center justify-center rounded hover:bg-gray-200"
          >
            <X className="h-4 w-4 text-gray-600" />
          </button>
        </div>
      </div>

      
      <div className="p-4">
        <div className="border-b border-gray-200">
          <input
            type="email"
            placeholder="Recipients"
            className="w-full border-0 px-1 py-2 text-sm outline-none placeholder:text-gray-400"
          />
        </div>

        <div className="border-b border-gray-200">
          <input
            type="text"
            placeholder="Subject"
            className="w-full border-0 px-1 py-2 text-sm outline-none placeholder:text-gray-400"
          />
        </div>

        <textarea
          rows={10}
          placeholder="Write your message..."
          className="mt-3 w-full resize-none border-0 px-1 text-sm text-gray-700 outline-none placeholder:text-gray-400"
        />

        
        <div className="mt-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="rounded-md p-2 text-gray-500 hover:bg-gray-100"
            >
              <Paperclip className="h-4 w-4" />
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onClose}
              className="rounded-md p-2 text-gray-500 hover:bg-gray-100"
            >
              <Trash2 className="h-4 w-4" />
            </button>

            <button
              type="button"
              className="rounded-lg bg-emerald-500 px-5 py-2 text-sm font-medium text-white hover:bg-emerald-600"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComposeMail;