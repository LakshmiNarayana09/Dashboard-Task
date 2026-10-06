
export type MailFolderKey = "inbox" | "marked" | "drafts" | "sent" | "important" | "deleted";

export interface MailFolder {
  key: MailFolderKey;
  label: string;
  count?: number;
}

export interface MailLabel {
  key: string;
  label: string;
  colorClass: string;
}

export type AttachmentType = "pdf" | "zip" | "image" | "doc" | "other";

export interface MailAttachment {
  id: string;
  name: string;
  size: string;
  type: AttachmentType;
}

export interface MailMessage {
  id: string;
  senderName: string;
  senderEmail: string;
  avatar?: string;
  subject: string;
  preview: string;
  body: string[]; 
  receivedAtLabel: string; 
  receivedAtFull: string; 
  folder: MailFolderKey;
  flagged?: boolean;
  attachments?: MailAttachment[];
}

export interface NewLabelFormValues {
  name: string;
  colorClass: string;
}