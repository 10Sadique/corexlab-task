import {
    CalendarMonthRounded,
    ExpandMoreRounded,
    MoreHorizRounded,
} from '@mui/icons-material';
import { Card, CardContent, Divider, Radio, Typography } from '@mui/material';
import { Box } from '@mui/system';
import author from '../../../assets/author.svg';
import cal from '../../../assets/calender.svg';

const CamapignTwo = () => {
    return (
        <div className="bg-white rounded-lg mt-2 shadow">
            <Box sx={{ padding: 1.5, display: 'flex', alignItems: 'center' }}>
                <ExpandMoreRounded sx={{ marginRight: '16px' }} />
                <div
                    className={'bg-[#F1F0FF] rounded-full inline-block mr-2.5'}
                >
                    <img src={cal} className="p-1.5" alt="" />
                </div>
                <span className="text-sm font-bold flex-1">
                    Campaign <span className="font-normal">created</span> James
                    Dean
                </span>
                <Box
                    sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '5px',
                        }}
                    >
                        <Typography
                            fontSize={'10px'}
                            fontWeight={500}
                            color={'#9F9F9F'}
                            variant="span"
                        >
                            Due:
                        </Typography>
                        <CalendarMonthRounded
                            color="disabled"
                            fontSize="small"
                        />
                        <Typography
                            fontSize={'10px'}
                            fontWeight={500}
                            color={'#9F9F9F'}
                            variant="span"
                        >
                            Today 12.00pm
                        </Typography>
                    </Box>
                    <MoreHorizRounded color="disabled" fontSize="small" />
                </Box>
            </Box>
            <Divider />

            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'start',
                    padding: 1.5,
                }}
            >
                <Radio size="small" />
                <Box>
                    <Typography variant="p" fontSize={'13px'} fontWeight={600}>
                        Prepare quote for Pattrick Leach
                    </Typography>
                    <Typography
                        sx={{ marginBottom: 2 }}
                        variant="p"
                        component="p"
                        fontSize={'10px'}
                        fontWeight={500}
                        color="#B6B6B6"
                    >
                        Lorem ipsum may be used as a placeholder before final
                        copy is available. Lorem ipsum may be used as a
                        placeholder before final copy is available.
                    </Typography>
                    <Card variant="outlined">
                        <CardContent
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-around',
                            }}
                        >
                            <Box>
                                <Typography
                                    color={'#9f9f9f'}
                                    fontSize={'10px'}
                                    fontWeight={500}
                                >
                                    Reminder
                                </Typography>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '11px',
                                    }}
                                >
                                    <Typography
                                        color={'#2b2b2b'}
                                        fontSize={'12px'}
                                        fontWeight={500}
                                    >
                                        No Reminder
                                    </Typography>
                                    <ExpandMoreRounded color="disabled" />
                                </Box>
                            </Box>
                            <Divider
                                orientation="vertical"
                                variant="middle"
                                flexItem
                            />
                            <Box>
                                <Typography
                                    color={'#9f9f9f'}
                                    fontSize={'10px'}
                                    fontWeight={500}
                                >
                                    Task Priority
                                </Typography>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '11px',
                                    }}
                                >
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '11px',
                                        }}
                                    >
                                        <div className="w-[14px] h-[14px] bg-[#FECC91]"></div>
                                        <Typography
                                            color={'#2b2b2b'}
                                            fontSize={'12px'}
                                            fontWeight={500}
                                        >
                                            Moderate
                                        </Typography>
                                    </Box>
                                    <ExpandMoreRounded color="disabled" />
                                </Box>
                            </Box>
                            <Divider
                                orientation="vertical"
                                variant="middle"
                                flexItem
                            />
                            <Box>
                                <Typography
                                    color={'#9f9f9f'}
                                    fontSize={'10px'}
                                    fontWeight={500}
                                >
                                    Assigned to
                                </Typography>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '11px',
                                    }}
                                >
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '11px',
                                        }}
                                    >
                                        <img src={author} alt="" />
                                        <Typography
                                            color={'#2b2b2b'}
                                            fontSize={'12px'}
                                            fontWeight={500}
                                        >
                                            James Dean
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </CardContent>
                    </Card>
                </Box>
            </Box>
        </div>
    );
};

export default CamapignTwo;
