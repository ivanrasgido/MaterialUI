import { Grid } from '@material-ui/core';
import React from 'react';
import MainGridItem from './MainGridItem';
import ProductInformation from './ProductInformation';
import Pricing from './Pricing';

export default function GridLayout(){
    return(
        <Grid container>
            <Grid item>
                <MainGridItem />
            </Grid>
            <Grid item>
                <ProductInformation />
            </Grid>

            <Grid item>
                <Pricing />
            </Grid>
        </Grid>
    );
}