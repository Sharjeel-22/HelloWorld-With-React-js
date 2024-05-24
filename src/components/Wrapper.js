import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

export default function Wrapper() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        console.log('You clicked submit.');
    }

    function onSubmit() {
        const obj = {
            firstName: firstName,
            lastName: lastName,
            email: email
        }
        console.log("Check :: ", obj);
        isEmpty();
    }
    function isEmpty() {
        setFirstName('');
        setLastName('');
        setEmail('');
    }

    return (
        <>
            <Container maxWidth="sm">
                <Box sx={{ bgcolor: '#cfe8fc', height: '40vh' }} >
                    <form onSubmit={handleSubmit}>
                        <h1>Hello World</h1>
                        <TextField id="standard-basic" label="First Name" variant="standard" value={firstName} onChange={e => setFirstName(e.target.value)} /><br />
                        <TextField id="standard-basic" label="First Name" variant="standard" value={lastName} onChange={e => setLastName(e.target.value)} /><br />
                        <TextField id="standard-basic" label="Email" variant="standard" value={email} onChange={e => setEmail(e.target.value)} /><br /><br /><br />
                        <Button variant="outlined" onClick={onSubmit}>Outlined</Button>
                    </form><br/><br/>
                    <Card sx={{ minWidth: 275, bgcolor: '#cfe8fc', height: '40vh', border:'1px solid red' }}>
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                <h1>User List </h1>
                            </Typography>
                            <Typography variant="h6" component="div">
                             {`First Name : ${firstName}`}
                            </Typography>
                            <Typography variant="h6" sx={{ mb: 1.5 }} color="text.secondary">
                            {`Last Name : ${lastName}`}
                            </Typography>
                            <Typography variant="h6">
                            {`Email : ${email}`}
                                {/* <br /> */}
                            </Typography>
                        </CardContent>
                        <CardActions>
                        </CardActions>
                    </Card>
                </Box>
            </Container>
        </>
    );
}
