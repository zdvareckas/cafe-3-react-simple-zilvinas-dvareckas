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
import * as React from 'react';
import CallIcon from '@mui/icons-material/Call';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const ContactForm = () => {
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phoneNumber, setPhoneNumber] = React.useState('');
  const [height, setHeight] = React.useState([100, 200]);
  const [terrain, setTerrain] = React.useState('');

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', pt: 5 }}>
      <Box
        component="form"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          width: 1 / 3,
          p: 5,
          backgroundColor: 'grey.200',
          borderRadius: 10,
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'row', gap: 1 }}>
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

        <Button type="submit" variant="contained">Susisiekti..</Button>
        <Divider />

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          <Typography variant="body2" align="left">
            Kontaktinė informacija
          </Typography>
          <Typography sx={{
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 1,
          }}
          >
            <CallIcon />
            +37061111111
          </Typography>
          <Typography sx={{
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 1,
          }}
          >
            <AlternateEmailIcon />
            antanodviračiai@dviračiai.lt
          </Typography>
          <Typography sx={{
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 1,
          }}
          >
            <LocationOnIcon />
            M. K. Čiurlionio g. 100, Vilnius 03100
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactForm;
