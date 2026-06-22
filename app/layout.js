// my-portfolio/app/layout.js

import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { siteMetadata } from '@/data/content'

export const metadata = {
  title: siteMetadata.title,
  description: siteMetadata.description,
  keywords: siteMetadata.keywords,
  authors: [{ name: siteMetadata.authorName }],
  creator: siteMetadata.authorName,
  openGraph: {
    title: siteMetadata.ogTitle,
    description: siteMetadata.ogDescription,
    type: 'website',
    locale: siteMetadata.ogLocale,
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </head>
      <body>
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          minHeight: '100vh' 
        }}>
          <Navbar />
          <main style={{ flex: '1' }}>
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}