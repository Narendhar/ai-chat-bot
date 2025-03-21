import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
    interface Palette {
        appBar: {
            background: string;
        };
        iconButton: {
            hoverBackground: string;
            border: string;
        };
        custom: {
            messageBackground: string;
            textLight: string;
            textDark: string;
            errorMessage: string;
            lightModeIconStroke: string;
            darkModeIconStroke: string;
            darkModeIconColor: string;
        }
    }

    interface PaletteOptions {
        appBar?: {
            background: string;
        };
        iconButton?: {
            hoverBackground: string;
            border: string;
        };
        custom?: {
            messageBackground: string;
            textLight: string;
            textDark: string;
            errorMessage: string;
            lightModeIconStroke: string;
            darkModeIconStroke: string;
            darkModeIconColor: string;
        }
    }
}

export const lightTheme = createTheme({
    palette: {
        mode: "light",
        background: {
            default: "#ffffff"
        },
        appBar: {
            background: "#ffffff",
        },
        iconButton: {
            hoverBackground: "rgba(0, 123, 255, 0.04)",
            border: "black"
        },
        custom: {
            messageBackground: "rgba(0, 123, 255, 0.04)",
            textLight: "#212121",
            textDark: "#212121",
            errorMessage: "red",
            lightModeIconStroke: "transparent",
            darkModeIconStroke: "black",
            darkModeIconColor: "transparent"
        },
    },
    typography: {
        fontFamily: "Arial, sans-serif",
    }
});

export const darkTheme = createTheme({
    palette: {
        mode: "dark",
        background: {
            default: "#121212",
        },
        appBar: {
            background: "#1e1e1e",
        },
        iconButton: {
            hoverBackground: "rgba(255, 255, 255, 0.11)",
            border: "white"
        },
        custom: {
            messageBackground: "rgba(255, 255, 255, 0.11)",
            textLight: "white",
            textDark: "white",
            errorMessage: "red",
            lightModeIconStroke: "black",
            darkModeIconStroke: "white",
            darkModeIconColor: "transparent"
        },
    },
    typography: {
        fontFamily: "Arial, sans-serif",
    }
});


