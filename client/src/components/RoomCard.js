import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';

export const RoomCard = ( {src, title, description}) => {
    const classes = useStyle();

    return (
        <div className={classes.root}>
            <Typography variant="h4" color="textPrimary">{title}</Typography>
            <Typography variant="h6" color="textSecondary">{description}</Typography>
            <figure className={classes.imgWrapper}>
                <img className={classes.media} src={src} alt={title} />
            </figure>
        </div>
  );
};

const useStyle = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(4,0,2,0),
        [theme.breakpoints.down("xs")]: {
            "& h6":{
                wordWrap: "break-word",
            },
        },
    },
    imgWrapper: {
        overflow:"hidden",
    },
    media:{
        height:"400px",
        width:"600px",
        objectFit:"cover",
        transform:"scale(1.1)",
        WebkitTransform:"scale(1.1)",
        transition:".4s ease-in-out",
        WebkitTransition:".4s ease-in-out",
        "&:hover":{
            transform:"scale(1)",
            WebkitTransform: "scale(1.1)",
        }
    },
}))