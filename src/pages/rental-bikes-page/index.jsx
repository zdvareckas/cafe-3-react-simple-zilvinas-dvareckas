import React from 'react';
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from '@mui/material';
import RentalBikeContext from '../../contexts/rental-bikes-context';

const RentalBikesPage = () => {
  const rentalBikeContext = React.useContext(RentalBikeContext);
  const [bikes, setBikes] = React.useState([]);
  React.useEffect(() => {
    fetch('http://localhost:8000/bikes')
      .then((res) => res.json())
      .then((fetchedBikes) => setBikes(fetchedBikes));
  }, []);

  console.log('RentalBikesPage, rentalBikeContextValue', rentalBikeContext);

  return (
    <Box sx={{
      display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 2, mt: 10, placeItems: 'center',
    }}
    >
      {bikes.map(({
        id, title, description, category, img,
      }) => (
        <Card key={id} sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="200"
            image={img}
            alt={title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
            <Typography color="text.secondary">
              {category}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Peržiūrėti</Button>
            <Button size="small">Pridėti į užsakymą</Button>
          </CardActions>
        </Card>
      ))}
    </Box>
  );
};

export default RentalBikesPage;
