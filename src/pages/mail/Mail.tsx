import Header from "../../components/common/Header"
import DashboardSidebar from "../../components/common/DashboardSidebar"
import MailPage from "../../components/mail/MailPage"


function Mail() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      
      <DashboardSidebar />
      
      <div className="flex min-w-0 flex-1 flex-col">

        <Header />

        <main className="flex-1 p-4 sm:p-6">
          <MailPage />
        </main>

      </div>
      
    </div>
  )
}

export default Mail
