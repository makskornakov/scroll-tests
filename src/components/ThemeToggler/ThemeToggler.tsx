import { RubberCheckbox } from '../RubberCheckbox/RubberCheckbox';
import { CheckBoxWrapper, SunOrMoonWrapper } from './ThemeToggler.styled';

import type themeMap from '../../theme';

function ThemeToggler({
  theme,
  setTheme,
}: {
  theme: keyof typeof themeMap;
  setTheme: (newTheme: keyof typeof themeMap) => void;
}) {
  return (
    <CheckBoxWrapper>
      <RubberCheckbox
        checked={theme.includes('light')}
        onChange={() => setTheme(themeSwitcher(theme))}
      />
      <SunOrMoonWrapper>
        <img
          src="icons/moon.svg"
          alt="moon"
          style={theme.includes('dark') ? { opacity: 1 } : { opacity: 0 }}
        />
        <img
          src="icons/sun.svg"
          alt="sun"
          style={theme.includes('dark') ? { opacity: 0 } : { opacity: 1 }}
        />
      </SunOrMoonWrapper>
    </CheckBoxWrapper>
  );
}

export default ThemeToggler;
// set return type of the function

export function themeSwitcher(theme: string) {
  const clearTheme = theme.slice(0, -1);
  const themeNumber = theme.slice(-1);
  return ((clearTheme === 'dark' ? 'light' : 'dark') + themeNumber) as keyof typeof themeMap;
}
