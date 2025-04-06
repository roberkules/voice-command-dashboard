import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { Command } from '../../types';

interface CommandCardProps {
  command: Command;
  onCommandClick: (command: Command) => void;
}

const CommandCard: React.FC<CommandCardProps> = ({ command, onCommandClick }) => {
  const isTVControl = command.category === 'tv-controls';

  return (
    <Card
      sx={{
        width: isTVControl ? { xs: 100, sm: 120, md: 140 } : { xs: 140, sm: 160, md: 180 },
        height: isTVControl ? { xs: 100, sm: 120, md: 140 } : { xs: 140, sm: 160, md: 180 },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        transition: 'transform 0.2s, box-shadow 0.2s',
        '&:hover': {
          transform: 'translateY(-5px)',
          boxShadow: 6
        },
        m: 1,
        backgroundColor: isTVControl ? 'primary.light' : 'background.paper',
      }}
      onClick={() => onCommandClick(command)}
    >
      <CardMedia
        component="img"
        sx={{
          width: isTVControl ? { xs: 50, sm: 60, md: 70 } : { xs: 70, sm: 80, md: 100 },
          height: isTVControl ? { xs: 50, sm: 60, md: 70 } : { xs: 70, sm: 80, md: 100 },
          objectFit: 'contain',
          mt: 1
        }}
        image={command.logo}
        alt={command.name}
      />
      <CardContent sx={{ p: { xs: 1, sm: 2 } }}>
        <Typography
          variant="h6"
          component="div"
          align="center"
          sx={{
            fontSize: isTVControl
              ? { xs: '1.2rem', sm: '1.4rem', md: '1.6rem' }
              : { xs: '0.9rem', sm: '1.1rem', md: '1.25rem' },
            fontWeight: isTVControl ? 'bold' : 'normal',
            color: isTVControl ? 'primary.contrastText' : 'text.primary'
          }}
        >
          {command.name}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CommandCard;
