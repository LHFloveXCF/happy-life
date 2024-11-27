import './index.scss';
import './index.custom.scss';

import {
  BgColorsOutlined,
  CheckOutlined,
  HomeOutlined,
  MenuOutlined,
  LoginOutlined
} from '@ant-design/icons';
import {
  useEventListener,
  useLocalStorageState,
  useSafeState,
  useUpdateEffect
} from 'ahooks';

import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { useLinkList } from './config';
import { modeMap, modeMapArr } from '@/utils/modeMap';
import { changeMode, setNavShow } from '@/redux/modules/s_nav';
import { Drawer, Tooltip } from 'antd';
import { useEffect } from 'react';
import { cur_view } from '@/utils/constant';

const bodyStyle = window.document.getElementsByTagName('body')[0].style;


function Nav() {

  const navigate = useNavigate();
  const { secondNavArr, navArr, mobileNavArr } = useLinkList();
  const modeOptions = ['rgb(19, 38, 36)', 'rgb(110, 180, 214)', 'rgb(171, 194, 208)'];
  const [_, setLocalMode] = useLocalStorageState('localMode');
  const dispatch = useDispatch();
  const navState = useSelector((state) => state.s_nav)
  const [visible, setVisible] = useSafeState(false);

  useUpdateEffect(() => {
    setLocalMode(navState.mode);
    for (const type of modeMapArr) {
      bodyStyle.setProperty(type, modeMap[type][navState.mode]);
    }
  }, [navState.mode]);

  useEffect(() => {
    setLocalMode(navState.mode);
    for (const type of modeMapArr) {
      bodyStyle.setProperty(type, modeMap[type][navState.mode]);
    }
  }, [])

  useEventListener(
    'mousewheel',
    event => {
      event = event || window.event;
      if (navState.curView === cur_view.CLIENT) {
        dispatch(setNavShow(event.wheelDeltaY > 0));
      }
    },
    { target: document.body }
  );

  const onModeChange = (event, index) => {
    dispatch(changeMode(index))
  }

  return (
    <>
      <nav className={classNames('nav', { "hiddenNav": !navState.navShow })} >
        <div className={'navContent'}>
          {/* 主页 */}
          <div className={"homeBtn"} onClick={() => navigate('/')}>
            <Tooltip title="主页" placement="right">
              <HomeOutlined />
            </Tooltip>

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
          <div className={"homeAndAdmin"} onClick={() => navigate('login')}>
            <Tooltip title="登录" placement="rightBottom"><LoginOutlined tooltip="What do you want others to call you?" /></Tooltip>

          </div>
        </div>
      </nav>
      <div className={"mobileNavBtn"} onClick={() => setVisible(true)}>
        <MenuOutlined />
      </div>
      <Drawer
        placement='right'
        onClose={() => setVisible(false)}
        visible={visible}
        className='mobile-nav-box'
      >
        <div className={"mobileNavBox"}>
          {mobileNavArr.map((item, index) => (
            <NavLink
              className={({ isActive }) =>
                isActive ? "mobileNavActive" : "mobileNavItem"
              }
              to={item.to}
              key={index}
            >
              {item.name}
            </NavLink>
          ))}
          {modeOptions.map((backgroundColor, index) => (
            <div
              key={index}
              style={{ backgroundColor }}
              className={classNames("modeItem", [`modeItem${index}`])}
              onClick={(event) => onModeChange(event, index)}
            >
              {navState.mode === index && <CheckOutlined />}
            </div>
          ))}
        </div>
      </Drawer>
    </>
  );
}

export default Nav;