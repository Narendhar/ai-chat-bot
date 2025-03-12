import { createTheme } from "@mui/material/styles";

// Extend the default MUI theme
declare module "@mui/material/styles" {
    interface Palette {
        appBar: {
            background: string;
        };
        iconButton: {
            hoverBackground: string;
        };
    }

    interface PaletteOptions {
        appBar?: {
            background: string;
        };
        iconButton?: {
            hoverBackground: string;
        };
    }
}

// Define light theme
export const lightTheme = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: "#007BFF",
        },
        secondary: {
            main: "#FF4081",
        },
        background: {
            default: "#ffffff",
            paper: "#f5f5f5",
        },
        appBar: {
            background: "#ffffff", // Now TypeScript won't complain
        },
        iconButton: {
            hoverBackground: "rgba(0, 123, 255, 0.04)", // Light Mode hover
        },
    },
    typography: {
        fontFamily: "Arial, sans-serif",
    },
});

// Define dark theme
export const darkTheme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: "#90CAF9",
        },
        secondary: {
            main: "#F48FB1",
        },
        background: {
            default: "#121212",
            paper: "#1e1e1e",
        },
        appBar: {
            background: "#1e1e1e", // Dark mode AppBar
        },
        iconButton: {
            hoverBackground: "rgba(255, 255, 255, 0.11)", // Dark mode hover
        },
    },
    typography: {
        fontFamily: "Arial, sans-serif",
    },
});


