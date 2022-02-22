import * as React from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import BasicRating from "./BasicRating"
import Typography from '@mui/material/Typography';
import { CardActions,CardActionArea,Button,IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ModalEdit from "./ModalEdit";
import ShowMoreText from "react-show-more-text";
import DescriptionCard from "./DescriptionCard";
import {Link } from "react-router-dom"
const MovieCardTest =({el,tab,setTab})=>{
const handleDelete =(a) => setTab(tab.filter((al) => al.id !== a))
return(
<Card sx={{ maxWidth: 280 }} className="margint">
    <CardActionArea>
    <CardMedia
    component="img"
    height="300"
    image={el.posterURL}
    alt="green iguana"
    />
    
        <CardContent>
        <Typography style={{color:'#4682B4'}} gutterBottom variant="h5" component="div">
        {el.title}
        </Typography>
        <Typography   variant="body2" color="text.secondary">
        <ShowMoreText lines={2} more=" more" less="less" width={150}>{el.description}</ShowMoreText>
        </Typography>
        </CardContent>
        <CardActions disableSpacing>
        <BasicRating rat = {el.rating}/>
        <IconButton  style={{color:'#4682B4'}} onClick={()=>handleDelete(el.id)} aria-label="delete">
        <DeleteIcon />
        </IconButton>
        <ModalEdit tab={tab} setTab={setTab} el={el}/>
    <Link to={`/cards/${el.id}`}><Button variant="contained">Detail</Button></Link>
    
        </CardActions>
    </CardActionArea>
    </Card>
)}
export default MovieCardTest