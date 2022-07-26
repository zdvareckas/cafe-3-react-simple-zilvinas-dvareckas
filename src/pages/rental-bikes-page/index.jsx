import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Button,
  Typography,
  Chip,
  InputLabel,
  Select,
  MenuItem,
  FormControl,
} from '@mui/material';
import * as BikeCard from './components';
// import RentalBikeContext from '../../contexts/rental-bikes-context';

const RentalBikesPage = () => {
  // const rentalBikeContext = React.useContext(RentalBikeContext);
  const [bikes, setBikes] = React.useState([]);
  React.useEffect(() => {
    fetch('http://localhost:8000/bikes')
      .then((res) => res.json())
      .then((fetchedBikes) => setBikes(fetchedBikes));
  }, []);

  // console.log('RentalBikesPage, rentalBikeContextValue', rentalBikeContext);

  return (
    <Box sx={{
      display: 'grid', gridTemplateColumns: 'repeat(4, 300px)', gap: 2, mt: 10, placeContent: 'center',
    }}
    >
      {bikes.map(({
        id,
        title,
        description,
        category,
        img,
        sizes,
      }) => (
        <Card key={id}>
          <BikeCard.Image component="img" src={img} />
          <CardContent sx={{
            display: 'flex', flexDirection: 'column', gap: 2,
          }}
          >
            <Typography gutterBottom variant="h6" component="div">
              {title}
            </Typography>
            <Typography variant="body1">
              {description}
            </Typography>
            <Chip size="small" color="primary" label={category} sx={{ width: '25%' }} />
            <FormControl size="small" sx={{ width: '50%' }}>
              <InputLabel id="demo-simple-select-label">Dydis</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Age"
              >
                {sizes.map((size) => (
                  <MenuItem key={size}>
                    {size}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </CardContent>
          <Box sx={{
            display: 'flex', py: 1, justifyContent: 'center', gap: 2,
          }}
          >
            <Button variant="contained">Peržiūrėti</Button>
            <Button variant="contained">Užsakyti</Button>
          </Box>
        </Card>
      ))}
    </Box>
  );
};

export default RentalBikesPage;
