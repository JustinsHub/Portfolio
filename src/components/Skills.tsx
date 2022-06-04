import React from "react";
import { Button, Grid} from "@mui/material";
import { Box } from "@mui/system";
import { GlobalBoxWrap, GlobalSubTitle } from "../styles/globalMUI";
import SkillsImage from '../styles/images/SkillsImage.png'

const ourSkills = ['JavaScript', 'TypeScript', 'Python','HTML', 'CSS', 'React', 'Node', 'Express', 'Flask', 'PostgreSQL', 'Prisma', 'Bootstrap', 'Git' ]

const Skills: React.FC = () => {
    return (
        <section>
            <GlobalBoxWrap>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6} lg={6}>
                        <Box sx={{textAlign: "center"}}>
                        <GlobalSubTitle>Skills</GlobalSubTitle>
                                {ourSkills.map((skill) => 
                                    <Button variant="outlined" sx={{
                                        margin: "1rem", 
                                        color: "black", 
                                        borderColor: "#dda73b",
                                        textTransform: "none",
                                        '&:hover': {
                                            backgroundColor: "rgba(221,167,59,0.2)",
                                            borderColor: "#dda73b"
                                        }
                                        }}>
                                        {skill} 
                                    </Button>
                                )}
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6} lg={6} sx={{display: "flex", justifyContent: "center"}}>
                       <Box component="img" alt="portfolio skills" src={SkillsImage} sx={{ maxWidth: 'md' }}></Box>
                    </Grid>
                </Grid>
            </GlobalBoxWrap>
        </section>
    )
}

export default Skills