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

const Filter = () => {
  const [driverFilter, setDriverFilter] = React.useState('');
  const [bikeTypeFilter, setBikeTypeFilter] = React.useState('');
  const [riderHeightFilter, setRiderHeightFilter] = React.useState(0);

  const [types, setTypes] = React.useState([]);
  React.useEffect(() => {
    fetch('http://localhost:8000/categories')
      .then((res) => res.json())
      .then((fetchedTypes) => setTypes(fetchedTypes));
  }, []);

  const [drivers, setDrivers] = React.useState([]);
  React.useEffect(() => {
    fetch('http://localhost:8000/drivers')
      .then((res) => res.json())
      .then((fetchedDrivers) => setDrivers(fetchedDrivers));
  }, []);

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      width: '700px',
      p: 2,
      mx: 'auto',
      backgroundColor: '#fafafa',
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
            {drivers.map(({ id, label }) => (
              <FormControlLabel
                key={id}
                value={label}
                label={label}
                control={<Radio />}
              />
            ))}
          </RadioGroup>
        </FormControl>
        <FormControl>
          <FormLabel>Dviračio tipas:</FormLabel>
          <RadioGroup
            value={bikeTypeFilter}
            onChange={(_, newBikeType) => setBikeTypeFilter(newBikeType)}
          >
            {types.map(({ id, label }) => (
              <FormControlLabel
                key={id}
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
