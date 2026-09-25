
import React, { useRef, useState } from "react";
import { UploadCloud, Trash2 } from "lucide-react";
import type { UploadedImage } from "../../types/products";

type ImagesUpdater = UploadedImage[] | ((prev: UploadedImage[]) => UploadedImage[]);

interface ImageDropzoneProps {
  images: UploadedImage[];
  onChange: (images: ImagesUpdater) => void;
}

export const ImageDropzone: React.FC<ImageDropzoneProps> = ({ images, onChange }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isDragOver, setIsDragOver] = useState(false);

  const addFiles = (fileList: FileList | null) => {
    if (!fileList) return;
    const newImages: UploadedImage[] = Array.from(fileList).map((file) => ({
      id: `${file.name}-${Date.now()}-${Math.random().toString(36).slice(2)}`,
      url: URL.createObjectURL(file),
      name: file.name,
      progress: 0,
    }));
    onChange((prev) => [...prev, ...newImages]);

    newImages.forEach((img) => simulateUpload(img.id, onChange));
  };

  const removeImage = (id: string) => {
    onChange((prev) => prev.filter((img) => img.id !== id));
  };

  return (
    <div>
      <div
        onDragOver={(e) => {
          e.preventDefault();
          setIsDragOver(true);
        }}
        onDragLeave={() => setIsDragOver(false)}
        onDrop={(e) => {
          e.preventDefault();
          setIsDragOver(false);
          addFiles(e.dataTransfer.files);
        }}
        className={`flex flex-col items-center justify-center rounded-lg border-2 border-dashed px-4 py-6 text-center transition-colors ${
          isDragOver ? "border-emerald-400 bg-emerald-50" : "border-gray-200 bg-gray-50"
        }`}
      >
        <UploadCloud className="mb-2 h-6 w-6 text-gray-400" />
        <p className="text-sm text-gray-500">
          Drag and Drop or{" "}
          <button
            type="button"
            onClick={() => inputRef.current?.click()}
            className="font-medium text-emerald-600 hover:underline"
          >
            Browse
          </button>{" "}
          to upload
        </p>
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          multiple
          className="hidden"
          onChange={(e) => addFiles(e.target.files)}
        />
      </div>

      {images.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-3">
          {images.map((img) => (
            <ImageThumbnail key={img.id} image={img} onRemove={() => removeImage(img.id)} />
          ))}
        </div>
      )}
    </div>
  );
};

const ImageThumbnail: React.FC<{ image: UploadedImage; onRemove: () => void }> = ({
  image,
  onRemove,
}) => {
  const isUploading = image.progress < 100;

  return (
    <div className="group relative h-14 w-14 shrink-0 overflow-hidden rounded-lg border border-gray-200 bg-white">
      <img src={image.url} alt={image.name} className="h-full w-full object-cover" />

      {isUploading ? (
        <div
          className="absolute inset-0 flex items-center justify-center bg-white/70"
          style={{
            background: `conic-gradient(#10b981 ${image.progress * 3.6}deg, rgba(255,255,255,0.7) 0deg)`,
          }}
        >
          <span className="rounded-full bg-white px-1 text-[10px] font-medium text-gray-600">
            {image.progress}%
          </span>
        </div>
      ) : (
        <button
          type="button"
          onClick={onRemove}
          className="absolute inset-0 hidden items-center justify-center bg-black/40 text-white group-hover:flex"
          aria-label="Remove image"
        >
          <Trash2 className="h-4 w-4" />
        </button>
      )}
    </div>
  );
};

function simulateUpload(id: string, onChange: (images: ImagesUpdater) => void) {
  let count = 0;
  const interval = setInterval(() => {
    onChange((prev) =>
      prev.map((img) =>
        img.id === id ? { ...img, progress: Math.min(100, img.progress + 20) } : img
      )
    );
    count += 1;
    if (count >= 5) clearInterval(interval);
  }, 200);
}

export default ImageDropzone;