import React from 'react';
import AcademicCourses from '../../Shared/AcademicCourses/AcademicCourses';
import Featured from '../../Shared/Featured/Featured';
import Footer from '../../Shared/Footer/Footer';
import Messenger from '../../Shared/Messenger/Messenger';
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
          <Messenger></Messenger>
          <Footer></Footer>
        </div>
    );
};

export default Home;