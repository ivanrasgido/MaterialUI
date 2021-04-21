import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    mainContainer:{
        height: 400,
        backgroundImage:"url(https://th.bing.com/th/id/OIP.B5W7WpwY55apUXK4KuhR_gHaE7?pid=ImgDet&rs=1)",
        color: theme.palette.common.white ,
        backgroundSize:'cover'
    },
    mainItem:{
        padding: theme.spacing(6),
        textAlign: 'left',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center' 
    }
}))


export default function MainGridItem() {

    const classes = useStyles();

    return(
        <Grid container className={classes.mainContainer}>

            <Grid item className={classes.mainItem} md={6}>
                <Typography component='h2' variant='h5'>
                    Hello Coding
                </Typography>

                <Typography variant='body1' paragraph>
                    Do you want to learn to code? Smash your career
                    goals. Build websites , games, apps and artificial
                    intelligence project in 99 days.
                </Typography>
            </Grid>
            
        </Grid>
    );
}