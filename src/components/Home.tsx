import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Navbar from "./Navbar";

const Home: React.FC = () => {

    //box each component 25rem height background white grid 6/6
    //Typeography on home
    return (
        <section>
            <Navbar/>
            
            <Box
             sx={{
                width: "auto",
                height: "25rem",
                backgroundColor: 'lightcoral'
              }}>

            <Grid container spacing={2}>
                <Grid item xs={12} md={6} lg={6}>

                    <Typography sx={{fontSize: "2rem", fontWeight: "800"}}>Justin Zamora</Typography>
                    Software Engineer
                </Grid>

                <Grid item xs={0} md={6} lg={6}>
                    Profile Picture
                </Grid>
            </Grid>
            </Box>
        </section>
    )
}

export default Home