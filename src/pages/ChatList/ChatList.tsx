import React from 'react';
import s from './ChatList.module.scss';
import ChatListHeader from '../../components/ChatListHeader/ChatListHeader';
import ChatListBody from '../../components/ChatListBody/ChatListBody';

const ChatList: React.FC = () => {

  return (
    <div className={s.chatList}>
      <ChatListHeader />
      <ChatListBody />
    </div>
  );
};

export default ChatList;