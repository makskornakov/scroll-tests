import styled from 'styled-components';

export const SectionWrapper = styled.div`
  outline: 1px solid red;

  width: 90%;
  height: auto;
  /* padding: 1em; */
  /* box-sizing: border-box; */

  display: flex;
  /* flex-direction: row; */
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;

  > div {
    outline: 1px solid blue;
    width: 50%;
    min-height: 35%;
    min-width: 30em;
    /* height: auto; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
