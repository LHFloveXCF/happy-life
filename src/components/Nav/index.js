import './index.custom.scss';
import './index.scss';

import {
  BgColorsOutlined,
  CheckOutlined,
  HomeOutlined,
  MenuOutlined,
  SettingOutlined
} from '@ant-design/icons';
import {
  useEventListener,
  useLocalStorageState,
  useSafeState,
  useUpdateEffect
} from 'ahooks';
import { Drawer } from 'antd';

import { NavLink, useNavigate } from 'react-router-dom';
import classNames from 'classnames';
import { useLinkList } from './config';
import { modeMap, modeMapArr } from '@/utils/modeMap';

const bodyStyle = window.document.getElementsByTagName('body')[0].style;


function Nav({mode, navShow, setNavShow, setMode}) {

  const navigate = useNavigate();
  const { secondNavArr, navArr, mobileNavArr } = useLinkList();
  const modeOptions = ['rgb(19, 38, 36)', 'rgb(110, 180, 214)', 'rgb(171, 194, 208)'];
  const [visible, setVisible] = useSafeState(false);
  const [_, setLocalMode] = useLocalStorageState('localMode');

  useUpdateEffect(() => {
    setLocalMode(mode);
    for (const type of modeMapArr) {
      bodyStyle.setProperty(type, modeMap[type][mode]);
    }
  }, [mode]);

  useEventListener(
    'mousewheel',
    event => {
      event = event || window.event;
      setNavShow(event.wheelDeltaY > 0);
    },
    { target: document.body }
  );

  return (
    <>
      <nav className={classNames('nav', { "hiddenNav": !navShow })} >
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
                  onClick={() => setMode?.(index)}
                >
                  <CheckOutlined style={{ display: mode === index ? 'block' : 'none' }} />
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
              className={classNames("modeItem", `modeItem${index}`)}
              onClick={() => setMode?.(index)}
            >
              {mode === index && <CheckOutlined />}
            </div>
          ))}
        </div>
      </Drawer>
    </>
  );
}

export default Nav;