import React from 'react'
import './auth.css'
import { Box, useTheme } from '@mui/material'
import { tokens } from '../../../theme'
import logo from '../../../assets/octopus-logo-new.png'
const Signin = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <div>
      <Box class="title-box" position="absolute" left="50%">
          <Box display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                > <img src={logo} width="40px" mt="-15px"/><Box ml="5px" fontSize="44px" color={colors.grey[100]}>Octopus Teams</Box></Box>
      </Box>

      <div class="login-box">
      <form>
        <div class="user-box">
          <input type="text" name="" required=""/>
          <label>Username</label>
        </div>
        <div class="user-box">
          <input type="password" name="" required=""/>
          <label>Password</label>
        </div><center>
        <a href="#">
                SEND
            <span></span>
        </a></center>
      </form>
      </div>
    </div>
  )
}

export default Signin