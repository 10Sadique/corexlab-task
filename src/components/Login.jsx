import {
    Box,
    Button,
    Checkbox,
    FormControl,
    FormControlLabel,
    FormGroup,
    IconButton,
    InputAdornment,
    InputLabel,
    Link,
    OutlinedInput,
    TextField,
    Typography,
} from '@mui/material';
import React from 'react';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import GoogleIcon from '@mui/icons-material/Google';

const Login = () => {
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <div className="text-gray-700">
            <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                Sign In
            </Typography>
            <Typography variant="p" sx={{ color: '#333' }}>
                Enter your credentials to access to your account
            </Typography>
            <div className="mt-5">
                {/* Email Input */}
                <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Email    "
                    variant="outlined"
                    margin="dense"
                />
                {/* Password Input */}
                <FormControl
                    fullWidth
                    variant="outlined"
                    sx={{ marginTop: 2, marginBottom: 1 }}
                >
                    <InputLabel htmlFor="outlined-adornment-password">
                        Password
                    </InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {showPassword ? (
                                        <VisibilityOff />
                                    ) : (
                                        <Visibility />
                                    )}
                                </IconButton>
                            </InputAdornment>
                        }
                        label="Password"
                    />
                </FormControl>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}
                >
                    {/* Checkbox */}
                    <FormGroup>
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Remember me"
                        />
                    </FormGroup>
                    {/* Link */}
                    <Link color="#3D59DD" href="#">
                        Forgot Password?
                    </Link>
                </Box>
                <Button
                    fullWidth
                    sx={{
                        marginTop: 2,
                        backgroundColor: '#3D59DD',
                    }}
                    variant="contained"
                >
                    Sign In
                </Button>
                <Button
                    fullWidth
                    sx={{ marginTop: 3 }}
                    variant="outlined"
                    startIcon={<GoogleIcon />}
                >
                    Sign in with Google
                </Button>

                <Box
                    fullWidth
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: 2,
                    }}
                >
                    <Typography>
                        Don't have an account?{' '}
                        <Link color="#3D59DD" href="#">
                            Sign up
                        </Link>
                    </Typography>
                </Box>
            </div>
        </div>
    );
};

export default Login;
