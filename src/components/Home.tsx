import { Grid, Typography } from "@mui/material";
import React from "react";
import { GlobalBoxWrap, GlobalSubTitle } from "../styles/globalMUI";
import Navbar from "./Navbar";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";

const Home: React.FC = () => {
    return (
        <section>
            
            <section>
                <Navbar/>
            </section>
            
            <GlobalBoxWrap>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6} lg={6}>

                        <Typography sx={{fontSize: "2.5rem", fontWeight: "800"}}>Justin Zamora</Typography>
                        <GlobalSubTitle>Software Engineer</GlobalSubTitle>
                    </Grid>

                    <Grid item xs={0} md={6} lg={6}>
                        Profile Picture
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