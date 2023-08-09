import React from 'react'
import { useTheme } from '@emotion/react';
import { tokens } from '../../theme';
import { Box, Grid, IconButton, OutlinedInput, Button } from '@mui/material';
import logo from '../../assets/octopus-logo-new.png'
import Card from '../dashboard/card';

const Home = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <Box className='container' width="100%" height="100%" sx={{overflowY:"scroll !important", overflowX:"hidden"}} backgroundColor={colors.primary[400]}>
            <Box className='topbar' zIndex="99999" position="absolute" backgroundColor={colors.primary[400]} width="100%" height="8.5%" pr="1rem" pt='0.75rem' pl='1rem' display="flex" overflow="hidden" boxShadow="0px 3px 7px rgba(0,0,0, 0.2)">
                <Box className='logo' display="flex"> 
                    <img src={logo} width="40px" height="40px" ml="1rem"/>
                    <Box mt="-11px"ml="1px" fontSize="44px" fontFamily="nunito" color={colors.primary[100]}>CTOPUS</Box>
                </Box>
                <Box className='buttons' display="flex" ml="67%" mt="-18px" mr="1rem" mb='-4px'>
                    <Box className='Signin'>
                    <a href="/dashboard"><IconButton sx={{borderRadius:"0px", height:"100%", pl:"10px",pr:"15px", color:colors.grey[100] }} >Log in</IconButton></a>
                    </Box>
                    <Box className='GetStated'>
                    <IconButton sx={{width:"8.5rem", borderRadius:"0px", height:"100%", p:"10px", backgroundColor: colors.blueAccent[600]}}>Get Started</IconButton>
                    </Box>
                </Box>
            </Box>
            <Box className='body' height="91.3%" overflow="scorll !important">
                <Box zIndex="-1" width="100%" mt="66px" height="700px" sx={{background : "linear-gradient(240deg, rgba(195, 67, 129,0.9) 21%, rgba(90, 43, 186,0.9) 93.4%);)"}}>
                    <Grid ml="12rem" container xs={12} gap='18rem' pt='25px' pb='25px'>
                        <Box mt="2rem" width="350px">
                            <Box fontWeight="800" fontSize="40px" id="title" fontFamily="nunito">
                               <Box lineHeight="50px">
                                Manage your team 
                                the right way with 
                                </Box>
                                <Box color={colors.assignment["bd"]} ml="-0.2rem"display="flex" mt="1rem" fontSize="55px"><img src={logo} height="60px" width="60px"/><Box ml="0.5rem" mt="-0.5rem">OCTOPUS</Box></Box> <Box fontSize="55px" ml="4.3rem" mt="-4.8rem" color="#01aaff">OCTOPUS</Box>
                                
                                <Box fontSize="14px">
                                    Manage and optimise your team all in one place--even if your team isn't
                                </Box>

                                <Box mt="30px" display="flex">
                                    <Box sx={{mt:"-23px",}}><OutlinedInput placeholder="Email" sx={{background:"#fcfcfc", color:"#000",width:"13rem",border:"none !important"}}/></Box>
                                    <Button variant="contained" sx={{ backgroundColor:"#0164ff","&:hover": {
                                        backgroundColor:"#0132ff"
                                    }, width:"7rem",ml:"3%", mt:"-0.7rem", height:"52px", fontFamily:"source code pro"}}>Sign-up</Button>
                                </Box>
                            </Box>
                        </Box>
                        <Box mt="2rem">
                            <Card firstFace={2} name="Jerry Mouse" assignment="100% Chg" position="Analyst" city="New York" nextAvailable="1/1/2023"/>
                            <Box mt="-20%" ml="45%" boxShadow="0px 2px 10px rgba(225,225,225, 0.08)">
                                <Card firstFace={3} name="Tom Cat" assignment="Truly Available" position="Manager" city="New York" nextAvailable="1/12/2023"/>
                            </Box>
                        </Box>
                    </Grid>
                </Box>
                <Box width="101%" overflow="hidden" sx={{mt:"-21%", ml:"-2px", display:"flex"}}>
                    <Box width="110%" sx={{rotate:"-1deg",zIndex:"0"}} height="320px">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1300 320"><path fill={colors.primary[400]} fill-opacity="1" d="M0,0L48,16C96,32,192,64,288,64C384,64,480,32,576,64C672,96,768,192,864,240C960,288,1056,288,1152,245.3C1248,203,1344,117,1392,74.7L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"/>
                        
                        </svg>
                    </Box>
                </Box>
                <Box className='main' mt="3%" height="100%" sx={{zIndex:"100"}}>
                    <Box sx={{zIndex:"1"}} position="relative" fontSize="22px" mt="-15%" ml="10%">
                        Octopus 101
                    </Box>
                    <Box sx={{zIndex:"1"}} position="relative" fontSize="30px" mt="-0.1%" ml="10%">
                        Team Management done right
                    </Box>
                    <Box sx={{zIndex:"1", width:"380px"}} position="relative" fontSize="18px" mt="1%" ml="10%">
                        Octopus is a simple,fast, optimised way to manage your team.
                        All it takes is one dashboard to see it all.

                    </Box>
                </Box>
                <Box height="100%">
                    hello
                </Box>
            </Box>
        </Box>
    )
}

export default Home