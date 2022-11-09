import React from 'react';
import './App.css';
import {Header} from "./site/Header";
import {Body} from "./site/Body";
import {Footer} from "./site/Footer";

function App() {
    return (
        <>
            <Header title={"New BODY"}/>
            <Body titleForBody={"New BODY"}/>
            <Footer/>
        </>

    );
}

export default App;
