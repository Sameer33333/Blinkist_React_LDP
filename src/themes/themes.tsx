import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  spacing: 4,
  typography: {
    fontFamily: "CeraPro",
    heading: {
      fontSize: "36px",
      lineHeight: "45px",
      fontWeight: "bold",
    },
    h3: {
      fontSize: "24px",
      lineHeight: "30px",
      fontWeight: "bold",
    },
    subtitle1: {
      fontSize: "24px",
      lineHeight: "32px",
      fontWeight: "bold",
    },
    subtitle2: {
      fontSize: "18px",
      lineHeight: "24px",
      fontWeight: "bold",
    },
    subtitle3: {
      fontSize: "18px",
      lineHeight: "24px",
      fontWeight: "bold",
    },
    body1: {
      fontSize: "16px",
      lineHeight: "24px",
      fontWeight: "bold",
    },
    body2: {
      fontSize: "16px",
      lineHeight: "24px",
    },
    body3: {
      fontSize: "22px",
      lineHeight: "20px",
    },
    caption1: {
      fontSize: "14px",
      lineHeight: "22px",
    },
    caption2: {
      fontSize: "14px",
      lineHeight: "22px",
      fontWeight: "bold",
    },
    caption3: {
      fontSize: "14px",
      lineHeight: "18px",
    },
  },

  palette: {
    primary: {
      main: "#2CE080",
    },
    primary_500: {
      main: "#22C870",
    },
    primary_700: {
      main: "#20BA68",
    },
    primary_100: {
      main: "#E2F2E9",
    },
    grey_100: {
      main: "#BAC9CF",
    },
    grey_300: {
      main: "#6C787F",
    },
    grey_500: {
      main: "#3A4649",
    },
    grey_700: {
      main: "#042330",
    },
    secondary: {
      main: "#0365F2",
    },
    secondary_100: {
      main: "#C6DAF6",
    },
    bodyTextColor: {
      main: "#042330",
    },
    navTextColors: {
      main: "#03314B",
    },
    extraTextColor: {
      main: "#6D787E",
    },
    searchPlaceholder: {
      main: "#747575",
    },
    websiteBgColor: {
      main: "#F7F7F7",
    },
    footerBgColor: {
      main: "#F1F6F4",
    },
    purple_100:{
      main:'#69A6E3'
    },
    backDropColor:{
      main:'#fff'
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
});

declare module "@mui/material/styles" {
  interface TypographyVariants {
    heading: React.CSSProperties;
    subtitle1: React.CSSProperties;
    subtitle2: React.CSSProperties;
    subtitle3: React.CSSProperties;
    body1: React.CSSProperties;
    body2: React.CSSProperties;
    body3: React.CSSProperties;
    caption1: React.CSSProperties;
    caption2: React.CSSProperties;
    caption3: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    heading?: React.CSSProperties;
    subtitle1?: React.CSSProperties;
    subtitle2?: React.CSSProperties;
    subtitle3?: React.CSSProperties;
    body1?: React.CSSProperties;
    body2?: React.CSSProperties;
    body3?: React.CSSProperties;
    caption1?: React.CSSProperties;
    caption2?: React.CSSProperties;
    caption3?: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    heading: true;
    subtitle2: true;
    subtitle1: true;
    subtitle3: true;
    body1: true;
    body2: true;
    body3: true;
    caption1: true;
    caption2: true;
    caption3: true;
  }
}

declare module "@mui/material/styles" {
  interface Palette {
    primaryBtn: Palette["primary"];
    primary_500: Palette["primary"];
    primary_700: Palette["primary"];
    primary_100: Palette["primary"];
    grey_100: Palette["primary"];
    grey_300: Palette["primary"];
    grey_500: Palette["primary"];
    grey_700: Palette["primary"];
    secondary_100: Palette["primary"];
    bodyTextColor: Palette["primary"];
    navTextColors: Palette["primary"];
    extraTextColor: Palette["primary"];
    searchPlaceholder: Palette["primary"];
    websiteBgColor: Palette["primary"];
    footerBgColor: Palette["primary"];
    purple_100:Palette["primary"];
    backDropColor:Palette["primary"];
  }
  interface PaletteOptions {
    primaryBtn?: PaletteOptions["primary"];
    primary_500?: PaletteOptions["primary"];
    primary_700?: PaletteOptions["primary"];
    primary_100?: PaletteOptions["primary"];
    grey_100?: PaletteOptions["primary"];
    grey_300?: PaletteOptions["primary"];
    grey_500?: PaletteOptions["primary"];
    grey_700?: PaletteOptions["primary"];
    secondary_100?: PaletteOptions["primary"];
    bodyTextColor?: PaletteOptions["primary"];
    navTextColors?: PaletteOptions["primary"];
    extraTextColor?: PaletteOptions["primary"];
    searchPlaceholder?: PaletteOptions["primary"];
    websiteBgColor?: PaletteOptions["primary"];
    footerBgColor?: PaletteOptions["primary"];
    purple_100?:PaletteOptions["primary"];
    backDropColor?:PaletteOptions["primary"];
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    primaryBtn: true;
    primary_500?: true;
    primary_700: true;
    primary_100: true;
    grey_100: true;
    grey_300: true;
    grey_500: true;
    grey_700: true;
    secondary_100: true;
    bodyTextColor: true;
    navTextColors: true;
    extraTextColor: true;
    searchPlaceholder: true;
    websiteBgColor: true;
    footerBgColor: true;
    purple_100:true;
    backDropColor:true;
  }
}
