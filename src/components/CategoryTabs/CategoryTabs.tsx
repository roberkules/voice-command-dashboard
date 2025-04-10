import React from 'react';
import { Tabs, Tab, Box } from '@mui/material';
import TvIcon from '@mui/icons-material/Tv';
import RadioIcon from '@mui/icons-material/Radio';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import { Category } from '../../types';
import { SettingsRemote } from '@mui/icons-material';


interface CategoryTabsProps {
  categories: Category[];
  activeCategory: string;
  onCategoryChange: (categoryId: string) => void;
}

const CategoryTabs: React.FC<CategoryTabsProps> = ({
  categories,
  activeCategory,
  onCategoryChange
}): React.JSX.Element => {
  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
    onCategoryChange(newValue);
  };

  const getIcon = (iconName: string): React.JSX.Element | undefined => {
    switch (iconName) {
      case 'tv':
        return <TvIcon />;
      case 'radio':
        return <RadioIcon />;
      case 'sports':
        return <SportsSoccerIcon />;
      case 'settings_remote':
        return <SettingsRemote />;
      default:
        return undefined;
    }
  };

  return (
    <Box sx={{
      width: '100%',
      bgcolor: 'background.paper',
      borderRadius: 2,
      boxShadow: 1
    }}>
      <Tabs
        value={activeCategory}
        onChange={handleChange}
        centered
        variant="fullWidth"
        sx={{
          '& .MuiTab-root': {
            fontSize: { xs: '0', sm: '1.1rem' },
            py: { xs: 0, sm: 2 },
            minWidth: 'auto',
          },
          '& .MuiTab-icon': {
            fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
            // margin: { xs: '0 auto', sm: 'inherit' } // Center icon when no label
          }
        }}
      >
        {categories.map(category => (
          <Tab
            key={category.id}
            value={category.id}
            label={category.name}
            icon={getIcon(category.icon)}
            iconPosition="top"
            sx={{
              '& .MuiTab-icon': {
                fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
              }
            }}
          />
        ))}
      </Tabs>
    </Box>
  );
};

export default CategoryTabs;
