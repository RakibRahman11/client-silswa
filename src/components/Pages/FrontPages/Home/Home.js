import React from 'react';
import AcademicCourses from '../../Shared/AcademicCourses/AcademicCourses';
import Footer from '../../Shared/Footer/Footer';
import Messenger from '../../Shared/Messenger/Messenger';
import Navbar from '../../Shared/Navbar/Navbar';
import Partners from '../../Shared/Partners/Partners';
import AboutYT from '../AboutYT/AboutYT';
import Banner from '../Banner/Banner';
import Community from '../Community/Community';
import Features from '../Features/Features';
import Instructors from '../Instructors/Instructors';
import Useful from '../Useful/Useful';

const Home = () => {
    return (
        <div>
          <Navbar></Navbar>
          <Banner></Banner>
          <AboutYT></AboutYT>
          <AcademicCourses></AcademicCourses>
          <Useful></Useful>
          <Community></Community>
          <Instructors></Instructors>
          <Partners></Partners>
          <Features></Features>
          <Messenger></Messenger>
          <Footer></Footer>
        </div>
    );
};

export default Home;