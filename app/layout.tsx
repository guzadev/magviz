import type React from "react"
import './globals.css'
import { Poppins, MuseoModerno } from "next/font/google"

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
})

const museoModerno = MuseoModerno({
  subsets: ["latin"],
  variable: "--font-museo-moderno",
  display: "swap",
  weight: ["300", "400", "500", "700"],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang="es" suppressHydrationWarning className={`${poppins.variable} ${museoModerno.variable}`}>
      <body className="font-poppins antialiased">
        {children}
      </body>
    </html>
  )
}

export const metadata = {
  generator: 'v0.dev',
  metadataBase: new URL("https://magstudio.com"),
};
