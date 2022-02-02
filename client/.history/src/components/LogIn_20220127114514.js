import { React, useState, useEffect } from 'react';

import { AppBar, makeStyles } from '@material-ui/core';

import {Grid, Container, Paper, Avatar, Typography, TextField, Button } from  '@material-ui/core';

import logueo from '../img/logueo.jpg';

import {LockOutlined as LockOutlinedIcon} from '@material-ui/icons';


const LogIn = () => {
    const [mobile, setMobile] = useState(true);
    const classes = useStyle();
    const [body, setbody] = useState({usuario: '' , contraseña: '' });

    const handleChange = (evento

    useEffect(() => {
        const responsivness = () => window.innerWidth < 900 ? setMobile(true) : setMobile(false);
        responsivness();
        window.addEventListener("resize", () => responsivness())
    }, []);


    return (
        <Grid container component='main' className={classes.root}>
            <Container component={Paper} elevation ={5} maxWidth='xs' className={classes.container}>
                <div className={classes.div}>
                    <Avatar className= {classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component='h1' variant='h5'> Sing In</Typography> 
                    <form className={classes.form}>
                     <TextField
                         fullWidth
                         autoFocus
                         color='primary'
                         margin='normal'
                         variant='outlined'
                         label='usuario'
                         name='usuario'
                         value={body.usuario}
                         onChange={handleChange}
                     />
                     <TextField
                         fullWidth
                         type='password'
                         color='primary'
                         margin='normal'
                         variant='outlined'
                         label='contraseña'
                         name='contraseña'
                         value={body.contraseña}
                     />
                    </form>
                    <Button
                        fullWidth
                        variant='contained'
                        color='secondary'
                        className={classes.button}
                    >
                    Ingresar

                    </Button>

                </div>

            </Container>

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
        opacity: '0.8',
        height: '60%',
        marginTop: theme.spacing(10),
        [theme.breakpoints.down(400 + theme.spacing(2) + 2)]: {
            marginTop: 0,
            width: '100%',
            height: '100%'
    },

    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.primary.main
    },

    div: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },

    form: {
        width: '100%',
        marginTop: theme.spacing(1)
    },

    button: {
        margin: theme.spacing(3, 0, 2)
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

