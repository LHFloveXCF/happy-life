import './index.scss';

import { siteTitle } from '@/utils/constant';
import { useTitle, useMount, useSafeState } from 'ahooks';
import PageTitle from '@/components/PageTitle';
import Section from './Section';
import { useDispatch } from 'react-redux';

import { getTestData } from '@/redux/modules/s_home';
import { Button } from 'antd';
import axios from 'axios';

const getPoem = require('jinrishici')

function Home() {
    useTitle(siteTitle);
    const [poem, setPoem] = useSafeState('');

    const dispatch = useDispatch();


    useMount(() => {
        getPoem.load(data => {
            console.log('输出诗句内容', data.data.content);
            setPoem(data.data.content)
        });


    })

    const changeImage = () => {
        let url = "https://v2.jinrishici.com/one.json?client=npm-sdk/1.0";

        axios.get(url)
            .then(res => {
                setPoem(res.data.data.content);
            })
            .catch(error => {
                console.error('Error fetching the poem:', error);
            });
    }



    const changePoem = () => {

    }

    return (
        <>
            <PageTitle title={siteTitle} desc={poem || ''} className={"homeTitle"} />
            <div className={"body"}>
                <Section />
                <Button onClick={changeImage}>换一张图片</Button>
                <Button onClick={changePoem}>换一句诗词</Button>
            </div>
        </>
    );
}

export default Home;