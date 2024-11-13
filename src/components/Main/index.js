import './index.scss'

import React, { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';


const Home = lazy(() => import('@/pages/home'));

function Main() {
    return (
        <>
            <main className={"main"}>
                <div className={"center"}>
                    <Suspense fallback={<></>}>
                        <Routes>
                            <Route path='/' element={<Home />} />
                            <Route path='*' element={<Navigate to='/' replace />} />
                        </Routes>
                    </Suspense>
                </div>
            </main>
        </>

    )
}

export default Main;