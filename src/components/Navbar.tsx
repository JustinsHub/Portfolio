import React, { useRef, useState } from "react";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { styled } from "@mui/system";
import { Stack } from "@mui/material";

const NavbarTypography = styled(Typography)({
    cursor: "pointer",
    margin: "1.3rem",
})


interface RefObject {
    scrollIntoView: () => void
  }
const Navbar:React.FC = () => {
    const myAbout= useRef<RefObject>(null)
    const myProjects = useRef(null)
    const mySkills = useRef(null)
    const myContact = useRef(null)
    
    // const scrollAbout = () => myAbout.current.scrollIntoView({behavior: "smooth"}) 
    // const scrollProjects = () => myProjects.current.scrollIntoView({behavior: "smooth"}) 
    // const scrollSkills = () => mySkills.current.scrollIntoView({behavior: "smooth"}) 
    // const scrollContact = () => myContact.current.scrollIntoView({behavior: "smooth"}) 


    //Have these passed in navbar and redirect to each component
  return (
    <Box>
      {/* <AppBar position="static" color="inherit"> */}
        <Toolbar
        sx={{
            justifyContent: "center"
        }}
        >
          <NavbarTypography>Home</NavbarTypography>
          <NavbarTypography>About</NavbarTypography>
          <NavbarTypography>Skills</NavbarTypography>
          <NavbarTypography>Projects</NavbarTypography>
          <NavbarTypography>Contact</NavbarTypography>
        </Toolbar>
      {/* </AppBar> */}

    {/* <Stack direction="row" justifyContent="space-between" spacing={2}>
      <Box bgcolor="dodgerblue" flex={1} p={2}>Hello</Box>
      <Box bgcolor="peru" flex={1}>World</Box>
      <Box bgcolor="orchid" flex={10}>Now</Box>
    </Stack> */}
    </Box>
  );
}

export default Navbar