"use client"

import { createContext, useContext, useEffect, useState } from "react"

const ThemeContext = createContext({ theme: "dark", setTheme: () => null })

export function ThemeProvider({
  children,
  defaultTheme = "dark",
  enableSystem = false,
  disableTransitionOnChange = false,
  ...props
}) {
  const [theme, setTheme] = useState(defaultTheme)

  useEffect(() => {
    const root = window.document.documentElement

    // Remove all theme classes
    root.classList.remove("light", "dark")

    // Add the current theme class
    root.classList.add(theme)

    // Set data-theme attribute for other libraries
    root.setAttribute("data-theme", theme)
  }, [theme])

  const value = {
    theme,
    setTheme: (newTheme) => {
      setTheme(newTheme)
    },
  }

  return (
    <ThemeContext.Provider {...props} value={value}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}
