import React from 'react'
import {Box,Stack,Typography} from '@mui/material'
import Logo from '../assets/images/logo-1.jpg'
const Footer = () => {
    return (
        <Box mt="80px" bgcolor="#fff3f4">
            <Stack alignItems="center">
                <img src={Logo} alt="logo" width="100px" height="100px" mt="80px"/>
                <Typography  mt="30px" mb="70px" sx={{fontSize:{lg:'20px',sm:'20px'}}}>
                     Made with love by Namrata Patankar
                </Typography>
            </Stack>

        </Box>
    )
}

export default Footer
