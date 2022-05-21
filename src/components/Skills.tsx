import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { GlobalBoxWrap, GlobalSubTitle } from "../styles/globalMUI";
import SkillsImage from '../styles/images/SkillsImage.png'

const Skills: React.FC = () => {
    return (
        <section>
            <GlobalBoxWrap>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6} lg={6} sx={{display: "flex", justifyContent: "center"}}>
                        <GlobalSubTitle>Skills</GlobalSubTitle>
                    </Grid>
                    <Grid item xs={12} md={6} lg={6} sx={{display: "flex", justifyContent: "center"}}>
                       <Box component="img" alt="about me picture" src={SkillsImage}></Box>
                    </Grid>
                </Grid>
            </GlobalBoxWrap>
        </section>
    )
}

export default Skills