import './global.custom.scss';
import './App.scss';

import classNames from 'classnames';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';
import { useSelector } from 'react-redux';

function App({ mode }) {

  const bgClasses = ["bg0", "bg1", "bg2", "bg3"];

  const navState = useSelector((state) => state.s_nav);

  return (
    <>
      <div className={classNames("AppBox", bgClasses[navState.mode])}>
        <Nav />
        <Main />
        <Footer/>
      </div>

    </>
  );
}
export default App;
