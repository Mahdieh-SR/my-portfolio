// my-portfolio/app/layout.js

import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { siteMetadata } from '@/data/content'
import { LanguageProvider } from '@/contexts/LanguageContext'

export const metadata = {
  title: siteMetadata.fa.title,
  description: siteMetadata.fa.description,
  keywords: siteMetadata.fa.keywords,
  authors: [{ name: siteMetadata.fa.authorName }],
  creator: siteMetadata.fa.authorName,
  openGraph: {
    title: siteMetadata.fa.ogTitle,
    description: siteMetadata.fa.ogDescription,
    type: 'website',
    locale: siteMetadata.fa.ogLocale,
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
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
        <LanguageProvider>
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
        </LanguageProvider>
      </body>
    </html>
  )
}