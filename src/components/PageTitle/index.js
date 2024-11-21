import './index.scss';

import React from 'react';
import classNames from 'classnames';


function PageTitle({ title, desc, className, children }) {
    console.log('Merged className:', classNames(className, "box"));
    return (
        <>
            <div className={classNames(className, "box")}>
                <div className={"title"}>{title}</div>
                {desc && <div className={"desc"}>{desc}</div>}
                {children}
            </div>
        </>

    )
}

export default PageTitle;