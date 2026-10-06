import React, { useEffect, useState } from "react";
import { X } from "lucide-react";
import type { ContactFormValues } from "../../types/contacts";
import { ContactAvatarUpload } from "./ContactAvatarUpload";
import { ContactPhoneInput } from "./ContactPhoneInput";
import { BirthdateSelect } from "./BirthdateSelect";

interface AddContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (values: ContactFormValues) => void;
}

const EMPTY_FORM: ContactFormValues = {
  avatar: "",
  firstName: "",
  lastName: "",
  email: "",
  countryCode: "+1",
  phone: "",
  jobTitle: "",
  address: "",
  birthDay: "",
  birthMonth: "",
  birthYear: "",
  notes: "",
};

export const AddContactModal: React.FC<AddContactModalProps> = ({ isOpen, onClose, onSave }) => {
  const [values, setValues] = useState<ContactFormValues>(EMPTY_FORM);

  useEffect(() => {
    if (isOpen) setValues(EMPTY_FORM);
  }, [isOpen]);

  if (!isOpen) return null;

  const update = <K extends keyof ContactFormValues>(key: K, value: ContactFormValues[K]) => {
    setValues((v) => ({ ...v, [key]: value }));
  };

  const handleCreate = () => {
    if (!values.firstName.trim()) return;
    onSave(values);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4" onClick={onClose}>
      <div
        className="flex max-h-[90vh] w-full max-w-sm flex-col overflow-hidden rounded-2xl bg-white shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-gray-100 px-5 py-4">
          <h2 className="text-xl font-semibold text-gray-900">New Contact</h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="rounded-md p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="flex-1 space-y-4 overflow-y-auto px-5 py-5">
          <ContactAvatarUpload avatar={values.avatar} onChange={(url) => update("avatar", url)} />

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="mb-1.5 block text-xs font-medium text-gray-500">First Name</label>
              <input
                type="text"
                value={values.firstName}
                onChange={(e) => update("firstName", e.target.value)}
                className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-700 focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-medium text-gray-500">Last Name</label>
              <input
                type="text"
                value={values.lastName}
                onChange={(e) => update("lastName", e.target.value)}
                className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-700 focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
              />
            </div>
          </div>

          <div>
            <label className="mb-1.5 block text-xs font-medium text-gray-500">Email</label>
            <input
              type="email"
              value={values.email}
              onChange={(e) => update("email", e.target.value)}
              placeholder="cooper@example.com"
              className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-700 placeholder:text-gray-400 focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
            />
          </div>

          <div>
            <label className="mb-1.5 block text-xs font-medium text-gray-500">Phone</label>
            <ContactPhoneInput
              countryCode={values.countryCode}
              phone={values.phone}
              onCountryCodeChange={(value) => update("countryCode", value)}
              onPhoneChange={(value) => update("phone", value)}
            />
          </div>

          <div>
            <label className="mb-1.5 block text-xs font-medium text-gray-500">Job Title</label>
            <input
              type="text"
              value={values.jobTitle}
              onChange={(e) => update("jobTitle", e.target.value)}
              placeholder="Manager"
              className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-700 placeholder:text-gray-400 focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
            />
          </div>

          <div>
            <label className="mb-1.5 block text-xs font-medium text-gray-500">Address</label>
            <input
              type="text"
              value={values.address}
              onChange={(e) => update("address", e.target.value)}
              placeholder="Sochi, Russia"
              className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-700 placeholder:text-gray-400 focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
            />
          </div>

          <div>
            <label className="mb-1.5 block text-xs font-medium text-gray-500">Date of Birth</label>
            <BirthdateSelect
              day={values.birthDay}
              month={values.birthMonth}
              year={values.birthYear}
              onDayChange={(value) => update("birthDay", value)}
              onMonthChange={(value) => update("birthMonth", value)}
              onYearChange={(value) => update("birthYear", value)}
            />
          </div>

          <div>
            <label className="mb-1.5 block text-xs font-medium text-gray-500">Notes</label>
            <textarea
              value={values.notes}
              onChange={(e) => update("notes", e.target.value)}
              rows={3}
              placeholder="Type something"
              className="w-full resize-y rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-700 placeholder:text-gray-400 focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
            />
          </div>
        </div>

        <div className="flex justify-end border-t border-gray-100 px-5 py-4">
          <button
            type="button"
            onClick={handleCreate}
            className="rounded-lg bg-emerald-500 px-6 py-2.5 text-sm font-medium text-white hover:bg-emerald-600"
          >
            Add Contact
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddContactModal;