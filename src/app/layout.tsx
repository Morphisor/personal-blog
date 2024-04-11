import type { Metadata } from 'next'
import { Inter, Manrope } from 'next/font/google'
import Script from "next/script"
import { Footer, Header } from '../components'
import { ThemeScript } from '../components/ThemeScript'
import { cx } from '../utils'
import { SITE_METADATA } from '../utils/site-metadata'
import './globals.css'

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
    images: [SITE_METADATA.socialBanner]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
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
      <head>
        <meta name="google-site-verification" content="-8Wt0y0dQrlOtgUnp1hk689sNmgToTlL5e78QUqsNxs" />
        <meta name="google-adsense-account" content="ca-pub-7507305098307175" />
      </head>
      <body className={cx(inter.variable, manrope.variable, 'font-mr bg-light dark:bg-dark')}>
        <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7507305098307175" crossOrigin="anonymous"></Script>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-J05278L1KT"></Script>
        <Script id="google-analytics">
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
