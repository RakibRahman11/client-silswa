import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import silswaLogo from '../../../../Images/silswa-logo.png'
import Modal from '@mui/material/Modal';
import Login from '../Account/Login/Login';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const Navbar = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar sx={{ backgroundColor: 'white', color: 'black', boxShadow: 0 }} position="static">
                    <Toolbar>
                        <img src={silswaLogo} alt='' style={{ marginLeft: 1, width: '10%' }} />
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>

                        </Typography>
                        <Button onClick={handleOpen} color="inherit">Login</Button>
                        <Modal
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box sx={style}>
                                <Login></Login>
                            </Box>
                        </Modal>
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    );
};

export default Navbar;