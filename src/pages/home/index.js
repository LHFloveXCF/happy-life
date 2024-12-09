import './index.scss';

import PageTitle from '@/components/PageTitle';
import { siteTitle, url_daily_poem } from '@/utils/constant';
import { useMount, useSafeState, useTitle } from 'ahooks';
import { useDispatch, useSelector } from 'react-redux';
import Section from './Section';

import { getArticleList, updateUserAvatar, updateUserId } from '@/redux/modules/s_home';
import axios from 'axios';
import { useEffect } from 'react';
import Aside from './Aside';
import { Button, message } from 'antd';

function Home() {
    useTitle(siteTitle);
    const [poem, setPoem] = useSafeState('');

    const homeState = useSelector((state) => state.s_home);

    const dispatch = useDispatch();


    useMount(() => {
        axios.get(url_daily_poem)
            .then(res => {
                setPoem(res.data.data.content);
            })
            .catch(error => {
                message.error('Error fetching the poem:', error);
            });
    })

    useEffect(() => {
        const storedGuestUserId = localStorage.getItem('guestUserId');
        const storedGuestUserAvatar = localStorage.getItem('guestUserAvatar');
        if (storedGuestUserId) {
            dispatch(updateUserId(storedGuestUserId));
        } else {
            const newGuestUserId = `guest-${Math.random().toString(36).substr(2, 9)}`;
            dispatch(updateUserId(newGuestUserId));
            localStorage.setItem('guestUserId', newGuestUserId);
        }

        if (storedGuestUserAvatar) {
            dispatch(updateUserAvatar(storedGuestUserAvatar));
        } else {
            const avatar = Math.floor(Math.random() * 4);
            dispatch(updateUserAvatar(avatar));
            localStorage.setItem('guestUserAvatar', avatar);
        }
        dispatch(getArticleList())
    }, []);

    const changeImage = () => {
        // 请求文章
        console.log("hhhhh");
        
        
    }

    return (
        <>
            <PageTitle title={siteTitle} desc={poem || ''} style={"homeTitle"} />
            <div className={"body"}>
                <Section artSum={10} />
                <Aside />
            </div>
        </>
    );
}

export default Home;