import { Container, Typography } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';
import { Grid } from '@mui/material';
// import quote from '../../../../Images/quote.png'
import banner from '../../../../Images/comBanner.png'

const typoCom = {
    margin: '50px auto',
    textAlign: 'center',
    fontWeight: 700
}
const gridCom = {
    marginY: '100px',
    direction: 'row',
    justifyContent: 'center',
    alignItems: 'center'
}
const cardCom = {
    maxWidth: 280,
    marginY: '10px',
    marginX: 'auto',
    border: '2px solid #44ab97',
    paddingY: '50px',
    borderRadius: '20px'
}
const headerCom = {
    textAlign: 'left',
    color: '#3768AF'
}
const contentCom = {
    textAlign: 'left',
    fontWeight: 500
}
const bannerImg = {
    background: `url(${banner})`
}

const Community = () => {
    return (
        <div style={{ backgroundColor: '#f3f5f9', margin: '100px 0px', padding: '20px 0px' }}>
            <Typography style={typoCom} variant="h4" sx={{ color: '#3768AF' }}>
                UniCourse Student Community
            </Typography>
            <Container style={bannerImg} sx={{ color: 'white', paddingY: '0.5px' }}>
                <Typography style={typoCom} variant="h2" >
                    5548+
                </Typography>
                <Typography style={typoCom} variant="h5">
                    Total number of students enrolled already since 2020
                </Typography>
            </Container>
            <Grid container sx={gridCom}>
                <Grid xs={12} sm={6} md={3} >
                    <Card sx={cardCom}>
                        {/* <img src={quote} style={{ width:'10%', backgroundColor:'#7f59b0' }} alt='quote' /> */}
                        <CardHeader sx={headerCom}
                            avatar={
                                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                    R
                                </Avatar>
                            }
                            title="Md. Motiur Rahman"
                            subheader="Location: United States"
                        />
                        <CardContent>
                            <Typography variant="body2" sx={contentCom}>
                                I appreciate the depth of seed data and transactions provided. Makes it so much easier for me to test and demo different capabilities.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid xs={12} sm={6} md={3} >
                    <Card sx={cardCom}>
                        <CardHeader sx={headerCom}
                            avatar={
                                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                    R
                                </Avatar>
                            }
                            title="Md. Motiur Rahman"
                            subheader="Location: United States"
                        />
                        <CardContent>
                            <Typography variant="body2" sx={contentCom}>
                                I appreciate the depth of seed data and transactions provided. Makes it so much easier for me to test and demo different capabilities.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid xs={12} sm={6} md={3} >
                    <Card sx={cardCom}>
                        <CardHeader sx={headerCom}
                            avatar={
                                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                    R
                                </Avatar>
                            }
                            title="Md. Motiur Rahman"
                            subheader="Location: United States"
                        />
                        <CardContent>
                            <Typography variant="body2" sx={contentCom}>
                                I appreciate the depth of seed data and transactions provided. Makes it so much easier for me to test and demo different capabilities.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </div>
    );
};

export default Community;