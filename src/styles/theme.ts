import {DefaultTheme} from "styled-components";

const theme: DefaultTheme = {
  colors: {
    whiteOne: '#ffffff',
    grayOne: '#f0f2f5',
    grayTwo: '#dddfe2',
    grayThree: '#737373',
    blueOne: '#1877f2',
    blueTwo: '#166fe5',
    greenOne: '#42b72a',
    greenTwo: '#36a420',
    blackOne: '#213547',
    blackTwo: '#1d2129',
  },
  breakpoints: {
    selected: 'desktop',
    desktopFirst: {
      xl: '',
      lg: '',
      md: '',
      sm: '',
      xs: ''
    },
    mobileFirst: {
      sm: '',
      md: '',
      lg: '',
      xl: '',
      "2xl": ''
    }
  }
};

export {theme};
