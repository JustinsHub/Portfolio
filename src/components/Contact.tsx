import { Link, Stack } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { GlobalBoxWrap, GlobalSubTitle } from "../styles/globalMUI";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';

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
                        >contactjustincodes@gmail.com
                        </Link>
                        <Stack direction="row" spacing={4} justifyContent="center" marginTop="1rem">
                            <Link href="https://www.linkedin.com/in/justincodes/" target="_blank" underline="none" color="inherit"><LinkedInIcon/></Link>
                            <Link href="https://github.com/JustinsHub" underline="none" target="_blank" color="inherit"><GitHubIcon/></Link>
                            <Link href="https://www.youtube.com/c/JustinZamora" underline="none" target="_blank" color="inherit"><YouTubeIcon/></Link>
                        </Stack>
                    </Box>
                 </Box>

            </GlobalBoxWrap>
    )
}

export default Contact