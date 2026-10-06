export type ConversationKind = "team" | "person";

export type ChatFileKind = "pdf" | "photoshop" | "figma" | "sketch" | "word" | "other";

export interface ChatSharedFile {
  id: string;
  name: string;
  size: string;
  kind: ChatFileKind;
}

export interface ChatMember {
  id: string;
  name: string;
  role: string;
  avatar?: string;
  online?: boolean;
}

export interface ChatConversation {
  id: string;
  kind: ConversationKind;
  name: string;
  avatar?: string;
  lastMessage: string;
  timestamp: string;
  unreadCount?: number;
  memberCount?: number;
  sharedFiles?: ChatSharedFile[];
  sharedPhotos?: string[];
  members?: ChatMember[];
}

export type MessageSender = "me" | "them";

export interface ChatFileAttachment {
  name: string;
  size: string;
}

export interface ChatMessage {
  id: string;
  sender: MessageSender;
  text?: string;
  images?: string[];
  file?: ChatFileAttachment;
  timestamp: string;
  dateLabel?: string;
}