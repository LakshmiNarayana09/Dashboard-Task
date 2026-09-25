
import React from "react";
import type { CustomerFormValues } from "../../types/customers";

interface SubmissionStepProps {
  values: CustomerFormValues;
}

const Row: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <div className="flex items-center justify-between border-b border-gray-50 py-2 text-sm last:border-b-0">
    <span className="text-gray-400">{label}</span>
    <span className="font-medium text-gray-700">{value || "—"}</span>
  </div>
);

export const SubmissionStep: React.FC<SubmissionStepProps> = ({ values }) => {
  return (
    <div className="space-y-5">
      <h2 className="text-xl font-semibold text-gray-900">Submission</h2>
      <p className="text-sm text-gray-500">Review the details below before saving this customer.</p>

      <div>
        <h3 className="mb-1.5 text-xs font-semibold uppercase tracking-wide text-gray-400">Profile</h3>
        <div className="rounded-xl border border-gray-100 px-4">
          <Row label="Name" value={`${values.firstName} ${values.lastName}`.trim()} />
          <Row label="Email" value={values.email} />
          <Row label="Phone" value={`${values.countryCode} ${values.phone}`.trim()} />
          <Row label="Status" value={values.status} />
        </div>
      </div>

      <div>
        <h3 className="mb-1.5 text-xs font-semibold uppercase tracking-wide text-gray-400">Address</h3>
        <div className="rounded-xl border border-gray-100 px-4">
          <Row label="Address" value={values.address.address} />
          <Row label="City" value={values.address.city} />
          <Row label="State/Region" value={values.address.state} />
          <Row label="Country" value={values.address.country} />
          <Row label="Postcode" value={values.address.postcode} />
        </div>
      </div>

      <div>
        <h3 className="mb-1.5 text-xs font-semibold uppercase tracking-wide text-gray-400">Payment</h3>
        <div className="rounded-xl border border-gray-100 px-4">
          <Row label="Cardholder" value={values.payment.cardholderName} />
          <Row
            label="Card Number"
            value={values.payment.cardNumber ? `•••• ${values.payment.cardNumber.slice(-4)}` : ""}
          />
          <Row label="Expiry" value={values.payment.expiry} />
        </div>
      </div>
    </div>
  );
};

export default SubmissionStep;