import React from 'react';
import { Grid, Typography } from '@mui/material';
import abdullah from '../../../../Images/f-member/abdullah.png'

const divIns = {
    color: 'white',
    backgroundColor: '#131124',
    padding: '25px 10px',
    width: '74%',
    borderRadius: '20px',
    margin: 'auto'
}
const gridInstructor = {
    marginBottom: '100px',
    direction: "row",
    justifyContent: "center",
    alignItems: "center"
}
const imgInstructor = {
    width: '80%',
    borderRadius: '20px',
    backgroundColor: '#131124',
    margin: '40px 0px 0px 42px'
}

const Instructors = () => {
    return (
        <div>
            <Typography sx={{ margin: '50px auto', textAlign: 'center', fontWeight: 700, color: '#3768AF' }} variant="h3" >
                Our Instructors
            </Typography>
            <Grid container sx={gridInstructor}>
                <Grid xs={12} sm={6} md={3} >
                    <img src={abdullah} style={imgInstructor} alt="Instructor" />
                    <div style={divIns}>
                        <Typography variant='h5' sx={{ fontWeight: 700, textAlign: 'center' }}>
                            Md. Abdullah
                        </Typography>
                        <Typography variant='h6' sx={{ textAlign: 'center' }}>
                            Educator
                        </Typography>
                    </div>
                </Grid>
                <Grid xs={12} sm={6} md={3} >
                    <img src={abdullah} style={imgInstructor} alt="Instructor" />
                    <div style={divIns}>
                        <Typography variant='h5' sx={{ fontWeight: 700, textAlign: 'center' }}>
                            Md. Abdullah
                        </Typography>
                        <Typography variant='h6' sx={{ textAlign: 'center' }}>
                            Educator
                        </Typography>
                    </div>
                </Grid>
                <Grid xs={12} sm={6} md={3} >
                    <img src={abdullah} style={imgInstructor} alt="Instructor" />
                    <div style={divIns}>
                        <Typography variant='h5' sx={{ fontWeight: 700, textAlign: 'center' }}>
                            Md. Abdullah
                        </Typography>
                        <Typography variant='h6' sx={{ textAlign: 'center' }}>
                            Educator
                        </Typography>
                    </div>
                </Grid>
                <Grid xs={12} sm={6} md={3} >
                    <img src={abdullah} style={imgInstructor} alt="Instructor" />
                    <div style={divIns}>
                        <Typography variant='h5' sx={{ fontWeight: 700, textAlign: 'center' }}>
                            Md. Abdullah
                        </Typography>
                        <Typography variant='h6' sx={{ textAlign: 'center' }}>
                            Educator
                        </Typography>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
};

export default Instructors;