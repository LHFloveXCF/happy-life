import { useSelector } from 'react-redux';
import './index.scss';
import MsgItem from './MsgItem';


function MsgList({ title, replyRun }) {

  const msgState = useSelector((state) => state.s_msg)

  console.log("msgStates 3 ", msgState.msgs);
  

  return (
    <>
      <div>
        {msgState.msgs.map((msg, index) => {
          console.log("msg ", msg);
          
          (<div key={index} className={"completeMsg"}>
            <MsgItem
              content={msg.msg}
            />
          </div>)
        })}
      </div>


    </>
  );
}

export default MsgList;
