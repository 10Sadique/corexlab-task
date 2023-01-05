import { Typography } from '@mui/material';
import React from 'react';
import CamapignOne from './CamapignOne';

const UpComingCampaigns = () => {
    return (
        <div>
            <Typography
                variant="p"
                fontSize={'14px'}
                fontWeight={500}
                sx={{ marginBottom: 2 }}
            >
                Upcoming Campaign
            </Typography>
            {/* Campaigns */}
            <CamapignOne />
        </div>
    );
};

export default UpComingCampaigns;
