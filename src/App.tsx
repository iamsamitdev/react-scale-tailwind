import {Route ,Routes} from 'react-router'
import Home from "@/pages/Home"
import About from '@/pages/About'
import Contact from '@/pages/Contact'
import ProductDetail from './pages/ProductDetail'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/products/:id" element={<ProductDetail />} />
    </Routes>
  )
}
