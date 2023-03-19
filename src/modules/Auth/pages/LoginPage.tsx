import OverviewWrapper from '@app/components/common/OverviewWrapper'
import { Container, Box, Typography, TextField, Link, Alert } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useNavigate } from 'react-router-dom'
import useLogin from '../hooks/useLogin'
import { LoadingButton } from '@mui/lab'
import useAuthState from '../hooks/useAuthState'


function LoginPage() {

    const navigate = useNavigate();
    const [userAccount] = useAuthState();
    const [
        error,
        loading,
        loggedInUser,
        signInWithEmailAndPassword,
    ] = useLogin();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    useEffect(() => {
        if (userAccount) {
            console.log("Navigating to Home ...");
            
            // Replace True
            navigate('/', {replace: true});
        }
    }, [userAccount]);


    const onSubmit = async (event: React.SyntheticEvent<HTMLFormElement>) => {
        event.preventDefault();



        // Send the login request
        console.log("Logging in ...");

        await signInWithEmailAndPassword(email, password);


    }


    return (
        <OverviewWrapper>
            <Helmet>
                <title>Login</title>
            </Helmet>
            <Container maxWidth="xs" sx={{ mt: 10 }}>
                <Typography variant='h5' component="h1" gutterBottom textAlign="center">
                    Login
                </Typography>

                {error && <Alert severity="error" sx={{ my: 2 }}>{error}</Alert>}

                <Box component="form" onSubmit={onSubmit}>

                    {/* Email Field */}
                    <TextField
                        label='Email'
                        variant='outlined'
                        autoComplete='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        sx={{ mt: 1 }}
                        fullWidth
                    />


                    {/* Password Field */}
                    <TextField
                        label='Password'
                        variant='outlined'
                        type='password'
                        autoComplete='new-password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        sx={{ mt: 3 }}
                        fullWidth
                    />

                    <LoadingButton variant="contained" type="submit" sx={{ mt: 3 }} fullWidth loading={loading} >Login</LoadingButton>

                    <Box sx={{ mt: 2 }}>
                        Don't have an account yet? <Link href="/register">Register</Link>
                    </Box>

                </Box>


            </Container>
        </OverviewWrapper>
    )
}

export default LoginPage