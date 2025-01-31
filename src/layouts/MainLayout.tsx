import Navbar from '@/components/front/Navbar'
import Footer from '@/components/front/Footer'
import { ReactNode } from 'react'

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <>
        <Navbar />
        <div>{ children }</div>
        <Footer />
    </>
  )
}
