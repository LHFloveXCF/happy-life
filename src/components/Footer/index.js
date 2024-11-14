import './index.scss';

import React from 'react';
import { icp_no, icp_site, source_github } from '@/utils/constant';



function Footer() {
  const frameArr = [
    'React',
    'React Router',
    'Redux',
    'Webpack',
    'AntD',
    'ahooks',
    'CloudBase'
  ];

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
        {frameArr.map((item, index) => (
          <span className={"siteFrame"} key={index}>
            {item}
          </span>
        ))}
      </span>
    </footer>
  );
}

export default Footer;
