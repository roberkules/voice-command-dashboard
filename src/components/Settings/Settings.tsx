import React from "react";
import {
  Box,
  Typography,
  Slider,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Card,
  CardContent,
  Divider,
  IconButton,
  SelectChangeEvent,
  ToggleButtonGroup,
  ToggleButton,
  TextField,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import SettingsBrightnessIcon from "@mui/icons-material/SettingsBrightness";
import { VoiceInfo } from "../../hooks/useSpeechSynthesis";
import { ThemeMode } from "../../types";

interface SettingsProps {
  voices: VoiceInfo[];
  currentVoice: SpeechSynthesisVoice | null;
  speechRate: number;
  themeMode: ThemeMode;
  tvName: string;
  pauseDuration: number;
  onPauseDurationChange: (duration: number) => void;
  onTvNameChange: (name: string) => void;
  onVoiceChange: (voice: SpeechSynthesisVoice) => void;
  onSpeechRateChange: (rate: number) => void;
  onThemeModeChange: (mode: ThemeMode) => void;
  onBackClick: () => void;
}

const Settings: React.FC<SettingsProps> = ({
  voices,
  currentVoice,
  speechRate,
  themeMode,
  onVoiceChange,
  onSpeechRateChange,
  onThemeModeChange,
  onBackClick,
  tvName,
  onTvNameChange,
  pauseDuration,
  onPauseDurationChange,
}) => {
  // Filter to only show German voices
  const germanVoices = voices.filter((voice) => voice.lang.includes("de"));

  // If no German voices are available, show all voices as fallback
  const availableVoices = germanVoices.length > 0 ? germanVoices : voices;

  const handleVoiceChange = (event: SelectChangeEvent<string>) => {
    const voiceName = event.target.value;
    const selectedVoice = voices.find((v) => v.name === voiceName);
    if (selectedVoice) {
      onVoiceChange(selectedVoice.voice);
    }
  };

  const handleRateChange = (_event: Event, newValue: number | number[]) => {
    onSpeechRateChange(newValue as number);
  };

  const handleThemeModeChange = (
    _event: React.MouseEvent<HTMLElement>,
    newMode: ThemeMode | null
  ) => {
    if (newMode !== null) {
      onThemeModeChange(newMode);
    }
  };

  const handleTvNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onTvNameChange(event.target.value);
  };

  const handlePauseDurationChange = (
    _event: Event,
    newValue: number | number[]
  ) => {
    onPauseDurationChange(newValue as number);
  };

  // Format the pause duration for display
  const formatPauseDuration = (ms: number) => {
    return `${ms / 1000} s`;
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        width: "100%",
        overflow: "auto",
      }}
    >
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          width: "100%",
          px: 2,
        }}
      >
        <Box sx={{ my: 2, position: "relative" }}>
          <IconButton
            sx={{ position: "absolute", left: 0, top: 0 }}
            onClick={onBackClick}
            aria-label="back to dashboard"
          >
            <ArrowBackIcon fontSize="large" />
          </IconButton>

          <Typography variant="h3" component="h1" gutterBottom align="center">
            Einstellungen
          </Typography>

          <Card sx={{ mb: 3, mt: 4 }}>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Spracheinstellungen
              </Typography>
              <Divider sx={{ mb: 3 }} />

              <Box sx={{ mb: 4 }}>
                <FormControl fullWidth sx={{ mb: 3 }}>
                  <InputLabel id="voice-select-label">Stimme</InputLabel>
                  <Select
                    labelId="voice-select-label"
                    id="voice-select"
                    value={currentVoice?.name || ""}
                    label="Stimme"
                    onChange={handleVoiceChange}
                  >
                    {availableVoices.map((voice) => (
                      <MenuItem key={voice.name} value={voice.name}>
                        {voice.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>

                <Typography id="speech-rate-slider" gutterBottom>
                  Sprechgeschwindigkeit: {Math.round(speechRate * 100)}%
                </Typography>
                <Slider
                  value={speechRate}
                  onChange={handleRateChange}
                  aria-labelledby="speech-rate-slider"
                  step={0.1}
                  marks
                  min={0.5}
                  max={1.5}
                  valueLabelDisplay="auto"
                />

                <Typography id="pause-duration-slider" gutterBottom>
                  Pause nach "Hey Google": {formatPauseDuration(pauseDuration)}
                </Typography>
                <Slider
                  value={pauseDuration}
                  onChange={handlePauseDurationChange}
                  aria-labelledby="pause-duration-slider"
                  step={500}
                  marks
                  min={500}
                  max={4000}
                  valueLabelDisplay="auto"
                  valueLabelFormat={formatPauseDuration}
                />
              </Box>
            </CardContent>
          </Card>

          <Card sx={{ mb: 3 }}>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Geräteeinstellungen
              </Typography>
              <Divider sx={{ mb: 3 }} />

              <Box sx={{ mb: 3 }}>
                <TextField
                  fullWidth
                  label="Fernsehername"
                  value={tvName}
                  onChange={handleTvNameChange}
                  helperText="Dieser Name wird in Sprachbefehlen verwendet (z.B. 'Fernseher', 'TV', 'TCL Smart TV')."
                  variant="outlined"
                />
              </Box>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Erscheinungsbild
              </Typography>
              <Divider sx={{ mb: 3 }} />

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Typography gutterBottom>Farbschema</Typography>
                <ToggleButtonGroup
                  value={themeMode}
                  exclusive
                  onChange={handleThemeModeChange}
                  aria-label="theme mode"
                  sx={{ mb: 2 }}
                >
                  <ToggleButton value="light" aria-label="light mode">
                    <LightModeIcon sx={{ mr: 1 }} />
                    Hell
                  </ToggleButton>
                  <ToggleButton value="dark" aria-label="dark mode">
                    <DarkModeIcon sx={{ mr: 1 }} />
                    Dunkel
                  </ToggleButton>
                  <ToggleButton value="system" aria-label="system theme">
                    <SettingsBrightnessIcon sx={{ mr: 1 }} />
                    System
                  </ToggleButton>
                </ToggleButtonGroup>
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Box>
  );
};

export default Settings;
