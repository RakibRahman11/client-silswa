import React from 'react';
import AcademicCourses from '../../Shared/AcademicCourses/AcademicCourses';
import Featured from '../../Shared/Featured/Featured';
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
          <Featured></Featured>
        </div>
    );
};

export default Home;