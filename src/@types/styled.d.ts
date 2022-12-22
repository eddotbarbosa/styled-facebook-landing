// import original module declarations
import 'styled-components';

import {desktopFirstBreakpoints, mobileFirstBreakpoints} from '../styles/layout';
import {CascadingssProps} from '../components/cascadingss/cascadingss';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      whiteOne: string;
      grayOne: string;
      grayTwo: string;
      grayThree: string;
      blueOne: string;
      blueTwo: string;
      greenOne: string;
      greenTwo: string,
      blackOne: string;
      blackTwo: string;
    },
    breakpoints: {
      selected?: 'desktop' | 'mobile',
      desktopFirst: typeof desktopFirstBreakpoints,
      mobileFirst: typeof mobileFirstBreakpoints
    }
  }
}
