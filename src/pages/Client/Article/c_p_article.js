import Layout from "@/components/Layout";
import MarkDown from "@/components/MarkDown";
import useUrlState from '@ahooksjs/use-url-state';
import { useSelector } from "react-redux";

import style from './index.module.scss';
import g from '@/global.custom.scss';
import classNames from "classnames";

function ClientArticle() {

    const [search] = useUrlState();

    const homeState = useSelector(state => state.s_home);

    const article = homeState.article_info_list.find(item => item.id === Number(search.title));

    console.log("s ", style);
    

    return (
        <>
            <div className={style.c_p_article_show_father}>
                <div>title</div>
                <div><MarkDown content={article.content}></MarkDown></div>
                <div>opreate</div>
            </div>

        </>
    );
};
export default ClientArticle;