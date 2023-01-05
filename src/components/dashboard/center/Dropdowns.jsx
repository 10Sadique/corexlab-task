import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import * as React from 'react';

const Dropdowns = () => {
    const [age, setAge] = React.useState('');
    const [age2, setAge2] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    const handleChange2 = (event) => {
        setAge2(event.target.value);
    };
    return (
        <div className={'space-x-6 mb-4'}>
            <FormControl
                size="medium"
                sx={{
                    minWidth: 220,
                    bgcolor: '#fff',
                    marginTop: 1,
                    boxShadow: '0 5px 8px #00000014',
                    borderRadius: '5px',
                }}
            >
                <Select value={age} displayEmpty onChange={handleChange}>
                    <MenuItem value="">Filter Activity 21/25</MenuItem>
                    <MenuItem value={10}>Filter Activity 21/26</MenuItem>
                    <MenuItem value={20}>Filter Activity 21/27</MenuItem>
                    <MenuItem value={30}>Filter Activity 21/28</MenuItem>
                </Select>
            </FormControl>
            <FormControl
                size="medium"
                sx={{
                    minWidth: 120,
                    bgcolor: '#fff',
                    marginTop: 1,
                    boxShadow: '0 5px 8px #00000014',
                    borderRadius: '5px',
                }}
            >
                <Select value={age2} displayEmpty onChange={handleChange2}>
                    <MenuItem value="">All User</MenuItem>
                    <MenuItem value={1}>Admin</MenuItem>
                    <MenuItem value={2}>Developers</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
};

export default Dropdowns;
