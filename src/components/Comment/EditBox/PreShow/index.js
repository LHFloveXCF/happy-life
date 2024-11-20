import classNames from 'classnames';
import sanitizeHtml from 'sanitize-html';

import MarkDown from '@/components/MarkDown';

import './index.scss';

function PreShow({content}) {
  return (
    <div className={classNames("preShow")}>
      <div className={"closeBtn"} onClick={handleClose}>
        ×
      </div>
      <MarkDown className={"preMarked"} content={sanitizeHtml(content)} />
    </div>
  );
}


export default PreShow;
