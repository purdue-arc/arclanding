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
                    <Route path='/' element={ <Header/> }/>
                    <Route path ='/wgpt3' element={ <WhatGPT3 />}/>
                    <Route path='/features' element = { <Features/> }/>
                    <Route path='/possibility' element= { <Possibility/> }/>
                    <Route path='/blog' element={ <Blog/> }/>
                </Routes>

                <Footer/>
            </div>
            </BrowserRouter>
    );
};

export default App;
