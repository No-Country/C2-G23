import { React, useState, useEffect } from 'react';

import { makeStyles } from '@material-ui/core';


const LogIn = () => {
    const [mobile, setMobile] = useState(true);
    const classes = useStyle();

    useEffect(() => {
        const responsivness = () => window.innerWidth < 900 ? setMobile(true) : setMobile(false);
        responsivness();
        window.addEventListener("resize", () => responsivness())
    }, []);

    return (
        <div>
           
            <h1>Mi Reserva</h1>
            <hr></hr>

            <h5>Si olvidaste tu contraseña hace click en RESTABLECER</h35

            <section>
                
            </section>
        </div>
    )
};

const useStyle = makeStyles((theme) => ({
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

