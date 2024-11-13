import './index.scss';

import { siteTitle } from '@/utils/constant';
import { useTitle } from 'ahooks';
import PageTitle from '../../components/pageTitle';
import Section from './Section';


const getPoem = require('jinrishici');

function Home() {
    useTitle(siteTitle);

    return (
        <>
            <PageTitle title={siteTitle} desc={''} className={"homeTitle"} />
            <div className={"body"}>
                <Section />
            </div>
        </>
    );
}

export default Home;