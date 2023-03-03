import { Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import AcademicCourse from '../AcademicCourse/AcademicCourse';

const AllCourses = () => {
    const [courses, setCourses] = useState([])
    useEffect(() => {
        fetch('https://server-silswa.onrender.com/courses')
            .then(response => response.json())
            .then(data => setCourses(data))
    }, [])

    return (
        <div style={{ backgroundColor: '#f3f5f9', padding: '10px' }}>
            <Typography variant="h4" sx={{ width: '350px', marginX: 'auto', color: '#396db6', textAlign: 'center', fontWeight: 700 }}>
                Explore Courses
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

export default AllCourses;