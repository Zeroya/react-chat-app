import React, { useState, useEffect } from 'react';
import s from './ChatContentMessages.module.scss';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { addClickedUser, addNewMessage, addId, addNewMemes } from '../../store/reducers/UserSlice';
import { IMemes } from '../../models/IMemes';

const ChatContentMessages: React.FC = () => {

  const dispatch = useAppDispatch();
  const [search, setSearch] = useState('');
  const [memes, setMemes] = useState<IMemes>();
  const chatUsers = useAppSelector(state => state.user.users);
  const choosedValue = useAppSelector(state => state.user.choosedUser);
  const idOfChoosed = useAppSelector(state => state.user.treckerId);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearch(e.target.value);
  }

   async function fetchMemeses(){
    
      fetch(`https://api.chucknorris.io/jokes/random`)
      .then(res => res.json() as Promise<any>)
      .then(data => setMemes(data))
      console.log(memes);
      
    const newObj = {
      type: "",
      msg: memes?.value ,
      data: new Date().toLocaleDateString().split(".").join("/"), // 19/08/2022
      time: new Date().toLocaleTimeString().slice(0, -3), // 21:18
      trecker: new Date().getTime(),  // 1660933366598 
      listTime: new Date().toDateString().slice(4)
    }

    if(newObj.msg == undefined){
      newObj.msg = "Chuck Norris made Russell Crowe cry."
    }

    setTimeout(() => {
      dispatch(addNewMemes(newObj));
    }, 10000)

  };


  const submitValue = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let value:number = choosedValue.id;
    const newObj = {
      type: "other",
      msg: search,
      data: new Date().toLocaleDateString().split(".").join("/"), // 19/08/2022
      time: new Date().toLocaleTimeString().slice(0, -3), // 21:18
      trecker: new Date().getTime(),  // 1660933366598 
      listTime: new Date().toDateString().slice(4)
    }
    if (choosedValue.id !== undefined && search != "") {
      localStorage.setItem("users", JSON.stringify(chatUsers));
      dispatch(addNewMessage(newObj));
      dispatch(addId(value));
      fetchMemeses();
    }
    setSearch("");
  }

  useEffect(() => {
    chatUsers.forEach((e:any) => (e.id == choosedValue.id && e.message != choosedValue.message) && dispatch(addClickedUser(e))
    )
  }, [chatUsers])

  return (
    <div className={s.chatContent__messanger}>
      {choosedValue.id != undefined && <div className={s.chatContent__flow}>
        <form onSubmit={submitValue}>
          <input type="text" value={search} onChange={handleChange} placeholder="Type your message" />
          <img src="https://cdn-icons-png.flaticon.com/512/43/43478.png"
            alt=""
            className={s.chatContent__messanger_icon} />
        </form>
      </div>}
    </div>
  );
};

export default ChatContentMessages;