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
                    <Route path='/sponsors' element = { <Features/> }/>
                    <Route path='/projects' element= { <Possibility/> }/>
                    <Route path='/blog' element={ <Blog/> }/>
                </Routes>

                <Footer/>
            </div>
            </BrowserRouter>
    );
};

export default App;
