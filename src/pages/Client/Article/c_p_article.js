import Layout from "@/components/Layout";
import MarkDown from "@/components/MarkDown";
import useUrlState from '@ahooksjs/use-url-state';
import { useSelector } from "react-redux";

function ClientArticle() {

    const [search] = useUrlState();

    const homeState = useSelector(state => state.s_home);

    const article = homeState.article_info_list.find(item => item.id === Number(search.title));


    console.log("search: ", article);


    return (
        <>
            <Layout>
                <MarkDown content={article.content}></MarkDown>
            </Layout>

        </>
    );
};
export default ClientArticle;