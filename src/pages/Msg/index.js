import Layout from "@/components/Layout";
import MsgInfo from "./MsgInfo";
import { nav_title } from "@/utils/constant_nav";
import Comment from "@/components/Comment";

function Msg() {
    return (
        <>
            <Layout title={nav_title.MSG}>
                <MsgInfo />
                <Comment  titleEng='' autoScroll={true} scrollToTop={440 + 370} title='留言板' />
            </Layout>
        </>
    )
}

export default Msg;