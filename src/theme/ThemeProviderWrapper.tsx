import { useState, createContext, ReactNode } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { lightTheme, darkTheme } from "./theme";

// Create a Theme Context
export const ThemeContext = createContext({
    toggleTheme: (p0: boolean) => { },
    isDarkMode: false,
});

// Theme Provider Component
export const ThemeProviderWrapper = ({ children }: { children: ReactNode }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode((prev) => !prev);
    };

    return (
        <ThemeContext.Provider value={{ toggleTheme, isDarkMode }}>
            <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
                <CssBaseline /> {/* Normalizes styles for consistency */}
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    );
};
