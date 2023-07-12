// import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { Input,Chip, Select, InputLabel, OutlinedInput, Box, FormControl, MenuItem,ListItemText,Checkbox } from '@mui/material';
import { useState } from 'react';

const ChipSelect = ({list, name, funct}) => {
  const [value, setValue] = useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setValue(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
    funct(value)
  };
  return (
    <>
    <Box ml="15px">{name}</Box>
    <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          sx={{width:"200px", mt:"5px",ml:"20px",mb:"10px",overflow:'hidden'}}
          multiple
          value={value}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5,overflowY:"scroll", mb:'-0.1rem'}}>
              
              {
              selected.map((value) => (
                <Chip key={value} label={value} />
              ))
              }
            </Box>
          )}
        >
      {list.map((item) => (
            <MenuItem
              key={item}
              value={item}
            >
              <Checkbox checked={value.indexOf(item) > -1} />
              <ListItemText primary={item} />
            </MenuItem>
          ))}
      
    </Select>
    </>
  );
        }
      export default ChipSelect