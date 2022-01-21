import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function Cards({ img }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="habitacion1"
        height="140"
        image={img}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica

          <div className='d-flex justify-content-between mt-3'>
            <span class="d-inline-block" tabindex="0" data-bs-toggle="popover" data-bs-trigger="hover focus" data-bs-content="Disabled popover">

              <div className='hvr-icon-grow' >
                <i class="fas fa-star hvr-icon"></i>
                <i class="fas fa-star hvr-icon"></i>
                <i class="fas fa-star hvr-icon"></i>
              </div>
            </span>

            <div className='hvr-icon-grow'>
              <i class="fas fa-toilet hvr-icon"></i>
            </div>
            <div className='hvr-icon-grow'>
               <i class="fas fa-bed hvr-icon"></i>
               </div>

            <div className='hvr-icon-grow'>
              <i class="fas fa-car-side hvr-icon"></i>
            </div>
          </div>
        </Typography>
      </CardContent>
      <CardActions>
        <button className='button_card w-100 hvr-radial-out'>VER HABITACION</button>
      </CardActions>
    </Card>
  );
}

