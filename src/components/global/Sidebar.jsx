// import { useEffect, useState } from "react"
// import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar'
// import 'react-pro-sidebar/dist/css/styles.css'
// import { Box, IconButton, Typography, useTheme, Icon } from '@mui/material'
// import {Link} from 'react-router-dom'
// import { tokens } from "../../theme"
// import TuneOutlined from "@mui/icons-material/TuneOutlined"
// import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined"
// import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
// import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
// import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
// import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
// import logo from '../../assets/octopus-logo-new.png'
// // import {Data} from '../../data/data'
// import OutlinedInput from '@mui/material/OutlinedInput';
// import Select from '@mui/material/Select';
// import Chip from '@mui/material/Chip';
// import ChipSelect from "./dropdown/index.jsx"

// const Item = ({ title, to, icon, selected, setSelected }) => {
//     const theme = useTheme();
//     const colors = tokens(theme.palette.mode);
//     return (
//       <MenuItem
//         active={selected === title}
//         style={{
//           color: colors.grey[100],
//         }}
//         onClick={() => setSelected(title)}
//         icon={icon}
//       >
//         <Typography>{title}</Typography>
//         <Link to={to} />
//       </MenuItem>
//     );
//   };

//   const Sidebar = ({
//     onCityFilterChange,
//     onLevelFilterChange,
//     onAssignmentFilterChange,
//   }) => {
//     const [isCollapsed, setIsCollapsed] = useState(false);
//     const [assignments, setAssignments] = useState([]);
//     const [levels, setLevels] = useState([]);
//     const [cities, setCities] = useState([]);
  
//     useEffect(() => {
//       Promise.all([
//         fetch('/api/assignments').then((response) => response.json()),
//         fetch('/api/levels').then((response) => response.json()),
//         fetch('/api/cities').then((response) => response.json())
//       ])
//         .then(([assignmentsData, levelsData, citiesData]) => {
//           const assignmentData = assignmentsData.recordset.map((item) => item.Assignment_Details);
//           const levelData = levelsData.recordset.map((item) => item.Level);
//           const cityData = citiesData.recordset.map((item) => item.City);
//           setAssignments(assignmentData);
//           setLevels(levelData);
//           setCities(cityData);
//         })
//         .catch((error) => {
//           console.error('Error fetching data:', error);
//         });
//     }, []);
    
//     const [levelFilter, setLevelFilter] = useState([]);
//     const [cityFilter, setCityFilter] = useState([]);
//     const [assignmentFilter, setAssignmentFilter] = useState([]);
  
//     const handleAssignmentChange = (value) => {
//       setAssignmentFilter(value);
//       // filterCards();
//     };
    
//     const handleLevelChange = (value) => {
//       setLevelFilter(value);
//       // filterCards();
//     };
    
//     const handleCityChange = (value) => {
//       setCityFilter(value);
//       // filterCards();
//     };  
//     // const [value, setValue] = useState([]);
  
//     // ...
  
//   useEffect(() => {
//     console.log("HERE")
//     const filterCards = () => {
//       // Filter the cards based on the selected filters
//       let filtered = [...cards]; // Create a copy of the cards array
  
//       if (levelFilter.length > 0) {
//         filtered = filtered.filter((card) => levelFilter.includes(card.Level));
//       }
  
//       if (cityFilter.length > 0) {
//         filtered = filtered.filter((card) => cityFilter.includes(card.City));
//       }
  
//       if (assignmentFilter.length > 0) {
//         filtered = filtered.filter((card) =>
//           assignmentFilter.includes(card.Assignment_Details)
//         );
//       }
  
//       setFilteredCards(filtered);
//     };
  
//     filterCards();
//   }, [levelFilter, cityFilter, assignmentFilter, cards]);
  
//   // ...
  
        
//       return(
//            <Box
//         borderRight="0.1px solid rgba(0,0,0,0.15)"
//           sx={{
//             "& .pro-sidebar-inner": {
//               background: `${colors.primary[400]} !important`,
//             },
//             "& .pro-icon-wrapper": {
//               backgroundColor: "transparent !important",
//             },
//             "& .pro-inner-item": {
//               padding: "5px 35px 5px 20px !important",
//             },
//             "& .pro-inner-item:hover": {
//               color: "#868dfb !important",
//             },
//             "& .pro-menu-item.active": {
//               color: "#6870fa !important",
//             },
//           }}
//         >
//           <ProSidebar collapsed={isCollapsed}>
//             <Menu iconShape="square">
//               {/* LOGO AND MENU ICON */}
//               <MenuItem
//                 onClick={() => setIsCollapsed(!isCollapsed)}
//                 icon={isCollapsed ? <img src={logo} width="30px" mt="-10px"/> : undefined}
//                 style={{
//                   margin: "10px 0 20px 0",
//                   color: colors.grey[100],
//                 }}
//               >
//                 {!isCollapsed && (
//                   <Box
//                     display="flex"
//                     justifyContent="space-between"
//                     alignItems="center"
//                     ml="15px"
//                   >
                  
//                     <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
//                       <img src={logo} width="30px" mt="-10px"/><Box ml="1px" fontSize="34px" color={colors.grey[400]}>CTOPUS</Box>
//                     </IconButton>
//                   </Box>
//                 )}
//               </MenuItem>
    
//               {!isCollapsed && (
//                 <Box mb="25px" paddingLeft={isCollapsed ? undefined : "10%"}>
//                   <TuneOutlined fontSize="100px"/><Box className="filters" fontSize="16px">
//                       Filters
//                   </Box>
//                   <Box className="dropdowns" ml="-10px" color={colors.grey[100]} width="200px" mt="10px">
//                   <ChipSelect
//                     list={cities}
//                     value={cityFilter}
//                     funct={handleCityChange}
//                     name="Cities"
//                   />
//                   <ChipSelect
//                     list={levels}
//                     value={levelFilter}
//                     funct={handleLevelChange}
//                     name="Positions"
//                   />
//                   <ChipSelect
//                     list={assignments}
//                     value={assignmentFilter}
//                     funct={handleAssignmentChange}
//                     name="Assignments"
//                   />
  
//                   </Box>
//                 </Box>
//               )}
//             </Menu>
//           </ProSidebar>
//         </Box>
//     );
//   };
  
//   export default Sidebar;