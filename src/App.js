import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import "./App.css";
import {
    Blog,
    Features,
    Header,
    Possibility,
    WhatGPT3,
    Footer
} from "./containers";

import {CTA, Brand, Navbar} from "./components";
import Team from "./containers/team/team";

const App = () => {
    return (
      <BrowserRouter>
            <div className="App">
                <div className="gradient__bg">
                    <Navbar/>
                    
                </div>
                <Routes>
                    <Route path='/home' element={ <Header/> }/>
                    <Route path ='/about' element={ <WhatGPT3 />}/>
                    <Route path='/projects' element = { <Features/> }/>
                    <Route path='/sponsors' element= { <Possibility/> }/>
                    <Route path='/blog' element={ <Blog/> }/>
                    <Route path='/team' element={<Team/>} />
                </Routes>

                <Footer/>
            </div>
            </BrowserRouter>
    );
};

export default App;
