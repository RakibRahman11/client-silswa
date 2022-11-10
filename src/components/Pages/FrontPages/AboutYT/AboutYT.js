import React from 'react';
import { Grid, Typography, Container } from '@mui/material';

const AboutYT = () => {
    return (
        <Container sx={{ marginY: '100px' }}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={6}>
                    <iframe
                        width="100%"
                        height="300px"
                        src={`https://www.youtube.com/embed/vIUhS0wJHwE`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title="Embedded youtube"
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={6} sx={{ marginTop: '50px' }}>
                    <Typography variant="h5" sx={{ textAlign: 'justify', margin: '30px 20%', fontWeight: 700, color: '#3768AF' }}>
                        We dream to make your higher studies easier
                    </Typography>
                    <Typography variant="h6" sx={{ textAlign: 'justify', marginLeft: {md:'20%',xs:'14%'}, fontWeight: 700, display: 'inline', backgroundColor: '#3768AF', padding: '10px 25px', borderRadius: '8px', color: 'white' }}>
                        Learn more about us
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    );
};

export default AboutYT;