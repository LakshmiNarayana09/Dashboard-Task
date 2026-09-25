
import React, { useEffect, useState } from "react";
import { X } from "lucide-react";
import type { Customer, CustomerFormValues } from "../../types/customers";
import { ProfileStep } from "./ProfileStep";
import { AddressStep } from "./AddressStep";
import { PaymentStep } from "./PaymentStep";
import { SubmissionStep } from "./SubmissionStep";

type WizardStep = "profile" | "address" | "payment" | "submission";

const STEPS: { key: WizardStep; label: string }[] = [
  { key: "profile", label: "Profile" },
  { key: "address", label: "Address" },
  { key: "payment", label: "Payment" },
  { key: "submission", label: "Submission" },
];

const EMPTY_FORM: CustomerFormValues = {
  avatar: "",
  firstName: "",
  lastName: "",
  email: "",
  countryCode: "+1",
  phone: "",
  status: "Active",
  address: { address: "", city: "", state: "", country: "", postcode: "" },
  payment: { cardholderName: "", cardNumber: "", expiry: "", cvv: "" },
};

function customerToFormValues(customer: Customer): CustomerFormValues {
  const [firstName, ...rest] = customer.name.split(" ");
  return {
    ...EMPTY_FORM,
    avatar: customer.avatar ?? "",
    firstName,
    lastName: rest.join(" "),
    email: customer.email,
    phone: customer.phone,
    status: customer.status,
  };
}

interface CustomerFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  customer?: Customer | null; 
  onSave: (values: CustomerFormValues, customer?: Customer | null) => void;
}

export const CustomerFormModal: React.FC<CustomerFormModalProps> = ({
  isOpen,
  onClose,
  customer,
  onSave,
}) => {
  const [step, setStep] = useState<WizardStep>("profile");
  const [values, setValues] = useState<CustomerFormValues>(EMPTY_FORM);

  useEffect(() => {
    if (isOpen) {
      setValues(customer ? customerToFormValues(customer) : EMPTY_FORM);
      setStep("profile");
    }
  }, [isOpen, customer]);

  if (!isOpen) return null;

  const update = <K extends keyof CustomerFormValues>(key: K, value: CustomerFormValues[K]) => {
    setValues((v) => ({ ...v, [key]: value }));
  };

  const stepIndex = STEPS.findIndex((s) => s.key === step);
  const isLastStep = stepIndex === STEPS.length - 1;

  const goNext = () => {
    if (isLastStep) {
      onSave(values, customer);
      return;
    }
    setStep(STEPS[stepIndex + 1].key);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4" onClick={onClose}>
      <div
        className="flex max-h-[90vh] w-full max-w-md flex-col overflow-hidden rounded-2xl bg-white shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-gray-100 px-6 pt-4">
          <div className="flex items-center gap-5">
            {STEPS.map((s, index) => {
              const isActive = s.key === step;
              const isReachable = index <= stepIndex;
              return (
                <button
                  key={s.key}
                  type="button"
                  onClick={() => isReachable && setStep(s.key)}
                  disabled={!isReachable}
                  className={`relative pb-3 text-xs font-semibold uppercase tracking-wide transition-colors ${
                    isActive
                      ? "text-emerald-600"
                      : isReachable
                      ? "text-gray-500 hover:text-gray-700"
                      : "cursor-not-allowed text-gray-300"
                  }`}
                >
                  {s.label}
                  {isActive && (
                    <span className="absolute -bottom-px left-0 h-0.5 w-full rounded-full bg-emerald-500" />
                  )}
                </button>
              );
            })}
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="mb-3 rounded-md p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-5">
          {step === "profile" && <ProfileStep values={values} onChange={update} />}
          {step === "address" && (
            <AddressStep values={values} onChange={(address) => update("address", address)} />
          )}
          {step === "payment" && (
            <PaymentStep values={values} onChange={(payment) => update("payment", payment)} />
          )}
          {step === "submission" && <SubmissionStep values={values} />}
        </div>

        <div className="flex justify-end gap-3 border-t border-gray-100 px-6 py-4">
          <button
            type="button"
            onClick={goNext}
            className="rounded-lg bg-emerald-500 px-6 py-2.5 text-sm font-medium text-white hover:bg-emerald-600"
          >
            {isLastStep ? "Save" : "Next Step"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomerFormModal;