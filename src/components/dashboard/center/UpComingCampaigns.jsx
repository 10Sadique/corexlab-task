import { Typography } from '@mui/material';
import React from 'react';
import CamapignOne from './CamapignOne';
import CamapignTwo from './CampaignTwo';

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
            <div className={'space-y-4'}>
                <CamapignOne />
                <CamapignTwo />
                <CamapignOne />
            </div>
        </div>
    );
};

export default UpComingCampaigns;
