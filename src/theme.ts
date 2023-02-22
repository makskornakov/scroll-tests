const mainDarkColors = {
  absolute: '#000',
  text: '#fff',
  background: '#121213',
  // background: 'green',
  gray: {
    a: '#d9d9d9',
    b: '#a9a9a9',
    c: '#7c7c7c',
  },
};
const mainLightColors = {
  absolute: '#fff',
  text: '#121213',
  background: '#f4f4f4',
  // background: 'pink',
  gray: {
    a: '#303030',
    b: '#7c7c7c',
    c: '#c5c5c5',
  },
};
// const darkIcons = {
//   main: '#626262',
//   hover: '#b1b1b1',
//   a: '#6d7486',
//   b: '#dde2f2',
//   c: '#284268',
// };
// const lightIcons = {
//   main: '#a4a4a4',
//   hover: '#fbe924',
//   a: '#f8a529',
//   b: '#eee051',
//   c: '#fca015',
// };
const theme1 = {
  primary: '#f55500',
  secondary: '#f5d800',
  candleGreen: '#6bc800',
  candleRed: '#ff0037',
  buttons: '#6bc800',
};

const theme2 = {
  primary: 'cyan',
  secondary: '#6bc800',
  candleGreen: 'blue',
  candleRed: '#ff0037',
  buttons: '#f55500',
};
const themeMap = {
  dark1: {
    colors: {
      ...mainDarkColors,
      ...theme1,
      // icons: darkIcons,
    },
  },
  light1: {
    colors: {
      ...mainLightColors,
      ...theme1,
      // icons: lightIcons,
    },
  },
  dark2: {
    colors: {
      ...mainDarkColors,
      ...theme2,
      // icons: darkIcons,
    },
  },
  light2: {
    colors: {
      ...mainLightColors,
      ...theme2,
      // icons: lightIcons,
    },
  },
};

export default themeMap;
