import { css } from 'styled-components';

export const checkboxSize = 25;
// const settingsCheckboxStyles = css`
//   margin: 0; // reset browser defaults

//   display: inline-block;
//   width: ${checkboxSize}px;
//   height: ${checkboxSize}px;
//   border-radius: ${(3 / 16) * checkboxSize}px;
//   vertical-align: middle;

//   transition-duration: 0.9s;
//   transition-property: border-color;

//   border: ${checkboxSize / 16}px solid;
//   border-color: #fff;

//   position: relative;

//   cursor: pointer;

//   ::after {
//     content: '';
//     position: absolute;
//     top: 0;
//     left: 0;

//     background-color: var(--color-candle-green);
//     height: 100%;
//     width: 0;
//     transition-duration: 0.5s;
//     transition-property: width;

//     border-radius: inherit;
//   }
//   :checked {
//     border-color: transparent;

//     ::after {
//       width: 100%;
//     }
//   }
// `;
const settingsCheckboxBorderRadius = (3 / 16) * checkboxSize;
const settingsCheckboxBorderWidth = checkboxSize / 16;
const settingsCheckboxAnimation = '0.6s ease-out 0.08s';
export const rubberCheckboxStyles = css`
  margin: 0; // reset browser defaults

  display: inline-block; // This is the default in most browsers
  width: ${checkboxSize * 2}px;
  height: ${checkboxSize}px;
  border-radius: ${settingsCheckboxBorderRadius}px;

  /* Copied from input styles */

  border: ${settingsCheckboxBorderWidth}px solid;
  border-color: ${(props) => props.theme.colors.gray.b};

  position: relative;

  cursor: pointer;

  ::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;

    border: ${settingsCheckboxBorderWidth * 1.6}px solid;
    border-color: ${(props) => props.theme.colors.background};
    border-radius: ${settingsCheckboxBorderRadius}px;
    box-sizing: border-box;

    height: 100%;
    width: 50%;
    transition-duration: 0.3s;
    transition-property: background-color, margin-left, border-color;

    background-color: ${(props) => props.theme.colors.candleRed};
  }
  :checked {
    border-color: ${(props) => props.theme.colors.gray.b};

    ::after {
      background-color: ${(props) => props.theme.colors.candleGreen};
      margin-left: ${checkboxSize - settingsCheckboxBorderWidth}px;
    }
  }

  animation: ${settingsCheckboxAnimation} uncheck;
  :checked {
    animation: ${settingsCheckboxAnimation} check;
  }
  ::after {
    animation: ${settingsCheckboxAnimation} afterUncheck;
  }
  :checked::after {
    animation: ${settingsCheckboxAnimation} afterCheck;
  }
  @keyframes afterUncheck {
    8% {
      transform: none;
    }
    60% {
      transform: scaleX(0.84) translateX(-10%);
    }
  }
  @keyframes afterCheck {
    8% {
      transform: none;
    }
    60% {
      transform: scaleX(0.84) translateX(10%);
    }
  }
  @keyframes uncheck {
    8% {
      transform: none;
    }
    60% {
      transform: scaleX(1.2) scaleY(0.9) translateX(-8%);
      border-color: ${(props) => props.theme.colors.candleRed};
    }
  }
  @keyframes check {
    8% {
      transform: none;
    }
    60% {
      transform: scaleX(1.2) scaleY(0.9) translateX(8%);
      border-color: ${(props) => props.theme.colors.candleGreen};
    }
  }
`;
