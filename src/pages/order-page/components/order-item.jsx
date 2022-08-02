import * as React from 'react';
import {
  Box,
  IconButton,
  TextField,
  Typography,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const OrderItem = () => (
  <Box sx={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    pt: 1,
  }}
  >
    <Box
      component="img"
      src="https://assets.specialized.com/i/specialized/91822-34_ROCKHOPPER-EXPERT-29-OAKGRNMET-METWHTSIL_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto"
      sx={{ width: '240px' }}
    />
    <Box sx={{ p: 5 }}>
      <Typography>
        Pavadinimas
      </Typography>
      <Typography>
        Kategorija
      </Typography>
      <Typography>
        Dydis
      </Typography>
    </Box>
    <Box sx={{ p: 4, width: '150px' }}>
      <TextField type="number" size="small" />
    </Box>
    <Box sx={{ p: 4 }}>
      <Typography>
        6.55 $
      </Typography>
    </Box>
    <Box sx={{ p: 4 }}>
      <Typography>
        16.55 $
      </Typography>
    </Box>

    <IconButton><DeleteIcon /></IconButton>
  </Box>
);

export default OrderItem;
