import React from 'react';
import { Box } from '@material-ui/core';
import Message from './Message';

const ChatWindow = ({ messages }) => (
  <Box p={2} height="80vh" overflow="auto">
    {messages.map((message, index) => (
      <Message key={index} {...message} />
    ))}
  </Box>
);

export default ChatWindow;