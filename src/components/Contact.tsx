import { Link, Stack } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { GlobalBoxWrap, GlobalSubTitle } from "../styles/globalMUI";
import GitHubIcon from "@mui/icons-material/GitHub";

const Contact: React.FC = () => {
    return (
    
             <GlobalBoxWrap sx={{textAlign: 'center'}}>
                 <Box sx={{margin: '7rem'}}>
                    <GlobalSubTitle>Contact Me</GlobalSubTitle>
                    <Box sx={{margin: '1rem'}}>
                        <Link href="mailto:contactjustincodes@gmail.com"
                        sx={{
                            color: '#dda73b',
                            textDecoration: 'none'
                        }}
                        >justin.zamora.swe@gmail.com
                        </Link>
                        <Stack direction="row" spacing={4} justifyContent="center" marginTop="1rem">
                            <Link href="https://github.com/JustinsHub" underline="none" target="_blank" color="inherit"><GitHubIcon/></Link>
                        </Stack>
                    </Box>
                 </Box>

            </GlobalBoxWrap>
    )
}

export default Contact