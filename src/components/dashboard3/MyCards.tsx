
import { Plus } from "lucide-react";

function MyCards() {
  return (
    <section className="rounded-xl border border-gray-100 bg-white p-4 shadow-[0_1px_4px_rgba(0,0,0,0.03)]">
      
      
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-sm font-semibold text-gray-700">
          My Cards
        </h2>

        <button className="rounded-full border border-gray-100 px-3 py-1 text-[9px] text-gray-500">
          💳 5060 **** **** 8854
        </button>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-[1.1fr_1fr]">
        
        
        <div>
          <div className="relative h-32 overflow-hidden rounded-xl bg-[#24b46d] p-4 text-white">
            
            <div className="absolute -right-10 -top-10 h-44 w-44 rounded-full bg-white/10" />

            <div className="relative flex items-start justify-between">
              <div>
                <p className="text-[8px] opacity-80">
                  Current Balance
                </p>

                <p className="text-lg font-semibold">
                  80,700.00
                </p>
              </div>

              <span className="text-sm font-bold italic">
                VISA
              </span>
            </div>

            <div className="absolute bottom-4 left-4 right-4 flex justify-between text-[8px]">
              <div>
                <p className="opacity-60">
                  Felicia Brown
                </p>

                <p>**** **** 8854</p>
              </div>

              <p>12/19</p>
            </div>
          </div>

          <button className="mt-3 flex h-8 w-full items-center justify-center gap-1 rounded-lg bg-[#f4faf6] text-[9px] font-medium text-green-600">
            <Plus size={11} />
            Add Card
          </button>
        </div>

        
        <div>
          <div className="grid grid-cols-2 gap-y-3 text-[9px]">
            <span className="text-gray-400">
              Card Type
            </span>
            <span className="text-gray-600">
              Visa
            </span>

            <span className="text-gray-400">
              Card Holder
            </span>
            <span className="text-gray-600">
              Felicia Brown
            </span>

            <span className="text-gray-400">
              Expires
            </span>
            <span className="text-gray-600">
              12/19
            </span>

            <span className="text-gray-400">
              Card Number
            </span>
            <span className="text-gray-600">
              5060 5007 2188 8854
            </span>

            <span className="text-gray-400">
              Total Balance
            </span>
            <span className="text-gray-600">
              $80,700
            </span>

            <span className="text-gray-400">
              Total Debt
            </span>
            <span className="text-gray-600">
              $8,250.00
            </span>
          </div>

          <div className="mt-4 flex gap-2">
            <button className="flex-1 rounded-md bg-[#20ad66] py-2 text-[9px] font-medium text-white">
              Pay Debt
            </button>

            <button className="flex-1 rounded-md border border-gray-100 py-2 text-[9px] text-gray-500">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MyCards;