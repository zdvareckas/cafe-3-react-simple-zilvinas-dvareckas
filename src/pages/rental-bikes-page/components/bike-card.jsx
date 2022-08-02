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
  count = 1,
}) => {
  const [bikeSize, setBikeSize] = React.useState('not selected');
  const { addToOrder } = React.useContext(BikeOrderContext);

  return (
    <Card key={id}>
      <Box>
        <Image component="img" src={img} />
      </Box>
      <CardContent sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
      }}
      >
        <Typography gutterBottom variant="h6" component="div">
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
            <InputLabel id="size-select">Dydis</InputLabel>
            <Select
              labelId="size-select"
              id="size-select"
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
            /val.
          </Typography>
        </Box>
      </CardContent>
      <Button
        variant="contained"
        fullWidth
        onClick={() => addToOrder({
          id, title, bikeSize, count,
        })}
      >
        Užsakyti
      </Button>
    </Card>
  );
};

export default BikeCard;
