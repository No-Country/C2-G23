import React, { useState } from 'react'
import { AppBar, makeStyles, Toolbar } from "@material-ui/core";

const Header = () => {
    const[mobile, setMobile] = useState(false)
    const classes = UseStyle()
    const displayMobile = () =>{ }
    const displayDesktop = () =>{
        <Toolbar className={classes.toolbar}>

        </Toolbar>
    }
    return (
        <AppBar>
            <p>HEADER</p>
            {
                mobile ? displayMobile() : displayDesktop()
            }
        </AppBar>
    )
}
const UseStyle = makeStyles((theme)=>({
    toolbar:{

    }
}))

export default Header
