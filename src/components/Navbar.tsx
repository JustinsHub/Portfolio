import React from "react";
import Home from './Home';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';


import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { styled } from "@mui/system";

const NavbarTypography = styled(Typography)({
    cursor: "pointer",
    margin: "1.3rem"
})


const Navbar:React.FC = () => {
  return (
    <Box>
      <AppBar position="static" color="inherit">
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
      </AppBar>
    </Box>
  );
}

export default Navbar