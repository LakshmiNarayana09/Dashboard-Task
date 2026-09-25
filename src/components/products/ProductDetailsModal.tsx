
import React, { useEffect, useState } from "react";
import { X, Heart } from "lucide-react";
import type { Product } from "../../types/products";
import { ProductImageGallery } from "./ProductImageGallery";
import { QuantitySelector } from "./QuantitySelector";

interface ProductDetailsModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart?: (product: Product, quantity: number) => void;
  onToggleWishlist?: (product: Product) => void;
}

export const ProductDetailsModal: React.FC<ProductDetailsModalProps> = ({
  product,
  onClose,
  onAddToCart,
  onToggleWishlist,
}) => {
  const [quantity, setQuantity] = useState(1);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  
  useEffect(() => {
    setQuantity(1);
    setActiveImageIndex(0);
  }, [product?.id]);

  if (!product) return null;

  const images = product.image ? [product.image] : [];
  const numericPrice = Number(product.price.replace(/[^0-9.]/g, ""));

  const specifications = [
    { label: "Product No.", value: product.productNo },
    { label: "Category", value: product.category },
    { label: "Date Added", value: product.date },
    { label: "Status", value: product.status },
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
      onClick={onClose}
    >
      <div
        className="relative grid w-full max-w-3xl grid-cols-1 gap-6 rounded-2xl bg-white p-6 shadow-xl sm:grid-cols-2"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 rounded-md p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="h-72 sm:h-full">
          <ProductImageGallery
            images={images}
            activeIndex={activeImageIndex}
            onSelect={setActiveImageIndex}
          />
        </div>

        <div className="flex flex-col">
          <h2 className="pr-6 text-xl font-semibold text-gray-900">{product.name}</h2>
          <p className="mt-1 text-xs text-gray-400">SKU: {product.productNo.replace("#", "")}</p>

          <div className="mt-5">
            <p className="mb-1.5 text-xs font-medium text-gray-500">Quantity</p>
            <div className="flex items-center justify-between">
              <QuantitySelector value={quantity} onChange={setQuantity} />
              <span className="text-xl font-semibold text-gray-900">
                ${(numericPrice * quantity).toLocaleString()}
              </span>
            </div>
          </div>

          <div className="mt-4 flex items-center gap-2">
            <button
              type="button"
              onClick={() => onAddToCart?.(product, quantity)}
              className="flex-1 rounded-lg bg-emerald-500 py-2.5 text-sm font-medium text-white hover:bg-emerald-600"
            >
              Add to Cart
            </button>
            <button
              type="button"
              onClick={() => onToggleWishlist?.(product)}
              aria-label="Add to wishlist"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-teal-50 text-teal-500 hover:bg-teal-100"
            >
              <Heart className="h-4 w-4" />
            </button>
          </div>

          <div className="mt-6 flex-1 overflow-y-auto">
            <h3 className="mb-2 text-sm font-semibold text-gray-900">Specifications</h3>
            <div className="divide-y divide-gray-100">
              {specifications.map((spec) => (
                <div key={spec.label} className="flex items-center justify-between py-2 text-sm">
                  <span className="text-gray-400">{spec.label}</span>
                  <span className="font-medium text-gray-700">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsModal;