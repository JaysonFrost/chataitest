import React, { useState, useEffect } from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import ChatWindow from './ChatWindow';
import MessageInput from './MessageInput';
import ChatHistory from './ChatHistory';

const useStyles = makeStyles((theme) => ({
  root: {
    boxSizing: 'border-box',
  },
  input: {
    maxWidth: '600px',
    width: '100%',
    margin: 'auto',
  },
  chat: {
    margin: 'auto',
    width: '600px',
    paddingTop: '20px'
  }
}));

const ChatApp = () => {
  const classes = useStyles();
  const [chats, setChats] = useState(JSON.parse(sessionStorage.getItem('chats')) || []);
  const [activeChat, setActiveChat] = useState(chats.length > 0 ? chats.length - 1 : null);

  useEffect(() => {
    sessionStorage.setItem('chats', JSON.stringify(chats));
  }, [chats]);

  const handleMessageSubmit = (text) => {
    if (activeChat !== null) {
      setChats(prevChats => {
        const newChats = [...prevChats];
        newChats[activeChat].messages.push({ text, sender: 'You' });
        return newChats;
      });
    } else {
      setChats([{ messages: [{ text, sender: 'You' }] }]);
      setActiveChat(0);
    }
  };

  const handleCreateChat = () => {
    setChats(prevChats => [...prevChats, { messages: [] }]);
    setActiveChat(chats.length); // Set the new chat as the active one
  };

  const handleSelectChat = (index) => {
    setActiveChat(index);
  };

  return (
    <Grid container className={classes.root} style={{ height: '100vh' }}>
      <Grid item xs={3}>
        <ChatHistory chats={chats} onCreateChat={handleCreateChat} onSelectChat={handleSelectChat} />
      </Grid>
      <Grid item xs={9} container direction="column">
        <Grid item style={{ flexGrow: 1, overflow: 'auto', margin: 'auto', width: '600px', paddingTop: '20px' }}>
          {activeChat !== null && <ChatWindow messages={chats[activeChat].messages} />}
        </Grid>
        <Grid item className={classes.input}>
          <MessageInput onSubmit={handleMessageSubmit} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ChatApp;