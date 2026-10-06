import React from "react";
import { CornerUpLeft, ChevronLeft, ChevronRight, Flag, Printer, Trash2 } from "lucide-react";
import type { MailMessage } from "../../types/mail";
import { AttachmentCard } from "./AttachmentCard";
import { ComposeReplyBox } from "./ComposeReplyBox";

interface MailReadingPaneProps {
  message: MailMessage | null;
  index: number;
  total: number;
  onPrev: () => void;
  onNext: () => void;
  onDelete?: (message: MailMessage) => void;
  onReply: (body: string) => void;
}

export const MailReadingPane: React.FC<MailReadingPaneProps> = ({
  message,
  index,
  total,
  onPrev,
  onNext,
  onDelete,
  onReply,
}) => {
  if (!message) {
    return (
      <div className="flex flex-1 items-center justify-center text-sm text-gray-400">
        Select a message to read
      </div>
    );
  }

  const initials = message.senderName
    .split(" ")
    .map((p) => p.charAt(0))
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <div className="flex flex-1 flex-col overflow-hidden">
      
      <div className="flex items-center justify-between border-b border-gray-100 px-5 py-3">
        <button
          type="button"
          aria-label="Reply"
          className="flex h-8 w-8 items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100"
        >
          <CornerUpLeft className="h-4 w-4" />
        </button>

        <div className="flex items-center gap-2 text-sm text-gray-500">
          <button type="button" onClick={onPrev} aria-label="Previous message" className="hover:text-gray-700">
            <ChevronLeft className="h-4 w-4" />
          </button>
          <span>
            {index + 1} of {total}
          </span>
          <button type="button" onClick={onNext} aria-label="Next message" className="hover:text-gray-700">
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>

        <div className="flex items-center gap-1">
          <button
            type="button"
            aria-label="Flag"
            className="flex h-8 w-8 items-center justify-center rounded-lg text-red-400 hover:bg-red-50"
          >
            <Flag className="h-4 w-4" />
          </button>
          <button
            type="button"
            aria-label="Print"
            className="flex h-8 w-8 items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100"
          >
            <Printer className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => onDelete?.(message)}
            aria-label="Delete"
            className="flex h-8 w-8 items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100 hover:text-red-500"
          >
            <Trash2 className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-6 py-5">
        
        <div className="mb-4 flex items-start justify-between">
          <div className="flex items-center gap-3">
            {message.avatar ? (
              <img src={message.avatar} alt={message.senderName} className="h-10 w-10 rounded-full object-cover" />
            ) : (
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-sm font-semibold text-emerald-700">
                {initials}
              </span>
            )}
            <div>
              <p className="text-sm font-semibold text-gray-900">{message.senderName}</p>
              <p className="text-xs text-emerald-600">{message.senderEmail}</p>
            </div>
          </div>
          <span className="shrink-0 text-xs text-gray-400">{message.receivedAtFull}</span>
        </div>

        <h1 className="mb-4 text-xl font-semibold text-gray-900">{message.subject}</h1>

        <div className="space-y-4 text-sm leading-relaxed text-gray-600">
          {message.body.map((paragraph, i) => (
            <p key={i} className="whitespace-pre-line">
              {paragraph}
            </p>
          ))}
        </div>

        {message.attachments && message.attachments.length > 0 && (
          <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {message.attachments.map((attachment) => (
              <AttachmentCard key={attachment.id} attachment={attachment} />
            ))}
          </div>
        )}
      </div>

      <ComposeReplyBox toName={message.senderName} onSend={onReply} />
    </div>
  );
};

export default MailReadingPane;