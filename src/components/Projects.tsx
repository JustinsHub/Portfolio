import React from "react";
import { GlobalBoxWrap, GlobalSubTitle } from "../styles/globalMUI";
import { Grid } from "@mui/material";
import { Box, styled } from "@mui/system";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import p1 from '../styles/images/assets/p1.png'
import p2 from '../styles/images/assets/p2.png'
import p3 from '../styles/images/assets/p3.png'

//fix the coordinates render for Y
//hover button and display on hover -> when clicked modal preview/explain of the website and live demo button

const ProjectBox = styled('img')({
    width: '100%', 
    borderRadius: '1rem',
    ":hover": {
        cursor: 'pointer',
        // boxShadow: '0px 1px 15px #dda73b',
        transition: 'width 0.3s ease',
        width: "102%"
    }
    
    })
      
const Projects: React.FC = () => {
    return (
        <section>
             <GlobalBoxWrap sx={{textAlign: "center", marginTop: "10rem", marginBottom: "5rem"}}>
                <GlobalSubTitle m={5}>Projects</GlobalSubTitle>
                    <Grid container alignItems="stretch">
                        <Grid item xs={6} md={4}>
                            <Box>
                            <Card sx={{ maxWidth: 345 }}>
                                <CardActionArea>
                                    <CardMedia
                                    component="img"
                                    height='auto'
                                    image={p1}
                                    alt="project 1"
                                    />
                                    <CardContent>
                                    <Typography gutterBottom variant="h5" component="div" sx={{fontWeight: 600}}>
                                        Pinhead Junior NFT
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        A non fungible token project based on the Blockchain. 
                                    </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" color="primary">
                                    Live Demo
                                    </Button>
                                </CardActions>
                            </Card>
                                {/* <ProjectBox alt='project 1' src={p1}></ProjectBox> */}
                            </Box>
                        </Grid>
                        <Grid item xs={6} md={4}>
                            <Box>
                                <Card sx={{ maxWidth: 345 }}>
                                    <CardActionArea>
                                        <CardMedia
                                        component="img"
                                        height='auto'
                                        image={p2}
                                        alt="project 2"
                                        />
                                        <CardContent>
                                        <Typography gutterBottom variant="h5" component="div" sx={{fontWeight: 600}}>
                                            Pickout
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                        Pickout is a full stack web app built using React, NodeJS, Express, and PostgreSQL. The web apps goal is to have users who are indecisive of what foods to eat when users have assumed of every single possibility. The web API is hosted on Heroku and Front End Repository on GitHub.

                                        </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Button size="small" color="primary">
                                        Live Demo
                                        </Button>
                                    </CardActions>
                                </Card>
                                {/* <ProjectBox alt='project 2' src={p2}></ProjectBox> */}
                            </Box>
                        </Grid>
                        <Grid item xs={6} md={4}>
                            <Box>
                                <Card sx={{ maxWidth: 345 }}>
                                    <CardActionArea>
                                        <CardMedia
                                        component="img"
                                        height='auto'
                                        image={p3}
                                        alt="project 3"
                                        />
                                        <CardContent>
                                        <Typography gutterBottom variant="h5" component="div" sx={{fontWeight: 600}}>
                                            YouBreakYouBuy
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            My first big project. It's a landing page for users to purchase a specific product. This was built using Python, Flask, and Jinja.
                                        </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Button size="small" color="primary">
                                        Live Demo
                                        </Button>
                                    </CardActions>
                                </Card>
                                {/* <ProjectBox alt='project 3' src={p3}></ProjectBox> */}
                            </Box>
                        </Grid>
                    </Grid>


                   
            </GlobalBoxWrap>
        </section>
    )
}

export default Projects