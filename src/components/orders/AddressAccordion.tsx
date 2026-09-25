
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { OrderAddress } from "../../types/orders";

interface AddressAccordionProps {
  title: string;
  address: OrderAddress;
  defaultOpen?: boolean;
}

export const AddressAccordion: React.FC<AddressAccordionProps> = ({
  title,
  address,
  defaultOpen = false,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const fields: { label: string; value: string }[] = [
    { label: "First name", value: address.firstName },
    { label: "Last name", value: address.lastName },
    { label: "Address", value: address.address },
    { label: "State/Region", value: address.state },
    { label: "City", value: address.city },
    { label: "Country", value: address.country },
    { label: "Phone", value: address.phone },
    { label: "Email", value: address.email },
    { label: "Postcode", value: address.postcode },
  ];

  return (
    <div className="rounded-xl border border-gray-100">
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        className="flex w-full items-center justify-between px-4 py-3"
      >
        <span className="text-sm font-semibold text-gray-900">{title}</span>
        <ChevronDown
          className={`h-4 w-4 text-gray-400 transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <div className="grid grid-cols-1 gap-x-8 gap-y-3 border-t border-gray-100 px-4 py-4 text-sm sm:grid-cols-3">
          {fields.map((field) => (
            <p key={field.label} className="text-gray-500">
              {field.label}:{" "}
              <span className="font-medium text-gray-800">{field.value}</span>
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default AddressAccordion;