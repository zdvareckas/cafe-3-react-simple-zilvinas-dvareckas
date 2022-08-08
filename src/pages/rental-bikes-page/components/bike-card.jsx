import * as React from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from '@mui/material';
import { Image } from '../../../components';
import BikeOrderContext from '../../../contexts/bike-order-context';

const BikeCard = ({
  id,
  title,
  img,
  description,
  category,
  sizes,
  driver,
  price,
}) => {
  const [bikeSize, setBikeSize] = React.useState('');
  const { orderItems, addToOrder } = React.useContext(BikeOrderContext);

  const isExist = !!orderItems.find((x) => x.id === id && x.bikeSize === bikeSize);
  const customSizeID = `${id}${bikeSize}`;

  return (
    <Card key={id} sx={{ borderRadius: '5px 5px 25px 25px' }}>
      <Box>
        <Image component="img" src={img} />
      </Box>

      <CardContent sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
      }}
      >
        <Typography gutterBottom variant="h6">
          {title}
        </Typography>
        <Typography variant="body1">
          {description}
        </Typography>
        <Chip size="small" color="primary" label={category} />
        <Chip size="small" color="primary" label={driver} />
        <Box sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
        >
          <FormControl size="small" sx={{ width: 1 / 2 }}>
            <InputLabel>Dydis</InputLabel>
            <Select
              label="Dydis"
              value={bikeSize}
              onChange={(e) => setBikeSize(e.target.value)}
            >
              {sizes.map((size) => (
                <MenuItem key={size} value={size}>
                  {size}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Typography variant="body1">
            {price}
            €/val.
          </Typography>
        </Box>
      </CardContent>
      <Button
        color="secondary"
        disabled={isExist}
        variant="contained"
        fullWidth
        onClick={() => {
          if (bikeSize.length === 0) {
            alert('Pasirinkite dydi prieš pridedami.');
          } else {
            addToOrder({
              id, title, bikeSize, price, category, img, customSizeID,
            });
          }
        }}
      >
        Užsakyti
      </Button>
    </Card>
  );
};

export default BikeCard;
