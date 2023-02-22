import styled from 'styled-components';

export const AppWrapper = styled.div`
  display: flex;
  /* flex-direction: column; */
  /* align-items: center; */
  /* scroll none */
  /* overflow: hidden; */
  justify-content: center;
  /* flex-flow: column; */
  width: 100%;
  height: 100vh;
  /* height: 100vh; */
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};

  transition-duration: 0.4s;
`;

export const ScrollSnapWrapper = styled.div`
  margin-top: 3em;
  width: 100%;
  height: calc(100% - 3em);
  outline: 1px solid blue;
  overflow: hidden;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
`;

export const AppHeader = styled.header`
  position: fixed;
  display: flex;
  flex-direction: row;
  align-items: center;
  top: 0;
  justify-content: space-between;
  width: 100%;
  /* background: rgba(0, 0, 0, 0.5); */
  height: 3em;
  outline: 1px solid ${({ theme }) => theme.colors.text};
`;
export const InnerWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  outline: 1px solid red;
  scroll-snap-align: start;
`;

export const TemporaryThemeSwitcher = styled.div`
  width: 2em;
  height: 2em;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.gray.a};
`;

export const Footer = styled.footer`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 5em;
  outline: 1px solid green;
  scroll-snap-align: end;
`;
