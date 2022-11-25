import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import Partners from '../../Shared/Partners/Partners';
import aboutImg from '../../../../Images/aboutImg.jpg'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import abdullah from '../../../../Images/instructor/abdullah.png'
// import wasif from '../../../../Images/f-member/wasif.jpg'
// import arifa from '../../../../Images/f-member/arifa.jpg'
// import rifat from '../../../../Images/f-member/rifat.jpg'

const AboutUs = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Typography variant="caption" sx={{ width: '80px', color: 'white', backgroundColor: '#085078', borderRadius: '5px', textAlign: 'center', marginTop: 5, marginX: 'auto' }} gutterBottom component="div">
                About us
            </Typography>
            <Typography variant="h4" sx={{ marginX: '30%', color: '#085078', marginTop: 5 }} gutterBottom component="div">
                Silswa - Pathway to Online Learning
            </Typography>
            <Typography variant="button1" sx={{ marginX: '38%', color: '#b0f737f', marginTop: 3 }} gutterBottom component="div">
                Dream with SILSWA, Accomplish with SILSWA
            </Typography>
            <img src={aboutImg} style={{ width: '50%', marginLeft: '23%', marginTop: '20px' }} alt="" />
            <Typography variant="h6" sx={{ marginX: '30%', color: '#b0f737f', marginTop: 5, textAlign: 'center' }} gutterBottom component="div">
                Silswa is an emerging EdTech Start Up in Bangladesh that aims to provide high quality academic, career and skill development courses through website and app. It has been working on online education in Bangladesh for the last 5 years and become one of the biggest online educational platforms in Bangladesh.
                <br />
                <br />
                It is incorporated in Bangladesh which trade license number is TRAD/DSCC/007159/2021
            </Typography>

            <a href='https://www.facebook.com/groups/dreamtodhakauniversity/' style={{ textDecoration: 'none' }}>
                <Typography variant="h6" sx={{ width: '390px', marginX: 'auto', color: 'white', backgroundColor: '#031F42', borderRadius: '5px', textAlign: 'center', marginTop: 3, padding: 1 }}>
                    Join Our Dream to DU Facebook Group
                </Typography>
            </a>

            <a href='https://www.facebook.com/silswa'><FacebookOutlinedIcon sx={{ color: 'white', marginLeft: '40%', marginTop: 5, backgroundColor: '#031F42', padding: 2, borderRadius: '50%' }} /></a>
            <a href='https://www.youtube.com/c/SILSWAOfficial'><YouTubeIcon sx={{ color: 'white', marginLeft: 3, backgroundColor: '#031F42', padding: 2, borderRadius: '50%' }} /></a>
            <a href='https://www.linkedin.com/company/silswa/'><LinkedInIcon sx={{ color: 'white', marginLeft: 3, backgroundColor: '#031F42', padding: 2, borderRadius: '50%' }} /></a>
            <a href='https://instagram.com/silswa_official?igshid=YmMyMTA2M2Y='><InstagramIcon sx={{ color: 'white', marginLeft: 3, backgroundColor: '#031F42', padding: 2, borderRadius: '50%' }} /></a>

            <Typography variant="caption" sx={{ width: '80px', color: '#031F42', textAlign: 'center', marginTop: 5, marginX: 'auto' }} gutterBottom component="div">
                LEADERSHIP
            </Typography>
            <Typography variant="h4" sx={{ marginX: '43%', color: '#031F42', fontWeight: 700 }} >
                Our Directors
            </Typography>
            <hr style={{ width: '10%', marginBottom: '80px' }} />

            <Container>
                <Grid container spacing={2} sx={{ marginBottom: '80px' }}>
                    <Grid xs={6} md={3}>
                        <img src={abdullah} style={{ width: '100%', borderRadius: '50%' }} alt="" />
                        <Typography variant="h5" sx={{ color: '#031F42', fontWeight: 700, marginTop: 2, textAlign: 'center' }} >
                            MD. ABDULLAH
                        </Typography>
                        <Typography variant="caption" sx={{ color: '#031F42', textAlign: 'center', marginTop: 3 }} gutterBottom component="div">
                            CHIEF EXECUTIVE OFFICER
                        </Typography>
                    </Grid>
                    <Grid xs={6} md={3}>
                        <img src={abdullah} style={{ width: '60%', borderRadius: '50%', marginLeft: '80px' }} alt="" />
                        <Typography variant="h5" sx={{ color: '#031F42', fontWeight: 700, marginTop: 2, textAlign: 'center', marginLeft: 5 }} >
                            MD. WASIF AZIM
                        </Typography>
                        <Typography variant="caption" sx={{ color: '#031F42', textAlign: 'center', marginTop: 3, marginLeft: 5 }} gutterBottom component="div">
                            CHIEF FINANCIAL OFFICER
                        </Typography>
                    </Grid>
                    <Grid xs={6} md={3}>
                        <img src={abdullah} style={{ width: '60%', borderRadius: '50%', marginLeft: '80px' }} alt="" />
                        <Typography variant="h5" sx={{ color: '#031F42', fontWeight: 700, marginTop: 2, textAlign: 'center', marginLeft: 4 }} >
                            TAFRIHA AKTAR ARIFA
                        </Typography>
                        <Typography variant="caption" sx={{ color: '#031F42', textAlign: 'center', marginTop: 3, marginLeft: 5 }} gutterBottom component="div">
                            CHIEF MARKETING OFFICER
                        </Typography>
                    </Grid>
                    <Grid xs={6} md={3}>
                        <img src={abdullah} style={{ width: '60%', borderRadius: '50%', marginLeft: '80px' }} alt="" />
                        <Typography variant="h5" sx={{ color: '#031F42', fontWeight: 700, marginTop: 2, textAlign: 'center', marginLeft: 5 }} >
                            RIFAT HASAN
                        </Typography>
                        <Typography variant="caption" sx={{ color: '#031F42', textAlign: 'center', marginTop: 3, marginLeft: 5 }} gutterBottom component="div">
                            CHIEF STRATEGIC OFFICER
                        </Typography>
                    </Grid>
                </Grid>
                <Partners></Partners>
            </Container>

            <Footer></Footer>
        </div>
    );
};

export default AboutUs;