// import { useTheme } from "@emotion/react"
import { tokens } from "../../theme"
import { Box, Grid } from "@mui/material";
import React, { useEffect, useState } from 'react';
import Loader from "react-loaders"
// import { useEffect, useState } from "react"
import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar'
import 'react-pro-sidebar/dist/css/styles.css'
import { IconButton, useTheme} from '@mui/material'
import TuneOutlined from "@mui/icons-material/TuneOutlined"
import logo from '../../assets/octopus-logo-new.png'
import ChipSelect from "../global/dropdown/index.jsx"
import Topbar from "../global/Topbar";
import MyResponsivePie from "./graphs/pie";

// const socket = io('http://localhost:3001');

const Dashboard = () => {
    // const filters = getFilters()
  
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [cards, setCards] = useState([]);
    const [filteredCards, setFilteredCards] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      fetch('/api/cards')
        .then((response) => response.json())
        .then((data) => {
          const cardsData = data.recordset;
          setCards(cardsData);
          setFilteredCards(cardsData)
          setIsLoading(false); // Set loading state to false when data is fetched
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
          setIsLoading(false); // Set loading state to false on error as well
        });
    }, []);
  
  const [assignments, setAssignments] = useState([]);
  const [levels, setLevels] = useState([]);
  const [cities, setCities] = useState([]);

  useEffect(() => {
    Promise.all([
      fetch('/api/assignments').then((response) => response.json()),
      fetch('/api/levels').then((response) => response.json()),
      fetch('/api/cities').then((response) => response.json())
    ])
      .then(([assignmentsData, levelsData, citiesData]) => {
        const assignmentData = assignmentsData.recordset.map((item) => item.Assignment_Details);
        const levelData = levelsData.recordset.map((item) => item.Level);
        const cityData = citiesData.recordset.map((item) => item.City);
        setAssignments(assignmentData);
        setLevels(levelData);
        setCities(cityData);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);
  
  const [levelFilter, setLevelFilter] = useState([]);
  const [cityFilter, setCityFilter] = useState([]);
  const [assignmentFilter, setAssignmentFilter] = useState([]);

  const handleAssignmentChange = (value) => {
    setAssignmentFilter(value);
    // filterCards();
  };
  
  const handleLevelChange = (value) => {
    setLevelFilter(value);
    // filterCards();
  };
  
  const handleCityChange = (value) => {
    setCityFilter(value);
    // filterCards();
  };  
  // const [value, setValue] = useState([]);

  // ...

useEffect(() => {
  console.log("HERE")
  const filterCards = () => {
    // Filter the cards based on the selected filters
    let filtered = [...cards]; // Create a copy of the cards array

    if (levelFilter.length > 0) {
      filtered = filtered.filter((card) => levelFilter.includes(card.Level));
    }

    if (cityFilter.length > 0) {
      filtered = filtered.filter((card) => cityFilter.includes(card.City));
    }

    if (assignmentFilter.length > 0) {
      filtered = filtered.filter((card) =>
        assignmentFilter.includes(card.Assignment_Details)
      );
    }

    setFilteredCards(filtered);
  };

  filterCards();
}, [levelFilter, cityFilter, assignmentFilter, cards]);

// ...

      
    return(
        <>
         <Box
      borderRight="0.1px solid rgba(0,0,0,0.15)"
        sx={{
          "& .pro-sidebar-inner": {
            background: `${colors.primary[400]} !important`,
          },
          "& .pro-icon-wrapper": {
            backgroundColor: "transparent !important",
          },
          "& .pro-inner-item": {
            padding: "5px 35px 5px 20px !important",
          },
          "& .pro-inner-item:hover": {
            color: "#868dfb !important",
          },
          "& .pro-menu-item.active": {
            color: "#6870fa !important",
          },
        }}
      >
        <ProSidebar collapsed={isCollapsed}>
          <Menu iconShape="square">
            {/* LOGO AND MENU ICON */}
            <MenuItem
              onClick={() => setIsCollapsed(!isCollapsed)}
              icon={isCollapsed ? <img src={logo} width="30px" mt="-10px"/> : undefined}
              style={{
                margin: "10px 0 20px 0",
                color: colors.grey[100],
              }}
            >
              {!isCollapsed && (
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  ml="15px"
                >
                
                  <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                    <img src={logo} width="30px" mt="-10px"/><Box ml="1px" fontSize="34px" color={colors.grey[400]}>CTOPUS</Box>
                  </IconButton>
                </Box>
              )}
            </MenuItem>
  
            {!isCollapsed && (
              <Box mb="25px" paddingLeft={isCollapsed ? undefined : "10%"}>
                <TuneOutlined fontSize="100px"/><Box className="filters" fontSize="16px">
                    Filters
                </Box>
                <Box className="dropdowns" ml="-10px" color={colors.grey[100]} width="200px" mt="10px">
                <ChipSelect
                  list={cities}
                  value={cityFilter}
                  funct={handleCityChange}
                  name="Cities"
                />
                <ChipSelect
                  list={levels}
                  value={levelFilter}
                  funct={handleLevelChange}
                  name="Positions"
                />
                <ChipSelect
                  list={assignments}
                  value={assignmentFilter}
                  funct={handleAssignmentChange}
                  name="Assignments"
                />

                </Box>
              </Box>
            )}
          </Menu>
        </ProSidebar>
      </Box>
        <main className='content'>
          <Topbar/> 
          <Box ml='1.5rem' mt='1rem' fontSize='24' mb='1rem'>My Team: 
              <Box justifyContent='center' ml='3.6rem' mt='-1.3rem' textAlign='center' height='20px' width='30px' borderRadius='20px' backgroundColor={colors.grey[700]} opcaity='0.5'>
              {filteredCards.length}
              </Box> 
          </Box>
          <Box display="flex">
          <Box width="400px" height="400px" justifyContent="center" ml="3rem">
            <Box justifyContent="center" textAlign="center">Position Breakdown</Box>
          <MyResponsivePie theme = {"purple_red"} color={colors.grey[100]} data={[
                {
                    "id": "python",
                    "label": "python",
                    "value": 420,
                    "color": "hsl(253, 81%, 73%)"
                },
                {
                    "id": "javascript",
                    "label": "javascript",
                    "value": 300,
                    "color": "hsl(271, 81%, 73%)"
                },
                {
                    "id": "lisp",
                    "label": "lisp",
                    "value": 95,
                    "color": "hsl(283, 88%, 73%)"
                },
                {
                    "id": "make",
                    "label": "make",
                    "value": 556,
                    "color": "hsl(302, 63%, 64%)"
                },
                {
                    "id": "java",
                    "label": "java",
                    "value": 615,
                    "color": "hsl(291, 60%, 74%)"
                }
                ]}/>
        </Box>
        <Box width="400px" height="400px" justifyContent="center" ml="3rem">
            <Box justifyContent="center" textAlign="center">Assignment Breakdown</Box>
          <MyResponsivePie theme = {"red_purple"} color={colors.grey[100]} data={[
                {
                    "id": "python",
                    "label": "python",
                    "value": 600,
                    "color": "hsl(253, 81%, 73%)"
                },
                {
                    "id": "javascript",
                    "label": "javascript",
                    "value": 428,
                    "color": "hsl(271, 81%, 73%)"
                },
                {
                    "id": "lisp",
                    "label": "lisp",
                    "value": 425,
                    "color": "hsl(283, 88%, 73%)"
                },
                {
                    "id": "make",
                    "label": "make",
                    "value": 556,
                    "color": "hsl(302, 63%, 64%)"
                },
                {
                    "id": "java",
                    "label": "java",
                    "value": 545,
                    "color": "hsl(291, 60%, 74%)"
                }
                ]}/>
        </Box>
        </Box>
        </main>
        </>
    )
}
export default Dashboard