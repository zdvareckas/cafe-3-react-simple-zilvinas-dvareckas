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
import bikeDriversService from '../../../services/bike-drivers-service';
import bikeCategoriesService from '../../../services/bike-category-service';

const Filter = () => {
  const [driverFilter, setDriverFilter] = React.useState('');
  const [bikeTypeFilter, setBikeTypeFilter] = React.useState('');
  const [riderHeightFilter, setRiderHeightFilter] = React.useState(0);

  const [bikeTypes, setBikeTypes] = React.useState([]);
  const [drivers, setDrivers] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      const [fetchedTypes, fetchedDrivers] = await Promise.all([
        bikeCategoriesService.fetchAll(),
        bikeDriversService.fetchAll(),
      ]);
      setBikeTypes(fetchedTypes);
      setDrivers(fetchedDrivers);
    })();
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
            {bikeTypes.map(({ id, label }) => (
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
