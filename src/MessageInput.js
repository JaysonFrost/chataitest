import React, { useState } from 'react';
import { Box, TextField } from '@material-ui/core';

const MessageInput = ({ onSubmit }) => {
  const [value, setValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(value);
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box p={2} display="flex">
        <TextField
          fullWidth
          variant="outlined"
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
      </Box>
    </form>
  );
};

export default MessageInput;