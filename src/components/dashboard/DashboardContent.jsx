import { Card, CardContent, Grid } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import LeftCard from './LeftCard';

const DashboardContent = () => {
    return (
        <Grid container spacing={1}>
            <Grid item xs={3}>
                <LeftCard />
            </Grid>
            <Grid item xs={6}>
                <Container>Center</Container>
            </Grid>
            <Grid item xs={3}>
                <Card>
                    <CardContent>Right</CardContent>
                </Card>
            </Grid>
        </Grid>
    );
};

export default DashboardContent;
