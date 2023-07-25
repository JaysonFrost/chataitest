import React from 'react';
import { List, ListItem, ListItemText, Typography, Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.primary,
    height: '100%',
    padding: '20px 20px 0 20px'
  },
  button: {
    margin: '0 auto',
    marginBottom: '20px',
    display: 'flex'
  },
  listItem: {
    padding: 0,
  }
}));

const ChatHistory = ({ chats, onCreateChat, onSelectChat }) => {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      <Button variant="outlined" color="primary" onClick={onCreateChat} className={classes.button}>Create New Chat</Button>

      <Typography variant="h6">Chat History</Typography>
      {chats.map((chat, index) => (
        <ListItem button key={index} onClick={() => onSelectChat(index)} className={classes.listItem}>
          <ListItemText primary={`Chat ${index + 1}`} secondary={`Last message: ${chat.messages[chat.messages.length - 1] ? chat.messages[chat.messages.length - 1].text : 'No messages yet'}`} />
        </ListItem>
      ))}
    </List>
  );
};

export default ChatHistory;