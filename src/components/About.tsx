import { Button, Grid, Link, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { GlobalBoxWrap, GlobalSubTitle } from "../styles/globalMUI";
import AboutImage from '../styles/images/AboutImage.png'
import DownloadIcon from '@mui/icons-material/Download';
import Resume from '../files/Software Engineer Resume (Justin Zamora).pdf'




//TODO 
//About me sizing
//About me mobile size

const About: React.FC = () => {
    return (
        <section>
            <GlobalBoxWrap>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6} lg={6} sx={{display: "flex", justifyContent: "center"}}>
                        <Box sx={{width: "auto", height: "70%"}}>
                            <Box component="img" alt="about me picture" src={AboutImage}
                            sx={{
                                width: "auto",
                                height: "100%",
                                borderRadius: "30%"
                            }}
                            >
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6} lg={6} sx={{display: "flex", justifyContent: "center"}}>
                        <Box>
                            <GlobalSubTitle>About Me</GlobalSubTitle>
                                <Box marginTop="1rem">
                                    <Typography fontSize="14px" width="75%">
                                        Hello there. I'm Justin and I'm a software engineer based in Los Angeles. I’m also a self taught developer that transitioned to Springboard’s Software Engineering Career Track to help guide and further my skills sets and can happily call myself a full stack software engineer. 
                                      
                                        With my skills, I'm able to compete within this field and be a valuable addition to the company that sees my drive and determination and decides to bring me on their team. I’m hoping to make a big impact in tech.
                                    </Typography>
                                </Box>
                                <Box marginTop="2rem">
                                    <Link href={Resume} underline="none" color="inherit" target="_blank" download="Software Engineer Resume (Justin Zamora).pdf">
                                        <Button variant="contained" sx={{
                                            backgroundColor: "#dda73b",
                                            borderRadius: "5rem", 
                                            fontWeight: 700, 
                                            textTransform: "none",
                                            paddingLeft: "2rem",
                                            paddingRight: "1.4rem",
                                            '&:hover': {
                                                backgroundColor: "#A6802E"
                                            }
                                            }}>Download CV<DownloadIcon sx={{fontSize: "1.2rem", margin: "0.2rem"}}/>
                                        </Button>
                                    </Link>
                                </Box>
                        </Box>
                    </Grid>
                </Grid>
            </GlobalBoxWrap>
        </section>
    )
}

export default About