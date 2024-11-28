import classNames from 'classnames';
import './index.scss'

import React, { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { cur_view } from '@/utils/constant';



const Home = lazy(() => import('@/pages/home'));
const About = lazy(() => import('@/pages/About'));
const Msg = lazy(() => import('@/pages/Msg'));
const Login = lazy(() => import('@/pages/Login'));
const Register = lazy(() => import('@/pages/Register'));
const BackGroundHome = lazy(() => import('@/pages/BackGround/p_show_home'));

function Main() {
    const navState = useSelector(state => state.s_nav);
    return (
        <>
            <main className={"main"}>
                <div className={classNames("m_center", {"m_center_back" : navState.curView === cur_view.BACKGROUND})}>
                    <Suspense fallback={<></>}>
                        <Routes>
                            <Route path='/' element={<Home />} />
                            <Route path='about' element={<About />} />
                            <Route path='msg' element={<Msg />} />
                            <Route path='login' element={<Login />} />
                            <Route path='register' element={<Register />} />
                            
                            <Route path='console' element={<BackGroundHome />} />
                            <Route path='*' element={<Navigate to='/' replace />} />
                        </Routes>
                    </Suspense>
                </div>
            </main>
        </>

    )
}

export default Main;