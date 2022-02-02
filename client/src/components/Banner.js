import React from 'react'
import { ClassNames } from '@emotion/react'
import { Button, makeStyles, Typography } from '@material-ui/core'
import background_img from "../img/principal_body.jpg"
import { fontWeight } from '@mui/system'

const Banner = () =>{
    const classes = useStyle();
    return(
        <div className={classes.root}>
            <div className={classes.info}>
                <Typography variant="h2"> Planea Tu Escapada... </Typography>
                <Button variant="contained">Chequear Nuestras Habitaciones</Button>
            </div>
        </div>
    )   
}

const useStyle = makeStyles((theme) => ({
    root:{
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        height:"50vh",
        position:"relative",
        backgroundImage: `url(${background_img})`,
        backgroundPosition:"center",
        backgroundSize:"cover",
        backgroundRepeat:"no-repeat",
    },
    info:{
        display:"flex",
        flexDirection: "column",
        alignItems: "center",
        color: "white",
        maxWidth:"1000px",
        "& button":{
            color:"white",
            backgroundColor: theme.palette.primary.main,
            fontWeight: "bold"
        },
        "& button:hover":{
            backgroundColor: "white",
            color: theme.palette.primary.main,
            fontWeight:"bold"
        },
    }
}))

export default Banner