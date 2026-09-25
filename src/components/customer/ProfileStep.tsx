
import React from "react";
import { ChevronDown } from "lucide-react";
import type { CustomerFormValues, CustomerStatus } from "../../types/customers";
import { AvatarUpload } from "./AvatarUpload";
import { PhoneInput } from "./PhoneInput";

interface ProfileStepProps {
  values: CustomerFormValues;
  onChange: <K extends keyof CustomerFormValues>(key: K, value: CustomerFormValues[K]) => void;
}

const STATUS_OPTIONS: CustomerStatus[] = ["Active", "Blocked"];

export const ProfileStep: React.FC<ProfileStepProps> = ({ values, onChange }) => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-gray-900">Profile</h2>

      <AvatarUpload avatar={values.avatar} onChange={(url) => onChange("avatar", url)} />

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="mb-1.5 block text-xs font-medium text-gray-500">First Name</label>
          <input
            type="text"
            value={values.firstName}
            onChange={(e) => onChange("firstName", e.target.value)}
            className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-700 focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-medium text-gray-500">Last Name</label>
          <input
            type="text"
            value={values.lastName}
            onChange={(e) => onChange("lastName", e.target.value)}
            className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-700 focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
          />
        </div>
      </div>

      <div>
        <label className="mb-1.5 block text-xs font-medium text-gray-500">Email</label>
        <input
          type="email"
          value={values.email}
          onChange={(e) => onChange("email", e.target.value)}
          className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-700 focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
        />
      </div>

      <div>
        <label className="mb-1.5 block text-xs font-medium text-gray-500">Phone</label>
        <PhoneInput
          countryCode={values.countryCode}
          phone={values.phone}
          onCountryCodeChange={(value) => onChange("countryCode", value)}
          onPhoneChange={(value) => onChange("phone", value)}
        />
      </div>

      <div>
        <label className="mb-1.5 block text-xs font-medium text-gray-500">Status</label>
        <div className="relative">
          <select
            value={values.status}
            onChange={(e) => onChange("status", e.target.value as CustomerStatus)}
            className="w-full appearance-none rounded-lg border border-gray-200 px-3 py-2 pr-8 text-sm text-gray-700 focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
          >
            {STATUS_OPTIONS.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>
          <ChevronDown className="pointer-events-none absolute right-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
        </div>
      </div>
    </div>
  );
};

export default ProfileStep;