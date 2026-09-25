
import {
  ChevronDown,
  MoreHorizontal,
  Paperclip,
  Plus,
  Send,
  X,
} from "lucide-react";

import { chatMessages } from "../../data/dashboardData";

function ChatDrawer({
  onClose,
}: {
  onClose: () => void;
}) {
  return (
    <div className="absolute inset-y-0 right-0 z-50 flex w-full max-w-[350px] flex-col bg-white shadow-[-8px_0_20px_rgba(0,0,0,0.08)]">
      
      <div className="flex h-[58px] items-center justify-between border-b border-gray-100 px-4">
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#df8d78] text-[8px] font-medium text-white">
            R
          </div>

          <div>
            <p className="text-[9px] font-medium text-gray-700">
              Regina Cooper
            </p>

            <p className="text-[7px] text-gray-400">
              Online
            </p>
          </div>

          <ChevronDown
            size={10}
            className="text-gray-400"
          />
        </div>

        <div className="flex items-center gap-1">
          <button className="rounded-md p-1.5 text-gray-400 hover:bg-gray-50">
            <MoreHorizontal size={14} />
          </button>

          <button
            onClick={onClose}
            className="rounded-md p-1.5 text-gray-400 hover:bg-gray-50"
          >
            <X size={14} />
          </button>
        </div>
      </div>

      
      <div className="flex-1 overflow-y-auto px-3 py-4">
        <div className="mb-5 flex items-center gap-3">
          <div className="h-px flex-1 bg-gray-100" />

          <span className="text-[7px] text-gray-400">
            Today
          </span>

          <div className="h-px flex-1 bg-gray-100" />
        </div>

        <div className="space-y-4">
          {chatMessages.map((message) => (
            <div
              key={message.id}
              className={`flex items-end gap-2 ${
                message.sender === "me"
                  ? "justify-end"
                  : "justify-start"
              }`}
            >
              {message.sender === "other" && (
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#df8d78] text-[7px] text-white">
                  R
                </div>
              )}

              <div
                className={`max-w-[220px] ${
                  message.sender === "me"
                    ? "items-end"
                    : "items-start"
                } flex flex-col`}
              >
                <div
                  className={`rounded-lg px-3 py-2 text-[8px] leading-4 ${
                    message.sender === "me"
                      ? "rounded-br-sm bg-[#229447] text-white"
                      : "rounded-bl-sm bg-gray-100 text-gray-600"
                  }`}
                >
                  {message.message}
                </div>

                <span className="mt-1 text-[6px] text-gray-400">
                  {message.time}
                </span>
              </div>

              {message.sender === "me" && (
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#df8d78] text-[7px] text-white">
                  A
                </div>
              )}
            </div>
          ))}
        </div>

        
        <div className="mt-5 flex items-center gap-2">
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#df8d78] text-[7px] text-white">
            R
          </div>

          <span className="text-[7px] text-gray-400">
            Regina Cooper is typing...
          </span>
        </div>
      </div>

      
      <div className="border-t border-gray-100 p-3">
        <div className="flex items-center gap-2 rounded-lg bg-gray-50 px-2">
          <button className="text-gray-400">
            <Plus size={14} />
          </button>

          <input
            type="text"
            placeholder="Type a message"
            className="h-9 min-w-0 flex-1 bg-transparent text-[8px] text-gray-600 outline-none placeholder:text-gray-400"
          />

          <button className="text-gray-400">
            <Paperclip size={13} />
          </button>

          <button className="flex h-6 w-6 items-center justify-center rounded-full bg-[#229447] text-white">
            <Send size={10} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChatDrawer;