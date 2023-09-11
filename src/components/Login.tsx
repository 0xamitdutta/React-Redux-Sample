import React, { useState } from 'react'
import { TextField, Typography, Button } from '@mui/material';


const Login = () => {
    const handleSubmit = () => {

    }

    return (
        <>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "20px", marginBottom: "50px" }}>
                <Typography variant="body1" color="initial">CONTENT FORM</Typography>
                <div>
                    <form onSubmit={handleSubmit} style={{ display: "flex", gap: "20px" }}>
                        <TextField
                            id="username"
                            label="Username"
                        />
                        <TextField
                            id="password"
                            label="Password"
                        />
                        <Button type="submit">Login</Button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login