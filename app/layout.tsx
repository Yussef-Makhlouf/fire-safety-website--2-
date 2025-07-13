import type React from "react"
import type { Metadata } from "next"
import { Cairo } from "next/font/google"
import "./globals.css"

const cairo = Cairo({
  subsets: ["arabic"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "خدمات السلامة ومكافحة الحريق | أنظمة الإنذار المبكر والصيانة",
  description:
    "شركة متخصصة في خدمات السلامة ومكافحة الحريق. نوفر أنظمة الإنذار المبكر، صيانة معدات الإطفاء، عقود الصيانة الشاملة، واستخراج شهادات السلامة. خدمة 24/7 بأعلى معايير الجودة.",
  keywords:
    "مكافحة الحريق، أنظمة الإنذار، السلامة، صيانة معدات الإطفاء، شهادات السلامة، الدفاع المدني، كاشفات الدخان، طفايات الحريق",
  authors: [{ name: "خدمات السلامة ومكافحة الحريق" }],
  openGraph: {
    title: "خدمات السلامة ومكافحة الحريق",
    description: "حلول شاملة لأنظمة السلامة ومكافحة الحريق بأعلى معايير الجودة",
    type: "website",
    locale: "ar_SA",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
      icon: '/logo.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={cairo.className}>{children}</body>
    </html>
  )
}
