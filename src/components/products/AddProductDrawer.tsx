
import React, { useState } from "react";
import { X } from "lucide-react";
import type { ProductFormValues } from "../../types/products";
import { RichTextEditor } from "./RichTextEditor";
import { ImageDropzone } from "./ImageDropZone";
import { TagInput } from "./TagInput";

interface AddProductDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  categories: string[];
  onSave: (values: ProductFormValues) => void;
}

const EMPTY_FORM: ProductFormValues = {
  name: "",
  description: "",
  category: "",
  price: "",
  discount: "",
  images: [],
  tags: [],
};

export const AddProductDrawer: React.FC<AddProductDrawerProps> = ({
  isOpen,
  onClose,
  categories,
  onSave,
}) => {
  const [form, setForm] = useState<ProductFormValues>(EMPTY_FORM);

  if (!isOpen) return null;

  const update = <K extends keyof ProductFormValues>(key: K, value: ProductFormValues[K]) => {
    setForm((f) => ({ ...f, [key]: value }));
  };

  const handleSave = () => {
    onSave(form);
    setForm(EMPTY_FORM);
  };

  const handleCancel = () => {
    setForm(EMPTY_FORM);
    onClose();
  };

  return (
    <>
      <div className="fixed inset-0 z-40 bg-black/30" onClick={handleCancel} />

      <div className="fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-white shadow-xl">
        <div className="flex items-center justify-between border-b border-gray-100 px-6 py-4">
          <h2 className="text-lg font-semibold text-gray-900">Add Product</h2>
          <button
            type="button"
            onClick={handleCancel}
            className="rounded-md p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 space-y-5 overflow-y-auto px-6 py-5">
          <div>
            <label className="mb-1.5 block text-xs font-medium text-gray-500">Product Name</label>
            <input
              type="text"
              value={form.name}
              onChange={(e) => update("name", e.target.value)}
              placeholder="e.g. Apple iPhone 11 Pro Max 64GB Midnight Green"
              className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-700 focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
            />
          </div>

          <div>
            <label className="mb-1.5 block text-xs font-medium text-gray-500">Description</label>
            <RichTextEditor value={form.description} onChange={(html) => update("description", html)} />
          </div>

          <div>
            <label className="mb-1.5 block text-xs font-medium text-gray-500">Category</label>
            <select
              value={form.category}
              onChange={(e) => update("category", e.target.value)}
              className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-700 focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
            >
              <option value="" disabled>
                Select a category
              </option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          <div className="flex gap-3">
            <div className="flex-1">
              <label className="mb-1.5 block text-xs font-medium text-gray-500">Price</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-gray-400">$</span>
                <input
                  type="number"
                  value={form.price}
                  onChange={(e) => update("price", e.target.value)}
                  placeholder="0"
                  className="w-full rounded-lg border border-gray-200 py-2 pl-6 pr-3 text-sm text-gray-700 focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
                />
              </div>
            </div>
            <div className="flex-1">
              <label className="mb-1.5 block text-xs font-medium text-gray-500">Discount</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-gray-400">%</span>
                <input
                  type="number"
                  value={form.discount}
                  onChange={(e) => update("discount", e.target.value)}
                  placeholder="0"
                  className="w-full rounded-lg border border-gray-200 py-2 pl-6 pr-3 text-sm text-gray-700 focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
                />
              </div>
            </div>
          </div>

          <div>
            <label className="mb-1.5 block text-xs font-medium text-gray-500">Product images</label>
            <ImageDropzone
                images={form.images}
                onChange={(images) =>
                    setForm((f) => ({
                    ...f,
                    images: typeof images === "function" ? images(f.images) : images,
                    }))
                }
            />
          </div>

          <div>
            <label className="mb-1.5 block text-xs font-medium text-gray-500">Tags</label>
            <TagInput tags={form.tags} onChange={(tags) => update("tags", tags)} />
          </div>
        </div>

        <div className="flex items-center gap-3 border-t border-gray-100 px-6 py-4">
          <button
            type="button"
            onClick={handleSave}
            className="flex-1 rounded-lg bg-emerald-500 py-2.5 text-sm font-medium text-white hover:bg-emerald-600"
          >
            Save
          </button>
          <button
            type="button"
            onClick={handleCancel}
            className="flex-1 rounded-lg border border-gray-200 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-50"
          >
            Cancel
          </button>
        </div>
      </div>
    </>
  );
};

export default AddProductDrawer;