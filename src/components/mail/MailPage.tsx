import React, { useMemo, useState } from "react";
import { MailFolderSidebar } from "./MailFolderSidebar";
import { MailList } from "./MailList";
import { MailReadingPane } from "./MailReadingPane";
import { NewLabelPanel } from "./NewLabelPanel";
import { mockMailMessages, MAIL_LABELS } from "../../data/mockMailData";
import type {
  MailFolderKey,
  MailLabel,
  MailMessage,
  NewLabelFormValues,
} from "../../types/mail";
import ComposeMail from "./ComposeMail";

export const MailPage: React.FC = () => {
  const [messages, setMessages] = useState<MailMessage[]>(mockMailMessages);
  const [labels, setLabels] = useState<MailLabel[]>(MAIL_LABELS);
  const [activeFolder, setActiveFolder] =
    useState<MailFolderKey>("inbox");
  const [search, setSearch] = useState("");
  const [selectedId, setSelectedId] = useState<string | null>(
    mockMailMessages[0]?.id ?? null
  );

  const [isAddLabelOpen, setIsAddLabelOpen] = useState(false);
  const [isComposeOpen, setIsComposeOpen] = useState(false);

  const folderMessages = useMemo(
    () => messages.filter((m) => m.folder === activeFolder),
    [messages, activeFolder]
  );

  const filteredMessages = useMemo(() => {
    const query = search.toLowerCase();

    return folderMessages.filter(
      (m) =>
        m.senderName.toLowerCase().includes(query) ||
        m.subject.toLowerCase().includes(query) ||
        m.preview.toLowerCase().includes(query)
    );
  }, [folderMessages, search]);

  const selectedIndex = filteredMessages.findIndex(
    (m) => m.id === selectedId
  );

  const selectedMessage =
    selectedIndex >= 0 ? filteredMessages[selectedIndex] : null;

  const handleFolderChange = (key: MailFolderKey) => {
    setActiveFolder(key);
    setSelectedId(null);
    setIsAddLabelOpen(false);
  };

  const handlePrev = () => {
    if (selectedIndex > 0) {
      setSelectedId(filteredMessages[selectedIndex - 1].id);
    }
  };

  const handleNext = () => {
    if (
      selectedIndex >= 0 &&
      selectedIndex < filteredMessages.length - 1
    ) {
      setSelectedId(filteredMessages[selectedIndex + 1].id);
    }
  };

  const handleDelete = (message: MailMessage) => {
    setMessages((prev) =>
      prev.filter((m) => m.id !== message.id)
    );
    setSelectedId(null);
  };

  const handleReply = (body: string) => {
    console.log("Reply sent:", body);
  };

  const handleCreateLabel = (values: NewLabelFormValues) => {
    const newLabel: MailLabel = {
      key: `${values.name
        .toLowerCase()
        .replace(/\s+/g, "-")}-${Date.now()}`,
      label: values.name,
      colorClass: values.colorClass,
    };

    setLabels((prev) => [...prev, newLabel]);
    setIsAddLabelOpen(false);
  };

  const handleRenameLabel = (key: string, name: string) => {
    setLabels((prev) =>
      prev.map((l) =>
        l.key === key ? { ...l, label: name } : l
      )
    );
  };

  const handleDeleteLabel = (key: string) => {
    setLabels((prev) => prev.filter((l) => l.key !== key));
  };

  const handleChangeLabelColor = (
    key: string,
    colorClass: string
  ) => {
    setLabels((prev) =>
      prev.map((l) =>
        l.key === key ? { ...l, colorClass } : l
      )
    );
  };

  const handleAddSublabel = (key: string) => {
    console.log("Add sublabel under", key);
  };

  return (
    <div className="relative flex min-h-full overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
      
      <MailFolderSidebar
        activeFolder={activeFolder}
        onFolderChange={handleFolderChange}
        onNewMessage={() => setIsComposeOpen(true)}
        labels={labels}
        onAddLabelClick={() => setIsAddLabelOpen(true)}
        onRenameLabel={handleRenameLabel}
        onDeleteLabel={handleDeleteLabel}
        onChangeLabelColor={handleChangeLabelColor}
        onAddSublabel={handleAddSublabel}
      />

      
      {isAddLabelOpen ? (
        <NewLabelPanel
          onClose={() => setIsAddLabelOpen(false)}
          onCreate={handleCreateLabel}
        />
      ) : (
        <MailList
          messages={filteredMessages}
          selectedId={selectedId}
          onSelect={(message) => setSelectedId(message.id)}
          searchValue={search}
          onSearchChange={setSearch}
        />
      )}

      
      <MailReadingPane
        message={selectedMessage}
        index={Math.max(selectedIndex, 0)}
        total={filteredMessages.length}
        onPrev={handlePrev}
        onNext={handleNext}
        onDelete={handleDelete}
        onReply={handleReply}
      />

      
      {isComposeOpen && (
        <ComposeMail
          onClose={() => setIsComposeOpen(false)}
        />
      )}
    </div>
  );
};

export default MailPage;