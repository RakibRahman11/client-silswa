import { Container, Typography } from '@mui/material';
import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';

const PrivacyPolicy = () => {
    return (
        <div style={{backgroundColor:'#eff4ff'}}>
            <Navbar></Navbar>
            <Container sx={{ marginTop: 5, backgroundColor:'white', padding:2, borderRadius:'10px' }}>
                <Typography variant="h4" sx={{ width: '450px', marginX: 'auto', color: '#085078', backgroundColor: '#eff4ff', borderRadius: '35px', textAlign: 'center', fontWeight: 700, padding: 1 }}>
                    Privacy Policy
                </Typography>
                <Typography variant="body1" sx={{ textAlign: 'left', marginTop: 5, marginBottom: 5 }} gutterBottom>
                    We, Silswa Limited, incorporated under the Bangladeshi Companies Act (Act XVIII), of 1994 (hereinafter referred to as “Company”), with the incorporation number C-173558/2021, trade license number TRAD/DSCC/007159/2021, is committed to ensuring your privacy in relation to the security of your personal information. To guarantee our ability to access your services, we may collect and sometimes share your information. In order to further safeguard your privacy, we give this notice that details our information practices and the options you have when it comes to the collection and use of your information. In order to ensure that all users of the website, https://silswa.com/ is aware of the privacy policy that governs the use of the website, we advise you to read the Privacy Policy and accept the terms and conditions contained herein by logging into the website. You must agree to our Privacy Policy, which covers the collecting and use of your personal information, or you are not permitted to use the Website. You can contact our Customer Support if you have any questions or objections about this privacy policy at supprt@silswa.com
                </Typography>

                <Typography variant="h4" sx={{ color: '#085078', fontWeight: 700 }}>
                    1. DEFINITIONS
                </Typography>
                <Typography variant="body1" sx={{ textAlign: 'left', marginTop: 2, marginBottom: 5 }} gutterBottom>
                    “We”, “Our”, and “Us” – Refers to the creators of this privacy policy.
                    <br />
                    <br />
                    “You”, “Your”, “Yourself” and “User” – Refers to natural and legal individuals who use the Website.
                    <br />
                    <br />
                    “Website” – Refers to the official website of Silswa created by Silswa Limited
                    <br />
                    <br />
                    “Personal Information” – Refers to any personally identifiable information that We may collect from You.
                    <br />
                    <br />
                    “Third Parties” – Refers to any website, company, or individual apart from the user and the creator of the Website.
                </Typography>

                <Typography variant="h4" sx={{ color: '#085078', fontWeight: 700 }}>
                    2. OVERVIEW
                </Typography>
                <Typography variant="body1" sx={{ textAlign: 'left', marginTop: 2, marginBottom: 5 }} gutterBottom>
                    We take the responsibility to respect your private information online. We further acknowledge the need to conserve and regulate the information you share with us that is identifiable personally (“personal information”). The information which we consider as personal about you includes but is not confined to your name, address, e-mail address, phone number, or other contact details. You must provide the following information, but it is not limited to: phone number; bank information; date of birth; class, school, subjects, and syllabus; e-mail address in order to buy a product from our website. This Privacy Policy also applies to data obtained from users who are not recorded as members, including but not limited to surfing behavior, pages viewed, etc. In addition, the Website requests permit you to link your Silswa Account to your Social Account, and if you have provided permission to link the Accounts, the information shall be collected straight from your social media account.
                </Typography>

                <Typography variant="h4" sx={{ color: '#085078', fontWeight: 700 }}>
                    3. User Provided Information
                </Typography>
                <Typography variant="body1" sx={{ textAlign: 'left', marginTop: 2, marginBottom: 5 }} gutterBottom>
                    The Website/Services/Products obtains the information you provide when you register for the Services or products. When you register with us, you generally provide (a) your name, age, e-mail address, address, phone number, password, and educational interests of your ward; (b) transaction-related information such as when making purchases, responding to offers, or using the website (c) information you provide us when you contact us for help; (d) information you enter into our system when using the Website/Services/Products, such as while asking doubts, participating in discussions and taking tests. This information shall be regarded as ‘Personal Information’. In order to give you the service, important information, the required notifications, and marketing promotions, we can use the Information from time to time. We will ask you if we need additional information that will identify you personally (personal information). We will not differentiate between those who use the device to access the request, site, or services, or products, provided that the credentials match your login/access credentials. It is essential that you have logged into it using your own credentials to make full use of the website/services/products and to enable your information to be accurately captured in the website/services/products.
                </Typography>

                <Typography variant="h4" sx={{ color: '#085078', fontWeight: 700 }}>
                    4. Automatically Collected Information
                </Typography>
                <Typography variant="body1" sx={{ textAlign: 'left', marginTop: 2, marginBottom: 5 }} gutterBottom>
                    In addition, the website/products/devices can automatically collect certain data, including, but not limited to, the mobile device types that you use, your mobile device unique device ID, your mobile operating device IP address, your mobile browser type and the use of the website/services/products information. We collect other relevant information according to the authorisations you give as is the case for most websites. For payment of products and services, we use an outside credit card processing and payment gateway company. For any other purpose, these companies do not retain, share, store or use personal information.
                </Typography>

                <Typography variant="h4" sx={{ color: '#085078', fontWeight: 700 }}>
                    5. HOW INFORMATION IS COLLECTED
                </Typography>
                <Typography variant="body1" sx={{ textAlign: 'left', marginTop: 2, marginBottom: 5 }} gutterBottom>
                    We will determine the purpose of collecting the information before or when personal information is obtained. Unless we have the consent or legal requirements of the applicable personnel, we only collect and use personal data for the purposes specified by us and for other compatible purposes. For these purposes, we will only conserve personal information for as long as is essential. With the knowledge or consent of the applicable personnel, we collect personal information in a lawful and fair manner as appropriate. Personal data shall be appropriate to the purposes for which it is used and shall, to the extent needed for those purposes, be accurate, complete and updated.
                </Typography>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default PrivacyPolicy;