import { useMount } from 'ahooks';

import Divider from './Divider';
import EditBox from './EditBox';
import Placehold from './Placehold';
import MsgList from './MsgList';
import { getMsgs } from '@/redux/modules/s_msg';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';


function Comment({ title }) {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getMsgs())
  }, [])

  return (
    <div >
      <Divider />
      <EditBox title={title} />
      <MsgList />
      <Placehold msgCount={0} />
    </div>
  );
}

export default Comment;
