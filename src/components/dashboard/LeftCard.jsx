import {
    AddCircleOutlineRounded,
    ArrowCircleLeftOutlined,
    EditRounded,
    Google,
    LocalPhoneOutlined,
    MailOutlineRounded,
    MoreHorizOutlined,
} from '@mui/icons-material';
import { Avatar, Button, Card, CardContent, Typography } from '@mui/material';
import { deepOrange } from '@mui/material/colors';
import { Box } from '@mui/system';
import React from 'react';
import TabSection from './TabSection';

const LeftCard = () => {
    return (
        <Card>
            <CardContent>
                <Box
                    sx={{ display: 'flex', alignItems: 'center', gap: '16px' }}
                >
                    <ArrowCircleLeftOutlined sx={{ color: '#888' }} />
                    <Typography variant="span">Back to Contact</Typography>
                </Box>
                {/* Contact Avatar & Info */}
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        gap: '12px',
                        marginTop: 2,
                        marginBottom: 2,
                    }}
                >
                    <Avatar
                        alt="Pattrick Leach"
                        src="https://xsgames.co/randomusers/assets/avatars/male/47.jpg"
                        sx={{
                            width: 100,
                            height: 100,
                            bgcolor: deepOrange[500],
                        }}
                    />
                    <Typography variant="p" sx={{ fontWeight: 'bold' }}>
                        Pattrick Leach
                    </Typography>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '5px',
                            fontSize: '12px',
                        }}
                    >
                        <Google fontSize="small" />
                        <Typography variant="p">Google</Typography>
                    </Box>
                </Box>
                {/* Important Links */}
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        justifyContent: 'space-around',
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '5px',
                        }}
                    >
                        <AddCircleOutlineRounded />
                        <Typography fontSize="small" variant="p">
                            Log
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '5px',
                        }}
                    >
                        <MailOutlineRounded />
                        <Typography fontSize="small" variant="p">
                            Email
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '5px',
                        }}
                    >
                        <LocalPhoneOutlined />
                        <Typography fontSize="small" variant="p">
                            Call
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '5px',
                        }}
                    >
                        <MoreHorizOutlined />
                        <Typography fontSize="small" variant="p">
                            More
                        </Typography>
                    </Box>
                </Box>
                {/* Edit contact button */}
                <Box>
                    <Button
                        fullWidth
                        sx={{
                            marginTop: 3,
                            textTransform: 'capitalize',
                            bgcolor: '#0022D2',
                        }}
                        variant="contained"
                        endIcon={<EditRounded />}
                    >
                        Edit Contact
                    </Button>
                </Box>
                {/* Tabs */}
                <TabSection />
            </CardContent>
        </Card>
    );
};

export default LeftCard;
