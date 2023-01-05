import { Grid } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import LeftCard from './LeftCard';
import RightCard from './RightCard';

const DashboardContent = () => {
    return (
        <Grid container spacing={1}>
            <Grid item xs={2.7}>
                <LeftCard />
            </Grid>
            <Grid item xs={6.6}>
                <Container>Center</Container>
            </Grid>
            <Grid item xs={2.7}>
                <RightCard />
            </Grid>
        </Grid>
    );
};

export default DashboardContent;
