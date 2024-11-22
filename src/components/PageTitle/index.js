import './index.scss';

import React from 'react';
import classNames from 'classnames';


function PageTitle({ title, desc, style, children }) {

    return (
        <div className={classNames("box", style)}>
            <div className={"title"}>{title}</div>
            {desc && <div className={"desc"}>{desc}</div>}
            {children}
        </div>

    )
}

export default PageTitle;