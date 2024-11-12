import { createBrowserRouter } from 'react-router-dom'
import About from '../pages/about/about'
import Home from '../pages/home/home'
import Game from '../pages/game/game'

const router = createBrowserRouter([
    {
        path: '/about',
        element: <About />
    },
    {
        path: '/home',														    //路径，这里式一级路由，所以在路径前要带上'/'
        element: <Home />,													//在该路径下需要渲染的元素节点
    },
    {
        path: '/Game',														    //路径，这里式一级路由，所以在路径前要带上'/'
        element: <Game />,													//在该路径下需要渲染的元素节点
    },
]) 


export default router;