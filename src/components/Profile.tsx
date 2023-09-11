import React from 'react'
import Typography from '@mui/material/Typography'
import { useAppSelector } from '../hooks'

const Profile = () => {
    const user = useAppSelector((state) => state.user.value);

    return (
        <>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Typography variant="body1" color="initial">FirstName: {user.firstName}</Typography>
                <Typography variant="body1" color="initial">LastName: {user.lastName}</Typography>
            </div>
        </>
    )
}

export default Profile