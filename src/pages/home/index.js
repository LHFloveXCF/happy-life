import './index.scss';

import { siteTitle } from '@/utils/constant';
import { useTitle, useMount, useSafeState } from 'ahooks';
import PageTitle from '@/components/PageTitle';
import Section from './Section';

const getPoem = require('jinrishici')

function Home() {
    useTitle(siteTitle);
    const [poem, setPoem] = useSafeState('');

    useMount(() => {
        getPoem.load(data => {
            console.log('输出诗句内容', data.data.content);
            setPoem(data.data.content)
        })
    })

    return (
        <>
            <PageTitle title={siteTitle} desc={poem || ''} className={"homeTitle"} />
            <div className={"body"}>
                <Section />
            </div>
        </>
    );
}

export default Home;