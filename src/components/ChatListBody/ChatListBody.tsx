import React, { useState, useEffect } from 'react';
import Avatar from '../Avatar/Avatar';
import s from './ChatListBody.module.scss';
import { allChatUsers } from '../../models/UserArray';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { addUsers, addClickedUser } from '../../store/reducers/UserSlice';
import { IUser } from '../../models/IUser';

const ChatListBody: React.FC = () => {
  let objOfMainUser:object = {};
  const dispatch = useAppDispatch();
  const chatUsers = useAppSelector(state => state.user.users);
  const searchedValue = useAppSelector(state => state.user.searchValue);
  const [boleanHandler, setBoleanHandler] = useState({});

  useEffect(() => {
    dispatch(addUsers(allChatUsers));
  }, [])


  const clickHandler = (el: IUser): void => {
    dispatch(addClickedUser(el));
    setBoleanHandler(el);
  }

  return (
    <div className={s.chatList__body}>
      <div className={s.chatList__body_title}>
        Chats
      </div>
      <div className={s.chatList__scroll}>
        {chatUsers.filter((val) => {
          if (searchedValue == "") {
            return val
          } else if (val.name.toLowerCase().includes(searchedValue.toLowerCase())) {
            return val
          }
        }).sort((a,b) => b.message[b.message.length - 1].trecker - a.message[a.message.length - 1].trecker  ).map((el) => {
          let lastElem = el.message[el.message.length - 1];
          return (
            <div key={el.id}
              onClick={() => clickHandler(el)}
              className={s.chatList__body_chats}>
                {}
              <div className={s.chatList__body_message}>
                <Avatar img={el.image} />
                <div className={s.chatList__body_nameBlock}>
                  <h3>{el.name}</h3>
                  <p>{lastElem.msg}</p>
                </div>
              </div>
              <p className={s.chatList__body_data}>{el.message[el.message.length - 1].listTime}</p>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default ChatListBody;