import { Button, Input, Modal, Space } from 'antd';
import 'react-markdown-editor-lite/lib/index.css';
import { useDispatch } from 'react-redux';
import './index.custom.scss';
import { addRole, updateRole } from '@/redux/modules/r_b_home';

const BackUserRoleSettingUpdate = ({ isOpen: operateRole, setOpen }) => {
    const dispatch = useDispatch();

    const changeRole = (value, type) => {
        console.log("variableName:", value, type);
        
        switch (type) {
            case 1: {
                setOpen({
                    ...operateRole,
                    roleId: value
                });
                break;
            };
            case 2: {
                setOpen({
                    ...operateRole,
                    name: value
                });
                break;
            };
            case 3: {
                setOpen({
                    ...operateRole,
                    desc: value
                });
                break;
            };

        }
    };

    const handleRoleUpdate = () => {
        setOpen(null);
        dispatch(updateRole(operateRole));
    };
    const handleRoleAdd = () => {
        setOpen(null);
        dispatch(addRole(operateRole));
    };

    const customFooter = (
        <div>
            <Space>
                <Button type="primary" onClick={handleRoleUpdate}>
                    修改角色
                </Button>
                <Button type="primary" onClick={handleRoleAdd}>
                    添加角色
                </Button>
            </Space>
        </div>
    );

    return (
        <>
            <Modal title="角色编辑" open={operateRole !== null} onCancel={() => setOpen(null)} closeIcon={null} footer={customFooter} >
                {operateRole !== null && (
                    <div>
                        <Input addonBefore="角色编号：" value={operateRole.roleId} onChange={(e) => changeRole(e.target.value, 1)}></Input>
                        <Input addonBefore="角色名字：" value={operateRole.name} onChange={(e) => changeRole(e.target.value, 2)}></Input>
                        <Input addonBefore="角色描述：" value={operateRole.desc} onChange={(e) => changeRole(e.target.value, 3)}></Input>
                    </div>
                )}

            </Modal>

        </>

    );
};

export default BackUserRoleSettingUpdate;