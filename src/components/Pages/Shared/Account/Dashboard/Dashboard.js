import { Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Navbar from '../../Navbar/Navbar';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import useAuth from '../../../../../hooks/useAuth';
import { Link } from 'react-router-dom';


const Dashboard = () => {
    const [add, setAdd] = useState([])
    const user = useAuth()
    const mail = user.user.email

    useEffect(() => {
        fetch('https://server-silswa.onrender.com/checkout')
            .then(response => response.json())
            .then(data => setAdd(data))
    }, [])

    const find = add.filter(item => item.userEmail === mail)
    return (
        <div>
            <Navbar></Navbar>
            <Container>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Order ID</TableCell>
                                <TableCell align="right">Course Name</TableCell>
                                <TableCell align="right">Price</TableCell>
                                <TableCell align="right">Payment status</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {find.map((row) => (
                                <TableRow
                                    key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {row._id}
                                    </TableCell>
                                    <TableCell align="right">{row.info[0].title}</TableCell>
                                    <TableCell align="right">{row.info[0].offerPrice}</TableCell>
                                    <TableCell align="right">{row.payment ?
                                        'Paid'
                                        :
                                        <Link to={`/payment/${row._id}`}>Make Payment</Link>
                                    }</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
        </div>
    );
};

export default Dashboard;