// ThemedBox.js
import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

function ThemedBox() {
  const { state } = useContext(ThemeContext);
  const isDark = state.theme === 'dark';

  const styles = {
    backgroundColor: isDark ? '#333' : '#eee',
    color: isDark ? '#fff' : '#000',
    padding: '1rem',
    marginTop: '1rem',
    borderRadius: '8px',
  };

  return (
    <div style={styles}>
      This box is styled using the global <strong>{state.theme}</strong> theme.
    </div>
  );
}

export default ThemedBox;
