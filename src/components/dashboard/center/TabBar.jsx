import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

export default function TabBar() {
    const [value, setValue] = React.useState('one');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%', marginBottom: 2 }}>
            <Tabs
                sx={{
                    bgcolor: '#ECEEF0',
                    borderRadius: '5px',
                    color: '#8D8C8C',
                    boxShadow: '0 5px 8px #00000016',
                    fontWeight: 700,
                }}
                value={value}
                onChange={handleChange}
                textColor="black"
                indicatorColor="white"
                aria-label="secondary tabs example"
            >
                <Tab
                    sx={{
                        bgcolor: value === 'one' ? '#fff' : '',
                        borderRadius: '5px',
                        boxShadow:
                            value === 'one' ? '0 5px 5px #0000001d' : 'none',
                        color: value === 'one' ? '#000' : '#8D8C8C',
                        textTransform: 'capitalize',
                        fontSize: '12px',
                    }}
                    value="one"
                    label="Activity"
                />
                <Tab
                    sx={{
                        bgcolor: value === 'two' ? '#fff' : '',
                        borderRadius: '5px',
                        boxShadow:
                            value === 'two' ? '0 5px 5px #0000001d' : 'none',
                        color: value === 'two' ? '#000' : '#8D8C8C',
                        textTransform: 'capitalize',
                        fontSize: '12px',
                    }}
                    value="two"
                    label="Notes"
                />
                <Tab
                    sx={{
                        bgcolor: value === 'three' ? '#fff' : '',
                        borderRadius: '5px',
                        boxShadow:
                            value === 'three' ? '0 5px 5px #0000001d' : 'none',
                        color: value === 'three' ? '#000' : '#8D8C8C',
                        textTransform: 'capitalize',
                        fontSize: '12px',
                    }}
                    value="three"
                    label="E-mails"
                />
                <Tab
                    sx={{
                        bgcolor: value === 'four' ? '#fff' : '',
                        borderRadius: '5px',
                        boxShadow:
                            value === 'four' ? '0 5px 5px #0000001d' : 'none',
                        color: value === 'four' ? '#000' : '#8D8C8C',
                        textTransform: 'capitalize',
                        fontSize: '12px',
                    }}
                    value="four"
                    label="Calls"
                />
                <Tab
                    sx={{
                        bgcolor: value === 'five' ? '#fff' : '',
                        borderRadius: '5px',
                        boxShadow:
                            value === 'five' ? '0 5px 5px #0000001d' : 'none',
                        color: value === 'five' ? '#000' : '#8D8C8C',
                        textTransform: 'capitalize',
                        fontSize: '12px',
                    }}
                    value="five"
                    label="Task"
                />
                <Tab
                    sx={{
                        bgcolor: value === 'six' ? '#fff' : '',
                        borderRadius: '5px',
                        boxShadow:
                            value === 'six' ? '0 5px 5px #0000001d' : 'none',
                        color: value === 'six' ? '#000' : '#8D8C8C',
                        textTransform: 'capitalize',
                        fontSize: '12px',
                    }}
                    value="six"
                    label="Meeting"
                />
            </Tabs>
        </Box>
    );
}
