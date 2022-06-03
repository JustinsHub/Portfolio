import { Link } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { GlobalBoxWrap, GlobalSubTitle } from "../styles/globalMUI";

const Contact: React.FC = () => {
    return (
    
             <GlobalBoxWrap sx={{textAlign: 'center'}}>
                 <Box>
                    <GlobalSubTitle>Contact</GlobalSubTitle>
                    <Box sx={{margin: '1rem'}}>
                        <Link href="mailto:contactjustincodes@gmail.com"
                        sx={{
                            color: '#dda73b',
                            textDecoration: 'none'
                        }}
                        >contactjustincodes@gmail.com
                        </Link>
                    </Box>
                 </Box>

            </GlobalBoxWrap>
    )
}

export default Contact