import { ExpandMoreRounded } from '@mui/icons-material';
import { Divider } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const CamapignOne = () => {
    return (
        <div className="bg-white rounded-lg">
            <Box sx={{ padding: 2 }}>
                <ExpandMoreRounded />
            </Box>
            <Divider />
        </div>
    );
};

export default CamapignOne;
