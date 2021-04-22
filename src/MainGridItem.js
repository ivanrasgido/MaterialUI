import { Button, Card, CardMedia, Container, Grid, Typography } from '@material-ui/core';
import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme =>({
    cardMedia:{
        height: 300
    },
    mainItem:{
        padding:theme.spacing(8),
        textAling:"left"
    },
    mainContainer:{
        paddingTop:120,
        paddingBottom:120,
        backgroundColor:"darkorange"
    },
    imageCard:{
        margin:40
    },
}));

export default function MainGridItem(){
    
    const { cardMedia , mainItem , mainContainer , imageCard } = useStyles();

    return(
        <Container className={mainContainer}>
            <Card>
                <Grid container>
                    <Grid item md={6} className={mainItem}>
                        <Typography variant='h2'>
                        Unlimited Subscription
                        </Typography>

                        <Typography>
                        2,000 hours of online courses.
                        </Typography>

                        <Button color="primary" variant="contained">
                        Sing up
                        </Button>
                    </Grid>
                    
                    <Grid item md={6}>
                        <Card className={imageCard}>
                            <CardMedia className={cardMedia}
                            image="https://th.bing.com/th/id/OIP.718Rp957TTYXCMegVIUK7gHaE8?pid=ImgDet&rs=1"
                            /> 
                        </Card>
                        
                    </Grid>
                    

                </Grid>
                
            </Card>
        </Container>
    );
}