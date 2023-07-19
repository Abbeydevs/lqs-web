import './globals.css'
import { DM_Sans } from 'next/font/google'

const dm_sans = DM_Sans({ weight: ["400", "500", "700"], subsets: ['latin'] })

export const metadata = {
  title: 'LQS Healthcare Services Ltd',
  description: 'A care home for your loved ones',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={dm_sans.className}>{children}</body>
    </html>
  )
}
