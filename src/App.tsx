import React, { useState } from "react";
import { Box, CssBaseline, ThemeProvider, createTheme, useMediaQuery } from "@mui/material";
import Dashboard from "./components/Dashboard/Dashboard";
import Settings from "./components/Settings/Settings";
import { AppProvider, useAppContext } from "./context";
// Add this type definition

function App(): React.JSX.Element {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}

function AppContent(): React.JSX.Element {
  const [activeView, setActiveView] = useState<"dashboard" | "settings">(
    "dashboard"
  );

  const { settings } = useAppContext();
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode:
            settings.themeMode === 'system'
              ? prefersDarkMode
                ? 'dark'
                : 'light'
              : settings.themeMode,
          primary: {
            main: "#1976d2",
          },
          secondary: {
            main: "#dc004e",
          },
        },
        typography: {
          fontSize: 16,
          h3: {
            fontSize: "2.5rem",
            fontWeight: 600,
          },
          h6: {
            fontSize: "1.25rem",
            fontWeight: 500,
          },
        },
        components: {
          MuiButton: {
            styleOverrides: {
              root: {
                fontSize: "1.1rem",
                padding: "10px 20px",
              },
            },
          },
          MuiCard: {
            styleOverrides: {
              root: {
                borderRadius: 16,
              },
            },
          },
        },
      }),
    [settings.themeMode, prefersDarkMode]
  );

  const toggleView = () => {
    setActiveView(activeView === "dashboard" ? "settings" : "dashboard");
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{
        height: '100vh',
        width: '100vw',
        overflow: 'auto',
        display: 'flex',
        flexDirection: 'column'
      }}>
        {activeView === 'dashboard' ? (
          <Dashboard onSettingsClick={toggleView} />
        ) : (
          <Settings onBackClick={toggleView} />
        )}
      </Box>
    </ThemeProvider>
  );
}

export default App;
