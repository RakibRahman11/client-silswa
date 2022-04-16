import { Grid, Typography } from '@mui/material';
import React from 'react';
import AcademicCourse from '../../AcademicCourse/AcademicCourse';
const courses = [
    {
        title: 'English Written Courses for Admission',
        classes: 10,
        facilities: ['Lecture sheet', 'Recorded Class', 'Test', 'Mentor Support'],
        YTLink: 'https://www.youtube.com/embed/MAyjZOL46Ck'
    },
    {
        title: 'English 1st Paper',
        classes: 30,
        facilities: ['Lecture sheet', 'Free Guide Book', 'Recorded Class', 'Test', 'Special Written Class'],
        YTLink: 'https://youtu.be/6RnXZPIczWY'
    },
    {
        title: 'University Admission Preparation',
        classes: 60,
        facilities: ['Lecture sheet', 'Recorded Class', 'Weekly & Monthly Test', 'Model Test', 'Written Class', 'Strategic Class', 'Problem Solving Class'],
        YTLink: 'https://youtu.be/EJ0Cy61xdbw'
    }
]
const AcademicCourses = () => {
    return (
        <div style={{ backgroundColor: '#eff4ff', paddingTop: '50px' }}>
            <Typography variant="h4" sx={{ border: '1px solid black', width: '350px', marginX: 'auto', color: '#085078', backgroundColor: 'white', borderRadius: '35px' }}>
                Academic Courses
            </Typography>
            <Grid container spacing={5}>
                {
                    courses.map(course => <AcademicCourse
                        key={course?.title}
                        course={course}
                    >
                    </AcademicCourse>)
                }
            </Grid>
        </div>
    );
};

export default AcademicCourses;