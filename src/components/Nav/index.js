import './index.scss';

import {
  BgColorsOutlined,
  CheckOutlined,
  HomeOutlined,
} from '@ant-design/icons';
import {
  useLocalStorageState
} from 'ahooks';

import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { useLinkList } from './config';

import { changeMode } from '@/redux/modules/s_nav';

const bodyStyle = window.document.getElementsByTagName('body')[0].style;


function Nav() {

  const navigate = useNavigate();
  const { secondNavArr, navArr } = useLinkList();
  const modeOptions = ['rgb(19, 38, 36)', 'rgb(110, 180, 214)', 'rgb(171, 194, 208)'];
  const [setLocalMode] = useLocalStorageState('localMode');
  const dispatch = useDispatch();
  const navState = useSelector((state) => state.s_nav)
  console.log("navState", navState);

  const onModeChange = (event, index) => {
    console.log("index", index);

    dispatch(changeMode(index))
  }

  return (
    <>
      <nav className={classNames('nav', { "hiddenNav": !navState.navShow })} >
        <div className={'navContent'}>
          {/* 主页 */}
          <div className={"homeBtn"} onClick={() => navigate('/')}>
            <HomeOutlined />
          </div>

          {/* 黑暗模式切换 */}
          <div className={"modeBtn"}>
            <BgColorsOutlined />
            <div className={"modeOpions"}>
              {modeOptions.map((backgroundColor, index) => (
                <div
                  key={index}
                  style={{ backgroundColor }}
                  className={classNames("modeItem", `modeItem${index}`)}
                  onClick={(event) => onModeChange(event, index)}
                >
                  <CheckOutlined style={{ display: navState.mode === index ? 'block' : 'none' }} />
                </div>
              ))}
            </div>
          </div>

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
          {/* 其他按钮 */}
          {navArr.map((item, index) => (
            <NavLink
              className={({ isActive }) => (isActive ? "navActive" : "navBtn")}
              to={item.to}
              key={index}
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </nav>
    </>
  );
}

export default Nav;