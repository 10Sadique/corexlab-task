import {
    AddCircleOutlineRounded,
    ArrowCircleLeftOutlined,
    EditRounded,
    LocalPhoneOutlined,
    MailOutlineRounded,
    MoreHorizOutlined,
} from '@mui/icons-material';
import { Avatar, Button, Card, CardContent, Typography } from '@mui/material';
import { deepOrange } from '@mui/material/colors';
import { Box } from '@mui/system';
import g2 from '../../assets/g2.svg';
import TabSection from './TabSection';

const LeftCard = () => {
    return (
        <Card>
            <CardContent>
                <Box
                    sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}
                >
                    <ArrowCircleLeftOutlined sx={{ color: '#888' }} />
                    <Typography
                        fontSize={'12px'}
                        fontWeight={700}
                        color="#2B2B2B"
                        variant="span"
                    >
                        Back to Contact
                    </Typography>
                </Box>
                {/* Contact Avatar & Info */}
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        gap: '12px',
                        marginTop: '40px',
                        marginBottom: '27px',
                    }}
                >
                    <Avatar
                        alt="Pattrick Leach"
                        src="https://xsgames.co/randomusers/assets/avatars/male/47.jpg"
                        sx={{
                            width: 80,
                            height: 80,
                            bgcolor: deepOrange[500],
                            marginBottom: '11px',
                        }}
                    />
                    <Typography
                        variant="p"
                        sx={{ fontWeight: 700, fontSize: '17px' }}
                    >
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
                        <img src={g2} alt="" />
                        <Typography
                            fontSize={'10px'}
                            color="#878787"
                            variant="p"
                        >
                            Google
                        </Typography>
                    </Box>
                </Box>
                {/* Important Links */}
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        justifyContent: 'space-around',
                        marginBottom: '36px',
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
                        <AddCircleOutlineRounded color="disabled" />
                        <Typography
                            fontSize={'10px'}
                            variant="p"
                            fontWeight={400}
                            color="#696868"
                        >
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
                        <MailOutlineRounded color="disabled" />
                        <Typography
                            fontSize={'10px'}
                            variant="p"
                            fontWeight={400}
                            color="#696868"
                        >
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
                        <LocalPhoneOutlined color="disabled" />
                        <Typography
                            fontSize={'10px'}
                            variant="p"
                            fontWeight={400}
                            color="#696868"
                        >
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
                        <MoreHorizOutlined color="disabled" />
                        <Typography
                            fontSize={'10px'}
                            variant="p"
                            fontWeight={400}
                            color="#696868"
                        >
                            More
                        </Typography>
                    </Box>
                </Box>
                {/* Edit contact button */}
                <Box sx={{ marginBottom: '48px' }}>
                    <Button
                        fullWidth
                        sx={{
                            textTransform: 'capitalize',
                            bgcolor: '#0022D2',
                            fontSize: '12px',
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
