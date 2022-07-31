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

const BikeCard = ({
  id,
  title,
  img,
  description,
  category,
  sizes,
  driver,
}) => {
  const [bikeSize, setBikeSize] = React.useState('');

  return (
    <Card key={id}>
      <Box>
        <Image component="img" src={img} />
      </Box>

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
        <Chip size="small" color="primary" label={category} />
        <Chip size="small" color="primary" label={driver} />
        <FormControl size="small">
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
      </CardContent>
      <Box sx={{
        display: 'flex', py: 1, justifyContent: 'center', gap: 2,
      }}
      >
        <Button variant="contained">Peržiūrėti</Button>
        <Button variant="contained">Užsakyti</Button>
      </Box>
    </Card>
  );
};

export default BikeCard;
