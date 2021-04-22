import { Container, Icon, Typography } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Build, CardMembership, Face, Loyalty, Public, School, ThumbUp, VerifiedUser, VideoLibrary} from '@material-ui/icons';


const useState = makeStyles((theme) =>({
    gridItem:{
        padding:50
    },
}));

export default function GridItem(props){
    
    const { gridItem } = useState();
    
    return(
        <Container align="left" className={gridItem}>

            <Icon>
                {props.icon}
            </Icon>

            <Typography variant="h5">
                {props.title}
            </Typography> 

            <Typography>
                {props.description}
            </Typography>

        </Container>
    );
}