import { DefaultTheme } from "styled-components";
import colors from "./colors";
import fontSizes from "./fontSizes";
import letterSpacings from "./letterSpacings";
import lineHeights from "./lineHeights";
import space from "./space";

// 테마 타입 확장
declare module "styled-components" {
  export interface DefaultTheme {
    space: typeof space;
    fontSizes: typeof fontSizes;
    letterSpacings: typeof letterSpacings;
    lineHeights: typeof lineHeights;
    colors: typeof colors;
  }
}

export const theme: DefaultTheme = {
  space,
  fontSizes,
  letterSpacings,
  lineHeights,
  colors,
} as const;
