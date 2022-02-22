import * as React from 'react';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
export default function BasicRating({rat}) {
return (
    <div>
      <Rating name="read-only" value={rat} readOnly />
    </div>
  );
}
