import React from 'react';
import { Button, InputBase, makeStyles, Typography } from '@material-ui/core';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

import { DateRangePicker } from 'react-date-range';
import { People } from '@material-ui/icons';
import { useNavigate } from 'react-router-dom'

const selectionRange = {
    startDate: new Date(2022, 0, 1),
    endDate: new Date(2022, 0, 1),
    key: "selection"
}

const DatePicker = () => {
    const classes = useStyle();
    const navigate = useNavigate();
    const handleSelect = () =>{}
    return (
      <div className={classes.root}>
            <DateRangePicker ranges={[selectionRange]} className={classes.datePicker}
            onChange={handleSelect}
            />
            <div className={classes.inputSelection}>
                <Typography variant="h5">Número de Huéspedes</Typography>
                <div className={classes.people}>
                    <InputBase placeholder='2pax'
                        inputProps={{className: classes.input}}
                    />
                    <People />
                </div>
                <Button onClick={()=> navigate("/services")}>
                    Buscar Habitación
                </Button>
            </div>          
      </div>
    );
};

const useStyle = makeStyles((theme) => ({
    root: {
        position: "absolute", //sirve para que el header se vea siempre
        top:"13vh",
        left: "30vw",
        zIndex:"50",
        [theme.breakpoints.down('sm')]:{
            top:"16vh",
            left: 0,
        }
    },
    inputSelection:{
        display:"flex",
        flexDirection:"column",
        backgroundColor: theme.palette.primary.main,
        textAlign: "center",
        color:"white",
        "& button":{
            color:"white"
        },
        "& button:hover":{
            backgroundColor:"white",
            color: theme.palette.primary.main,
        }   
    },
    people:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
    },
    input:{
        width:"5vw",
        border: "1px solid #eee",
        backgroundColor:"white",
        margin: theme.spacing(0.5, 2, 0.5, 0),
        padding: theme.spacing(1, 0, 1, 3),
    },
}))


export default DatePicker;
