import React from 'react';
import { AppHeader } from '../styles';
import type themeMap from '../theme';
import ThemeToggler from './ThemeToggler/ThemeToggler';

function Header({
  theme,
  setTheme,
}: {
  theme: keyof typeof themeMap;
  setTheme: (newTheme: keyof typeof themeMap) => void;
}) {
  return (
    <AppHeader>
      <h1>Maksim Kornakov</h1>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'row',
          gap: '1rem',
        }}
      >
        <ThemeToggler theme={theme} setTheme={setTheme} />
      </div>
    </AppHeader>
  );
}

export default Header;
