import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import './globals.css'
import { AuthProvider } from '@/contexts/AuthContext'
import ClientLayout from '@/components/ClientLayout'

export const metadata: Metadata = {
  title: 'DDW - Digital Watermarking',
  description: 'Protect your images with invisible watermarks.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko" className="dark">
      <body className={`${GeistSans.className} bg-gray-900 text-gray-100`}>
        <AuthProvider>
          <ClientLayout>{children}</ClientLayout>
        </AuthProvider>
      </body>
    </html>
  )
}
