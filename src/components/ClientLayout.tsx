'use client'

import { useState, ReactNode } from 'react'
import Sidebar from '@/components/Sidebar'
import Header from '@/components/Header'

export default function ClientLayout({ children }: { children: ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <>
      <Sidebar isSidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="md:pl-64">
        <Header setSidebarOpen={setSidebarOpen} />
        <main className="py-10">{children}</main>
      </div>
    </>
  )
}
