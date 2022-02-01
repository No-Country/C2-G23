import { React, useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core';
import logo2 from '../img/logo2.png'

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
            <div className={classes.mainBox} >
                <div>
                    <p className={classes.letras}>Av. Falsa 123</p>
                    <p className={classes.letras}>TEL: +54 11 1234 5678</p>
                </div>
                <div className={classes.letras}>
                    <img src={logo2} className={classes.logo}/>
                </div>
                <div className={classes.letras}>TÉRMINOS Y CONDICIONES</div>
            </div>
            <div className={classes.copyrait} >
                <button type="button" className={classes.boton} btn btn-primary btn-lg btn-floating mx-2 >
                    <i class="fab fa-facebook-f"></i>
                </button>
                <button type="button" className={classes.boton} btn btn-primary btn-lg btn-floating mx-2>
                    <i class="fab fa-instagram"></i>
                </button>
                <button type="button" className={classes.boton} btn btn-primary btn-lg btn-floating mx-2>
                    <i className="fab fa-twitter"></i>
                </button>
    </div>

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
        paddingTop: "10px",
        paddingBottom: "10px",
    },
    mainBox: {
        display: "flex",
        justifyContent: "space-around",
    },
    letras: {
        color: "white",
        marginBottom: "0",
        paddingTop: "10px",
    },
    logo: {
        width: "145px",
        /*padding: theme.spacing(1, 0, 1, 0),*/
        objectFit: "contain",
    },
    copyrait: {
       textAlign: "center",
       paddingTop: "5px",
       paddingRight: "40px",
    },
    boton: {
        backgroundColor: "beige",
        borderRadius: "27px",
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
