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
