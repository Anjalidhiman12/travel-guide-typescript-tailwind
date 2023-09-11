import React from 'react';


import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Page1 from '../pages/page1';
import Page2 from '../pages/page2';
import Page3 from "../pages/page3";
import WelcomeScreen from '../pages/landing-page/welcome-screen';
const AppRouter=(props:any)=>(
       <Router>

             <Routes>
             <Route  path='/' element={< WelcomeScreen {...props}/>}></Route>

                 <Route  path='/page1' element={< Page1  {...props}/>}></Route>
                 <Route  path='/page2' element={< Page2 {...props}/>}></Route>
                 <Route  path='/page3/:page3' element={< Page3 {...props}/>}></Route>


              </Routes>


       </Router>


)

export default AppRouter