import {
    ChatBubbleOutlineRounded,
    DescriptionOutlined,
    HelpOutlineOutlined,
    KeyboardArrowDownRounded,
    NoteAltOutlined,
    NotificationsNoneRounded,
    PaidOutlined,
    SearchRounded,
    SettingsOutlined,
} from '@mui/icons-material';
import EqualizerOutlinedIcon from '@mui/icons-material/EqualizerOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import PieChartOutlineOutlinedIcon from '@mui/icons-material/PieChartOutlineOutlined';
import {
    Avatar,
    Badge,
    Button,
    FormControl,
    InputAdornment,
    Menu,
    MenuItem,
    OutlinedInput,
} from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import logo from '../assets/logo-alt.svg';

const drawerWidth = 200;

export default function Dashboard() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: `calc(100% - ${drawerWidth}px)`,
                    ml: `${drawerWidth}px`,
                    backgroundColor: '#fff',
                    boxShadow: 'none',
                    color: '#222',
                }}
            >
                <Toolbar>
                    <Box
                        sx={{
                            width: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                        }}
                    >
                        <FormControl variant="outlined">
                            <OutlinedInput
                                size="small"
                                placeholder="Search.."
                                id="input-with-icon-adornment"
                                startAdornment={
                                    <InputAdornment position="start">
                                        <SearchRounded />
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '20px',
                            }}
                        >
                            <ChatBubbleOutlineRounded />
                            <Badge
                                variant="dot"
                                color="error"
                                overlap="circular"
                            >
                                <NotificationsNoneRounded />
                            </Badge>

                            <Button
                                id="basic-button"
                                aria-controls={open ? 'basic-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}
                            >
                                <div className="flex items-center gap-3">
                                    <Avatar
                                        alt="Will Smith"
                                        src="/static/images/avatar/1.jpg"
                                    />
                                    <Typography variant="p">
                                        Will Smith
                                    </Typography>
                                    <KeyboardArrowDownRounded />
                                </div>
                            </Button>
                            <Menu
                                id="basic-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                MenuListProps={{
                                    'aria-labelledby': 'basic-button',
                                }}
                            >
                                <MenuItem onClick={handleClose}>
                                    Profile
                                </MenuItem>
                                <MenuItem onClick={handleClose}>
                                    My account
                                </MenuItem>
                                <MenuItem onClick={handleClose}>
                                    Logout
                                </MenuItem>
                            </Menu>
                        </Box>
                    </Box>
                </Toolbar>
                <Divider />
            </AppBar>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="permanent"
                anchor="left"
            >
                {/* <Toolbar /> */}

                <img className="w-1/2 py-[21px] pl-4" src={logo} alt="" />

                <Divider />
                <Typography
                    sx={{ marginLeft: 2.5, marginTop: 2, color: '#777' }}
                >
                    General
                </Typography>
                <List>
                    {/* Dashboard */}
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <HomeOutlinedIcon />
                            </ListItemIcon>
                            <ListItemText primary="Dashboard" />
                        </ListItemButton>
                    </ListItem>
                    {/* Campaign */}
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <PieChartOutlineOutlinedIcon />
                            </ListItemIcon>
                            <ListItemText primary="Campaign" />
                        </ListItemButton>
                    </ListItem>
                    {/* Contact */}
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <PeopleAltOutlinedIcon />
                            </ListItemIcon>
                            <ListItemText primary="Contact" />
                        </ListItemButton>
                    </ListItem>
                    {/* Analytics */}
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <EqualizerOutlinedIcon />
                            </ListItemIcon>
                            <ListItemText primary="Analytics" />
                        </ListItemButton>
                    </ListItem>
                    {/* Reports */}
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <DescriptionOutlined />
                            </ListItemIcon>
                            <ListItemText primary="Reports" />
                        </ListItemButton>
                    </ListItem>
                    {/* Billing */}
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <PaidOutlined />
                            </ListItemIcon>
                            <ListItemText primary="Billing" />
                        </ListItemButton>
                    </ListItem>
                    {/* Conversations */}
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <NoteAltOutlined />
                            </ListItemIcon>
                            <ListItemText primary="Conversations" />
                        </ListItemButton>
                    </ListItem>
                </List>
                <Typography
                    sx={{ marginLeft: 2.5, marginTop: 2, color: '#777' }}
                >
                    Support
                </Typography>
                <List>
                    {/* Settings */}
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <SettingsOutlined />
                            </ListItemIcon>
                            <ListItemText primary="Settings" />
                        </ListItemButton>
                    </ListItem>
                    {/* Help Center */}
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <HelpOutlineOutlined />
                            </ListItemIcon>
                            <ListItemText primary="Help Center" />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Drawer>
            <Box
                component="main"
                sx={{ flexGrow: 1, bgcolor: '#F2F7FA', p: 3 }}
            >
                <Toolbar />
                <Typography paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Rhoncus dolor purus non enim praesent elementum
                    facilisis leo vel. Risus at ultrices mi tempus imperdiet.
                    Semper risus in hendrerit gravida rutrum quisque non tellus.
                    Convallis convallis tellus id interdum velit laoreet id
                    donec ultrices. Odio morbi quis commodo odio aenean sed
                    adipiscing. Amet nisl suscipit adipiscing bibendum est
                    ultricies integer quis. Cursus euismod quis viverra nibh
                    cras. Metus vulputate eu scelerisque felis imperdiet proin
                    fermentum leo. Mauris commodo quis imperdiet massa
                    tincidunt. Cras tincidunt lobortis feugiat vivamus at augue.
                    At augue eget arcu dictum varius duis at consectetur lorem.
                    Velit sed ullamcorper morbi tincidunt. Lorem donec massa
                    sapien faucibus et molestie ac.
                </Typography>
                <Typography paragraph>
                    Consequat mauris nunc congue nisi vitae suscipit. Fringilla
                    est ullamcorper eget nulla facilisi etiam dignissim diam.
                    Pulvinar elementum integer enim neque volutpat ac tincidunt.
                    Ornare suspendisse sed nisi lacus sed viverra tellus. Purus
                    sit amet volutpat consequat mauris. Elementum eu facilisis
                    sed odio morbi. Euismod lacinia at quis risus sed vulputate
                    odio. Morbi tincidunt ornare massa eget egestas purus
                    viverra accumsan in. In hendrerit gravida rutrum quisque non
                    tellus orci ac. Pellentesque nec nam aliquam sem et tortor.
                    Habitant morbi tristique senectus et. Adipiscing elit duis
                    tristique sollicitudin nibh sit. Ornare aenean euismod
                    elementum nisi quis eleifend. Commodo viverra maecenas
                    accumsan lacus vel facilisis. Nulla posuere sollicitudin
                    aliquam ultrices sagittis orci a.
                </Typography>
                <Typography paragraph>
                    Consequat mauris nunc congue nisi vitae suscipit. Fringilla
                    est ullamcorper eget nulla facilisi etiam dignissim diam.
                    Pulvinar elementum integer enim neque volutpat ac tincidunt.
                    Ornare suspendisse sed nisi lacus sed viverra tellus. Purus
                    sit amet volutpat consequat mauris. Elementum eu facilisis
                    sed odio morbi. Euismod lacinia at quis risus sed vulputate
                    odio. Morbi tincidunt ornare massa eget egestas purus
                    viverra accumsan in. In hendrerit gravida rutrum quisque non
                    tellus orci ac. Pellentesque nec nam aliquam sem et tortor.
                    Habitant morbi tristique senectus et. Adipiscing elit duis
                    tristique sollicitudin nibh sit. Ornare aenean euismod
                    elementum nisi quis eleifend. Commodo viverra maecenas
                    accumsan lacus vel facilisis. Nulla posuere sollicitudin
                    aliquam ultrices sagittis orci a.
                </Typography>
                <Typography paragraph>
                    Consequat mauris nunc congue nisi vitae suscipit. Fringilla
                    est ullamcorper eget nulla facilisi etiam dignissim diam.
                    Pulvinar elementum integer enim neque volutpat ac tincidunt.
                    Ornare suspendisse sed nisi lacus sed viverra tellus. Purus
                    sit amet volutpat consequat mauris. Elementum eu facilisis
                    sed odio morbi. Euismod lacinia at quis risus sed vulputate
                    odio. Morbi tincidunt ornare massa eget egestas purus
                    viverra accumsan in. In hendrerit gravida rutrum quisque non
                    tellus orci ac. Pellentesque nec nam aliquam sem et tortor.
                    Habitant morbi tristique senectus et. Adipiscing elit duis
                    tristique sollicitudin nibh sit. Ornare aenean euismod
                    elementum nisi quis eleifend. Commodo viverra maecenas
                    accumsan lacus vel facilisis. Nulla posuere sollicitudin
                    aliquam ultrices sagittis orci a.
                </Typography>
                <Typography paragraph>
                    Consequat mauris nunc congue nisi vitae suscipit. Fringilla
                    est ullamcorper eget nulla facilisi etiam dignissim diam.
                    Pulvinar elementum integer enim neque volutpat ac tincidunt.
                    Ornare suspendisse sed nisi lacus sed viverra tellus. Purus
                    sit amet volutpat consequat mauris. Elementum eu facilisis
                    sed odio morbi. Euismod lacinia at quis risus sed vulputate
                    odio. Morbi tincidunt ornare massa eget egestas purus
                    viverra accumsan in. In hendrerit gravida rutrum quisque non
                    tellus orci ac. Pellentesque nec nam aliquam sem et tortor.
                    Habitant morbi tristique senectus et. Adipiscing elit duis
                    tristique sollicitudin nibh sit. Ornare aenean euismod
                    elementum nisi quis eleifend. Commodo viverra maecenas
                    accumsan lacus vel facilisis. Nulla posuere sollicitudin
                    aliquam ultrices sagittis orci a.
                </Typography>
            </Box>
        </Box>
    );
}
