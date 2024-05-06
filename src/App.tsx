import React from 'react';
import './App.css';
import AppFooter from "./Components/Footer";
import PageContent from "./Components/PageContent";
import AppHeader from "./Components/Header";
import { Layout } from "antd";
import { BrowserRouter } from "react-router-dom";

function App() {
    return (<div className="App">
        <BrowserRouter>
            <Layout>
                <AppHeader/>
                <PageContent/>
                <AppFooter/>
            </Layout>
        </BrowserRouter>
    </div>);
}

export default App;
