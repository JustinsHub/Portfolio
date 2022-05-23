import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { GlobalBoxWrap, GlobalFade, GlobalSubTitle } from "../styles/globalMUI";
import AboutImage from '../styles/images/AboutImage.png'
import DownloadIcon from '@mui/icons-material/Download';





//TODO 
//About me sizing
//About me mobile size
//Download CV library?

const About: React.FC = () => {
    return (
        <section>
            <GlobalBoxWrap>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6} lg={6} sx={{display: "flex", justifyContent: "center"}}>
                            <Box component="img" alt="about me picture" src={AboutImage}
                            sx={{
                                width: "auto",
                                height: "65%",
                                borderRadius: "30%"
                            }}
                            >
                            </Box>
                    </Grid>
                    <Grid item xs={12} md={6} lg={6} sx={{display: "flex", justifyContent: "center"}}>
                        <Box>
                            <GlobalSubTitle>About Me</GlobalSubTitle>
                                <Box marginTop="1rem">
                                    <Typography fontSize="14px">
                                        Hello, I'm Justin. A software engineer based in Los Angeles. I’m a self taught developer that transitioned to Springboard’s Software Engineering Career Track to help guide and further my skills sets as a Full Stack Software Engineer. 

                                        I am confident with my skills to compete within this field and be a valuable addition to the company that sees my drive and determination and decides to bring me on their team. I’m hoping to make a big impact in tech.
                                    </Typography>
                                </Box>
                                <Box marginTop="2rem">
                                    <Button variant="contained" sx={{
                                        backgroundColor: "#dda73b",
                                        borderRadius: "5rem", 
                                        fontWeight: 700, 
                                        textTransform: "none",
                                        paddingLeft: "2rem",
                                        paddingRight: "1.4rem"
                                }}>Download CV<DownloadIcon sx={{fontSize: "1.2rem", margin: "0.2rem"}}/></Button>
                                </Box>
                        </Box>
                    </Grid>
                </Grid>
            </GlobalBoxWrap>
        </section>
    )
}

export default About