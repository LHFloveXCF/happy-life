import { useEffect } from "react";
import MarkdownEditor from "./p_show_markdown";
import { useDispatch, useSelector } from "react-redux";
import { changeFooterShow, changeView, setNavShow } from "@/redux/modules/s_nav";
import { cur_view } from "@/utils/constant";
import React, { useState } from 'react';
import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    LoginOutlined,
    DownOutlined,
    SettingOutlined
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme, Button, Tooltip, Flex, Dropdown, Space, message } from 'antd';
import { siteTitle } from '@/utils/constant';
import { useTitle } from 'ahooks';
import style from './index.custom.scss';
import { b_logout_items } from "@/utils/constant_back";
import classNames from "classnames";


const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}
const items = [
    getItem('Option 1', '1', <PieChartOutlined />),
    getItem('Option 2', '2', <DesktopOutlined />),
    getItem('User', 'sub1', <UserOutlined />, [
        getItem('Tom', '3'),
        getItem('Bill', '4'),
        getItem('Alex', '5'),
    ]),
    getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
    getItem('Files', '9', <FileOutlined />),
];

function BackGroundHome() {

    useTitle(siteTitle);

    const navState = useSelector(state => state.s_nav);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(changeView(cur_view.BACKGROUND));
        dispatch(setNavShow(false));
        dispatch(changeFooterShow(false));
    }, []);

    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();


    const menu = ( 
        <Menu>
            <Menu.Item key="1" icon={<LoginOutlined />}>退出登录</Menu.Item>
            <Menu.Item key="2" icon={<UserOutlined />}>修改密码</Menu.Item>
        </Menu>
    );

    return (
        <>
            <Layout
                style={{
                    minHeight: '100vh',
                }}>
                <Sider collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                    <div className={classNames(style.b_p_logo_side, {[style.b_p_logo_side_collapsed]: collapsed})} />
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
                </Sider>
                <Layout>
                    <Header
                        style={{
                            padding: 0,
                            background: colorBgContainer,
                        }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '64px' }}>
                            <Button
                                type="text"
                                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                                onClick={() => setCollapsed(!collapsed)}
                                style={{
                                    fontSize: '16px',
                                    width: 64,
                                    height: 64,
                                }}
                            />
                            <div style={{ display: 'flex', gap: '8px' }}>
                                <Dropdown overlay={menu} trigger={['hover']}>
                                    <Button type="text" icon={<SettingOutlined />} style={{ fontSize: '16px', width: 64, height: 64 }} />
                                </Dropdown>
                            </div>
                        </div>
                    </Header>
                    <Content
                        style={{
                            margin: '0 16px',
                        }}>
                        <Breadcrumb
                            style={{
                                margin: '16 px 0',
                            }}>
                            <Breadcrumb.Item>User</Breadcrumb.Item>
                            <Breadcrumb.Item>Bill</Breadcrumb.Item>
                        </Breadcrumb>
                        <div
                            style={{
                                padding: 24,
                                minHeight: 360,
                                background: colorBgContainer,
                                borderRadius: borderRadiusLG,
                            }}>
                            Bill is a cat.
                        </div>
                    </Content>
                </Layout>
            </Layout>
        </>
    );
};
export default BackGroundHome;