
import React from "react";
import { ImageIcon } from "lucide-react";

interface ProductImageGalleryProps {
  images: string[];
  activeIndex: number;
  onSelect: (index: number) => void;
}

export const ProductImageGallery: React.FC<ProductImageGalleryProps> = ({
  images,
  activeIndex,
  onSelect,
}) => {
  const activeImage = images[activeIndex];

  return (
    <div className="flex h-full flex-col">
      <div className="flex flex-1 items-center justify-center rounded-xl bg-gray-50">
        {activeImage ? (
          <img
            src={activeImage}
            alt="Product"
            className="max-h-full max-w-full rounded-xl object-contain"
          />
        ) : (
          <ImageIcon className="h-12 w-12 text-gray-300" strokeWidth={1.25} />
        )}
      </div>

      {images.length > 1 && (
        <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
          {images.map((img, index) => (
            <button
              key={index}
              type="button"
              onClick={() => onSelect(index)}
              className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-lg border bg-gray-50 ${
                index === activeIndex ? "border-emerald-400 ring-1 ring-emerald-400" : "border-gray-200"
              }`}
            >
              {img ? (
                <img src={img} alt={`Thumbnail ${index + 1}`} className="h-full w-full rounded-lg object-cover" />
              ) : (
                <ImageIcon className="h-5 w-5 text-gray-300" strokeWidth={1.25} />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductImageGallery;