import { React, useState, useEffect } from 'react';

import { makeStyles } from '@material-ui/core/Styles';

import {Grid, Container, Paper, Avatar, Typography, TextField, Button, CssBaseline, Link } from  '@material-ui/core';

import { LockOutlined as LockOutlinedIcon } from '@material-ui/icons';


const useStyle = makeStyles((theme) => ({
    root: {
        backgroundImage: `url(${logueo})`,
        backgroundRepeat: 'no.repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh'
    
    },


    }))

const Recupero = () => {
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
            <Container component={Paper} elevation ={8} maxWidth='xs' className={classes.container}>
                <div className={classes.div}>
                    <Avatar className= {classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component='h1' variant='h5'> Olvidó su contraseña</Typography> 
                    <form className={classes.form}>
                     <TextField 
                         fullWidth
                         color='primary'
                         margin='normal'
                         variant='outlined'
                         label='usuario'
                         name='usuario'
                         value={body.usuario}
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

                    <Link href= "/Home" className={classes.link}>
                        Recuperar contraseña
                    </Link>

                </div>

            </Container>

        </Grid> 
    )

}; 

export default Recupero