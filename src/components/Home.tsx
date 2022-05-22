import { Container, Grid, Link, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import { GlobalBoxWrap, GlobalSubTitle } from "../styles/globalMUI";
import Navbar from "./Navbar";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import {Box, styled } from "@mui/system";
import ProfileImage from '../styles/images/PortfolioPicture.jpeg'
import HomeBackground from '../styles/images/HomeBackground.png'
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';

const HomeBackgroundImage = styled(Box)({
        backgroundImage: `linear-gradient(rgba(255,255,255,0.6), rgba(255,255,255,0.6)), url(${HomeBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: '50% 0',
})

const Home: React.FC = () => {
    return (
        <section>

            <HomeBackgroundImage>
            <section>
                <Navbar/>
            </section>
            
                <Container>
                    <GlobalBoxWrap marginTop={20}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={6} lg={6} sx={{display: "flex", justifyContent: "center"}}>
                                    <Box>
                                        <Paper elevation={3} sx={{
                                            width: "50%", 
                                            textAlign: "center", 
                                            padding: "0.5rem",
                                            backgroundColor: "#dda73b",
                                            borderRadius: "5rem",
                                            marginBottom: "1rem"
                                            }}>
                                                <Typography sx={{
                                                    color: "white",
                                                    fontWeight: 700
                                                }}>
                                                    Hello, I'm
                                                </Typography>
                                            </Paper>
                                        <Typography sx={{fontSize: "3.1rem", fontWeight: "800"}}>Justin Zamora</Typography>
                                        <GlobalSubTitle>Software Engineer</GlobalSubTitle>
                                        <Box marginTop="2rem">
                                            <Box marginTop="0.3rem">
                                                <Grid container spacing={1}>
                                                    <Grid item>
                                                    <EmailIcon/>
                                                    </Grid>
                                                    <Grid item>
                                                    <Typography fontSize="14px">contactjustincodes@gmail.com</Typography>
                                                    </Grid>
                                                </Grid>
                                            </Box>
                                            <Box marginTop="0.3rem">
                                                <Grid container spacing={1}>
                                                    <Grid item>
                                                    <LocationOnIcon/>
                                                    </Grid>
                                                    <Grid item>
                                                    <Typography fontSize="14px">Los Angeles, CA, United States</Typography>
                                                    </Grid>
                                                </Grid>
                                            </Box>

                                            <Stack direction="row" spacing={4} justifyContent="center" marginTop="1rem">
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
                                boxShadow: "0 0 0 1.2rem rgb(198,198,198, 0.6), 0 0 0 2.4rem rgb(218,218,219, 0.5)"
                            }}
                            ></Box>
                            </Grid>
                        </Grid>

                    </GlobalBoxWrap>
                </Container>
            </HomeBackgroundImage>

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