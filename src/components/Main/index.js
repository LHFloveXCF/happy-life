import classNames from 'classnames';
import './index.scss'

import React, { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { cur_view } from '@/utils/constant';
import { AuthProvider } from '@/utils/auth';
import ProtectedRoute from '@/utils/protect_router';



const Home = lazy(() => import('@/pages/home'));
const About = lazy(() => import('@/pages/About'));
const Msg = lazy(() => import('@/pages/Msg'));
const Login = lazy(() => import('@/pages/Login'));
const Register = lazy(() => import('@/pages/Register'));
const BackGroundHome = lazy(() => import('@/pages/BackGround/p_show_home'));
const ClientHomeArticle = lazy(() => import('@/pages/Client/Article/c_p_article'));
const WrongQuestions = lazy(() => import('@/pages/Client/WrongQuestions/c_p_wrong_questions'));
const SaySay = lazy(() => import('@/pages/Client/Say/c_p_say'));

function Main() {
    const navState = useSelector(state => state.r_c_nav);
    return (
        <>
            <main className={"main"}>
                <div className={classNames("m_center", { "m_center_back": navState.curView === cur_view.BACKGROUND })}>
                    <Suspense fallback={<></>}>
                        <AuthProvider>
                            <Routes>
                                <Route path='/' element={<Home />} />
                                <Route path='about' element={<About />} />
                                <Route path='msg' element={<Msg />} />
                                <Route path='login' element={<Login />} />
                                <Route path='register' element={<Register />} />
                                <Route path='post' element={<ClientHomeArticle />} />
                                <Route path='wrong' element={<WrongQuestions />} />
                                <Route path='say' element={
                                    <SaySay />
                                } />
                                {/** 后台路由 */}
                                <Route path='console' element={
                                    <ProtectedRoute>
                                        <BackGroundHome />
                                    </ProtectedRoute>
                                } />
                                <Route path='*' element={<Navigate to='/' replace />} />
                            </Routes>
                        </AuthProvider>
                    </Suspense>
                </div>
            </main>
        </>

    )
}

export default Main;