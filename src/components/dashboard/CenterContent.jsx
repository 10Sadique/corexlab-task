import React from 'react';
import Dropdowns from './center/Dropdowns';
import TabBar from './center/TabBar';
import UpComingCampaigns from './center/UpComingCampaigns';

const CenterContent = () => {
    return (
        <div>
            <TabBar />
            <Dropdowns />
            <UpComingCampaigns />
        </div>
    );
};

export default CenterContent;
