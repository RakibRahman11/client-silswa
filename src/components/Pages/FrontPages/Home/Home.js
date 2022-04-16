import React from 'react';
import AcademicCourses from '../../Shared/Navbar/AcademicCourses/AcademicCourses';
import Navbar from '../../Shared/Navbar/Navbar';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
          <Navbar></Navbar>
          <Banner></Banner>  
          <AcademicCourses></AcademicCourses>
        </div>
    );
};

export default Home;