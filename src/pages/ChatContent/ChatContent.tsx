import React from 'react';
import s from './ChatContent.module.scss';
import ChatContentHeader from '../../components/ChatContentHeader/ChatContentHeader';
import ChatContentBody from '../../components/ChatContentBody/ChatContentBody';
import ChatContentMessages from '../../components/ChatContentMessages/ChatContentMessages';

const ChatContent: React.FC = () => {

  return (
    <div className={s.chatContent}>
      <ChatContentHeader />
      <ChatContentBody />
      <ChatContentMessages />
    </div>
  );
};

export default ChatContent;