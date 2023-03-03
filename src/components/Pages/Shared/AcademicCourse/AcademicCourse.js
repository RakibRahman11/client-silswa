import { Button, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const AcademicCourse = (props) => {
    const { _id, title, price, author, colorCode } = props.course;
    return (
        <Grid item xs={12} md={4} >
            <Paper elevation={3} sx={{ borderRadius: 3 }}>
                <Typography variant="h6" sx={{ textAlign: 'center', padding: '40px', backgroundColor: `${colorCode}`, color: 'white' }} >
                    {title}
                </Typography>
                <Typography variant="h6" sx={{ padding: '10px 15px' }} >
                    {title}
                </Typography>
                <Typography variant="body1" sx={{ padding: '10px 15px' }}>
                    Instructor: {author}
                </Typography>
                <Typography variant="body2" sx={{ padding: '10px 15px' }}>
                    Course Fee: <p style={{ padding: '3px 10px', backgroundColor: `${colorCode}`, display: 'inline' }}>{price} BDT</p>
                </Typography>

                <Link to={`/courses/${_id}`} style={{ textDecoration: 'none', textAlign: 'center' }}>
                    <Button variant="contained" sx={{ width: '30%', padding: '5px 5px', fontSize: 16, backgroundColor: '#396db6', color: 'white', marginLeft: '30%', marginBottom: 2 }}>Join</Button>
                </Link>
            </Paper>
        </Grid>
    );
};

export default AcademicCourse;