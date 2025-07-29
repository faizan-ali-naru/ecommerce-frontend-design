import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Listing from './pages/Listing'
import ProductDetail from './pages/ProductDetail'
import Footer from './components/Footer'
import './index.css';
import SecondaryNavbar from './components/secondarynavbar'

function App() {
  return (
    <div className="app">
      <Navbar />
      <SecondaryNavbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Listing />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App