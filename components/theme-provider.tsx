"use client"

import { createContext, useContext, useEffect, useState } from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import type { ThemeProviderProps } from "next-themes"

type AccentColor = "blue" | "green" | "purple" | "orange" | "pink" | "red" | "yellow" | "teal"

type ColorContextType = {
  accentColor: AccentColor
  setAccentColor: (color: AccentColor) => void
}

const ColorContext = createContext<ColorContextType | undefined>(undefined)

export function useAccentColor() {
  const context = useContext(ColorContext)
  if (!context) {
    throw new Error("useAccentColor must be used within a ColorProvider")
  }
  return context
}

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const [accentColor, setAccentColor] = useState<AccentColor>("blue")

  // Apply the accent color to CSS variables
  useEffect(() => {
    const root = document.documentElement

    const colors = {
      blue: {
        primary: "210 100% 50%",
        primaryForeground: "210 40% 98%",
        ring: "221.2 83.2% 53.3%",
      },
      green: {
        primary: "142.1 76.2% 36.3%",
        primaryForeground: "355.7 100% 97.3%",
        ring: "142.1 76.2% 36.3%",
      },
      purple: {
        primary: "262.1 83.3% 57.8%",
        primaryForeground: "210 40% 98%",
        ring: "262.1 83.3% 57.8%",
      },
      orange: {
        primary: "24.6 95% 53.1%",
        primaryForeground: "60 9.1% 97.8%",
        ring: "24.6 95% 53.1%",
      },
      pink: {
        primary: "336 80% 58%",
        primaryForeground: "210 40% 98%",
        ring: "336 80% 58%",
      },
      red: {
        primary: "0 72.2% 50.6%",
        primaryForeground: "210 40% 98%",
        ring: "0 72.2% 50.6%",
      },
      yellow: {
        primary: "47.9 95.8% 53.1%",
        primaryForeground: "26 83.3% 14.1%",
        ring: "47.9 95.8% 53.1%",
      },
      teal: {
        primary: "173 80% 40%",
        primaryForeground: "210 40% 98%",
        ring: "173 80% 40%",
      },
    }

    const selectedColor = colors[accentColor]

    root.style.setProperty("--primary", selectedColor.primary)
    root.style.setProperty("--primary-foreground", selectedColor.primaryForeground)
    root.style.setProperty("--ring", selectedColor.ring)
  }, [accentColor])

  return (
    <ColorContext.Provider value={{ accentColor, setAccentColor }}>
      <NextThemesProvider {...props}>{children}</NextThemesProvider>
    </ColorContext.Provider>
  )
}

