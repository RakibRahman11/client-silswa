import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import useAuth from '../../../../../hooks/useAuth';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Container, TextField } from '@mui/material';

const Login = () => {
    const [login, setLogin] = useState(false)
    const [registerData, setRegisterData] = useState({})
    const [loginData, setLoginData] = useState({})
    const { googleSignIn, facebookSignIn, newUser, userSignIn } = useAuth()

    const socialSign = {
        textAlign: 'center', 
        color: 'black', 
        backgroundColor: 'white', 
        border: '1px solid lightGray',
        margin: '0px 2px'
    }

    // Register user
    const handleAccount = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        let updateData = { ...registerData }
        updateData[field] = value
        console.log(updateData)
        setRegisterData(updateData)
    }
    const handleRegistration = e => {
        if (registerData.password !== registerData.retypePassword) {
            return alert('Password do not match')
        }
        newUser(registerData.name, registerData.email, registerData.password)
        e.preventDefault()
    }

    // Login user
    const handleLogIn = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        let updateData = { ...loginData }
        updateData[field] = value
        console.log(updateData)
        setLoginData(updateData)
    }
    const handleLogin = e => {
        userSignIn(loginData.email, loginData.password)
        e.preventDefault()
    }
    return (
        <Container>
            {!login && <div>
                <Typography id="modal-modal-title" sx={{ fontWeight: 700, textAlign: 'center' }} variant="h4" component="h2">
                    Login
                </Typography>
                <Typography variant="caption" id="modal-modal-description" sx={{ mt: 2, textAlign: 'center', mx: '15%' }} display="block" gutterBottom>
                    Don't have an account yet? <span onClick={() => setLogin(true)} style={{ fontWeight: 700 }}>Sign up for free</span>
                </Typography>
                <form onSubmit={handleLogin}>
                    <TextField
                        label="Email"
                        type="email"
                        name='email'
                        style={{ width: '100%', marginTop: '40px' }}
                        onBlur={handleLogIn}
                    />
                    <br /><br />
                    <TextField
                        label="Password"
                        onBlur={handleLogIn}
                        type="password"
                        name='password'
                        style={{ width: '100%' }}
                    />
                    <br />

                    <Button type="submit" sx={{ backgroundColor: '#3768AF', color: 'white', width: '100%', height: '50px', marginTop: 3, fontWeight: 700 }} variant="contained">Login</Button>
                    <br /><br />
                </form>
                <Typography variant="body1" id="modal-modal-description" sx={{ textAlign: 'center', mx: '25%' }} display="block" gutterBottom>
                    or
                </Typography>
                <Button onClick={googleSignIn} style={socialSign}><GoogleIcon sx={{ color: 'black', fontSize: 30 }} />Google</Button>
                <Button onClick={facebookSignIn} style={socialSign}><FacebookOutlinedIcon sx={{ color: 'black', fontSize: 30 }} />Facebook</Button>
                <Button onClick={googleSignIn} style={socialSign}><LinkedInIcon sx={{ color: 'black', fontSize: 30 }} />LinkedIn</Button>
            </div>}
            {login && <div>
                <Typography id="modal-modal-title" sx={{ fontWeight: 700, textAlign: 'center' }} variant="h4" component="h2">
                    Sign Up
                </Typography>
                <Typography variant="caption" id="modal-modal-description" sx={{ mt: 2, textAlign: 'center', mx: '15%' }} display="block" gutterBottom>
                    Already have an account? <span onClick={() => setLogin(false)} style={{ fontWeight: 700 }}>Log in</span>
                </Typography>
                <form onSubmit={handleRegistration}>
                    <TextField
                        required
                        label="Name"
                        type="text"
                        name='name'
                        onBlur={handleAccount}
                        style={{ width: '100%', marginTop: '40px' }}
                    />
                    <br /><br />
                    <TextField
                        required
                        label="Email"
                        type="email"
                        name='email'
                        onBlur={handleAccount}
                        style={{ width: '100%' }}
                    />
                    <br /><br />
                    <TextField
                        required
                        label="Contact Number"
                        type="number"
                        name='number'
                        onBlur={handleAccount}
                        style={{ width: '100%' }}
                    />
                    <br /><br />
                    <TextField
                        required
                        label="Password"
                        type="password"
                        name="password"
                        onBlur={handleAccount}
                        style={{ width: '100%' }}
                    />
                    <br /><br />
                    <TextField
                        required
                        label="Retype-password"
                        type="password"
                        name="retypePassword"
                        onBlur={handleAccount}
                        style={{ width: '100%' }}
                    />
                    <br />

                    <Button type="submit" sx={{ backgroundColor: '#3768AF', color: 'white', width: '100%', height: '50px', marginTop: 3, fontWeight: 700 }} variant="contained">Register</Button>
                    <br /><br />
                </form>
            </div>}
        </Container>
    );
};

export default Login;