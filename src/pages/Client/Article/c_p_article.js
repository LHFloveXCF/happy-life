import Layout from "@/components/Layout";
import MarkDown from "@/components/MarkDown";
import useUrlState from '@ahooksjs/use-url-state';
import { useSelector } from "react-redux";

import style from './index.module.scss';
import '../../../global.custom.scss';
import classNames from "classnames";

function ClientArticle() {

    const [search] = useUrlState();

    const homeState = useSelector(state => state.s_home);

    const article = homeState.article_info_list.find(item => item.id === Number(search.title));    

    return (
        <>
            <div className={classNames(style.c_p_article_show_father, "justify_content_center", "d_flex")}>
                <div className={classNames("all_card", style.c_p_article_show_content)}><MarkDown content={article.content}></MarkDown></div>
                <aside className={classNames("aside")}>
                    <div className={classNames("all_card")}>opreateopreateopreateopreateopreateopreateopreateopreateopreateopreate</div>
                    <div className={classNames("all_card")}>opreateopreateopreateopreateopreateopreateopreateopreateopreateopreate</div>
                </aside>
                
            </div>

        </>
    );
};
export default ClientArticle;