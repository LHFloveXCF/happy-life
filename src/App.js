import './App.scss';
import './global.custom.scss';

import classNames from 'classnames';
import { useSelector } from 'react-redux';
import Footer from './components/Footer';
import Main from './components/Main';
import Nav from './components/Nav';
import MarkdownEditor from './pages/BackGround';

function App({ mode }) {

  const bgClasses = ["bg0", "bg1", "bg2", "bg3"];

  const navState = useSelector((state) => state.s_nav);

  return (
    <>
      <div className={classNames("AppBox", bgClasses[navState.mode])}>
        <Nav />
        <Main />
        <Footer/>
        <MarkdownEditor/>
      </div>

    </>
  );
}
export default App;
