import React from 'react';
import AcademicCourses from '../../Shared/Navbar/AcademicCourses/AcademicCourses';
import Navbar from '../../Shared/Navbar/Navbar';
import Banner from '../Banner/Banner';
import Counseling from '../Counseling/Counseling';

const Home = () => {
    return (
        <div>
          <Navbar></Navbar>
          <Banner></Banner>  
          <AcademicCourses></AcademicCourses>
          <Counseling></Counseling>
        </div>
    );
};

export default Home;