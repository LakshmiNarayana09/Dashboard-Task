
import Header from "../../components/common/Header"
import OrdersPage from "../../components/orders/OrdersPage"
import Layout from "../../components/common/Layout"

function Orders() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      
      <Layout />

      <div className="flex min-w-0 flex-1 flex-col">
        
        <Header />

        <main className="flex-1 p-4 sm:p-6">
          <OrdersPage />
        </main>
        
      </div>

    </div>
  )
}

export default Orders
