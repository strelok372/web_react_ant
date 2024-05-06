import React from 'react';
import { Route, Routes } from "react-router-dom";
import Home from "../../Pages/Home/Home";
import About from "../../Pages/About/About";
import { Content } from "antd/lib/layout/layout";
import Lessons from "../../Pages/Lessons/Lessons";
import Account from "../../Pages/Account/Account";

function PageContent() {
    return <div className="pageContent">
        <Content>
            <Routes>
                <Route path="/home" element={<Home/>}/>
                <Route path="/lessons" element={<Lessons/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/account" element={<Account/>}/>
            </Routes>
        </Content>
    </div>
}

export default PageContent;