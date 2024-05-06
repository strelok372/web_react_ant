import React from 'react';
import { Image, Menu, Typography } from "antd";
import { HomeFilled, UserOutlined } from "@ant-design/icons"
import { useNavigate } from "react-router-dom";
import { MenuItemType } from "antd/lib/menu/hooks/useItems";
import logo from './../Assets/Test/logo.png'

function AppHeader() {
    const navigate = useNavigate();
    const OnClick = (item: MenuItemType) => {
        navigate(`/${item.key}`);
    };
    let items = [{
        label: <h2>iTeam</h2>,
        key: '',
    }, {
        label: <HomeFilled/>,
        key: "home"
    }, {
        label: 'Уроки',
        key: "lessons"
    }, {
        label: 'О Нас',
        key: "about",
    }, {
        label: <UserOutlined/>,
        key: 'test2',
        children: [{
            label: 'Детали',
            key: 'account'
        }, {
            label: 'Войти в профиль',
            key: 'login'
        }, {
            label: 'Регистрация',
            key: 'registration'
        }, {
            label: 'Выйти',
            key: 'logout'
        },]
    }];

    return (<div className="appHeader">
        {/*<Image src={logo}/>*/}
        {/*<Typography.Title >iTeam</Typography.Title>*/}
        <Menu
            defaultSelectedKeys={['home']}
            onClick={OnClick}
            mode={'horizontal'}
            items={items}
        >
        </Menu>
    </div>);
}

export default AppHeader;