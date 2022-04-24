import { Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import AcademicCourse from '../AcademicCourse/AcademicCourse';

const AcademicCourses = () => {
    const [courses, setCourses] = useState([])
    useEffect(() => {
        fetch('https://hidden-earth-67301.herokuapp.com/courses')
            .then(response => response.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div style={{ backgroundColor: '#eff4ff', paddingTop: '50px' }}>
            <Typography variant="h4" sx={{ width: '350px', marginX: 'auto', color: '#085078', backgroundColor: 'white', borderRadius: '35px', textAlign: 'center' }}>
                Academic Courses
            </Typography>
            <Grid container spacing={5} sx={{ marginY: 1, paddingX: 3 }}>
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