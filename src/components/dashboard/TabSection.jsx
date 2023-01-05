import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function TabSection() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%', fontSize: '14px' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                >
                    <Tab
                        sx={{ fontSize: '12px', textTransform: 'capitalize' }}
                        label="Contact Info"
                        {...a11yProps(0)}
                    />
                    <Tab
                        sx={{ fontSize: '12px', textTransform: 'capitalize' }}
                        label="Address Info"
                        {...a11yProps(1)}
                    />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                {/* email */}
                <Box sx={{ marginBottom: '17px' }}>
                    <Typography
                        variant="p"
                        fontSize={'10px'}
                        color="#9F9F9F"
                        fontWeight={500}
                    >
                        Email
                    </Typography>
                    <Typography
                        variant="p"
                        component="p"
                        fontWeight={700}
                        fontSize={'12px'}
                        color="#2b2b2b"
                    >
                        pattrick@example.com
                    </Typography>
                </Box>
                {/* phone */}
                <Box sx={{ marginBottom: '17px' }}>
                    <Typography
                        variant="p"
                        fontSize={'10px'}
                        color="#9F9F9F"
                        fontWeight={500}
                    >
                        Phone
                    </Typography>
                    <Typography
                        variant="p"
                        component="p"
                        fontWeight={700}
                        fontSize={'12px'}
                        color="#2b2b2b"
                    >
                        (001) 546-8528
                    </Typography>
                </Box>
                {/* contact owner */}
                <Box sx={{ marginBottom: '17px' }}>
                    <Typography
                        variant="p"
                        fontSize={'10px'}
                        color="#9F9F9F"
                        fontWeight={500}
                    >
                        Contact Owner
                    </Typography>
                    <Typography
                        variant="p"
                        component="p"
                        fontWeight={700}
                        fontSize={'12px'}
                        color="#2b2b2b"
                    >
                        James Dean
                    </Typography>
                </Box>
                {/* job title */}
                <Box sx={{ marginBottom: '17px' }}>
                    <Typography
                        variant="p"
                        fontSize={'10px'}
                        color="#9F9F9F"
                        fontWeight={500}
                    >
                        Job Title
                    </Typography>
                    <Typography
                        variant="p"
                        component="p"
                        fontWeight={700}
                        fontSize={'12px'}
                        color="#2b2b2b"
                    >
                        Software Developer
                    </Typography>
                </Box>
                {/* annual revenue */}
                <Box sx={{ marginBottom: 8 }}>
                    <Typography
                        variant="p"
                        fontSize={'10px'}
                        color="#9F9F9F"
                        fontWeight={500}
                    >
                        Annual Revenue
                    </Typography>
                    <Typography
                        variant="p"
                        component="p"
                        fontWeight={700}
                        fontSize={'12px'}
                        color="#2b2b2b"
                    >
                        $ 100,000
                    </Typography>
                </Box>
            </TabPanel>
            <TabPanel value={value} index={1}>
                Address Info
            </TabPanel>
        </Box>
    );
}
