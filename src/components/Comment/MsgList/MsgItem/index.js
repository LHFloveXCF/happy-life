import 'dayjs/locale/zh-cn';

import classNames from 'classnames';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

import MarkDown from '@/components/MarkDown';
import { MessageOutlined, UserOutlined } from '@ant-design/icons';
import EditBox from '../../EditBox';
import './index.scss';
import { useSafeState } from 'ahooks';

dayjs.locale('zh-cn');
dayjs.extend(relativeTime);

function MsgItem({ content, isReply }) {

  const [showReply, setShowReply] = useSafeState(false);

  return (
    <div className={classNames("commentItem")}>
      <div className={"flex"}>
        <div className={"avatarBox"}>
          <UserOutlined className={"noAvatar"} />
        </div>
        {!isReply && (
          <div className={"replyBtn"} onClick={() => setShowReply(!showReply)}>
            <MessageOutlined />
          </div>
        )}
        <div className={"contentBox"}>
          <div className={"usrInfo"}>
            <a
              href={null}
              target={null ? '_blank' : '_self'}
              rel='noreferrer'
              className={"name"}
              style={{ cursor: null ? 'pointer' : 'default' }}
            >
              {content}
            </a>
            <span className={"date"}>{dayjs().fromNow()}</span>
          </div>
          <MarkDown content={content || ''} className={"content"} />
        </div>
      </div>
      <EditBox className={classNames("replyBox", { ["replyHidden"]: !showReply })} isReply={showReply} />
    </div>
  );
}

export default MsgItem;
