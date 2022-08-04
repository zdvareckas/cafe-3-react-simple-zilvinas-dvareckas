import * as React from 'react';
import {
  Box,
  Button,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Slider,
  TextField,
  Typography,
} from '@mui/material';

const InformationSection = () => {
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phoneNumber, setPhoneNumber] = React.useState('');
  const [height, setHeight] = React.useState([100, 200]);
  const [terrain, setTerrain] = React.useState('');

  return (
    <>
      <Box sx={{
        display: 'flex',
        flexDirection: { xs: 'column', lg: 'row' },
        gap: 1,
      }}
      >
        <TextField
          fullWidth
          label="Vardas"
          variant="filled"
          name="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <TextField
          fullWidth
          label="Pavardė"
          variant="filled"
          name="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </Box>
      <TextField
        fullWidth
        label="El. Paštas"
        variant="filled"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        fullWidth
        label="Tel. Numeris"
        variant="filled"
        name="phone"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <Box sx={{ p: 0.9 }}>
        <Typography variant="h6">Grupės ūgio vidurkis:</Typography>
        <Slider
          name="height"
          value={height}
          step={5}
          min={100}
          max={200}
          valueLabelDisplay="auto"
          onChangeCommitted={(_, value) => {
            setHeight(value);
          }}
        />
      </Box>
      <FormControl>
        <FormLabel>Pasirinkto reljefo tipas:</FormLabel>
        <RadioGroup
          onChange={(_, newTerrain) => setTerrain(newTerrain)}
          value={terrain}
          sx={{ display: 'flex', flexDirection: 'row' }}
        >
          <FormControlLabel
            name="terrain"
            label="Keliai"
            value="Keliai"
            control={<Radio />}
          />
          <FormControlLabel
            name="terrain"
            label="Miškai"
            value="Miškai"
            control={<Radio />}
          />
        </RadioGroup>
      </FormControl>
      <Button type="submit" variant="contained" color="success">Susisiekti..</Button>
      <Divider />
    </>
  );
};

export default InformationSection;
