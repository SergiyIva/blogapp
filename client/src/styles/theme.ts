import { ITheme } from "../interfaces/styled";

export const baseTheme: ITheme = {
  colors: {
    brandColor: "hsl(205, 100%, 40%)",
    brandColorValue: "205, 100%, 40%",
    lightBlue: "hsl(205, 80%, 59%)",
    darklyBlue: "hsl(205, 100%, 25%)",
    lightRed: "hsl(355, 61%, 52%)",
    red: "hsl(355, 61%, 42%)",
    darkRed: "hsl(355, 61%, 26%)",
    darkRedValue: "355, 61%, 26%",
    bgColor: "hsl(205, 15%, 20%)",
    revert: "hsl(0, 0%, 98%)",
    revertValue: "0, 0%, 98%",
    font: "hsl(0, 0%, 5%)",
    fontValue: "0, 0%, 5%"
  },
  media: {
    bigPC: "(min-width: 1200px)",
    PC: "(min-width: 992px)",
    iPad: "(min-width: 768px)",
    bigMobile: "(min-width: 576px)"
  }
};
