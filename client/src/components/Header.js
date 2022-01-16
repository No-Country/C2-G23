import {React, useState }from 'react';

import { AppBar, Avatar, InputBase, makeStyles, Toolbar, Typography } from '@material-ui/core';
import SearchIcon from "@material-ui/icons/Search"
import logo from "../img/logo.png"
import { minWidth } from '@mui/system';

const Header = () =>{
    const [mobile, setMobile] = useState(false)
    const classes = useStyle();
    const displayMobile = () =>{ };
    const displayDesktop = () => {
        return(
            <Toolbar className={classes.toolbar}>
                <img src={ logo } className={classes.logo}/>
                <div className={classes.center}>
                    <InputBase fullWidth placeholder='Busqueda...' inputProps={{className: classes.input}}/>
                    <SearchIcon />
                </div>
                <div className={classes.right}>
                    <Typography>Sign In</Typography>
                    <Avatar className={classes.avatar} />
                </div>
            </Toolbar>
        )
    }

    return(
    <AppBar className={classes.root}>
        {
        mobile ? displayMobile() : displayDesktop()
        }
    </AppBar>
    )
}

const useStyle = makeStyles((theme) => ({
    root:{
        position: "sticky", //sirve para que el header se vea siempre
        top:0,
        zIndex:99,
        backgroundColor:"black",
        width:"100vw",
    },
    toolbar: {
        display : "flex",
        justifyContent: "space-between",
        alignItems: "center"
    },
    logo:{
        width:"20%",
        margin: theme.spacing( 1, 0, 1, 2),
        objectFit: "contain",
    },
    input:{
        fontSize:"1rem",
        padding: theme.spacing(1,5,1,5),
        color: "white",
    },
    center:{
        display:"flex",
        alignItems:"center",
        padding:theme.spacing(1),
        margin: theme.spacing(1),
        border:"1px solid white",
        borderRadius: "999px",
        minWidth:"20rem"
    },
    right:{
        display:"flex",
        alignItems: "center",
        marginLeft: theme.spacing(1)
    },
    avatar:{
        margin: theme.spacing(1),
    }

}))
export default Header