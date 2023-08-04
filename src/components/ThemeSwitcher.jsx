// ThemeSwitcher.js
import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

function ThemeSwitcher() {
  const { state, dispatch } = useContext(ThemeContext);

  return (
    <button onClick={() => dispatch({ type: 'TOGGLE_THEME' })}>
      Switch to {state.theme === 'light' ? 'dark' : 'light'} mode
    </button>
  );
}

export default ThemeSwitcher;
