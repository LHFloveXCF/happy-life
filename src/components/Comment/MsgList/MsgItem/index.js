import 'dayjs/locale/zh-cn';

import { MessageOutlined } from '@ant-design/icons';
import classNames from 'classnames';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

import MarkDown from '@/components/MarkDown';
import { myEmail, smallLoadingUrl } from '@/utils/constant';

import EditBox from '../../EditBox';
import './index.scss';

dayjs.locale('zh-cn');
dayjs.extend(relativeTime);

function MsgItem() {
  return (
    <div
      className={classNames("commentItem", {
        ["marginLeft"]: isReply
      })}
    >
      <div className={"flex"}>
        <div ref={imgRef} className={"avatarBox"}>
          <img
            src={imgUrl}
            className={classNames({
              ["avatar"]: imgUrl !== smallLoadingUrl,
              ["loading"]: imgUrl === smallLoadingUrl
            })}
          />
        </div>
        {!isReply && (
          <div className={"replyBtn"}>
            <MessageOutlined />
          </div>
        )}

        <div className={"contentBox"}>
          <div className={"usrInfo"}>
            <a
              href={link}
              target={link ? '_blank' : '_self'}
              rel='noreferrer'
              className={"name"}
              style={{ cursor: link ? 'pointer' : 'default' }}
            >
              {name}
            </a>
            {email === myEmail && <span className={"flag"}>站长</span>}
            <span className={"date"}>{dayjs(date).fromNow()}</span>
          </div>
          <MarkDown content={content || ''} className={"content"} />
        </div>
      </div>
      <EditBox
      />
    </div>
  );
}

export default MsgItem;
