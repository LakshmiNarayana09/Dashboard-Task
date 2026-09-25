
import React from "react";
import type { CustomerFormValues } from "../../types/customers";

interface AddressStepProps {
  values: CustomerFormValues;
  onChange: (address: CustomerFormValues["address"]) => void;
}

export const AddressStep: React.FC<AddressStepProps> = ({ values, onChange }) => {
  const update = (key: keyof CustomerFormValues["address"], value: string) => {
    onChange({ ...values.address, [key]: value });
  };

  const fieldClass =
    "w-full rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-700 focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400";

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-gray-900">Address</h2>

      <div>
        <label className="mb-1.5 block text-xs font-medium text-gray-500">Address</label>
        <input
          type="text"
          value={values.address.address}
          onChange={(e) => update("address", e.target.value)}
          className={fieldClass}
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="mb-1.5 block text-xs font-medium text-gray-500">City</label>
          <input
            type="text"
            value={values.address.city}
            onChange={(e) => update("city", e.target.value)}
            className={fieldClass}
          />
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-medium text-gray-500">State/Region</label>
          <input
            type="text"
            value={values.address.state}
            onChange={(e) => update("state", e.target.value)}
            className={fieldClass}
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="mb-1.5 block text-xs font-medium text-gray-500">Country</label>
          <input
            type="text"
            value={values.address.country}
            onChange={(e) => update("country", e.target.value)}
            className={fieldClass}
          />
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-medium text-gray-500">Postcode</label>
          <input
            type="text"
            value={values.address.postcode}
            onChange={(e) => update("postcode", e.target.value)}
            className={fieldClass}
          />
        </div>
      </div>
    </div>
  );
};

export default AddressStep;