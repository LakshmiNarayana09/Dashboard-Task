import React from "react";
import { ChevronDown } from "lucide-react";

interface ContactPhoneInputProps {
  countryCode: string;
  phone: string;
  onCountryCodeChange: (value: string) => void;
  onPhoneChange: (value: string) => void;
}

const COUNTRY_CODES = ["+1", "+44", "+91", "+61", "+81", "+49", "+33"];

export const ContactPhoneInput: React.FC<ContactPhoneInputProps> = ({
  countryCode,
  phone,
  onCountryCodeChange,
  onPhoneChange,
}) => {
  return (
    <div className="flex items-center gap-2">
      <div className="relative">
        <select
          value={countryCode}
          onChange={(e) => onCountryCodeChange(e.target.value)}
          className="appearance-none rounded-lg border border-gray-200 py-2 pl-3 pr-7 text-sm text-gray-700 focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
        >
          {COUNTRY_CODES.map((code) => (
            <option key={code} value={code}>
              {code}
            </option>
          ))}
        </select>
        <ChevronDown className="pointer-events-none absolute right-2 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-gray-400" />
      </div>
      <input
        type="tel"
        value={phone}
        onChange={(e) => onPhoneChange(e.target.value)}
        placeholder="(070) 123-4567"
        className="flex-1 rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-700 focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
      />
    </div>
  );
};

export default ContactPhoneInput;