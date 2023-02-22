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
  /* margin-top: 3em; */
  width: 100%;
  height: 100%;
  /* height: calc(100% - 3em); */
  /* outline: 1px solid blue; */
  overflow-x: hidden;
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

  width: 98%;
  /* background: rgba(0, 0, 0, 0.5); */
  height: 3em;
  /* outline: 1px solid purple; */
`;
export const InnerWrapper = styled.div`
  width: 100%;
  /* height: 100% */
  height: calc(100% - 3em);
  padding-top: 3em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  outline: 1px solid red;
  scroll-snap-align: start;

  /* p styles */
  p {
    max-width: 40%;
    text-align: center;
  }
`;

export const TemporaryThemeSwitcher = styled.div`
  width: 2em;
  height: 2em;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.gray.a};
  cursor: pointer;
  transition-duration: 0.4s;
  transition-property: background-color;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Footer = styled.footer`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 8em;
  /* outline: 1px solid green; */
  scroll-snap-align: end;
`;
