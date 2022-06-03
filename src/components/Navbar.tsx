import React, { RefObject, useState } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { styled } from "@mui/system";

interface NavbarProps {
  about: any
  projects: any
  skills: any
  contact: any
}


const NavbarTypography = styled(Typography)({
    cursor: "pointer",
    margin: "1.3rem",
})

const Navbar:React.FC<NavbarProps> = ({about, projects, skills, contact}) => {
  
    const scrollAbout = () => about.current.scrollIntoView({behavior: "smooth"}) 
    const scrollProjects = () => projects.current.scrollIntoView({behavior: "smooth"}) 
    const scrollSkills = () => skills.current.scrollIntoView({behavior: "smooth"}) 
    const scrollContact = () => contact.current.scrollIntoView({behavior: "smooth"}) 


    //Have these passed in navbar and redirect to each component
  return (
    <Box>
        <Toolbar
        sx={{
            justifyContent: "center"
        }}
        >
          <NavbarTypography>Home</NavbarTypography>
          <NavbarTypography id='about' onClick={scrollAbout}>About</NavbarTypography>
          <NavbarTypography onClick={scrollSkills}>Skills</NavbarTypography>
          <NavbarTypography onClick={scrollProjects}>Projects</NavbarTypography>
          <NavbarTypography onClick={scrollContact}>Contact</NavbarTypography>
        </Toolbar>
    </Box>
  );
}

export default Navbar