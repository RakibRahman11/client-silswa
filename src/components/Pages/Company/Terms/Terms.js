import { Container, Typography } from '@mui/material';
import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';

const Terms = () => {
    return (
        <div style={{ backgroundColor: '#eff4ff' }}>
            <Navbar></Navbar>
            <Container sx={{ marginTop: 5, backgroundColor: 'white', padding: 2, borderRadius: '10px' }}>
                <Typography variant="h4" sx={{ width: '450px', marginX: 'auto', color: '#085078', backgroundColor: '#eff4ff', borderRadius: '35px', textAlign: 'center', fontWeight: 700, padding: 1 }}>
                    Terms and Conditions
                </Typography>

                <Typography variant="h4" sx={{ color: '#085078', fontWeight: 700 }}>
                    Accounts
                </Typography>
                <Typography variant="body1" sx={{ textAlign: 'left', marginTop: 2, marginBottom: 5 }} gutterBottom>
                    You need an account for most activities on our platform, including purchasing products and enrolling in a course. When setting up and maintaining your account, you must provide and continue to provide accurate and complete information, including a valid email address. You have complete responsibility for your account and everything that happens on your account, including for any harm or damage, to us or anyone else caused by someone using your account without your permission. This means you need to be careful with your password. You may not transfer your account to someone else or use someone else’s account without their authorization. If you contact us to request access to an account, we will not grant you such access until you can provide us the login credential information for that account. In the event of the death of a user, the account of that user will be terminated.
                    <br />
                    <br />
                    If you share your account login credential with someone else, you are solely accountable for what happens with your account and Silswa will not negotiate in disputes between students who have shared account login credentials. You must inform us immediately upon realizing that someone else may be using your account without your permission by contacting our Support Team. Our team may request some information from you to confirm that you are indeed the owner of that account.<br />
                    <br />
                </Typography>

                <Typography variant="h4" sx={{ color: '#085078', fontWeight: 700 }}>
                    Payments, Credits and Refunds
                </Typography>
                <Typography variant="body1" sx={{ textAlign: 'left', marginTop: 2, marginBottom: 5 }} gutterBottom>
                    We regularly run promotions and sales for our website/products/services and specific products/services are only available at discounted prices for a set period. The price applicable to a products/services will be the price at the time you complete your purchase of the course. Any price offered for a products/services may also be different when you are logged into your account from the price available to users who aren’t registered or logged in, because some of our promotions will be available to new registered users only.
                </Typography>

                <Typography variant="h4" sx={{ color: '#085078', fontWeight: 700 }}>
                    Disclaimers:
                </Typography>
                <Typography variant="body1" sx={{ textAlign: 'left', marginTop: 2, marginBottom: 5 }} gutterBottom>
                    It may happen that our platform is down, either for planned maintenance or because something goes down with the site. It may happen that one of our instructors is making misleading statements in their course. It may also happen that we encounter security issues. You accept that you will not have any recourse against us in any of these types of cases where things don’t work out right. In legal, more complete language, the Services and their content are provided on an “as is” and “as available” basis. We and our affiliates, suppliers, partners, and agents make no representations or warranties about the suitability, reliability, availability, timeliness, security, lack of errors, or accuracy of the Services or their content, and expressly disclaim any warranties or conditions, including implied warranties of merchantability, fitness for a particular purpose, title, and non-infringement. We and our affiliates, suppliers, partners, and agents make no warranty that you will obtain specific results from use of the Services. Your use of the services (including any content) is entirely at your own risk.
                    <br />
                    <br />
                    We may decide to cease making available certain features of the Services at any time and for any reason. Under no circumstances will Silswa or its affiliates, suppliers, partners or agents be held liable for any damages due to such interruptions or lack of availability of such features.
                    <br />
                    <br />
                    We are not responsible for delay or failure of our performance of any of the services caused by events beyond our reasonable control, like an act of war, hostility, or sabotage; natural disaster; electrical, internet, or telecommunication outage; or government restrictions.
                </Typography>

                <Typography variant="h4" sx={{ color: '#085078', fontWeight: 700 }}>
                    How to Contact Us
                </Typography>
                <Typography variant="body1" sx={{ textAlign: 'left', marginTop: 2, marginBottom: 5 }} gutterBottom>
                    The best way to get in touch with us is to contact our Support Team. We'd love to hear your questions, concerns, and feedback about our Platform. We will continue our work to improve the Silswa platform to ensure best experience. Mail us at <span style={{color: '#085078'}}>support@silawa.com</span>. You may contact us physically. Office Address - <span style={{color: '#085078'}}>164, Sonargaon Road, Hatirpool, Dhaka – 1205.</span>
                </Typography>

            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Terms;