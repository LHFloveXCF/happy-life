import './global.custom.scss';
import './App.scss';

import classNames from 'classnames';
import Nav from './components/Nav';
import Main from './components/Main';

function App({ mode }) {

  const bgClasses = ["bg0", "bg1", "bg2"];

  return (
    <>
      <div className={classNames("AppBox", bgClasses[mode])}>
        <Nav />
        <Main />
      </div>

    </>
  );
}
export default App;
