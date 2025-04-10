import React, { useState } from 'react';
import { Box, Snackbar, Alert, IconButton } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import CategoryTabs from '../CategoryTabs/CategoryTabs';
import CommandCard from '../CommandCard/CommandCard';
import { categories } from '../../data/categories';
import { useCommands } from '../../hooks/useCommands';
import { useSpeechSynthesis } from '../../hooks/useSpeechSynthesis';
import { Command } from '../../types';
import { useAppContext } from '../../context';

interface DashboardProps {
  onSettingsClick: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({
  onSettingsClick,
}) => {
  const { settings } = useAppContext();

  const [activeCategory, setActiveCategory] = useState('tv-channels');
  const [feedback, setFeedback] = useState<string | null>(null);
  const { speak, voices } = useSpeechSynthesis();
  const commands = useCommands(settings);

  const handleCommandClick = (command: Command) => {
    const fullCommand = `Hey Google, ${command.voiceCommand}`;

    // Show visual feedback
    setFeedback(fullCommand);

    // Hide feedback after 6 seconds
    setTimeout(() => {
      setFeedback(null);
    }, 7000);

    // Speak the command using global settings
    speak(fullCommand, {
      pauseAfterPrefix: true,
      prefixPauseDuration: settings.pauseDuration,
      rate: settings.speechRate,
      voice: settings.voiceName ? voices.find(v => v.name === settings.voiceName)?.voice : undefined,
      lang: 'de-AT',
    });
  };

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      width: '100%',
      overflow: 'auto'
    }}>
      <Box sx={{
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        px: 2
      }}>
        <Box sx={{
          // my: 2,
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1
        }}>
          {/* Header row with tabs and settings icon */}
          <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            mb: 3,
            position: 'sticky',
            top: 0,
            zIndex: 1000,
            bgcolor: 'background.paper', // Match your background color
            pb: 2,  // Add some padding bottom
          }}>
            <Box sx={{ flexGrow: 1, mr: 2 }}>
              <CategoryTabs
                categories={categories}
                activeCategory={activeCategory}
                onCategoryChange={setActiveCategory}
              />
            </Box>

            <IconButton
              sx={{
                mr: 1,
                bgcolor: 'background.paper',
                boxShadow: 1,
                '&:hover': {
                  bgcolor: 'action.hover'
                },
              }}
              onClick={onSettingsClick}
              aria-label="settings"
            >
              <SettingsIcon sx={{ fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' } }} />
            </IconButton>
          </Box>

          {/* Grid with auto-fit columns to ensure at least 2 cards per row */}
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: 'repeat(auto-fill, minmax(140px, 1fr))', // Mobile: at least 2 cards per row
                sm: 'repeat(auto-fill, minmax(160px, 1fr))',
                md: 'repeat(auto-fill, minmax(180px, 1fr))'
              },
              gap: 1,
              justifyContent: 'center',
              justifyItems: 'center',
              alignItems: 'flex-start',
              overflowY: 'auto',
              pb: 4,
              flexGrow: 1
            }}
          >
            {commands[activeCategory]?.map(command => (
              <CommandCard
                key={command.id}
                category={activeCategory}
                command={command}
                onCommandClick={handleCommandClick}
              />
            ))}
          </Box>
        </Box>
      </Box>

      <Snackbar
        open={feedback !== null}
        autoHideDuration={3000}
        onClose={() => setFeedback(null)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          severity="info"
          sx={{
            width: '100%',
            fontSize: '1.2rem',
            '& .MuiAlert-message': { width: '100%' }
          }}
        >
          {feedback}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Dashboard;
