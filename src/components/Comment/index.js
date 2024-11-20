

import Divider from './Divider';
import EditBox from './EditBox';
import Placehold from './Placehold';


function Comment({ title }) {
  return (
    <div >
      <Divider />
      <EditBox title={title} />
      {/* <EditBox msgRun={msgRun} title={title} />
       */}
      <Placehold msgCount={0} />
    </div>
  );
}

export default Comment;
