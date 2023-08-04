// App.js
import React from 'react';
import { ThemeProvider } from './components/ThemeContext';
import ThemeSwitcher from './components/ThemeSwitcher';
import ThemedBox from './components/ThemedBox';

function App() {
  return (
    <ThemeProvider>
      <div style={{ padding: '2rem' }}>
        <h1>Global Theme Switcher</h1>
        <ThemeSwitcher />
        <ThemedBox />
      </div>
    </ThemeProvider>
  );
}

export default App;
