import styled from 'styled-components';

export const AppWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100vh;
  color: ${({ theme }) => theme.colors.text};
`;

export const ScrollSnapWrapper = styled.div`
  width: 100%;
  height: 100%;

  overflow-x: hidden;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
`;

export const AppHeader = styled.header`
  /* outline: 1px solid purple; */

  position: fixed;
  display: flex;
  flex-direction: row;
  align-items: center;
  top: 0;
  justify-content: space-between;

  width: 97%;
  /* background: rgba(0, 0, 0, 0.5); */
  height: 3.5em;
`;
export const InnerWrapper = styled.div`
  width: 100%;

  height: calc(100% - 3.5em);
  padding-top: 3.5em;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  outline: 1px solid red;
  scroll-snap-align: start;

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
