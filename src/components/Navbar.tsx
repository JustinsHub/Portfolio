import React  from "react";
import Toolbar from '@mui/material/Toolbar';
import { styled } from "@mui/system";
import { Button } from "@mui/material";
interface NavbarProps {
  home: any
  about: any
  projects: any
  skills: any
  contact: any
}


const NavbarButton = styled(Button)({
      color: '#c29334',
      margin: '1rem',
      ":hover": {
        backgroundColor: 'rgba(194, 147, 52, 0.1)'
      }
})

const Navbar:React.FC<NavbarProps> = ({home, about, projects, skills, contact}) => {
    const scrollHome = () => home.current.scrollIntoView({behavior: "smooth"}) 
    const scrollAbout = () => about.current.scrollIntoView({behavior: "smooth"}) 
    const scrollProjects = () => projects.current.scrollIntoView({behavior: "smooth"}) 
    const scrollSkills = () => skills.current.scrollIntoView({behavior: "smooth"}) 
    const scrollContact = () => contact.current.scrollIntoView({behavior: "smooth"}) 

  return (
        <Toolbar 
        sx={{
          justifyContent: "center"
        }}
        >
          <NavbarButton onClick={scrollHome}>Home</NavbarButton>
          <NavbarButton onClick={scrollAbout}>About</NavbarButton>
          <NavbarButton onClick={scrollSkills}>Skills</NavbarButton>
          <NavbarButton onClick={scrollProjects}>Projects</NavbarButton>
          <NavbarButton onClick={scrollContact}>Contact</NavbarButton>
        </Toolbar>
  );
}

export default Navbar