import type { Metadata } from 'next'
import { Inter, Manrope } from 'next/font/google'
import './globals.css'
import { cx } from '../utils'
import { Footer, Header } from '../components'
import { SITE_METADATA } from '../utils/site-metadata'
import { ThemeScript } from '../components/ThemeScript'
import Script from "next/script"

const inter = Inter({ subsets: ['latin'], display: 'swap', variable: '--font-in' })
const manrope = Manrope({ subsets: ['latin'], display: 'swap', variable: '--font-mr' })

export const metadata: Metadata = {
  metadataBase: new URL(SITE_METADATA.siteUrl),
  title: {
    template: `%s | ${SITE_METADATA.title}`,
    default: SITE_METADATA.title
  },
  description: SITE_METADATA.description,
  openGraph: {
    title: SITE_METADATA.title,
    description: SITE_METADATA.description,
    url: SITE_METADATA.siteUrl,
    siteName: SITE_METADATA.title,
    images: [
      SITE_METADATA.socialBanner
    ],
    locale: SITE_METADATA.locale,
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_METADATA.title,
    images: [ SITE_METADATA.socialBanner ]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cx(inter.variable, manrope.variable, 'font-mr bg-light dark:bg-dark')}>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-J05278L1KT"></Script>
      <Script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-J05278L1KT');
        `}
      </Script>
        <ThemeScript />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
