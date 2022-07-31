import * as React from 'react';
import {
  Box,
  Divider,
  FormControl,
  FormControlLabel,
  Slider,
  Typography,
  RadioGroup,
  Radio,
  FormLabel,
} from '@mui/material';

const genders = [
  {
    id: '1',
    label: 'Vyras',
  },
  {
    id: '2',
    label: 'Moteris',
  },
  {
    id: '3',
    label: 'Vaikas',
  },
];

const terrain = [
  { id: '1', label: 'Kelių' },
  { id: '2', label: 'Kalnų' },
];

const Filter = () => {
  const [driverFilter, setDriverFilter] = React.useState('');
  const [terrainFilter, setTerrainFilter] = React.useState('');
  const [riderHeightFilter, setRiderHeightFilter] = React.useState(0);

  return (
    <Box sx={{
      width: '50%',
      backgroundColor: '#fafafa',
      display: 'flex',
      flexDirection: 'column',
      p: 2,
      mx: 'auto',
    }}
    >
      <Typography variant="h5" align="center">Filtrai</Typography>
      <Divider sx={{ my: 2 }} />
      <Box sx={{ display: 'flex', gap: 6 }}>
        <FormControl>
          <FormLabel>Vairuotojas:</FormLabel>
          <RadioGroup
            value={driverFilter}
            onChange={(_, newDriver) => setDriverFilter(newDriver)}
          >
            {genders.map(({ label }) => (
              <FormControlLabel
                key={label}
                value={label}
                label={label}
                control={<Radio />}
              />
            ))}
          </RadioGroup>
        </FormControl>

        <FormControl>
          <FormLabel>Reljefas:</FormLabel>
          <RadioGroup
            value={terrainFilter}
            onChange={(_, newTerrain) => setTerrainFilter(newTerrain)}
          >
            {terrain.map(({ label }) => (
              <FormControlLabel
                key={label}
                value={label}
                control={<Radio />}
                label={label}
              />
            ))}
          </RadioGroup>
        </FormControl>

        <FormControl>
          <FormLabel>Dviratininko ūgis (cm):</FormLabel>
          <Slider
            marks
            defaultValue={0}
            valueLabelDisplay="auto"
            step={5}
            min={100}
            max={200}
            sx={{ py: 2.5 }}
            value={riderHeightFilter}
            onChangeCommitted={(_, newHeight) => setRiderHeightFilter(newHeight)}
          />
        </FormControl>
      </Box>
    </Box>
  );
};

export default Filter;
