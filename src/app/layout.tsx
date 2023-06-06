import "./globals.css"
import {
  Orbitron,
  Major_Mono_Display,
  VT323,
  Bebas_Neue,
  Fira_Code,
  Fira_Mono,
} from "next/font/google"
import { Providers } from "./providers"

const orbitron = Orbitron({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-orbitron",
})

const vt323 = VT323({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-major-mono",
})

const majorMono = Fira_Code({
  weight: ["400", "300", "500", "700", "600"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fira-code",
})

export const metadata = {
  title: "dmarz",
  description: "machines and markets",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${majorMono.className} relative`}>
      <body
        // style={{
        //   background:
        //     "radial-gradient(140% 107.13% at 50% 10%,rgb(7 1 20) 37.41%,#63e 69.27%,#fff 100%)",
        // }}
        className=" bg-bold-dark bg-gradient-to-tr from-[#d7269320] via-transparent to-[#0AFE9720]"
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
