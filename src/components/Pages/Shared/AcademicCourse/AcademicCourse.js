import { Grid, Paper, Typography } from '@mui/material';
import React from 'react';

const AcademicCourse = (props) => {
    const { title, classes, facilities, embedId } = props.course;
    return (
        <Grid item xs={6} md={4} sx={{ borderRadius: 5 }}>
            <Paper elevation={3}>
                <iframe
                    width="100%"
                    height="300"
                    src={`https://www.youtube.com/embed/${embedId}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                />
                <Typography variant="h6">
                    {title}
                </Typography>
                <Typography variant="subtitle2">
                    {classes} Live classes
                </Typography>
            </Paper>
        </Grid>
    );
};

export default AcademicCourse;