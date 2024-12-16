import { borderRadius, display, padding, width } from "@mui/system";

let styles = {
    b_p_home_layout_outer: {
        minHeight: '100vh'
    },
    b_p_home_layout_outer_hide: {
        display: 'none'
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
        display: 'flex',
        justifyContent: 'flex-end'
    },
    // #fc5531
    b_p_home_markddown_operate_addition_submit_button: {
        backgroundColor: '#fc5531',
        color: '#fff',
        borderRadius: '20px',
        overflow: 'visable',
        marginRight: '20px'
    },
    b_p_file_show_img_container: {
        textAlign: 'center',
        padding: '20px'
    },
    b_p_file_show_img: {
        maxWidth: "100%",
        maxHight: "100%",
        width: '300px',
        hight: '200px',
        objectFit: 'cover'
    },
    b_p_red_dot: {
        display: "inline-block",
        maxHight: "100%",
        width: '10px',
        hight: '10px',
        backgroundColor: 'red',
        borderRadius: '50%',
        marginRight: '8px',
    }

};

export default styles;