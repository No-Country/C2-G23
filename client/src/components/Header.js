import {React, useState }from 'react';

import { AppBar, InputBase, makeStyles, Toolbar, Typography } from '@material-ui/core';
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
                </div>
            </Toolbar>
        )
    }

    return(
    <AppBar>
        {
        mobile ? displayMobile() : displayDesktop()
        }
    </AppBar>
    )
}

const useStyle = makeStyles((theme) => ({
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
        padding: theme.spacing(1,5,1,5)

    },
    center:{
        display:"flex",
        alignItems:"center",
        padding:theme.spacing(1),
        margin: theme.spacing(1),
        border:"1px solid white",
        borderRadius: "999px",
        minWidth:"20rem"
    }

}))
export default Header