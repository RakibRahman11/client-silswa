import { Button, Grid, Typography } from '@mui/material';
import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../../hooks/useAuth';
import appointment from '../../../../Images/appointment.png'

const Counseling = () => {
    const { user } = useAuth()
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = (data) => {
        const userEmail = user?.email
        const date = new Date()
        const information = { ...data, date, userEmail }
        axios.post('https://hidden-earth-67301.herokuapp.com/counseling', information)
            .then(res => {
                console.log(res)
                alert('sure to add?');
                reset();
            })
    };
    return (
        <div style={{ backgroundColor: '#4285f4', margin: '80px 0px', textAlign: 'left', color: 'white', padding: '5%' }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Typography variant="h4">
                        Book an appointment today to get free counseling from our experts
                    </Typography>
                    <Typography variant="body1">
                        Fill out the form to get directions or career counseling related to academic and admission studies.
                    </Typography>
                    <img src={appointment} style={{ width: '80%' }} alt='' />
                </Grid>
                <Grid item xs={12} md={5} sx={{ borderRadius: '5px', backgroundColor: 'white', marginX: 'auto', paddingBottom: 5 }}>
                    <Typography variant="h5" sx={{ marginX: 'auto', color: 'black', fontWeight: 700, textAlign: 'center', marginY: 5 }}>
                        Book an appointment to get free counseling
                    </Typography>
                    <form onSubmit={handleSubmit(onSubmit)} style={{ paddingLeft: '7%' }}>
                        <input style={{ width: '90%', padding: '15px 7px', fontSize: 13, backgroundColor: '#f8f8f8', border: '0px' }} placeholder="Your Name"  {...register("name")} required />
                        <br /><br />

                        <input style={{ width: '90%', padding: '15px 7px', fontSize: 13, backgroundColor: '#f8f8f8', border: '0px' }} placeholder="Email address"  {...register("email")} required />
                        <br /><br />

                        <input style={{ width: '90%', padding: '15px 7px', fontSize: 13, backgroundColor: '#f8f8f8', border: '0px' }} placeholder="Contact Number" type="tel"  {...register("contact")} required />
                        <br /><br />

                        <input style={{ width: '90%', height: '100px', padding: '15px 7px', fontSize: 13, backgroundColor: '#f8f8f8', border: '0px' }} placeholder="Mention what you would like counseling for" type="text" {...register("text")} required />
                        <br /><br />

                        <Button type="submit" variant="outlined" sx={{ width: '90%', padding: '15px 7px', fontSize: 13, backgroundColor: '#085078', border: '0px', color: 'white' }}>Book the Appointment</Button>
                    </form>
                </Grid>
            </Grid>
            {/* #4285f4 */}
        </div>
    );
};

export default Counseling;