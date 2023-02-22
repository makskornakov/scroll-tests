import React from 'react';
import themeMap from '../../theme';
import {
  CheckBox,
  CheckBoxWrapper,
  SunOrMoonWrapper,
} from './ThemeToggler.styled';

function ThemeToggler({
  theme,
  setTheme,
}: {
  theme: keyof typeof themeMap;
  setTheme: (newTheme: keyof typeof themeMap) => void;
}) {
  return (
    <CheckBoxWrapper>
      <CheckBox
        checked={theme.includes('light')}
        onChange={() => setTheme(themeSwitcher(theme) as keyof typeof themeMap)}
      ></CheckBox>
      <SunOrMoonWrapper>
        <img
          src="/icons/moon.svg"
          alt="moon"
          style={theme.includes('dark') ? { opacity: 1 } : { opacity: 0 }}
        />
        <img
          src="/icons/sun.svg"
          alt="sun"
          style={theme.includes('dark') ? { opacity: 0 } : { opacity: 1 }}
        />
      </SunOrMoonWrapper>
    </CheckBoxWrapper>
  );
}

export default ThemeToggler;

function themeSwitcher(theme: string) {
  const clearTheme = theme.slice(0, -1);
  const themeNumber = theme.slice(-1);
  return (clearTheme === 'dark' ? 'light' : 'dark') + themeNumber;
}
