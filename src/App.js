import './global.custom.scss';
import './App.scss';

import classNames from 'classnames';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';

function App({ mode }) {

  const bgClasses = ["bg0", "bg1", "bg2", "bg3"];

  return (
    <>
      <div className={classNames("AppBox", bgClasses[0])}>
        <Nav/>
        <Main />
        <Footer/>
      </div>

    </>
  );
}
export default App;
