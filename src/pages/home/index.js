import './index.scss';

import PageTitle from '@/components/PageTitle';
import { siteTitle, url_daily_poem } from '@/utils/constant';
import { useMount, useSafeState, useTitle } from 'ahooks';
import { useDispatch, useSelector } from 'react-redux';
import Section from './Section';

import { Button } from 'antd';
import axios from 'axios';
import { updateUserId } from '@/redux/modules/s_home';
import { useEffect } from 'react';
import Aside from './Aside';

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
                console.error('Error fetching the poem:', error);
            });
    })

    useEffect(() => {
        const storedGuestUserId = localStorage.getItem('guestUserId');
        if (storedGuestUserId) {
            console.log("storedGuestUserId: ", storedGuestUserId);
            
            dispatch(updateUserId(storedGuestUserId));
        } else {
          const newGuestUserId = `guest-${Math.random().toString(36).substr(2, 9)}`;
          localStorage.setItem('guestUserId', newGuestUserId);
          dispatch(updateUserId(storedGuestUserId));
        }
      }, []);

    const changeImage = () => {

    }

    return (
        <>
            <PageTitle title={siteTitle} desc={poem || ''} className={"homeTitle"} />
            <div className={"body"}>
                <Section />
                <Aside />
            </div>
        </>
    );
}

export default Home;