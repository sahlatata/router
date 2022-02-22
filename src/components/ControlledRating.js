import * as React from 'react';
import Rating from '@mui/material/Rating';


export default function ControlledRating({rate,setRate}) {
  return (
      <Rating
        name="simple-controlled"
        onChange={ (e)=>setRate(e.target.value)}
      />

  );
}
