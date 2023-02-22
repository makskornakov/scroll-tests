import styled from 'styled-components';

import { rubberCheckboxStyles } from '../RubberCheckbox/RubberCheckbox.styled';

export const CheckBoxWrapper = styled.div`
  /* outline: 1px solid red; */

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1.5em;
`;

export const SunOrMoonWrapper = styled.div`
  width: 1.9em;
  height: 1.9em;
  position: relative;
  img {
    position: absolute;
    width: 100%;
    transition: 0.4s;
  }
`;

export const CheckBox = styled.input.attrs({ type: 'checkbox' })`
  ${rubberCheckboxStyles}
  appearance: none;
`;
