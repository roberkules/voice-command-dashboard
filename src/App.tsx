import React, { useState, useEffect } from "react";
import { Box, CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import Dashboard from "./components/Dashboard/Dashboard";
import Settings from "./components/Settings/Settings";
import { useSpeechSynthesis } from "./hooks/useSpeechSynthesis";
import { AppSettings, ThemeMode } from "./types";
// Add this type definition

function App(): React.JSX.Element {
  const [activeView, setActiveView] = useState<"dashboard" | "settings">(
    "dashboard"
  );
  const [themeMode, setThemeMode] = useState<ThemeMode>(ThemeMode.SYSTEM);
  const [speechRate, setSpeechRate] = useState(0.7);
  const [tvName, setTvName] = useState("Fernseher");
  const [pauseDuration, setPauseDuration] = useState(2000); // Default 2 seconds
  const { voices, currentVoice, setVoice } = useSpeechSynthesis();
  // const [commands, setCommands] = useState<CommandsData>(initialCommands);

  // Load settings from localStorage
  useEffect(() => {
    const savedSettings = localStorage.getItem("appSettings");
    if (savedSettings) {
      try {
        const settings: AppSettings = JSON.parse(savedSettings);
        setSpeechRate(settings.speechRate || 0.7);
        setThemeMode(settings.themeMode || ThemeMode.SYSTEM);
        setTvName(settings.tvName || "am Fernseher");
        setPauseDuration(settings.pauseDuration || 2000);

        if (settings.voiceName && voices.length > 0) {
          const voice = voices.find((v) => v.name === settings.voiceName);
          if (voice) {
            setVoice(voice.voice);
          }
        }
      } catch (e) {
        console.error("Error loading settings:", e);
      }
    }
  }, [voices, setVoice]);

  // Save settings when they change
  useEffect(() => {
    const settings: AppSettings = {
      speechRate,
      themeMode,
      tvName,
      pauseDuration,
      voiceName: currentVoice?.name,
    };
    localStorage.setItem("appSettings", JSON.stringify(settings));
  }, [speechRate, themeMode, tvName, pauseDuration, currentVoice]);

  // Function to update TV name
  const handleTvNameChange = (newName: string) => {
    setTvName(newName);
  };

  // Function to update pause duration
  const handlePauseDurationChange = (newDuration: number) => {
    setPauseDuration(newDuration);
  };

  // Create theme based on dark mode preference
  const theme = createTheme({
    palette: {
      mode: themeMode === ThemeMode.DARK ? "dark" : "light",
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
  });

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
          <Dashboard
            onSettingsClick={toggleView}
            speechRate={speechRate}
            currentVoice={currentVoice}
            pauseDuration={pauseDuration}
          />
        ) : (
          <Settings
            voices={voices}
            currentVoice={currentVoice}
            speechRate={speechRate}
            pauseDuration={pauseDuration}
            themeMode={themeMode}
            tvName={tvName}
            onVoiceChange={setVoice}
            onSpeechRateChange={setSpeechRate}
            onPauseDurationChange={handlePauseDurationChange}
            onThemeModeChange={setThemeMode}
            onTvNameChange={handleTvNameChange}
            onBackClick={toggleView}
          />
        )}
      </Box>
    </ThemeProvider>
  );
}

export default App;
