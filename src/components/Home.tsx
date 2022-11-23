import { Container, Grid, Link, Paper, Stack, Typography } from "@mui/material";
import React, { useRef } from "react";
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
import LazyShow from "./LazyShow";
import Footer from "./Footer";



const HomeBackgroundImage = styled(Box)({
        backgroundImage: `linear-gradient(rgba(255,255,255,0.6), rgba(255,255,255,0.6)), url(${HomeBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: '50% 0',
})

const Home: React.FC = () => {
    const myHome = useRef(null)
    const myAbout = useRef(null)
    const mySkills = useRef(null)
    const myProjects = useRef(null)
    const myContact = useRef(null)

    return (
        <section>
                <HomeBackgroundImage>
                <section>
                    <Navbar home={myHome} about={myAbout} projects={myProjects} skills={mySkills} contact={myContact}/>
                </section>
                        <Container ref={myHome}>
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
                                                                <Link href="mailto:contactjustincodes@gmail.com" sx={{
                                                                    color: 'black',
                                                                    fontSize: '14px',
                                                                    textDecoration: 'none'
                                                                }}>justin.zamora.swe@gmail.com
                                                                </Link>
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

                                                    <Stack direction="row" spacing={4} justifyContent="start" marginTop="1rem">
                                                        <Link href="https://github.com/JustinsHub" underline="none" target="_blank" color="inherit"><GitHubIcon/></Link>
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
                                        >
                                        </Box>
                                    </Grid>
                                </Grid>

                            </GlobalBoxWrap>
                        </Container>
                </HomeBackgroundImage>
            
                <Container>
                    <LazyShow xCoordinates={-50} yCoordinates={0}>
                        <section ref={myAbout}>
                            <About/>
                        </section>
                    </LazyShow>

                    <LazyShow xCoordinates={50} yCoordinates={0}>
                        <section ref={mySkills}>
                            <Skills/>
                        </section>
                    </LazyShow>

                    <LazyShow xCoordinates={0} yCoordinates={-50}>
                        <section ref={myProjects}>
                            <Projects/>
                        </section>
                    </LazyShow>

                    <LazyShow xCoordinates={0} yCoordinates={-50}>
                        <section ref={myContact}>
                            <Contact/>
                        </section>     
                    </LazyShow>

                    <section>
                        <Footer/>
                    </section>

                </Container>      
        </section>
    )
}

export default Home