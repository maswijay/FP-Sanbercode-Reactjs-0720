import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';

import Header from './Header';
import Section from './Section';

const Main = () =>{
    return(
        <>
            <Router>
                <Header/>
                <Section/>
                
            </Router>
        </>
    )
}

export default Main