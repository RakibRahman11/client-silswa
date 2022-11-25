import React from 'react';
import { Grid, Typography } from '@mui/material';
import abdullah from '../../../../Images/instructor/abdullah.png'
import arifa from '../../../../Images/instructor/arifa.png'
import munna from '../../../../Images/instructor/munna.png'

// const divIns = {
//     color: 'white',
//     padding: '25px 10px',
//     width: '74%',
//     borderRadius: '20px',
//     margin: 'auto'
// }
const gridInstructor = {
    marginBottom: '100px',
    direction: "row",
    justifyContent: "center",
    alignItems: "center"
}
// const imgInstructor = {
//     width: '80%',
//     borderRadius: '20px',
//     margin: '40px 0px 0px 42px'
// }

const Instructors = () => {
    return (
        <div>
            <Typography sx={{ margin: '50px auto', textAlign: 'center', fontWeight: 700, color: '#3768AF' }} variant="h3" >
                Our Instructors
            </Typography>
            <Grid container sx={gridInstructor}>
                <Grid xs={12} sm={6} md={3} >
                    <img src={abdullah} style={{ width: '80%',height:'300px', borderRadius: '20px', margin: '40px 0px 0px 42px', backgroundColor: '#c3ace2' }} alt="Instructor" />
                    <div style={{ color: 'white', padding: '25px 10px', width: '74%', borderRadius: '20px', margin: 'auto', backgroundColor: '#825cb2' }}>
                        <Typography variant='h5' sx={{ fontWeight: 700, textAlign: 'center' }}>
                            Md. Abdullah
                        </Typography>
                        <Typography variant='h6' sx={{ textAlign: 'center' }}>
                            Educator
                        </Typography>
                    </div>
                </Grid>
                <Grid xs={12} sm={6} md={3} >
                    <img src={arifa} style={{ width: '80%', height:'300px', borderRadius: '20px', margin: '40px 0px 0px 42px', backgroundColor: '#ffe4ae' }} alt="Instructor" />
                    <div style={{ color: 'white', padding: '25px 10px', width: '74%', borderRadius: '20px', margin: 'auto', backgroundColor: '#fcb527' }}>
                        <Typography variant='h5' sx={{ fontWeight: 700, textAlign: 'center' }}>
                            Arifa
                        </Typography>
                        <Typography variant='h6' sx={{ textAlign: 'center' }}>
                            Educator
                        </Typography>
                    </div>
                </Grid>
                <Grid xs={12} sm={6} md={3} >
                    <img src={munna} style={{ width: '80%', height:'300px', borderRadius: '20px', margin: '40px 0px 0px 42px', backgroundColor: '#f7a0c3' }} alt="Instructor" />
                    <div style={{ color: 'white', padding: '25px 10px', width: '74%', borderRadius: '20px', margin: 'auto', backgroundColor: '#ea4d8c' }}>
                        <Typography variant='h5' sx={{ fontWeight: 700, textAlign: 'center' }}>
                            Munna
                        </Typography>
                        <Typography variant='h6' sx={{ textAlign: 'center' }}>
                            Educator
                        </Typography>
                    </div>
                </Grid>
                <Grid xs={12} sm={6} md={3} >
                    <img src={abdullah} style={{ width: '80%', height:'300px', borderRadius: '20px', margin: '40px 0px 0px 42px', backgroundColor: '#b3e1f3' }} alt="Instructor" />
                    <div style={{ color: 'white', padding: '25px 10px', width: '74%', borderRadius: '20px', margin: 'auto', backgroundColor: '#65c4ea' }}>
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