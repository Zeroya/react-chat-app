import React from 'react';
import s from './ChatContentHeader.module.scss';
import { useAppSelector } from '../../hooks/hooks';
import Avatar from '../../components/Avatar/Avatar';

const ChatContentHeader: React.FC = () => {

  const { image, name } = useAppSelector(state => state.user.choosedUser);
  const user = useAppSelector(state => state.user.choosedUser)
  console.log(new Date().toLocaleDateString().split(".").join("/")); // 19/08/2022
  console.log(new Date().toLocaleTimeString().slice(0,-3)); // 21:18
  console.log(new Date().toDateString().slice(4))//.split('').splice(2, 0, ',').join(''));  // Aug 19 2022
  console.log(new Date().getTime());  // 1660933366598  Trecker

  return (
    <div className={s.chatContent}>
      {user?.image ? <div className={s.chatContent__header}>
        <div className={s.chatContent__avatar}>
          <Avatar img={image} />
        </div>
        <div className={s.chatContent__name}>
          <h3>{name}</h3>
        </div>
      </div>
      
        :
        <div className={s.chatContent__header}>
          <div className={s.chatContent__avatar}>
            <Avatar img="https://image.shutterstock.com/image-vector/male-avatar-profile-picture-vector-260nw-149083895.jpg" isOn={true}/>
          </div>
        </div>
      }
    </div>
  );
};

export default ChatContentHeader;