import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import silswaLogo from '../../../../Images/silswa-logo.png'

const Navbar = () => {
    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar sx={{ backgroundColor: 'white', color: 'black', boxShadow: 0 }} position="static">
                    <Toolbar>
                        <img src={silswaLogo} alt='' style={{ marginLeft: 1, width: '10%' }} />
                        <Typography variant="h6" component="div" sx={{ marginLeft: '25%'}}>
                            Silswa
                        </Typography>
                        <Typography variant="h6" component="div">
                            Books
                        </Typography>
                        <Typography variant="h6" component="div" sx={{ marginRight: '40%'}}>
                            Counseling 
                        </Typography>
                        <Button color="inherit">Login</Button>
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    );
};

export default Navbar;