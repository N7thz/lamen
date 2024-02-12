import type { Metadata } from "next"
import { Fira_Code } from "next/font/google"
import { ThemeProvider } from "@/context/theme-provider"
import { TaskProvider } from "@/context/task-context"
import "./globals.css"

const firaCode = Fira_Code({ subsets: ["latin"] })

export const metadata: Metadata = {

  title: "Lamen schedule",
  description: "schedule and more options for organization",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body
        className={firaCode.className}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
        >
          <TaskProvider>
            {children}
          </TaskProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
