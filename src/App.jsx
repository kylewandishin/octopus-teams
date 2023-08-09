// components
import Topbar from './components/global/Topbar';
import Sidebar from './components/global/Sidebar'
import Dashboard from './components/dashboard'
import Contact from './components/contact'
import Signin from './components/home/auth/signin';
import Statistics from './components/statistics'
import Home from './components/home/Home'
// rest
import { ColorModeContext ,useMode } from './theme'
import { CssBaseline, ThemeProvider } from '@mui/material';
import { Routes, Route, Navigate } from 'react-router-dom'
import { AuthenticatedTemplate, UnauthenticatedTemplate, useMsalAuthentication, useMsal } from '@azure/msal-react';
import { InteractionType } from '@azure/msal-browser';
import { useEffect } from 'react';

const ProtectedRoute = ({child}) => {
  return(
    <>
      <AuthenticatedTemplate>
        {child}
      </AuthenticatedTemplate>
      <UnauthenticatedTemplate>
        <Signin/>
      </UnauthenticatedTemplate>
    </>
  )
}
function App() {
  const [theme, ColorMode] = useMode();
  // const { login, result, error } = useMsalAuthentication(InteractionType.Silent, {scopes:['User.Read']});
  return (
    <ColorModeContext.Provider value={ColorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className='app'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<Signin />} />
            <Route
              path="/dashboard" 
              element={<ProtectedRoute child={<Dashboard/>}/>}
            />
            <Route
              path="/statistics" 
              element={<ProtectedRoute child={<Statistics/>}/>}
            />
            <Route
              path="/user/profile" 
              element={<ProtectedRoute child={<Dashboard/>}/>}
            />
            <Route path="/api/*" render={() => null} />
            <Route path="*" element={<></>} />
          </Routes>
          {/* <Sidebar/> */}
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}


export default App;
