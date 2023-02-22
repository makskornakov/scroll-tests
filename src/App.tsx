import React from 'react';
import { ThemeProvider } from 'styled-components';
import { useLocalStorage } from 'usehooks-ts';
import {
  AppHeader,
  AppWrapper,
  Footer,
  InnerWrapper,
  ScrollSnapWrapper,
  TemporaryThemeSwitcher,
} from './styles';
import { useEffect } from 'react';
import themeMap from './theme';

function App() {
  const [theme, setTheme] = useLocalStorage<keyof typeof themeMap>(
    'theme',
    Object.keys(themeMap)[0] as keyof typeof themeMap
  );

  useSetMetaThemeColor(themeMap[theme].colors.background);

  return (
    <ThemeProvider theme={themeMap[theme]}>
      <AppWrapper>
        <AppHeader>
          <h1>Page name</h1>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'row',
              gap: '1rem',
            }}
          >
            <p>
              Theme: <strong>{theme}</strong>
            </p>
            <TemporaryThemeSwitcher
              onClick={() => {
                setTheme(themeSwitcher(theme));
              }}
            />
          </div>
        </AppHeader>
        <ScrollSnapWrapper>
          <InnerWrapper>
            <h1>Styled Components</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              quod, voluptate, quia, voluptates quae voluptatibus quibusdam
              accusantium quas quidem quos nemo.
            </p>
          </InnerWrapper>
          <InnerWrapper>
            <h1>Styled 2</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              quod, voluptate, quia, voluptates quae voluptatibus quibusdam
              accusantium quas quidem quos nemo.
            </p>
          </InnerWrapper>
          <InnerWrapper>
            <h1>Styled 3</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              quod, voluptate, quia, voluptates quae voluptatibus quibusdam
              accusantium quas quidem quos nemo.
            </p>
          </InnerWrapper>
          <InnerWrapper>
            <h1>Styled 4</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              quod, voluptate, quia, voluptates quae voluptatibus quibusdam
              accusantium quas quidem quos nemo.
            </p>
          </InnerWrapper>
          <Footer>
            <h1>Footer</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </Footer>
        </ScrollSnapWrapper>
      </AppWrapper>
    </ThemeProvider>
  );
}

export default App;

function themeSwitcher(theme: string) {
  const clearTheme = theme.slice(0, -1);
  const themeNumber = theme.slice(-1);

  const newTheme = ((clearTheme === 'dark' ? 'light' : 'dark') +
    themeNumber) as keyof typeof themeMap;

  return newTheme;
}

// function setMetaThemeColor(color: string) {
//   document.head
//     .querySelector('meta[name=theme-color]')!
//     .setAttribute('content', color);
// }

export function useSetMetaThemeColor(content: string) {
  useEffect(() => {
    const meta = document.head.querySelector('meta[name=theme-color]');
    console.log(meta);
    if (meta) {
      meta.setAttribute('content', content);
    }

    return () => {};
  }, [content]);
}
