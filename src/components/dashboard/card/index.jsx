import { useTheme } from "@emotion/react"
import { tokens } from "../../../theme"
import { Box, IconButton, Button, Icon } from "@mui/material"
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import MapsHomeWorkOutlinedIcon from '@mui/icons-material/MapsHomeWorkOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { useState } from "react";

import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
// {name, assignment, position, nextAvailable, city}
const Card = ({name, assignment, position, nextAvailable, city, isCollapsed = false, firstFace = 1}) => {
    const theme = useTheme()
    const [face, setFace] = useState(firstFace)
    const colors = tokens(theme.palette.mode);

    const handleClick = (face) => {
        if (face===0){setFace(3)}
        else{ 
            if (face===4){setFace(1)}
            else{setFace(face)}
        }
    };

    return(
        // {() => {if (isCollapsed) {return ('300px')} else{return('350px')}}}
        <Box width='350px' borderRadius='10px'>
            <Box backgroundColor={colors.card['main']} color={colors.grey[100]} height='80px' display='flex' gap='0.5rem' borderRadius='5px 5px 0 0'>
                <Box mt='1%' ml='10%'><PersonOutlinedIcon sx={{mt:'15px',fontSize:'30px'}}/></Box>
                <Box fontSize='120%' mt='6%' width="200px" lineHeight="15px">{name}
                    <Box mt='-1px' fontSize='12px' color={() => {
                        if (assignment ==='100% Chg') {return(colors.assignment["charge100"])}
                        else if (assignment==='Leave'){return(colors.assignment["leave"])}
                        else if (assignment==='Truly Available') {return(colors.assignment["fullyAvail"])}
                        else if (assignment==='BD') {return(colors.assignment["bd"])}
                        else if (assignment==='Partially Chargeable') {return(colors.assignment["partiallyCharge"])}
                        else if (assignment==='Reserved') {return(colors.assignment["reserved"])}
                        else {return(colors.grey[400])}
                    }}>{assignment}
                    </Box>
                </Box>        
            </Box>
            <Box position="relative" ml="16rem" mt="-2.55rem" height="2rem">
                    <IconButton sx={{":hover":{background:colors.grey[400], color:colors.grey[200]},color:colors.grey[500],mt:"-1.5rem",height:"1.3rem", width:"1.3rem", background:colors.grey[100]}} onClick={() => handleClick(face-1)}><NavigateBeforeIcon sx={{fontSize:"20x"}}/></IconButton>
                    <IconButton sx={{":hover":{background:colors.grey[400], color:colors.grey[200]},color:colors.grey[500],mt:"-1.5rem",height:"1.3rem", width:"1.3rem", ml:"1rem", background:colors.grey[100]}} onClick={() => handleClick(face+1)}><NavigateNextIcon sx={{fontSize:"20px"}}/></IconButton>
                </Box>
            {face === 1 && (
            <Box 
            // sx={{background : `linear-gradient(240deg, rgba(192,67,129,0.6) 1%, ${colors.primary[400]} 73.4%);)`}}
            backgroundColor={colors.primary[400]}
            height='200px' borderRadius="0 0 5px 5px" color={colors.grey[200]}>
                <Box pl="1.5rem" pr="1.5rem" pt="1rem" display='flex'>
                    <Box width='270px' m="0.5rem" ml='1rem' fontSize="13px" borderBottom='solid 0.5px rgba(225,225,225,0.4)' >
                        <WorkOutlineOutlinedIcon sx={{fontSize:'13px'}}/> <Box mt='-5px'>Position</Box>
                        <Box fontSize='13px' mt='-2px' mb='3px' color={colors.grey[300]}>{position}</Box>
                    </Box>
                    <Box width='250px' m="0.5rem" ml='1rem' fontSize="13px" borderBottom='solid 0.5px rgba(225,225,225,0.4)'>
                        <CalendarMonthOutlinedIcon sx={{fontSize:'13px'}}/> <Box mt='-5px'>Next Available</Box>
                        <Box fontSize='13px' mt='-2px' mb='3px' color={colors.grey[300]}>{nextAvailable}</Box>
                    </Box>
                </Box>
                <Box mt='-1.5em' p='1.5rem' display='flex'>
                    <Box width='300px' m="0.5rem" ml='1rem' fontSize="13px" borderBottom='solid 0.5px rgba(225,225,225,0.4)' >
                        <MapsHomeWorkOutlinedIcon sx={{fontSize:'13px'}}/> <Box mt='-5px'>City</Box>
                        <Box fontSize='13px' mt='-2px' mb='3px' color={colors.grey[300]}>{city}</Box>
                    </Box>
                    <Box width='300px' m="0.5rem" ml='1rem' fontSize="13px">
                         <Box mt='0px'></Box>
                        <Box fontSize='13px' mt='-2px' mb='3px' color={colors.grey[300]}></Box>
                    </Box>
                </Box>
            </Box>
            ) }
            {face===2 &&(
               <Box 
               sx={{ background : `linear-gradient(240deg, rgba(192,67,129,0.6) 1%, ${colors.primary[400]} 73.4%);)`}}
               
            //    sx={{background : `linear-gradient(240deg, rgba(90, 43, 186,0.9) 10%, ${colors.blueAccent[600]} 83.4%);)`}}
                height='200px' borderRadius="0 0 5px 5px" color={colors.grey[200]}>
               <Box pl="1.5rem" pr="1.5rem" pt="1rem" display='flex'>
                   <Box width='270px' m="0.5rem" ml='1rem' fontSize="13px" borderBottom='solid 0.5px rgba(225,225,225,0.4)' >
                       <WorkOutlineOutlinedIcon sx={{fontSize:'13px'}}/> <Box mt='-5px'>Position</Box>
                       <Box fontSize='13px' mt='-2px' mb='3px' color={colors.grey[300]}>{position}</Box>
                   </Box>
                   <Box width='250px' m="0.5rem" ml='1rem' fontSize="13px" borderBottom='solid 0.5px rgba(225,225,225,0.4)'>
                       <CalendarMonthOutlinedIcon sx={{fontSize:'13px'}}/> <Box mt='-5px'>Next Available</Box>
                       <Box fontSize='13px' mt='-2px' mb='3px' color={colors.grey[300]}>{nextAvailable}</Box>
                   </Box>
               </Box>
               <Box mt='-1.5em' p='1.5rem' display='flex'>
                   <Box width='300px' m="0.5rem" ml='1rem' fontSize="13px" borderBottom='solid 0.5px rgba(225,225,225,0.4)' >
                       <MapsHomeWorkOutlinedIcon sx={{fontSize:'13px'}}/> <Box mt='-5px'>City</Box>
                       <Box fontSize='13px' mt='-2px' mb='3px' color={colors.grey[300]}>{city}</Box>
                   </Box>
                   <Box width='300px' m="0.5rem" ml='1rem' fontSize="13px">
                        <Box mt='0px'></Box>
                       <Box fontSize='13px' mt='-2px' mb='3px' color={colors.grey[300]}></Box>
                   </Box>
               </Box>
           </Box>
            )}

{face===3 &&(
               <Box sx={{background : `linear-gradient(240deg, ${colors.primary[400]} 20%, rgba(90, 43, 186,0.6) 93.4%);)`}} height='200px' borderRadius="0 0 5px 5px" color={colors.grey[200]}>
               <Box pl="1.5rem" pr="1.5rem" pt="1rem" display='flex'>
                   <Box width='270px' m="0.5rem" ml='1rem' fontSize="13px" borderBottom='solid 0.5px rgba(225,225,225,0.4)' >
                       <WorkOutlineOutlinedIcon sx={{fontSize:'13px'}}/> <Box mt='-5px'>Position</Box>
                       <Box fontSize='13px' mt='-2px' mb='3px' color={colors.grey[200]}>{position}</Box>
                   </Box>
                   <Box width='250px' m="0.5rem" ml='1rem' fontSize="13px" borderBottom='solid 0.5px rgba(225,225,225,0.4)'>
                       <CalendarMonthOutlinedIcon sx={{fontSize:'13px'}}/> <Box mt='-5px'>Next Available</Box>
                       <Box fontSize='13px' mt='-2px' mb='3px' color={colors.grey[200]}>{nextAvailable}</Box>
                   </Box>
               </Box>
               <Box mt='-1.5em' p='1.5rem' display='flex'>
                   <Box width='300px' m="0.5rem" ml='1rem' fontSize="13px" borderBottom='solid 0.5px rgba(225,225,225,0.4)' >
                       <MapsHomeWorkOutlinedIcon sx={{fontSize:'13px'}}/> <Box mt='-5px'>City</Box>
                       <Box fontSize='13px' mt='-2px' mb='3px' color={colors.grey[200]}>{city}</Box>
                   </Box>
                   <Box width='300px' m="0.5rem" ml='1rem' fontSize="13px">
                        <Box mt='0px'></Box>
                       <Box fontSize='13px' mt='-2px' mb='3px' color={colors.grey[200]}></Box>
                   </Box>
               </Box>
           </Box>
            )}
        </Box>
    )
}
export default Card