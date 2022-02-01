import { React, useState, useEffect } from 'react';

import { makeStyles } from '@material-ui/core/Styles';

import {Grid, Container, Paper, Avatar, Typography, TextField, Button, CssBaseline, Link } from  '@material-ui/core';

import { LockOutlined as LockOutlinedIcon } from '@material-ui/icons';

import Contacto from '../img/Contacto.jpg'


const useStyle = makeStyles((theme) => ({
    root: {
        backgroundImage: `url(${Contacto})`,
        backgroundRepeat: 'no.repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh'
    
    },

    container: {
        opacity: '0.8',
        height: '60%',
        marginTop: theme.spacing(10),
        [theme.breakpoints.down(400 + theme.spacing(2)+2)]: {
            marginTop: 0,
            width: '100%',
            height: '100%'
        }
    },

    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.primary.main
    },

    link:{

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

    }))

const contacto = () => {
    const [mobile, setMobile] = useState(true);
    const classes = useStyle();
   

    useEffect(() => {
        const responsivness = () => window.innerWidth < 900 ? setMobile(true) : setMobile(false);
        responsivness();
        window.addEventListener("resize", () => responsivness())
    }, []);


    return (
        <Grid container component='main' className={classes.root}>
            <CssBaseline/>
            <Container component={Paper} elevation ={8} maxWidth='xs' className={classes.container}>
                <div className={classes.div}>
                    <Avatar className= {classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component='h1' variant='h5'> Sing In</Typography> 
                    <form className={classes.form}>
                     <TextField 
                         fullWidth
                         color='primary'
                         margin='normal'
                         variant='outlined'
                         label='usuario'
                         name='usuario'

                     />
                     <TextField
                         fullWidth
                         type='password'
                         color='primary'
                         margin='normal'
                         variant='outlined'
                         label='contraseña'
                         name='contraseña'

                     />
                    </form>
                    <Button
                        fullWidth
                        variant='contained'
                        color='primary'
                        className={classes.button}

                    >
                    Ingresar
                    </Button>

                    <Link href= "/Recupero" className={classes.link}>
                        Recuperar contraseña
                    </Link>

                </div>

            </Container>

        </Grid>         
           
    )
}; export default Contacto




