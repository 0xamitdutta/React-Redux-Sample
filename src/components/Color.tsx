import { useState } from 'react'
import { TextField, Button } from '@mui/material'
import { useAppDispatch } from '../hooks'
import { changeColor } from '../features/themeReducer';

const Color = () => {
    const [color, setColor] = useState("");

    const dispatch = useAppDispatch();

    return (
        <>
            <div style={{ display: "flex", justifyContent: "center", gap: "30px", marginBottom: "50px" }}>
                <TextField
                    id="outlined-basic" label="Color" variant="outlined"
                    onChange={(event) => setColor(event.target.value)}
                />
                <Button
                    variant="contained"
                    onClick={() => {
                        dispatch(changeColor(color))
                    }}
                >
                    Color
                </Button>
            </div>
        </>
    )
}

export default Color