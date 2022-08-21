import React from 'react';
import './App.css';
import Avatar from './components/Avatar/Avatar';
import ChatContent from './pages/ChatContent/ChatContent';
import ChatList from './pages/ChatList/ChatList';

function App() {
  return (
    <div className="App appForm" >
      <ChatList />
      <ChatContent />
    </div>
  );
}

export default App;
