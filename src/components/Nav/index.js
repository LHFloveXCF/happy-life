import './index.custom.scss';
import style from './index.scss';

import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import { useLinkList } from './config';
import { useSelector } from "react-redux"




function Nav() {

    const { secondNavArr } = useLinkList();
    const { navShow } = useSelector((state) => state.navShow)

    return (
        <>
          <nav className={classNames(style.nav, { [style.hiddenNav]: !navShow })} >
            <div className={style.navContent}>
              {console.log(style.nav)
              }
    
              {/* 文章单独按钮 */}
              <div className={style.articlesBtn}>
                <div className={style.articelsSecond}>
                  {secondNavArr.map((item, index) => (
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? style.sedActive : style.articelsSecondItem
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