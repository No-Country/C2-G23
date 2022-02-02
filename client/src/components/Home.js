import { React, useState, useEffect } from 'react';
import { Button, CssBaseline, Grid, makeStyles } from '@material-ui/core';
import mockData from './MockData';
import Banner from './Banner';
import { RoomCard } from './RoomCard';
import DatePicker from './DatePicker';

// importacion imagenes

const Home = () => {
    const classes = useStyle();
    const [showdates, setShowdates] = useState(false)
        return (
            <>
                <CssBaseline/>
                <div className={classes.root}>
                    <div className={classes.dates}>
                        <Button onClick = { ()=>setShowdates(!showdates)}>
                            {
                             showdates ? "Ocultar Buscador" : "Buscar Fechas"
                            }
                        </Button>
                    </div>
                    {
                        showdates && <DatePicker className={classes.datePicker}/>
                    }
                    <Banner />
                    <Grid container className={classes.section} spacing={3}>
                        {
                            mockData.map(({src, title, description}, index)=> (
                                <Grid item sm="6" md="4" lg="3">
                                <RoomCard 
                                    src={src} 
                                    title={title} 
                                    description={description} 
                                    key={index} />
                                </Grid>
                            ))
                        }
                    </Grid>
                </div>
            </>
        )
    };

const useStyle = makeStyles((theme) => ({
    root: {
        display:"flex",
        flexDirection:"column",
        margin: theme.spacing(2)
    },
    dates:{
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        "& button":{
            backgroundColor: theme.palette.primary.main,
            color:"white",
            border:"1px solid black",
            fontWeight: "bold",
        },
        "& button:hover": {
            color: theme.palette.primary.main,
            backgroundColor: "white",
            border: "1px solid black",
            fontWeight: "bold"
        },
    },
}))


export default Home
