import { Grid } from "@mui/material";
import React from "react";
import { GlobalBoxWrap, GlobalSubTitle } from "../styles/globalMUI";

const Projects: React.FC = () => {
    return (
        <section>
             <GlobalBoxWrap>
                <GlobalSubTitle>Projects</GlobalSubTitle>
                <Grid container spacing={2} >
                    <Grid item xs={6} md={4}>
                        Project 1
                    </Grid>
                    <Grid item xs={6} md={4}>
                        Project 2
                    </Grid>
                    <Grid item xs={6} md={4}>
                        Project 3
                    </Grid>
                    </Grid>
            </GlobalBoxWrap>
        </section>
    )
}

export default Projects