import * as React from 'react';
import {
  Box,
  Divider,
  IconButton,
  TextField,
  Typography,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const OrderItem = ({
  id,
  customSizeID,
  title,
  bikeSize,
  price,
  type,
  img,
  count,
  onDelete,
  onUpdateCount,
}) => {
  const [bikeCount, setBikeCount] = React.useState(count);

  const handleCountChange = (e) => {
    setBikeCount(Number(e.target.value));
  };

  React.useEffect(() => {
    onUpdateCount({ customSizeID, bikeCount });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bikeCount]);

  return (
    <>
      <Box
        key={id}
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: { xs: 'column', md: 'row' },
          gap: 2,
          pt: 1,
        }}
      >
        <Box
          component="img"
          src={img}
          sx={{ width: '240px' }}
        />

        <Box sx={{ width: { xs: '100%', md: '200px' }, p: 1 }}>
          <Typography>
            {title}
          </Typography>
          <Typography>
            {type.label}
          </Typography>
          <Typography>
            {bikeSize}
          </Typography>
        </Box>

        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          textAlign: 'right',
          gap: 2,
        }}
        >
          <TextField
            value={bikeCount}
            onChange={handleCountChange}
            type="number"
            size="small"
            sx={{ width: '100px' }}
          />
          <Typography sx={{ width: '60px' }}>
            {price}
            €
          </Typography>
          <Typography sx={{ width: '60px' }}>
            {(price * bikeCount).toFixed(2)}
            €
          </Typography>
        </Box>
        <IconButton onClick={onDelete}><DeleteIcon /></IconButton>
      </Box>
      <Divider sx={{ backgroundColor: 'grey.400', my: 2 }} />
    </>
  );
};

export default OrderItem;
