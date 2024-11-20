
import LayoutLoading from '@/components/LayoutLoading';

import './index.scss';
import MsgItem from './MsgItem';

function MsgList() {
  return (
    <>
      {loading ? (
        <LayoutLoading />
      ) : (
        msgs?.map((msg) => {
          return (
            <div key={msg._id} className={"completeMsg"}>
              <MsgItem
                _id={msg._id}
                avatar={msg.avatar}
                link={msg.link}
                name={msg.name}
                date={msg.date}
                content={msg.content}
                email={msg.email}
                isReply={false}
                replyRun={replyRun}
                title={title}
              />
              {replys
                ?.filter(item => item.replyId === msg._id)
                .map((reply) => (
                  <MsgItem
                    key={reply._id}
                    _id={reply._id}
                    avatar={reply.avatar}
                    link={reply.link}
                    name={reply.name}
                    date={reply.date}
                    content={reply.content}
                    email={reply.email}
                    isReply={true}
                    replyRun={replyRun}
                    title={title}
                  />
                ))}
            </div>
          );
        })
      )}
    </>
  );
}

export default MsgList;
