import { Button, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const AcademicCourse = (props) => {
    const { _id, title, classes, facilities, embedId } = props.course;
    return (
        <Grid item xs={12} md={4} sx={{ borderRadius: 5 }}>
            <Paper elevation={3} sx={{ height: '100%' }}>
                <iframe
                    width="100%"
                    height="300"
                    src={`https://www.youtube.com/embed/${embedId}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                />
                <Typography variant="h6" sx={{ textAlign: 'center' }}>
                    {title}
                </Typography>
                <Typography variant="subtitle2" sx={{ textAlign: 'center' }}>
                    {classes} Live classes
                </Typography>
                <ul style={{ height: '180px' }}>
                    {
                        facilities.map(facility =>
                            <li>{facility}</li>)
                    }
                </ul>
                <Link to={`/courses/${_id}`} style={{ textDecoration: 'none' }}>
                    <Button variant="contained" sx={{ width: '40%', padding: '10px 5px', fontSize: 16, backgroundColor: '#085078', color: 'white', marginLeft: '30%', marginBottom: 2 }}>Details</Button>
                </Link>
            </Paper>
        </Grid>
    );
};

export default AcademicCourse;