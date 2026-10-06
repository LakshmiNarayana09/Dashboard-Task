
import Layout from "../../components/common/Layout"
import Header from "../../components/common/Header"
import CalendarPage from "../../components/calendar/CalendarPage"
import { CalendarFilterProvider } from "../../context/CalendarFilterContext"

function Calendar() {
  return (
    <CalendarFilterProvider>
      <div className="flex min-h-screen bg-gray-50">

        <Layout />

        <div className="flex min-w-0 flex-1 flex-col">

          <Header />

          <main className="flex-1 p-4 sm:p-6">
            <CalendarPage />
          </main>

        </div>

      </div>
    </CalendarFilterProvider>
  )
}

export default Calendar