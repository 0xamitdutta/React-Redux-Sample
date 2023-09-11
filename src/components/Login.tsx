import React, { useState } from 'react'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'


const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = () => {

    }

    return (
        <>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "20px"}}>
                <Typography variant="body1" color="initial">CONTENT FORM</Typography>
                <div>
                    <form onSubmit={handleSubmit} style={{ display: "flex", gap: "20px" }}>
                        <TextField
                            id="username"
                            label="Username"
                            value={username}
                            onChange={(event) => { setUsername(event.target.value) }}
                        />
                        <TextField
                            id="password"
                            label="Password"
                            value={password}
                            onChange={(event) => { setPassword(event.target.value) }}

                        />
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login