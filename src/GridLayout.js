import React from 'react';
import Grid from '@material-ui/core/Grid';

import { makeStyles } from '@material-ui/core/styles';
import MainGridItem from './MainGridItem';
import GridItem from './GridItem';

const useStyles = makeStyles(theme => ({
    mainGridItem:{
        backgroundColor: 'blue'
    },
    secondRowFirstItem: {
        backgroundColor: 'green'
    },
    secondRowSecondItem:{
        backgroundColor: 'orange'
    },
    thirdRow:{
        backgroundColor:'pink'
    }
}));

export default function GridLayout () {
    
    const classes = useStyles();

    return(
        <Grid container spacing={3}>
            <Grid item lg={12} sm={12} xs={12}> 
                    <MainGridItem />
            </Grid>
            
            <Grid item lg={6} md={12} sm={12} xs={12}>
                <GridItem 
                title="Excel Masterclass"
                image="https://i.pinimg.com/originals/3e/60/39/3e60391dadc7d788e0ba14d738646639.jpg"
                description="In this 6-level eDegree , you'll learn how to use Excel from
                the very basics all the way to VBA programming and machine
                learning. You'll also learn web automation , Python and 
                Selenium."
                />
            </Grid>

            <Grid item lg={6} md={12} sm={12} xs={12}>
                <GridItem 
                title="Learn to Code and Get Hired"
                image="https://th.bing.com/th/id/R342dc2368ea473f6a6bdd0ffb1b03361?rik=sO4%2bS7rvGL4Xxg&pid=ImgRaw"
                description="Do you need a better career? Do you want to become an employed
                software developer with a high paying job? Learn how to code and get hired in 
                this coding interview questions course."
                />
            </Grid>

            <Grid item lg={4} md={12} sm={12} xs={12} >
                <GridItem 
                title="3D Modeling Masterclass"
                image="https://th.bing.com/th/id/OIP.5KksRyiKRINjIF20bx7SrgHaD0?pid=ImgDet&rs=1"
                description="In this 17-course bundle, you will build low poly and high poly
                3D models . Anyone can learn the free digital art software Blender . you wil
                also lear Unity , MakeHuman and Adobe Photoshop."
                />
            </Grid>

            <Grid item lg={4} md={12} sm={12} xs={12} >
                <GridItem 
                title="Business & Side Hustles"
                image="https://th.bing.com/th/id/OIP.AQygWh5StScB9YXGwOt3WAHaDt?pid=ImgDet&rs=1"
                description="This five-level course will take you from no experience in
                business into a life of financial wisdom and entrepreneurship . you will learn 
                from a successful CEO how to be profitable"
                />
            </Grid>

            <Grid item lg={4} md={12} sm={12} xs={12} >
                <GridItem 
                title="Game Development Masterclass"
                image="https://th.bing.com/th/id/R30e668d20c42b958c1bd3aefe703c55e?rik=X9%2bPN88lgWDFLA&riu=http%3a%2f%2fwww.mrdetechtive.com%2fwp-content%2fuploads%2f2019%2f02%2fHow-To-Hire-Game-Developers.jpg&ehk=%2fW7ftsPrCfXtz5v6JkS5SOT4fSAIbDZmcioUPmovdcI%3d&risl=&pid=ImgRaw"
                description="This bundle of 14 Unity courses will teach you how to build 
                games from scratch . you will learn C# , Blender , Adobe Photoshop, Adobe 
                Illustrator , and Unity machine learning with Python."
                />
            </Grid>
        </Grid>
    );
}