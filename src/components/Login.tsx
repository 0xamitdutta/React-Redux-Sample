import { useState } from 'react'
import { TextField, Typography, Button } from '@mui/material';
import { useAppDispatch } from '../hooks'
import { login, logout } from '../features/userReducer'

const Login = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const dispatch = useAppDispatch();

    return (
        <>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "20px", marginBottom: "50px" }}>
                <Typography variant="body1" color="initial">CONTENT FORM</Typography>
                <div>
                    <div style={{ display: "flex", gap: "20px" }}>
                        <TextField
                            id="firstName"
                            label="FirstName"

                            onChange={(event) => setFirstName(event.target.value)}
                        />
                        <TextField
                            id="lastName"
                            label="LastName"

                            onChange={(event) => setLastName(event.target.value)}
                        />
                        <Button onClick={() => {
                            dispatch(login({
                                firstName: firstName,
                                lastName: lastName 
                            }))
                        }}>Login</Button>
                        <Button onClick={() => {
                            dispatch(logout())
                        }}>Logout</Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login