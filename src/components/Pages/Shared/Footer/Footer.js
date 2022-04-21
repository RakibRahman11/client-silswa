import { Grid, Typography } from '@mui/material';
import React from 'react';
import { Link } from "react-router-dom";
import silswaWlogo from '../../../../Images/silswa-wlogo.png'
import sslcommerz from '../../../../Images/sslcommerz.png'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
    return (
        <div style={{ backgroundColor: '#183444' }}>
            <Grid container spacing={2} sx={{ marginTop: 5, padding: 5 }}>
                <Grid xs={12} md={5}>
                    <img src={silswaWlogo} style={{ width: '30%', paddingLeft: '20px' }} alt="" />
                    <Typography variant="body1" gutterBottom sx={{ color: 'white', textAlign: 'justify', paddingX: 5 }}>
                        Use books and study materials by accessing our website anytime, anywhere you need. We work for your convenience and efficiency so that it helps you reach the desired goal.
                    </Typography>

                    <a href='https://www.facebook.com/silswa'><FacebookOutlinedIcon sx={{ color: 'white', marginLeft: 5 }} /></a>
                    <a href='https://www.youtube.com/c/SILSWAOfficial'><YouTubeIcon sx={{ color: 'white', marginLeft: 3 }} /></a>
                    <a href='https://www.linkedin.com/company/silswa/'><LinkedInIcon sx={{ color: 'white', marginLeft: 3 }} /></a>
                    <a href='https://instagram.com/silswa_official?igshid=YmMyMTA2M2Y='><InstagramIcon sx={{ color: 'white', marginLeft: 3 }} /></a>

                </Grid>
                <Grid xs={4} md={2}>
                    <Typography variant="body1" gutterBottom sx={{ color: 'white', marginLeft: 3, textDecoration: 'underline' }}>
                        Company
                    </Typography>
                    <ul style={{ color: 'white', listStyleType: 'square' }}>
                        <li><Link to="/about" style={{ color: 'white', textDecoration: 'none' }}>About Us</Link></li>
                        <li><Link to="/privacyPolicy" style={{ color: 'white', textDecoration: 'none' }}>Privacy Policy</Link></li>
                        <li><Link to="/terms" style={{ color: 'white', textDecoration: 'none' }}>Terms and Conditions</Link></li>
                        <li><Link to="/refund" style={{ color: 'white', textDecoration: 'none' }}>Refund Policy</Link></li>
                        <li><Link to="/contact" style={{ color: 'white', textDecoration: 'none' }}>Contact us</Link></li>
                    </ul>
                </Grid>
                <Grid xs={4} md={2}>
                    <Typography variant="body1" gutterBottom sx={{ color: 'white', marginLeft: 3, textAlign: 'justify', textDecoration: 'underline' }}>
                        Courses
                    </Typography>
                    <ul style={{ color: 'white', listStyleType: 'square' }}>
                        <li>Admission Course</li>
                        <li>GK Crash Course</li>
                        <li>TOEFL Grammar Course</li>
                        <li>English 1st Paper Course</li>
                    </ul>
                </Grid>
                <Grid xs={4} md={2}>
                    <Typography variant="body1" gutterBottom sx={{ color: 'white', marginLeft: 3, textAlign: 'justify', textDecoration: 'underline' }}>
                        Others
                    </Typography>
                    <ul style={{ color: 'white', listStyleType: 'square' }}>
                        <li>Free Resources</li>
                        <li><Link to="/counseling" style={{ color: 'white', textDecoration: 'none' }}>Free Counseling</Link></li>
                        <li>University Notice</li>
                        <li>Blogs</li>
                    </ul>
                </Grid>
            </Grid>
            <hr />
            <Typography variant="body1" gutterBottom sx={{ color: 'white', textAlign: 'center' }}>
                Copyright &copy; 2022 silswa.com
            </Typography>
            <img src={sslcommerz} style={{ width: '100%' }} alt="" />
        </div>
    );
};

export default Footer;