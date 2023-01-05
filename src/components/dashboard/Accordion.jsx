import { AddRounded } from '@mui/icons-material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Button, Card, CardContent } from '@mui/material';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import * as React from 'react';

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    // border: `1px solid ${theme.palette.divider}`,
    // '&:not(:last-child)': {
    //     borderBottom: 0,
    // },
    // '&:before': {
    //     display: 'none',
    // },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
}));

export default function CustomizedAccordions() {
    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <div>
            {/* Campaigns */}
            <Accordion
                expanded={expanded === 'panel1'}
                onChange={handleChange('panel1')}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1d-content"
                    id="panel1d-header"
                >
                    <Typography
                        sx={{ marginTop: 2, marginBottom: 2 }}
                        color={'#2B2B2B'}
                        fontSize="12px"
                        fontWeight={700}
                    >
                        Campaigns
                    </Typography>
                    <div
                        className={
                            'bg-[#F4F4F4] text-[#676767] rounded h-5 px-3 text-xs flex items-center justify-center ml-2 my-auto'
                        }
                    >
                        2
                    </div>
                </AccordionSummary>
                <AccordionDetails>
                    <Button
                        sx={{ border: '1px solid #ECECEC' }}
                        fullWidth
                        variant="outlined"
                        startIcon={
                            <AddRounded fontSize="small" color="disabled" />
                        }
                        fontSize="9px"
                    >
                        <span className="text-[9px] font-semibold text-[#2B2B2B]">
                            Create New Campaign
                        </span>
                    </Button>
                    {/* Card 1 */}
                    <Card variant="outlined" sx={{ marginTop: 2 }}>
                        <CardContent>
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '5px',
                                    marginBottom: 1,
                                    justifyContent: 'space-between',
                                }}
                            >
                                <Typography
                                    variant="p"
                                    fontSize="9px"
                                    color="#9F9F9F"
                                >
                                    Ending in: 18 Jan, 2021
                                </Typography>
                                <div
                                    className={
                                        'px-4 text-[8px] text-[#2142D9] bg-[#F1F0FF] rounded-[10px] py-1 '
                                    }
                                >
                                    Enrolled
                                </div>
                            </Box>
                            <Typography
                                color={'#2B2B2B'}
                                fontSize="12px"
                                fontWeight={600}
                            >
                                Web Developement
                            </Typography>
                            <Typography
                                color={'#2B2B2B'}
                                fontSize="16px"
                                fontWeight={700}
                            >
                                $1,200
                            </Typography>
                        </CardContent>
                    </Card>

                    {/* Card 2 */}
                    <Card variant="outlined" sx={{ marginTop: 2 }}>
                        <CardContent>
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '5px',
                                    marginBottom: 1,
                                    justifyContent: 'space-between',
                                }}
                            >
                                <Typography
                                    variant="p"
                                    fontSize="9px"
                                    color="#9F9F9F"
                                >
                                    Ending in: 18 Jan, 2021
                                </Typography>
                                <div
                                    className={
                                        'px-4 text-[8px] text-[#FF7043] bg-[#ff6f4321] rounded-[10px] py-1 '
                                    }
                                >
                                    Pending
                                </div>
                            </Box>
                            <Typography
                                color={'#2B2B2B'}
                                fontSize="12px"
                                fontWeight={600}
                            >
                                AI Workshop
                            </Typography>
                            <Typography
                                color={'#2B2B2B'}
                                fontSize="16px"
                                fontWeight={700}
                            >
                                $1,600
                            </Typography>
                        </CardContent>
                    </Card>
                </AccordionDetails>
            </Accordion>

            {/* Tickets */}
            <Accordion
                expanded={expanded === 'panel2'}
                onChange={handleChange('panel2')}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2d-content"
                    id="panel2d-header"
                >
                    <Typography
                        sx={{ marginTop: 2, marginBottom: 2 }}
                        color={'#2B2B2B'}
                        fontSize="12px"
                        fontWeight={700}
                    >
                        Tickets
                    </Typography>
                    <div
                        className={
                            'bg-[#F4F4F4] text-[#676767] rounded h-5 px-3 text-xs flex items-center justify-center ml-2 my-auto'
                        }
                    >
                        2
                    </div>
                </AccordionSummary>
                <AccordionDetails>
                    <Card variant="outlined" sx={{ marginTop: 2 }}>
                        <CardContent>
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '5px',
                                    marginBottom: 1,
                                    justifyContent: 'space-between',
                                }}
                            >
                                <Typography
                                    variant="p"
                                    fontSize="9px"
                                    color="#9F9F9F"
                                >
                                    Ending in: 18 Jan, 2021
                                </Typography>
                                <div
                                    className={
                                        'px-4 text-[8px] text-[#2142D9] bg-[#F1F0FF] rounded-[10px] py-1 '
                                    }
                                >
                                    Enrolled
                                </div>
                            </Box>
                            <Typography
                                color={'#2B2B2B'}
                                fontSize="12px"
                                fontWeight={600}
                            >
                                Web Developement
                            </Typography>
                            <Typography
                                color={'#2B2B2B'}
                                fontSize="16px"
                                fontWeight={700}
                            >
                                $1,200
                            </Typography>
                        </CardContent>
                    </Card>

                    {/* Card 2 */}
                    <Card variant="outlined" sx={{ marginTop: 2 }}>
                        <CardContent>
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '5px',
                                    marginBottom: 1,
                                    justifyContent: 'space-between',
                                }}
                            >
                                <Typography
                                    variant="p"
                                    fontSize="9px"
                                    color="#9F9F9F"
                                >
                                    Ending in: 18 Jan, 2021
                                </Typography>
                                <div
                                    className={
                                        'px-4 text-[8px] text-[#FF7043] bg-[#ff6f4321] rounded-[10px] py-1 '
                                    }
                                >
                                    Pending
                                </div>
                            </Box>
                            <Typography
                                color={'#2B2B2B'}
                                fontSize="12px"
                                fontWeight={600}
                            >
                                AI Workshop
                            </Typography>
                            <Typography
                                color={'#2B2B2B'}
                                fontSize="16px"
                                fontWeight={700}
                            >
                                $1,600
                            </Typography>
                        </CardContent>
                    </Card>
                </AccordionDetails>
            </Accordion>

            {/* Attachments */}
            <Accordion
                expanded={expanded === 'panel3'}
                onChange={handleChange('panel3')}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3d-content"
                    id="panel3d-header"
                >
                    <Typography
                        sx={{ marginTop: 2, marginBottom: 2 }}
                        color={'#2B2B2B'}
                        fontSize="12px"
                        fontWeight={700}
                    >
                        Attachments
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse malesuada lacus ex, sit amet blandit leo
                        lobortis eget. Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Suspendisse malesuada lacus ex, sit
                        amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            {/* Playbooks */}
            <Accordion
                expanded={expanded === 'panel4'}
                onChange={handleChange('panel4')}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel4d-content"
                    id="panel4d-header"
                >
                    <Typography
                        sx={{ marginTop: 2, marginBottom: 2 }}
                        color={'#2B2B2B'}
                        fontSize="12px"
                        fontWeight={700}
                    >
                        Playbooks
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse malesuada lacus ex, sit amet blandit leo
                        lobortis eget. Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Suspendisse malesuada lacus ex, sit
                        amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}
