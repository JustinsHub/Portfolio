import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { GlobalBoxWrap } from '../styles/globalMUI'

const Footer: React.FC = () => { 
    return (
        <GlobalBoxWrap>
            <Box m={7} sx={{textAlign: 'center'}}>
                <Typography sx={{fontSize: '0.7rem'}}>
                    &copy; 2022 · All Rights Reserved.
                </Typography>
            </Box>
        </GlobalBoxWrap>
    )
}

export default Footer