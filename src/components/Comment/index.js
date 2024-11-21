import { useMount } from 'ahooks';

import Divider from './Divider';
import EditBox from './EditBox';
import Placehold from './Placehold';
import MsgList from './MsgList';
import { getMsgs } from '@/redux/modules/s_msg';
import { useDispatch, useSelector } from 'react-redux';


function Comment({ title }) {
  const dispatch = useDispatch();

  const stateMsg = useSelector((state) => state.s_msg);

  useMount(() => {
    dispatch(getMsgs())
  })

  return (
    <div >
      <Divider />
      <EditBox title={title} />
      <MsgList />
      <Placehold msgCount={stateMsg.msgs.length} />
    </div>
  );
}

export default Comment;
