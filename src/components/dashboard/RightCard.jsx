import {
    LanguageRounded,
    LocalPhoneOutlined,
    MailOutlineRounded,
} from '@mui/icons-material';
import { Card, CardContent, Divider, Typography } from '@mui/material';
import { Box } from '@mui/system';
import google from '../../assets/google.svg';
import CustomizedAccordions from './Accordion';

const RightCard = () => {
    return (
        <Card>
            <CardContent>
                <Box>
                    <Typography variant="p" fontWeight={'bold'}>
                        Company
                    </Typography>
                    {/* Company Info */}
                    <Box
                        sx={{
                            marginTop: 2,
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            marginBottom: 3,
                        }}
                    >
                        <img src={google} alt="" />
                        <Box>
                            <Typography fontSize={'12px'} fontWeight={600}>
                                Google Inc.
                            </Typography>
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '5px',
                                }}
                            >
                                <LanguageRounded
                                    fontSize="10px"
                                    color="disabled"
                                />
                                <Typography
                                    fontSize={'10px'}
                                    fontWeight={500}
                                    color={'#9F9F9F'}
                                >
                                    www.google.com
                                </Typography>
                            </Box>
                        </Box>
                    </Box>

                    {/* Contact Info */}
                    <Card variant="outlined" sx={{ marginBottom: 3 }}>
                        <CardContent>
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '5px',
                                    marginBottom: 2,
                                }}
                            >
                                <MailOutlineRounded
                                    color="disabled"
                                    fontSize="12px"
                                />
                                <Typography
                                    variant="p"
                                    fontSize="12px"
                                    color="#424242"
                                >
                                    pattrick@example.com
                                </Typography>
                            </Box>
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '5px',
                                }}
                            >
                                <LocalPhoneOutlined
                                    color="disabled"
                                    fontSize="12px"
                                />
                                <Typography
                                    variant="p"
                                    fontSize="12px"
                                    color="#424242"
                                >
                                    (001) 546-8528
                                </Typography>
                            </Box>
                        </CardContent>
                    </Card>

                    <Divider />

                    {/* Accordion */}
                    <CustomizedAccordions />
                </Box>
            </CardContent>
        </Card>
    );
};

export default RightCard;
