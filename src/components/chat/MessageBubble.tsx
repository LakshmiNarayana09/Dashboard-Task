import React from "react";
import { Pencil, Trash2 } from "lucide-react";
import type { ChatMessage, ChatConversation } from "../../types/chat";
import { ConversationAvatar } from "./ConversationAvatar";
import { ImageAttachmentGroup } from "./ImageAttachmentGroup";
import { FileAttachmentBubble } from "./FileAttachmentBubble";

interface MessageBubbleProps {
  message: ChatMessage;
  conversation: ChatConversation;
  myAvatar?: string;
  onEdit?: (message: ChatMessage) => void;
  onDelete?: (message: ChatMessage) => void;
  onDownloadFile?: (message: ChatMessage) => void;
}

export const MessageBubble: React.FC<MessageBubbleProps> = ({
  message,
  conversation,
  myAvatar,
  onEdit,
  onDelete,
  onDownloadFile,
}) => {
  const isMe = message.sender === "me";

  return (
    <div>
      {message.dateLabel && (
        <div className="my-4 flex items-center justify-center">
          <span className="rounded-full bg-gray-100 px-3 py-1 text-[11px] font-medium text-gray-500">
            {message.dateLabel}
          </span>
        </div>
      )}

      <div className={`group flex items-end gap-2.5 ${isMe ? "flex-row-reverse" : ""}`}>
        {isMe ? (
          myAvatar ? (
            <img src={myAvatar} alt="You" className="h-8 w-8 shrink-0 rounded-full object-cover" />
          ) : (
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-xs font-semibold text-white">
              Y
            </span>
          )
        ) : (
          <ConversationAvatar name={conversation.name} kind={conversation.kind} avatar={conversation.avatar} size="sm" />
        )}

        {isMe && (onEdit || onDelete) && (
          <div className="flex items-center gap-1 opacity-0 transition-opacity group-hover:opacity-100">
            {onEdit && (
              <button
                type="button"
                onClick={() => onEdit(message)}
                aria-label="Edit message"
                className="rounded-md p-1 text-gray-300 hover:bg-gray-100 hover:text-gray-500"
              >
                <Pencil className="h-3.5 w-3.5" />
              </button>
            )}
            {onDelete && (
              <button
                type="button"
                onClick={() => onDelete(message)}
                aria-label="Delete message"
                className="rounded-md p-1 text-gray-300 hover:bg-gray-100 hover:text-red-500"
              >
                <Trash2 className="h-3.5 w-3.5" />
              </button>
            )}
          </div>
        )}

        <div className={`flex max-w-[65%] flex-col gap-1.5 ${isMe ? "items-end" : "items-start"}`}>
          {message.images && message.images.length > 0 && <ImageAttachmentGroup images={message.images} />}

          {message.file && (
            <FileAttachmentBubble file={message.file} onDownload={() => onDownloadFile?.(message)} />
          )}

          {message.text && (
            <div
              className={`whitespace-pre-line rounded-2xl px-3.5 py-2 text-sm leading-relaxed ${
                isMe ? "bg-emerald-500 text-white" : "bg-gray-100 text-gray-700"
              }`}
            >
              {message.text}
            </div>
          )}

          <span className="px-1 text-[11px] text-gray-400">{message.timestamp}</span>
        </div>
      </div>
    </div>
  );
};

export default MessageBubble;