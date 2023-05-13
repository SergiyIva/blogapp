export interface ITheme {
  colors: {
    brandColor: string;
    brandColorValue: string;
    lightBlue: string;
    darklyBlue: string;
    lightRed: string;
    red: string;
    darkRed: string;
    darkRedValue: string;
    bgColor: string;
    font: string;
    fontValue: string;
    revert: string;
    revertValue: string;
  };
  media: {
    bigPC: "(min-width: 1200px)";
    PC: "(min-width: 992px)";
    iPad: "(min-width: 768px)";
    bigMobile: "(min-width: 576px)";
  };
}
