import './index.custom.scss';
import './index.scss';

import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import { useLinkList } from './config';
import { useSelector } from "react-redux"




function Nav() {

    const { secondNavArr } = useLinkList();
    const { navShow } = useSelector((state) => state.navShow)

    return (
        <>
          <nav className={"nav"} >
            <div className={'navContent'}>
              test
              {/* 文章单独按钮 */}
              <div className={"articlesBtn"}>
                <div className={"articelsSecond"}>
                  {secondNavArr.map((item, index) => (
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? "sedActive" : "articelsSecondItem"
                      }
                      to={item.to}
                      key={index}
                    >
                      {item.name}
                    </NavLink>
                  ))}
                </div>
                文章
              </div>
            </div>
          </nav>
        </>
      );
}

export default Nav;