import { ordersData } from "../../data/dashboardData";

function OrdersTable() {
  return (
    <div className="rounded-lg border border-gray-100 bg-white p-4">
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-[11px] font-medium text-gray-700">
          Last Orders
        </h2>

        <select className="rounded-md bg-gray-50 px-2 py-1 text-[8px] text-gray-500 outline-none">
          <option>19 Aug - 25 Aug</option>
        </select>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[480px] text-left">
          <thead>
            <tr className="text-[7px] text-gray-400">
              <th className="pb-2 font-normal">Customer Name</th>
              <th className="pb-2 font-normal">Order No.</th>
              <th className="pb-2 font-normal">Amount</th>
              <th className="pb-2 font-normal">Payment Type</th>
              <th className="pb-2 font-normal">Date</th>
              <th />
            </tr>
          </thead>

          <tbody>
            {ordersData.map((order) => (
              <tr
                key={order.order}
                className="border-t border-gray-50 text-[7px] text-gray-500"
              >
                <td className="py-2">
                  <div className="flex items-center gap-2">
                    <div className="h-5 w-5 rounded-full bg-[#d98f79]" />

                    <span>{order.name}</span>
                  </div>
                </td>

                <td>{order.order}</td>

                <td>{order.amount}</td>

                <td>{order.payment}</td>

                <td>{order.date}</td>

                <td className="text-gray-400">⋮</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default OrdersTable;