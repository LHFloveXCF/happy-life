import './index.scss';

import { useToggle } from 'ahooks';
import Layout from '@/components/Layout';
import Switch from './Switch';
import AboutMe from './AboutMe';


function About() {
    const [state, { toggle, setLeft, setRight }] = useToggle();


    return (
        <Layout title={"关于"} isPost={false}>
            <Switch state={state} toggle={toggle} setLeft={setLeft} setRight={setRight} />
            <AboutMe className={state ? '' : "hidden"}/>
        </Layout>
    )
}

export default About;
