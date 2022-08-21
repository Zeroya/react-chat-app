import React from 'react';
import s from './Avatar.module.scss';

type propsAvatar = {
  img: string;
  isOn?:boolean;
}

const Avatar: React.FC<propsAvatar> = (props) => {
  return (
    <div className={s.avatar}>
      <div className={s.avatar__img}>
        <img src={props.img} alt="#" />
      </div>
      <span className={!props.isOn ? s.isOnline : ""} style={{}}></span>
    </div>
  );
};

export default Avatar