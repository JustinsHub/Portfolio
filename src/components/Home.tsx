import { Grid, Link, Stack, Typography } from "@mui/material";
import React from "react";
import { GlobalBoxWrap, GlobalSubTitle } from "../styles/globalMUI";
import Navbar from "./Navbar";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import { border, Box, styled } from "@mui/system";
import ProfileImage from '../styles/images/PortfolioPicture.jpeg'
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Home: React.FC = () => {
    return (
        <section>
            <section>
                <Navbar/>
            </section>
            
            <GlobalBoxWrap marginTop={7}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6} lg={6} sx={{display: "flex", justifyContent: "center"}}>
                            <Box>
                                <Typography sx={{fontSize: "2.5rem", fontWeight: "800"}}>Justin Zamora</Typography>
                                <GlobalSubTitle>Software Engineer</GlobalSubTitle>
                                <Box marginTop="2rem">
                                    <Box marginTop="0.3rem">
                                        <Grid container spacing={1}>
                                            <Grid item>
                                            <EmailIcon/>
                                            </Grid>
                                            <Grid item>
                                            <Typography>contactjustincodes@gmail.com</Typography>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                    <Box marginTop="0.3rem">
                                        <Grid container spacing={1}>
                                            <Grid item>
                                            <LocationOnIcon/>
                                            </Grid>
                                            <Grid item>
                                            <Typography>Los Angeles, CA, United States</Typography>
                                            </Grid>
                                        </Grid>
                                    </Box>

                                    <Stack direction="row" spacing={2} justifyContent="center" marginTop="1rem">
                                        <Link href="https://www.linkedin.com/in/justincodes/" target="_blank" underline="none" color="inherit"><LinkedInIcon/></Link>
                                        <Link href="https://github.com/JustinsHub" underline="none" target="_blank" color="inherit"><GitHubIcon/></Link>
                                        <Link href="https://www.youtube.com/c/JustinZamora" underline="none" target="_blank" color="inherit"><YouTubeIcon/></Link>
                                    </Stack>
                                </Box>
                            </Box>
                    </Grid>
                    <Grid item xs={12} md={6} lg={6} sx={{display: "flex", justifyContent: "center"}}>
                       <Box component="img" alt="portfolio picture" src={ProfileImage}
                       sx={{
                           width: "auto",
                           height: "35%",
                           borderRadius: "50%",
                           border: 10,
                           borderColor: "#DADADA"
                       }}
                       ></Box>
                    </Grid>
                </Grid>
            </GlobalBoxWrap>

            <section>
                <About/>
            </section>

            <section>
                <Skills/>
            </section>

            <section>
                <Projects/>
            </section>

            <section>
                <Contact/>
            </section>
        </section>
    )
}

export default Home