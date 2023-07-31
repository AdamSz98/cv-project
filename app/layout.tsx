import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Adam's Portfolio",
  description: 'Portfolio of Adam Szekrényes, a passionate Junior Full-Stack Developer.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
