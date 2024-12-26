import './index.scss';

import { footer_desc, icp_no, icp_site, source_github } from '@/utils/constant';
import classNames from 'classnames';
import { useSelector } from 'react-redux';



function Footer() {
  const navState = useSelector(state => state.r_c_nav);
  return (
    <footer className={classNames("footer", {"hiddenFooter": !navState.footerShow})}>
      <span>
        个人博客系统
        <a href={source_github} target='_blank' rel='noreferrer' className={"text"}>
          「源代码」
        </a>
      </span>
      <span>
        <a href={icp_site} target='_blank' rel='noreferrer' className={"text"}>
          {icp_no}
        </a>
      </span>
      <span>
        {footer_desc.map((item, index) => (
          <span className={"siteFrame"} key={index}>
            {item}
          </span>
        ))}
      </span>
    </footer>
  );
}

export default Footer;
