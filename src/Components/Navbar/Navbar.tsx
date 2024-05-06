import React from 'react';
import './Navbar.css'
import logo from './../Assets/Test/logo.png'
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';

import { Button, Menu, MenuProps } from "antd";
import MenuItem from "antd/es/menu/MenuItem";

const Navbar = () => {
    const items: MenuProps['items'] = [
        {
            label: 'Главная',
            key: 'mail',
            icon: <MailOutlined />,
        },
        {
            label: 'Занятия',
            key: 'app',
            icon: <AppstoreOutlined />,
        },
        {
            label: 'IT-Интернатура',
            key: 'app',
            icon: <AppstoreOutlined />,
            disabled: true,
        },
        {
            label: (
                <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
                    О нас
                </a>
            ),
            key: 'alipay',
        },
    ];

    return (
        <div>
            {/*<div className='navbar'>*/}
                <div className={'nav-logo'} >
                    <img src={logo}/>
                </div>

                <Menu mode="horizontal" items={items} className={'menu'} >
                </Menu>
                <Button>Войти</Button>
            {/*// </div>*/}
        </div>
);
};

export default Navbar;