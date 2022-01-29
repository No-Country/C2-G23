import { React, useState, useEffect } from 'react';

import { AppBar, makeStyles } from '@material-ui/core';

import {Grid, Container, Paper } from  '@material-ui/core';

import logueo from '../img/logueo.jpg'

const LogIn = () => {
    const [mobile, setMobile] = useState(true);
    const classes = useStyle();

    useEffect(() => {
        const responsivness = () => window.innerWidth < 900 ? setMobile(true) : setMobile(false);
        responsivness();
        window.addEventListener("resize", () => responsivness())
    }, []);


    return (
        <Grid container component='main' className={Classes.root}>
        
            <container component={Paper} elevation = {5} maxWidth= 'xs'>
            </container>
        </Grid>         
           
    )
};

const useStyle = makeStyles((theme) => ({
    root: {
        backgroundImage: 'url(${logueo})',
        backgroundRepeat: 'no.repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh'
    
    },

    container: {
        height: '60%',
        marginTop: theme.spacing(10),
        [theme.breakpoints.down(400 + theme.spacing())]
        textAlign: "center",
        textAlignLast: "start",
        backgroundColor: "#db6930"
    },

    footer: {
        textAlign: "center",
        textAlignLast: "start",
        backgroundColor: "#db6930"
    },
    primero: {
        backgroundColor: "black",
        color: "white",
    },
    container: {
        display: "flex",
        justifyContent: "center",
        padding: theme.spacing(5, 0, 5, 0)
    },
    logo: {
        width: "15%",
        margin: theme.spacing(1, 0, 1, 0),
        objectFit: "contain",
    },
    input: {
        fontSize: "1rem",
        padding: theme.spacing(1, 5, 1, 5),
        color: "white",
    },
    center: {
        display: "flex",
        alignItems: "center",
        padding: theme.spacing(1),
        margin: theme.spacing(1),
        border: "1px solid white",
        borderRadius: "999px",
        minWidth: "20rem"
    },
    right: {
        display: "flex",
        alignItems: "center",
        marginLeft: theme.spacing(1)
    },
    avatar: {
        margin: theme.spacing(1),
    },
    menu: {
        color: "white",
        backgroundColor: "black"
    },
    menuIcon: {
        color: "black",
        fontSize: "2.5rem",
        backgroundColor: "white",
        border: "2px solid white",
        borderRadius: "5px"
    }

}))

export default LogIn

