import { React, useState, useEffect } from 'react';

import { Box, makeStyles } from '@material-ui/core';

// importacion imagenes

const Home = () => {
    const [mobile, setMobile] = useState(true);
    const classes = useStyle();

    useEffect(() => {
        const responsivness = () => window.innerWidth < 900 ? setMobile(true) : setMobile(false);
        responsivness();
        window.addEventListener("resize", () => responsivness())
    }, []);

    const displayMobile = () =>{
        return (
            <div className={classes.main}>
            </div>
        )
    }

    const displayDesktop = () => {
        return (
            <div>
                <p>HOLA</p>
            </div>
        )
    }

    return (
        <Box className={classes.root}>
            {
                mobile ? displayMobile() : displayDesktop()
            }
        </Box>
    )
};

const useStyle = makeStyles((theme) => ({
    root: {
        textAlign: "center",
        textAlignLast: "start",
        backgroundColor: "#db6930"
    },
    main: {
        backgroundColor: "black",
        backgroundImage: "url('../img/principal_body.jpg')",
    },

}))

export default Home
