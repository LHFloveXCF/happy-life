import './index.scss';

import { UserOutlined } from '@ant-design/icons';
import { useSafeState } from 'ahooks';
import { saveMsg } from '@/redux/modules/s_msg';
import { useDispatch } from 'react-redux';
import classNames from 'classnames';

function EditBox({ className, isReply = false }) {

  const [text, setText] = useSafeState('');
  const dispatch = useDispatch()

  const submit = () => {
    dispatch(saveMsg(text))
  }

  return (
    <>
      <div className={classNames("editBox", className)}>
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
                placeholder='写点什么吗？'
              />
            </div>
            <div className={"commentBtns"}>
              <div className={"sendBtn"} onClick={submit}>
                {isReply ? '回复' : ' 发布'}
              </div>
            </div>
          </div>

        </div>
      </div>

    </>
  );
}

export default EditBox;