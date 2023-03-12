import React, {
  // useEffect,
  useRef,
} from 'react';
// import type { MutableRefObject } from 'react';
// import { useState, useMemo } from 'react';
import { InnerWrapper, Footer, ScrollSnapWrapper } from '../styles';
import type themeMap from '../theme';
import Header from './Header';

import { useIntersectionObserver } from '../hooks/UseIntersection';
import { SectionWrapper } from './Main.styled';

function ScrollSnapBlock({
  theme,
  setTheme,
}: {
  theme: keyof typeof themeMap;
  setTheme: (newTheme: keyof typeof themeMap) => void;
}) {
  // useIntersectionObserver to change theme when element with id="styled-3" is in the viewport and change it back when it's not

  const ref = useRef(null);
  const isIntersecting = useIntersectionObserver(
    ref,
    {
      root: null,
      rootMargin: '0px',
      threshold: 0.4,
    },
    false
  ).isIntersecting;

  // const intersectionPercentage = useIntersectionObserver(
  //   ref,
  //   {
  //     root: null,
  //     rootMargin: '0px',
  //     threshold: 0,
  //   },
  //   false
  // ).intersectionPercent;

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
      <InnerWrapper ref={ref}>
        <h1>Styled 2</h1>

        <p>
          {isIntersecting
            ? 'isIntersecting is true'
            : 'isIntersecting is false'}
        </p>

        {/* <p
          style={{
            position: 'absolute',
            top: '0',
            left: '0',
          }}
        >
          {intersectionPercentage}
        </p> */}

        <h2 style={translateStyleIfIntersecting('left', isIntersecting)}>
          Oooooooopps!
        </h2>

        <p style={translateStyleIfIntersecting('right', isIntersecting)}>
          Seems like this section rolls in from the right side of the screen
          when it's in the viewport.
        </p>
      </InnerWrapper>
      <InnerWrapper>
        <h1>Title</h1>
        <SectionWrapper>
          <div>
            <h2>Styled 4</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              quod, voluptate, quia, voluptates quae voluptatibus quibusdam
              accusantium quas quidem quos nemo.
            </p>
          </div>
          <div>
            <div
              style={{
                height: '10em',
                width: '10em',
                backgroundColor: 'pink',
              }}
            ></div>
          </div>
        </SectionWrapper>
      </InnerWrapper>
      <Footer>
        <h1>Footer</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </Footer>
    </ScrollSnapWrapper>
  );
}

export default ScrollSnapBlock;

function translateStyleIfIntersecting(
  leftOrRight: 'left' | 'right',
  isIntersecting: boolean
) {
  const transitionStyles = {
    transition: 'transform 0.7s ease-in-out',
  };

  const result = isIntersecting
    ? { transform: 'translateX(0)' }
    : {
        transform: `translateX(${leftOrRight === 'left' ? '-' : '+'}100vw)`,
      };

  return { ...result, ...transitionStyles };
}
