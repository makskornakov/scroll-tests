import React from 'react';
import { ThemeProvider } from 'styled-components';
import { useLocalStorage } from 'usehooks-ts';
import { AppWrapper } from './styles';
import { useEffect } from 'react';
import themeMap from './theme';
import ScrollSnapBlock from './components/ScrollSnap';

function App() {
  const [theme, setTheme] = useLocalStorage<keyof typeof themeMap>(
    'theme',
    Object.keys(themeMap)[0] as keyof typeof themeMap,
  );

  useSetMetaThemeColor(themeMap[theme].colors.background);

  return (
    <ThemeProvider theme={themeMap[theme]}>
      <AppWrapper>
        <ScrollSnapBlock theme={theme} setTheme={setTheme} />
      </AppWrapper>
    </ThemeProvider>
  );
}

export default App;

export function useSetMetaThemeColor(content: string) {
  useEffect(() => {
    const meta = document.head.querySelector('meta[name=theme-color]');
    const body = document.body;
    console.log(meta);
    if (meta) {
      meta.setAttribute('content', content);
    }
    if (body) {
      body.style.backgroundColor = content;
    }

    return () => {};
  }, [content]);
}
