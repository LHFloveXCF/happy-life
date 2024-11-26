import './index.scss';

import React from 'react';
import { icp_no, icp_site, source_github, footer_desc } from '@/utils/constant';



function Footer() {
  return (
    <footer className={"footer"}>
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
