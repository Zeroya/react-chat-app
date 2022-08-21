import React, { useState, useEffect } from 'react';
import s from './ChatListHeader.module.scss';
import Avatar from '../Avatar/Avatar';
import { addSearchValue } from '../../store/reducers/UserSlice';
import { useAppDispatch } from '../../hooks/hooks';

const ChatListHeader: React.FC = () => {

  const dispatch = useAppDispatch();
  const [search, setSearch] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearch(e.target.value);

  }

  useEffect(() => {
    dispatch(addSearchValue(search));
  }, [search])


  return (
    <div className={s.chatList__header}>
      <div className={s.chatList__avatar}>
        <Avatar img="https://image.shutterstock.com/image-vector/male-avatar-profile-picture-vector-260nw-149083895.jpg" />
      </div>
      <div className={s.chatList__search}>
        <input type="text" value={search} onChange={handleChange} placeholder="Search or start new chat" />
        <img src="data:image/png;base64,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"
          alt=""
          className={s.chatList__search_icon} />
      </div>
    </div>
  );
};

export default ChatListHeader;