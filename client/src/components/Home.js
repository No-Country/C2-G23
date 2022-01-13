import { styled } from '@material-ui/core'
import { StylesContext } from '@material-ui/styles'
import React from 'react'

// importacion hoja de estilos
import  styles  from "../styles/Header.module.css";

// importacion imagenes
import hotel from "../img/rest.jpg"

const Home = () => {
    return (
        <div>
            <div className={ styles.main }>
                <h1>Home</h1>
            </div>
            <div className={styles.img}>
                <img src={hotel}/>
                <img href="../img/rest.jpg"/>
                <img href="../img/rest.jpg"/>
            </div>
        </div>
    )
}

export default Home
