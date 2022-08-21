import React, { useRef, useEffect } from 'react';
import s from './ChatContentBody.module.scss';
import Avatar from '../Avatar/Avatar';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';

const ChatContentBody: React.FC = () => {

  const user = useAppSelector(state => state.user.choosedUser);
  const messagesEndRef = useRef<any>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [user]);

  return (
    <div className={s.chatContent__body}>
      <div className={s.chatList__scroll}>
        {user?.message && user.message.map((el: any) => {
          return (
            <div className={`${s.chatContent__body_messages} ${el.type && s.chatContent__body_messages_opposite}`}>
              {!el.type && <Avatar img={user.image}  isOn={true} />}
              <div className={s.chatContent__body_message}>
                <div className={`${s.chatContent__body_title} ${el.type && s.title_opposite} `}>
                  <p>{el.msg}</p>
                </div>
                <div className={`${el.type ? s.chatContent__body_data : ""} ${s.chatContent_text}`}>
                  <p>{el.data} , {el.time} AM</p>
                </div>
              </div>
            </div>
          )
        })}
        <div ref={messagesEndRef} />
      </div>
    </div>
  );
};

export default ChatContentBody;