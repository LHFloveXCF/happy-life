import './index.scss';

import { UserOutlined } from '@ant-design/icons';
import { useSafeState } from 'ahooks';
import { saveMsg } from '@/redux/modules/s_msg';
import { useDispatch } from 'react-redux';

function EditBox() {

  const [text, setText] = useSafeState('');
  const dispatch = useDispatch()

  const submit = () => {
    dispatch(saveMsg(text))
  }

  return (
    <>
      <div className={"editBox"}>
        <div className={"flex"}>
          <div className={"avatarBoxCol"}>
            <div className={"avatarBox"}>
              <UserOutlined className={"noAvatar"} />
            </div>
          </div>
          <div className={"editInputBox"}>
            <div className={"textareaBox"}>
              <textarea
                className={"textarea"}
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder='写点什么吗？支持markdown格式！&#10;可以在「昵称」处填写QQ号，自动获取「头像」和「QQ邮箱」！'
              />
            </div>
            <div className={"commentBtns"}>
              <div className={"sendBtn"} onClick={submit}>
                发布
              </div>
            </div>
          </div>

        </div>
      </div>

    </>
  );
}

export default EditBox;