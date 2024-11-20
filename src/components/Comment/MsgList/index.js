import { useSelector } from 'react-redux';
import './index.scss';
import MsgItem from './MsgItem';


function MsgList({ title, replyRun }) {

  const msgState = useSelector((state) => state.s_msg)

  console.log("msgStates 3 ", msgState.msgs);


  return (
    <>
      {msgState.msgs.length !== 0 && msgState.msgs.map((msg, index) => (
        <div key={index} className={"completeMsg"}>
          <MsgItem content={msg.msg} />
        </div>
      ))}


    </>
  );
}

export default MsgList;
