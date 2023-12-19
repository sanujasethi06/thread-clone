import { ClerkProvider } from "@clerk/nextjs"

import {Inter } from "next/font/google"
export const metadata = {
    title: 'Thread clone',
    description: 'A Next.Js 13 Thread clone application'
}

const inter = Inter ({subsets:["latin"]})
export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <ClerkProvider>
            <html lang='en'>
            <body className={`${inter.className}bg-dark-1`}>
                
            </body>

            </html>
        </ClerkProvider>
    )
}