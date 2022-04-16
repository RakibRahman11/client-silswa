import { Grid, Paper, Typography } from '@mui/material';
import React from 'react';

const AcademicCourse = (props) => {
    const { title, classes, facilities, YTLink } = props.course;
    return (
        <Grid item xs={6} md={4}>
            <Paper elevation={3}>
            <Typography variant="h6">
                {title}
            </Typography>
            <video src={YTLink} width="400" controls></video>
            </Paper>
        </Grid>
    );
};

export default AcademicCourse;