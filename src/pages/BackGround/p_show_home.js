import { useEffect } from "react";
import MarkdownEditor from "./p_show_markdown";
import { useDispatch, useSelector } from "react-redux";
import { changeFooterShow, changeView, setNavShow } from "@/redux/modules/s_nav";
import { c_b_sign_state, cur_view } from "@/utils/constant";
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
import { Breadcrumb, Layout, Menu, theme, Button, Tooltip, Flex, Dropdown } from 'antd';
import { siteTitle } from '@/utils/constant';
import { useTitle } from 'ahooks';
import style from './index.custom.scss';
import { b_logout_items } from "@/utils/constant_back";
import classNames from "classnames";
import styles from "./style";
import { updateSignState } from "@/redux/modules/s_b_home";
import BackArticleSetting from "./p_show_article";


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
    getItem('写文章', c_b_sign_state.write_article, <PieChartOutlined />),
    getItem('Option 2', '2', <DesktopOutlined />),
    getItem('文章管理', 'sub1', <UserOutlined />, [
        getItem('文章列表', c_b_sign_state.setting_article),
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

    // 组件加载时候执行一次的操作
    useEffect(() => {
        dispatch(changeView(cur_view.BACKGROUND));
        dispatch(setNavShow(false));
        dispatch(changeFooterShow(false));
    }, []);
    // antd layout折叠管理
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    // 设置相关操作
    function handleLogout(e) {
        switch (e.key) {
            case "1":
                dispatch(changeView(cur_view.CLIENT));
                dispatch(setNavShow(true));
                dispatch(changeFooterShow(true));
                break;
            case "2":
                console.log("changePassWord: ", e);
                break;
        };

    }
    // 设置选项
    const menu = (
        <Menu onClick={handleLogout}>
            <Menu.Item key="1" icon={<LoginOutlined />} >退出登录</Menu.Item>
            <Menu.Item key="2" icon={<UserOutlined />}>修改密码</Menu.Item>
        </Menu>
    );

    // 切换页签
    const changeSignState = (e) => {
        dispatch(updateSignState(e.key))
    }


    return (
        <>
            <Layout style={styles.b_p_home_layout_outer}>
                <Sider collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                    <div className={classNames(style.b_p_logo_side, { [style.b_p_logo_side_collapsed]: collapsed })} />
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} onClick={changeSignState}/>
                </Sider>
                <Layout>
                    <Header
                        style={{
                            ...styles.b_p_home_header,
                            background: colorBgContainer,
                        }}>
                        <div style={styles.b_p_home_header_btn_container}>
                            <Button
                                type="text"
                                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                                onClick={() => setCollapsed(!collapsed)}
                                style={styles.b_p_home_header_btn}
                            />
                            <div style={{ display: 'flex', gap: '8px' }}>
                                <Dropdown overlay={menu} trigger={['hover']}>
                                    <Button type="text" icon={<SettingOutlined />} style={styles.b_p_home_header_btn} />
                                </Dropdown>
                            </div>
                        </div>
                    </Header>
                    <Content>
                        {/**写文章 */}
                        <MarkdownEditor />
                        <BackArticleSetting />
                    </Content>
                </Layout>
            </Layout>
        </>
    );
};
export default BackGroundHome;