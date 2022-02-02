import {React, useState, useEffect }from 'react';

// Componentes Material UI
import { AppBar, Avatar, Drawer, IconButton, InputBase, Link, List, ListItem, makeStyles, Toolbar, Typography } from '@material-ui/core';

// Iconos
import SearchIcon from "@material-ui/icons/Search"
import MenuIcon from "@material-ui/icons/Menu"

// Logos
import logo from "../img/logo2.png"

const Header = () =>{
    const [mobile, setMobile] = useState(true);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const classes = useStyle();

    useEffect(() => {
        const responsivness = () => window.innerWidth < 900 ? setMobile(true) : setMobile (false);
        responsivness();
        window.addEventListener("resize", ()=>responsivness())
    }, [])
    
    const displayMobile = () => {
        const handleDrawerOpen = () =>{
            setDrawerOpen(true)
        };
        const handleDrawerClose = () => {
            setDrawerOpen(false)
        };
        const headersData = ["Mi Cuenta", "Mis Reservas", "Salir"]
        const getDrawerChoices = () => {
            return headersData.map((data)=>{
                return(
                    <List>
                            <ListItem>{ data }</ListItem>
                    </List>
                )
            })
        };
        return(
        <Toolbar className={classes.toolbar}>
                <img src={logo} className={classes.logo} alt="logo" />
                <div className={classes.right}>
                    <Link href="/logIn" className={classes.right}>
                        <Typography>Log In</Typography>
                    </Link>
                    <Avatar className={classes.avatar} />
                    <IconButton {...{
                        edge: "start",
                        color: "#ccc",
                        "aria-label": "menu",
                        "aria-haspopup": "true",
                        onClick: handleDrawerOpen,
                    }}>
                        <MenuIcon className={classes.menuIcon} />
                    </IconButton>
                    <Drawer {...{
                        anchor: "bottom",
                        open: drawerOpen,
                        onClose: handleDrawerClose,
                    }}>
                        <div className={classes.menu}>{getDrawerChoices()}</div>
                    </Drawer>
                </div>
        </Toolbar>
        )
    }

    const displayDesktop = () => {
        return(
            <Toolbar className={classes.toolbar}>
                <img src={ logo } className={classes.logo}/>
                <div className={classes.center}>
                    <InputBase fullWidth placeholder='Busqueda...' inputProps={{className: classes.input}}/>
                    <SearchIcon />
                </div>
                <div className={classes.right}>
                    <Link href='/LogIn' className={classes.right}>
                        <Typography>Log In</Typography>
                    </Link>
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
        width:"15%",
        margin: theme.spacing( 1, 0, 1, 0),
        objectFit: "contain",
    },
    input:{
        fontSize:"1rem",
        padding: theme.spacing(1,5,1,5),
        color: "white",
    },
    link: {
        color:'white',
        textDecoration: 'none',
        margin: theme.spacing(0.1)
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
    },
    menu:{
        color:"white",
        backgroundColor:"black"
    },
    menuIcon:{
        color:"black",
        fontSize:"2.5rem",
        backgroundColor:"white",
        border:"2px solid white",
        borderRadius:"5px"
    }

}))
export default Header