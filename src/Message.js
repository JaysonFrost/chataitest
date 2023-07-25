import React from 'react';
import { Typography } from '@material-ui/core';

const Message = ({ text, sender }) => (
  <Typography variant="subtitle1">
    <strong>{sender}:</strong> {text}
  </Typography>
);

export default Message;