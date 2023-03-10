import styled from 'styled-components';

export const AppWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  color: ${({ theme }) => theme.colors.text};
`;

export const ScrollSnapWrapper = styled.div`
  width: 100%;
  height: 100%;
  /* display: flex; */
  /* flex-direction: column; */
  /* align-items: center; */

  overflow-x: hidden;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
`;

export const AppHeader = styled.header`
  /* outline: 1px solid purple; */

  margin: auto;
  /* position: fixed; */
  display: flex;
  flex-direction: row;
  align-items: center;
  /* top: 0; */
  justify-content: space-between;

  width: 97%;
  /* background gradient top - black, bottom - transparent, more intense at the bottom */
  /* background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.8) 0%,
    rgba(0, 0, 0, 0) 100%
  ); */
  scroll-snap-align: start;
  height: 3.5em;
`;
export const InnerWrapper = styled.div`
  /* outline: 1px solid red; */

  width: 100%;

  /* height: calc(100% - 3.5em); */
  height: 100%;
  /* padding-top: 3.5em; */

  border-bottom: 1px solid ${({ theme }) => theme.colors.gray.b};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  scroll-snap-align: start;
  position: relative;

  > h1 {
    position: absolute;
    top: 0;
  }

  p {
    max-width: 40%;
    text-align: center;
  }
`;

export const Footer = styled.footer`
  /* outline: 1px solid green; */

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 8em;
  scroll-snap-align: end;
`;
