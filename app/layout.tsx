import "./globals.css"
import NavBar from "@/components/navbar/NavBar"
import Footer from "@/components/footer/Footer"

export const metadata = {
  title: 'Flexibble',
  description: 'Showcase and discover remarkable developer projects.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <main>
          <NavBar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  )
}
