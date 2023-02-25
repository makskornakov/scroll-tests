import React, { useEffect } from 'react';
import { useState } from 'react';
import { InnerWrapper, Footer, ScrollSnapWrapper } from '../styles';
import type themeMap from '../theme';
import Header from './Header';
import { themeSwitcher } from './ThemeToggler/ThemeToggler';

function ScrollSnapBlock({
  theme,
  setTheme,
}: {
  theme: keyof typeof themeMap;
  setTheme: (newTheme: keyof typeof themeMap) => void;
}) {
  const [block3InViewport, setBlock3InViewport] = useState(false);

  useEffect(() => {
    const element = document.getElementById('styled-3');
    if (element) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setBlock3InViewport(true);
          } else {
            setBlock3InViewport(false);
          }
        },
        { threshold: 0.5 }
      );
      observer.observe(element);
    }
  }, []);

  useEffect(() => {
    if (block3InViewport) {
      setTheme(themeSwitcher(theme));
    } else {
      setTheme(themeSwitcher(theme));
    }
  }, [block3InViewport]);

  return (
    <ScrollSnapWrapper id="scroll-snap-wrapper">
      <Header theme={theme} setTheme={setTheme} />

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
        id="styled-3"
      >
        <h1>Styled 2</h1>

        <h2>Oooooooopps!</h2>
        <p>Seems like this section can be only viewed in the reversed theme.</p>
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
  );
}

export default ScrollSnapBlock;
