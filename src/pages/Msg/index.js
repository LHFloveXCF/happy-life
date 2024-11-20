import Layout from "@/components/Layout";
import MsgInfo from "./MsgInfo";
import { nav_title } from "@/utils/constant_nav";
import Comment from "@/components/Comment";
import { useDispatch } from "react-redux";
import { useMount } from "ahooks";
import { getMsgs } from "@/redux/modules/s_msg";

function Msg() {

    const dispatch = useDispatch();
    
    useMount(() => {
        dispatch(getMsgs)
    })

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