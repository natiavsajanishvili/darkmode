import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createTheme, ThemeProvider, CssBaseline, Button } from '@mui/material';
import { grey, blue } from '@mui/material/colors';
import { toggleDarkMode } from './darkModeSlice';

const DarkMode = () => {
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state) => state.darkMode.isDarkMode);

  const lightTheme = createTheme({
    palette: {
      mode: 'light',
      background: {
        default: grey[100],
      },
    },
  });

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      background: {
        default: grey[900],
      },
      primary: {
        main: blue[500],
      },
    },
  });

  const handleToggle = () => {
    dispatch(toggleDarkMode());
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleToggle}
        >
          {isDarkMode ? 'LightMode' : 'DarkMode'}
        </Button>
      </div>
    </ThemeProvider>
  );
};

export default DarkMode;
