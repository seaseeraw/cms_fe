
import './App.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/Login';
import Sidebar from './components/sidebar';
import Navbars from './components/Navbar';
import AdminDashboard from './pages/AdminDashboard';
function App() {
  

  return (
    <>
        <div className="app">
        <Sidebar />
        <div className="main">
            <Navbars/>
            <AdminDashboard />
        </div>
    </div>
      
    </>
  )
}

export default App
