import { React, useState, useEffect } from 'react';

import { AppBar, makeStyles } from '@material-ui/core';

import {Grid, Container, Paper, Avatar, Typography, TextField, Button, CssBaseline } from  '@material-ui/core';

import logueo from '../img/logueo.jpg';

import {LockOutlined as LockOutlinedIcon} from '@material-ui/icons';



const LogIn = () => {
    const [mobile, setMobile] = useState(true);
    const classes = useStyle();
    const [body, setbody] = useState({usuario: '' , contraseña: '' });

    const handleChange = e => {
        setbody({
            ...body,
            [e.target.name]: e.target.value
        })

    }

    const onSubmit =()=>{
        console.log(body)
    }

    useEffect(() => {
        const responsivness = () => window.innerWidth < 900 ? setMobile(true) : setMobile(false);
        responsivness();
        window.addEventListener("resize", () => responsivness())
    }, []);


    return (
        <Grid container component='main' className={classes.root}>
            <CssBaseline/>
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
                         onChange={handleChange}
                     />
                    </form>
                    <Button
                        fullWidth
                        variant='contained'
                        color='secondary'
                        className={classes.button}
                        onClick={()=> onSubmit()}
                    >
                    Ingresar
                    </Button>

                </div>

            </Container>

        </Grid>         
           
    )
};



export default LogIn

