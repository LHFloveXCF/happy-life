import './App.scss';
import './global.custom.scss';

import classNames from 'classnames';
import { useSelector } from 'react-redux';
import ClientHome from './pages/Client/client_home';

function App({ mode }) {

  const bgClasses = ["bg0", "bg1", "bg2", "bg3"];

  const navState = useSelector((state) => state.r_c_nav);

  return (
    <>
      <div className={classNames("AppBox", bgClasses[navState.mode])}>
        <ClientHome/>
      </div>

    </>
  );
}
export default App;
