import './App.css'
import './styles/global.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute.tsx';
import { Toaster } from 'sonner';
import Login from './views/Auth/Login/index.tsx';
import Users from './views/Users/index.tsx';


function App() {
  return (
    <div className="w-full h-full">
      <Toaster position="top-right" richColors/>

      <Router>
        <div className="w-full h-full">
          <Routes>
            <Route path="/" element={<Login />} />

            {/* Auth Routes */}

            <Route path="/users" element={<ProtectedRoute><Users /> </ProtectedRoute>} />
          </Routes>
        </div>
      </Router>
    </div>
  )
}

export default App
