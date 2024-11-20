import 'dayjs/locale/zh-cn';

import classNames from 'classnames';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

import MarkDown from '@/components/MarkDown';

import EditBox from '../../EditBox';
import './index.scss';

dayjs.locale('zh-cn');
dayjs.extend(relativeTime);

function MsgItem({content}) {
  return (
    <div className={classNames("commentItem")}>
      <div className={"flex"}>
        <div className={"contentBox"}>
          <MarkDown content={content || ''} className={"content"} />
        </div>
      </div>
      <EditBox/>
    </div>
  );
}

export default MsgItem;
