import { Box, Grid } from '@mui/material';
import React from 'react';
import CenterContent from './CenterContent';
import LeftCard from './LeftCard';
import RightCard from './RightCard';

const DashboardContent = () => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={2.7}>
                <LeftCard />
            </Grid>
            <Grid item xs={6.6}>
                <Box>
                    <CenterContent />
                </Box>
            </Grid>
            <Grid item xs={2.7}>
                <RightCard />
            </Grid>
        </Grid>
    );
};

export default DashboardContent;
