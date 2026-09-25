
import { Route, Routes } from "react-router-dom";
import Dashboard1 from "./pages/Dashboard/Dashboard1";
import Task from "./pages/Task/Task";
import Products from "./pages/Ecommerce/Products";
import Orders from "./pages/Ecommerce/Orders";
import Customers from "./pages/Ecommerce/Customers";
import Calendar from "./pages/Calendar/Calendar";
import Mail from "./pages/mail/Mail";
import FileManager from "./pages/filemanager/FileManager";
import Projects from "./pages/projects/Projects";
import Notes from "./pages/notes/Notes";
import Contacts from "./pages/contacts/Contacts";
import Chat from "./pages/chat/Chat";


function App() {
  return (
    <div>
      <Routes>

        <Route path="/"  element={<Dashboard1 />} />
        
        <Route path="/ecommerce/products" element={<Products />} />

        <Route path="/ecommerce/orders" element={<Orders />} />

        <Route path="/ecommerce/customers" element={<Customers />} />

        <Route path="/task" element={<Task />} />

        <Route path="/chat" element={<Chat />} />

        <Route path="/calendar" element={<Calendar />} />

        <Route path="/mail" element={<Mail />} />

        <Route path="/projects" element={<Projects />} />

        <Route path="/file-manager" element={<FileManager />} />

        <Route path="/notes" element={<Notes />} />

        <Route path="/contacts" element={<Contacts />} />

      </Routes>
    </div>
  )
}

export default App
