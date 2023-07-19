// components
import Topbar from './components/global/Topbar';
import Sidebar from './components/global/Sidebar'
import Dashboard from './components/dashboard'
import Contact from './components/contact'
import Statistics from './components/statistics'
import Home from './components/home/Home'
// rest
import { ColorModeContext ,useMode } from './theme'
import { CssBaseline, ThemeProvider } from '@mui/material';
import { Routes, Route, Switch } from 'react-router-dom'
import Signin from './components/home/auth/signin';


function App() {
  const [theme, ColorMode] = useMode();

  return (
    <ColorModeContext.Provider value={ColorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <div className='app'>
        <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/signin" element={<Signin/>}/>
              <Route path="/Dashboard" element={<Dashboard/>}/>
              <Route path="/Statistics" element={<Statistics/>}/>
              {/* <Route path="/statistics" element={
              <main className='content'>
                <Topbar/> 
                <Statistics/>    
              </main>
          }/>
              <Route path="/contact" element={
              <main className='content'>
                <Topbar/> 
                <Contact/>    
              </main>
              }/> */}

              
              <Route path="/api/*" render={() => null} />
              <Route path="*" element={<></>}/>

        </Routes>
        {/* <Sidebar/>
           */}
        </div>
      </ThemeProvider>  
    </ColorModeContext.Provider>
  );
}

export default App;
