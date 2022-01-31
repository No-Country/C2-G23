import { React, useState, useEffect } from 'react';

import { makeStyles } from '@material-ui/core';

const Footer = () => {

    const [mobile, setMobile] = useState(true);
    const classes = useStyle();

    useEffect(() => {
        const responsivness = () => window.innerWidth < 900 ? setMobile(true) : setMobile(false);
        responsivness();
        window.addEventListener("resize", () => responsivness())
    }, []);

        return (
            <div>
            <footer className={classes.footer}>
            <div>
                <p className={classes.letras}>Av. Falsa 123</p>
                <p className={classes.letras}>TEL: +54 11 1234 5678</p>
            </div>
            <div className={classes.letras}>LOGO</div>
            <div className={classes.letras}>TÉRMINOS Y CONDICIONES</div>

            </footer>
            </div>
    )
};

const useStyle = makeStyles((theme) => ({
    
    menuIcon: {
        color: "black",
        fontSize: "2.5rem",
        backgroundColor: "white",
        border: "2px solid white",
        borderRadius: "5px"
    },
    footer: {
        backgroundColor: "black",
        height: "90px",
        display: "flex",
        justifyContent: "space-around",
        paddingTop: "10px",
    },
    letras: {
        color: "white",
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
    }

}))

export default Footer;
