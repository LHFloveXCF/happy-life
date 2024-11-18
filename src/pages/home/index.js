import './index.scss';

import PageTitle from '@/components/PageTitle';
import { siteTitle, url_daily_poem } from '@/utils/constant';
import { useMount, useSafeState, useTitle } from 'ahooks';
import { useDispatch } from 'react-redux';
import Section from './Section';

import { Button } from 'antd';
import axios from 'axios';

function Home() {
    useTitle(siteTitle);
    const [poem, setPoem] = useSafeState('');

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

    const changeImage = () => {

    }

    return (
        <>
            <PageTitle title={siteTitle} desc={poem || ''} className={"homeTitle"} />
            <div className={"body"}>
                <Section />
                <Button onClick={changeImage}>换一张图片</Button>
            </div>
        </>
    );
}

export default Home;