
import Layout from "../../components/common/Layout"
import Header from "../../components/common/Header"
import NotesPage from "../../components/notes/NotesPage"

function Notes() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      
      <Layout />

      <div className="flex min-w-0 flex-1 flex-col">
        
        <Header />

        <main className="flex-1 p-4 sm:p-6">
          <NotesPage />
        </main>

      </div>
      
    </div>
  )
}

export default Notes
