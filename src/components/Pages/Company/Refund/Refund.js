import { Container, Typography } from '@mui/material';
import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';

const Refund = () => {
    return (
        <div style={{ backgroundColor: '#eff4ff' }}>
            <Navbar></Navbar>
            <Container sx={{ marginTop: 5, backgroundColor: 'white', padding: 2, borderRadius: '10px' }}>
                <Typography variant="h4" sx={{ width: '450px', marginX: 'auto', color: '#085078', backgroundColor: '#eff4ff', borderRadius: '35px', textAlign: 'center', fontWeight: 700, padding: 1 }}>
                    Refund Policy
                </Typography>
                <Typography variant="body1" sx={{ textAlign: 'left', marginTop: 5, marginBottom: 5 }} gutterBottom>
                    We want you to enjoy a smooth and valuable experience here at Silswa. However, if you feel that we have failed to do so in any way, do feel free to demand a refund within 48 hours after purchasing any course.
                    <br />
                    <br />
                    By requesting a refund, you agree to give us a chance to help you first. If we fail to help, you get your money back.
                </Typography>

                <Typography variant="h4" sx={{ color: '#085078', fontWeight: 700 }}>
                    How to get refund
                </Typography>
                <Typography variant="body1" sx={{ textAlign: 'left', marginTop: 2, marginBottom: 5 }} gutterBottom>
                    <ol>
                        <li>Get your order ID. You can get them in the ‘orders‘ section of your Billing Dashboard. For example- #4648</li>
                        <li>Fill out the form in this page below.</li>
                    </ol>
                </Typography>

                <Typography variant="h4" sx={{ color: '#085078', fontWeight: 700 }}>
                    You may not get refund if-
                </Typography>
                <ul>
                    <li>you request refund more than 48 hours after placing the order (as in purchasing the course)</li>
                    <li>you request refund without completing at least 15% of the course</li>
                    <li>you request refund after completing 100% of the course (meaning: once your certificate is already issued)</li>
                    <li>you download any or all of the resources/videos/materials of the course</li>
                    <li>you buy the course (or access to the course) from any third party seller</li>
                    <li>you purchase and request refund multiple courses over a short period of time</li>
                    <li>we do not consider your reasons honest or eligible enough</li>
                    <li>we find out that you are trying to abuse the refund-feature by any means</li>
                </ul>

                <Typography variant="h4" sx={{ color: '#085078', fontWeight: 700 }}>
                    Please note
                </Typography>
                <Typography variant="body1" sx={{ textAlign: 'left', marginTop: 2, marginBottom: 5 }} gutterBottom>
                    <ol>
                        <li>If we approve your refund request from our end, it takes on average 8-10 days for the Bank to process the transaction. </li>
                        <li>The bank charges a small portion of the refund amount as payment processing fee.</li>
                    </ol>
                </Typography>

                <Typography variant="h4" sx={{ color: '#085078', fontWeight: 700 }}>
                    Refund Request Form
                </Typography>
                <Typography variant="body1" sx={{ textAlign: 'left', marginTop: 2, marginBottom: 5 }} gutterBottom>
                    We are sorry you are not quite happy with the course and demanding a refund. Please let us know in details what went wrong or why you didn’t like the course. The more detailed your feedback is, the easier it will be for us to consider your request.
                </Typography>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Refund;