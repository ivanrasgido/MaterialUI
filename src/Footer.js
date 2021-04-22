import { Container, Link, Typography } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

function Copyright(){
    return(

        <Typography>
            {"Copyright "}

            <Link href="https://training.mammonthinteractive.com">
                Courses
            </Link>
            {" " + new Date().getFullYear()}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({

    footer: {
        padding: theme.spacing(6)
    }

}))

export default function Footer() {
    
    const classes = useStyles();

    return(
        <footer className={classes.footer}>
            <Container>
                <Typography variant="h6">
                    Mammmoth Interactive
                </Typography>

                <Typography variant="subtitle1" color="textSecondary">
                    Anyone can learn to code.
                </Typography>

                <Copyright />
            </Container>
        </footer>
    );
}