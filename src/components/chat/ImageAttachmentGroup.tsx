import React from "react";
import { ImageIcon } from "lucide-react";

interface ImageAttachmentGroupProps {
  images: string[];
  maxVisible?: number;
}

export const ImageAttachmentGroup: React.FC<ImageAttachmentGroupProps> = ({
  images,
  maxVisible = 3,
}) => {
  const visible = images.slice(0, maxVisible);
  const overflow = images.length - visible.length;

  return (
    <div className="flex gap-1.5">
      {visible.map((_, i) => (
        <div
          key={i}
          className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-300 to-sky-400"
        >
          <ImageIcon className="h-4 w-4 text-white/70" />
        </div>
      ))}
      {overflow > 0 && (
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-50 text-xs font-semibold text-emerald-600">
          +{overflow}
        </div>
      )}
    </div>
  );
};

export default ImageAttachmentGroup;