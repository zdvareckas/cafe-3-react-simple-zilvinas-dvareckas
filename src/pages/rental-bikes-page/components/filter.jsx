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
  IconButton,
} from '@mui/material';
import { useSearchParams } from 'react-router-dom';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import bikeDriversService from '../../../services/bike-drivers-service';
import bikeTypesService from '../../../services/bike-types-service';

const Filter = () => {
  const [driverFilter, setDriverFilter] = React.useState([]);
  const [bikeTypeFilter, setBikeTypeFilter] = React.useState([]);
  const [riderHeightFilter, setRiderHeightFilter] = React.useState(0);
  const [searchParams, setSearchParams] = useSearchParams();

  const [bikeTypes, setBikeTypes] = React.useState([]);
  const [drivers, setDrivers] = React.useState([]);

  const handleBikeTypeChange = (_, newBikeType) => {
    if (newBikeType) {
      searchParams.set('typeId', newBikeType);
    } else {
      searchParams.delete('typeId');
    }
    setSearchParams(searchParams);
    setBikeTypeFilter(newBikeType);
  };

  const handleDriverChange = (_, newDriver) => {
    if (newDriver) {
      searchParams.set('driverId', newDriver);
    } else {
      searchParams.delete('driverId');
    }

    setSearchParams(searchParams);
    setDriverFilter(newDriver);
  };

  const clearFilters = () => {
    setSearchParams([]);
    setDriverFilter([]);
    setBikeTypeFilter([]);
  };

  React.useEffect(() => {
    (async () => {
      const [fetchedTypes, fetchedDrivers] = await Promise.all([
        bikeTypesService.fetchAll(),
        bikeDriversService.fetchAll(),
      ]);
      setBikeTypes(fetchedTypes);
      setDrivers(fetchedDrivers);
    })();
  }, []);

  return (
    <Box sx={{
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      width: '700px',
      p: 2,
      mx: 'auto',
      backgroundColor: '#fafafa',
    }}
    >
      <Typography variant="h5" align="center">Filtrai</Typography>
      <IconButton
        color="error"
        onClick={clearFilters}
        sx={{ position: 'absolute', right: 15, bottom: 15 }}
      >
        <RestartAltIcon />
      </IconButton>
      <Divider sx={{ my: 2 }} />
      <Box sx={{ display: 'flex', gap: 6 }}>
        <FormControl>
          <FormLabel>Vairuotojas:</FormLabel>
          <RadioGroup
            value={driverFilter}
            onChange={handleDriverChange}
          >
            {drivers.map(({ id, label }) => (
              <FormControlLabel
                key={id}
                value={id}
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
            onChange={handleBikeTypeChange}
          >
            {bikeTypes.map(({ id, label }) => (
              <FormControlLabel
                key={id}
                value={id}
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
