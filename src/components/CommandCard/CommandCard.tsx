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
        // height: isTVControl ? { xs: 100, sm: 120, md: 140 } : { xs: 130, sm: 140, md: 160 },
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
        // backgroundColor: isTVControl ? 'primary.light' : 'black',
      }}
      onClick={() => onCommandClick(command)}
    >
      <CardMedia
        component="img"
        sx={{
          // width: isTVControl ? { xs: 50, sm: 60, md: 70 } : { xs: 70, sm: 80, md: 100 },
          height: isTVControl ? { xs: 50, sm: 60, md: 70 } : { xs: 70, sm: 80, md: 100 },
          objectFit: 'contain',
          p: 1,
          backgroundColor: isTVControl ? null : 'rgba(0, 0, 0, 0.5)',
        }}
        image={command.logo}
        alt={command.name}
      />
      <CardContent sx={{ p: 1 }}>
        <Typography
          variant="h6"
          component="div"
          align="center"
          sx={{
            fontSize: isTVControl
              ? { xs: '1.2rem', sm: '1.6rem', md: '1.8rem' }
              : { xs: '0.9rem', sm: '1.25rem', md: '1.4rem' },
            fontWeight: 'bold',
            // color: isTVControl ? 'primary.contrastText' : 'white'
          }}
        >
          {command.name}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CommandCard;
