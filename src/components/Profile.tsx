import React from 'react'
import Typography from '@mui/material/Typography'
import { useAppSelector, useAppDispatch } from '../hooks'

const Profile = () => {
    const user = useAppSelector((state) => state.user.value);

    return (
        <>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Typography variant="body1" color="initial">Username: {user.username}</Typography>
                <Typography variant="body1" color="initial">Password: {user.password}</Typography>
            </div>
        </>
    )
}

export default Profile