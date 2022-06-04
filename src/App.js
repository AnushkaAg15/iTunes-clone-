import logo from './logo.svg'
import './App.css'
import Homepage from './components/Homepage'
import Navbar from './components/Navbar'
import PublicRoutes from './components/PublicRoutes'
function App() {
  return (
    <div className='App'>
      <Navbar />
      <PublicRoutes />
    </div>
  )
}

export default App
