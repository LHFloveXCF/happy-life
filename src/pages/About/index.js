import './index.scss';

import { useToggle } from 'ahooks';
import Layout from '@/components/Layout';
import Switch from './Switch';
import AboutMe from './AboutMe';
import { nav_title } from '@/utils/constant_nav';

const desc = "## 这是一个标题\n\n这是一个段落。Markdown是一种轻量级标记语言，允许人们使用易读易写的纯文本格式编写文档，然后转换成有效的HTML。\n\n- 列表项1\n- 列表项2\n  - 子列表项\n\n[这是一个链接](https://www.example.com)\n\n";


function About() {
    const [state, { toggle, setLeft, setRight }] = useToggle();


    return (
        <>
            <Layout title={nav_title.ABOUT} isPost={true}>
                <Switch state={state} toggle={toggle} setLeft={setLeft} setRight={setRight} />
                <AboutMe className={state ? '' : "hidden"} content={desc}  />
            </Layout>
        </>

    )
}

export default About;
