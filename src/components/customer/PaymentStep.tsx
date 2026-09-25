
import React from "react";
import type { CustomerFormValues } from "../../types/customers";

interface PaymentStepProps {
  values: CustomerFormValues;
  onChange: (payment: CustomerFormValues["payment"]) => void;
}

export const PaymentStep: React.FC<PaymentStepProps> = ({ values, onChange }) => {
  const update = (key: keyof CustomerFormValues["payment"], value: string) => {
    onChange({ ...values.payment, [key]: value });
  };

  const fieldClass =
    "w-full rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-700 focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400";

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-gray-900">Payment</h2>

      <div>
        <label className="mb-1.5 block text-xs font-medium text-gray-500">Cardholder Name</label>
        <input
          type="text"
          value={values.payment.cardholderName}
          onChange={(e) => update("cardholderName", e.target.value)}
          className={fieldClass}
        />
      </div>

      <div>
        <label className="mb-1.5 block text-xs font-medium text-gray-500">Card Number</label>
        <input
          type="text"
          value={values.payment.cardNumber}
          onChange={(e) => update("cardNumber", e.target.value)}
          placeholder="•••• •••• •••• ••••"
          className={fieldClass}
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="mb-1.5 block text-xs font-medium text-gray-500">Expiry</label>
          <input
            type="text"
            value={values.payment.expiry}
            onChange={(e) => update("expiry", e.target.value)}
            placeholder="MM/YY"
            className={fieldClass}
          />
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-medium text-gray-500">CVV</label>
          <input
            type="text"
            value={values.payment.cvv}
            onChange={(e) => update("cvv", e.target.value)}
            placeholder="•••"
            className={fieldClass}
          />
        </div>
      </div>
    </div>
  );
};

export default PaymentStep;