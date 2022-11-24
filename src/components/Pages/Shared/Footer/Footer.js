import { Grid, Typography } from '@mui/material';
import React from 'react';
import { Link } from "react-router-dom";
import uniLogo from '../../../../Images/uniLogo.png'
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LanguageIcon from '@mui/icons-material/Language';
import facebook from '../../../../Images/media/facebook.png'
import youtube from '../../../../Images/media/youtube.png'
import instagram from '../../../../Images/media/instagram.png'
import linkedin from '../../../../Images/media/linkedin.png'

const mediaDesign = {
    width: '10%', 
    marginRight: '10px', 
    backgroundColor:'white'
}
const policyDesign = {
    color: 'black', 
    textDecoration: 'none', 
    marginRight: '30px', 
    fontWeight: 500
}

const Footer = () => {
    return (
        <div style={{ backgroundColor: '#f3f5f9' }}>
            <Grid container spacing={2} sx={{ marginTop: 5, padding: 5 }}>
                <Grid xs={12} sm={4} md={4} sx={{ marginBottom: 5 }}>
                    <img src={uniLogo} style={{ width: '60%' }} alt="" />
                    <br />
                    <br />
                    <div>
                        <a style={{ textDecoration: 'none', color: 'black' }} href='https://www.facebook.com/silswa'><PhoneIcon sx={{ color: 'black', marginLeft: 3 }} />+8809638-113399</a>
                        <br />
                        <a style={{ textDecoration: 'none', color: 'black' }} href='https://www.youtube.com/c/SILSWAOfficial'><EmailIcon sx={{ color: 'black', marginLeft: 3 }} />team@unicourse.com</a>
                        <br />
                        <a style={{ textDecoration: 'none', color: 'black' }} href='https://www.linkedin.com/company/silswa/'><LanguageIcon sx={{ color: 'black', marginLeft: 3 }} />www.unicourse.com</a>
                        <br />
                    </div>
                </Grid>
                <Grid xs={6} sm={3} md={3}>
                    <Typography variant="body1" gutterBottom sx={{ fontWeight: 700 }}>
                        Link
                    </Typography>
                    <Link to="/home" style={{ color: 'black', textDecoration: 'none' }}>Courses</Link>
                    <br />
                    <br />
                    <Link to="/home" style={{ color: 'black', textDecoration: 'none' }}>About Us</Link>
                    <br />
                    <br />
                    <Link to="/home" style={{ color: 'black', textDecoration: 'none' }}>Career</Link>
                    <br />
                    <br />
                    <Link to="/home" style={{ color: 'black', textDecoration: 'none' }}>Contact</Link>
                    <br />
                </Grid>
                <Grid xs={6} sm={5} md={5}>
                    <Typography variant="body1" gutterBottom sx={{ fontWeight: 700 }}>
                        For knowing more about us:
                    </Typography>
                    <img src={facebook} style={mediaDesign} alt='Facebook' />
                    <img src={youtube} style={mediaDesign} alt='Youtube' />
                    <img src={instagram} style={mediaDesign} alt='Instagram' />
                    <img src={linkedin} style={mediaDesign} alt='LinkedIn' />
                    <br />
                    <br />
                    <Link to="/home" style={policyDesign}>Terms & Conditions</Link>
                    <Link to="/home" style={policyDesign}>Refund Policy</Link>
                    <Link to="/home" style={policyDesign}>Privacy Policy</Link>
                </Grid>
            </Grid>
            <Typography variant="body1" gutterBottom sx={{ color: 'black', textAlign: 'center' }}>
                &copy; 2022 Unicourse All rights reserved.
            </Typography>
        </div>
    );
};

export default Footer;