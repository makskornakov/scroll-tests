import React from 'react';
import { ThemeProvider } from 'styled-components';
import { useLocalStorage } from 'usehooks-ts';
import {
  AppHeader,
  AppWrapper,
  Footer,
  InnerWrapper,
  ScrollSnapWrapper,
} from './styles';
import { useEffect } from 'react';
import themeMap from './theme';
import ThemeToggler from './components/ThemeToggler/ThemeToggler';

function App() {
  const [theme, setTheme] = useLocalStorage<keyof typeof themeMap>(
    'theme',
    Object.keys(themeMap)[0] as keyof typeof themeMap
  );

  useSetMetaThemeColor(themeMap[theme].colors.background);

  return (
    <ThemeProvider theme={themeMap[theme]}>
      <AppWrapper>
        <ScrollSnapWrapper>
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
          <InnerWrapper>
            <h1>The Introduction</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              quod, voluptate, quia, voluptates quae voluptatibus quibusdam
              accusantium quas quidem quos nemo.
            </p>
          </InnerWrapper>
          <InnerWrapper>
            <h1>Opa, Logo!</h1>
            <img
              src="icons/Logo.svg"
              alt="Logo"
              style={{ width: '30em', height: 'auto' }}
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              quod, voluptate, quia, voluptates quae voluptatibus quibusdam
              accusantium quas quidem quos nemo.
            </p>
          </InnerWrapper>
          <InnerWrapper
          // style={{
          //   height: '150%',
          // }}
          >
            <h1>Styled 2</h1>

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
