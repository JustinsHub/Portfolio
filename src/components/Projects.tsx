import React from "react";
import { GlobalBoxWrap, GlobalSubTitle } from "../styles/globalMUI";
import { Grid } from "@mui/material";
import { Box, styled } from "@mui/system";
import p1 from '../styles/images/assets/p1.png'
import p2 from '../styles/images/assets/p2.png'
import p3 from '../styles/images/assets/p3.png'

//fix the coordinates render for Y
//hover button and display on hover -> when clicked modal preview/explain of the website and live demo button

const ProjectBox = styled('img')({
    width: '100%', 
    borderRadius: '1rem',
    
    })

const Projects: React.FC = () => {
    return (
        <section>
             <GlobalBoxWrap sx={{textAlign: "center", marginTop: "10rem", marginBottom: "5rem"}}>
                <GlobalSubTitle m={5}>Projects</GlobalSubTitle>
                    <Grid container spacing={2} >
                        <Grid item xs={6} md={4}>
                            <Box sx={{
                                 backgroundColor: '#dda73b',
                                 borderRadius: '1rem',
                            }}>
                                <ProjectBox alt='project 1' src={p1}></ProjectBox>
                            </Box>
                        </Grid>
                        <Grid item xs={6} md={4}>
                            <Box sx={{
                                 backgroundColor: '#dda73b',
                                 borderRadius: '1rem',
                            }}>
                                <ProjectBox alt='project 2' src={p2}></ProjectBox>
                            </Box>
                        </Grid>
                        <Grid item xs={6} md={4}>
                            <Box sx={{
                                 backgroundColor: '#dda73b',
                                 borderRadius: '1rem',
                            }}>
                                <ProjectBox alt='project 3' src={p3}></ProjectBox>
                            </Box>
                        </Grid>
                    </Grid>


                   
            </GlobalBoxWrap>
        </section>
    )
}

export default Projects