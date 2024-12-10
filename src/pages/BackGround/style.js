import { padding, width } from "@mui/system";

let styles = {
    b_p_home_layout_outer: {
        minHeight: '100vh'
    },
    b_p_home_header: {
        padding: 0,
    },
    b_p_home_header_btn: {
        fontSize: '16px',
        width: 64,
        height: 64,
    },
    b_p_home_header_btn_container: {
        display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '64px'
    },
    b_p_home_markddown_operate: {
        display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '103px',
        backgroundColor: 'rgba(209, 224, 231, 0.29)'
    },
    b_p_home_markddown_operate_upload_button: {
        border: 0,
        background: 'none'
    },
    b_p_home_markddown_operate_addition: {
        height: '300px',
        display: 'flex',
        flexDirection: 'column',
        marginTop: '15px',
        paddingTop: '5px',
        backgroundColor: 'rgba(209, 224, 231, 0.29)'
    },
    b_p_home_markddown_operate_addition_container: {
        display: 'flex',
        paddingTop: '5px',
        paddingLeft: '50px'
    },
    b_p_home_markddown_operate_addition_label: {
        width: '90px',
        height: '40px',
        padding: '4px',
    },
    b_p_home_markddown_operate_addition_submit: {
        position: 'sticky',
        bottom: '0',
        // left: '0',
        width: '100%',
        backgroundColor: 'rgba(144, 177, 192, 0.29)',
        textAlign: 'center',
        padding: '10px 0',
        boxShadow: `0 - 1px 5px rgba(0, 0, 0, 0.5)`,
    }

};

export default styles;