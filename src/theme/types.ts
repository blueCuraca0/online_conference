export {};

declare module "@mui/material/styles" {
  // Update types for breakpoints
  interface BreakpointOverrides {
    xs: false;
    sm: false;
    md: false;
    lg: false;
    xl: false;
    mobile: true;
    tablet: true;
    laptop: true;
    desktop: true;
    large: true;
  }
  // Update types for the palette
  interface SystemPaletteColorOptions {
    red?: string;
    lightRed?: string;
  }
  interface SystemPaletteColor {
    red: string;
    lightRed: string;
  }
  interface MainPaletteColorOptions {
    white?: string;
    black?: string;
    background?: string;
    primary?: string;
    primaryLight?: string;
    secondary?: string;
  }
  interface MainPaletteColor {
    white: string;
    black: string;
    background: string;
    primary: string;
    primaryLight: string;
    secondary: string;
  }
  interface AccentPaletteColorOptions {
    text?: string;
  }
  interface AccentPaletteColor {
    text: string;
    // green1: string;
    // green2: string;
    // blue2: string;
    // blue3: string;
    // blue4: string;
    // yellow1: string;
  }

  interface GradientsPaletteColorOptions {
    gradient1?: string;
    gradient1Reverse?: string;
    gradient2?: string;
    gradient3?: string;
    gradient4?: string;
    gradient5?: string;
    aiGradient?: string;
    redGradient?: string;
    redGradientReverse?: string;
    yellowGradient?: string;
    yellowGradientReverse?: string;
  }
  interface GradientsPaletteColor {
    gradient1: string;
    gradient1Reverse: string;
    gradient2: string;
    gradient3: string;
    gradient4: string;
    gradient5: string;
    aiGradient: string;
    redGradient: string;
    redGradientReverse: string;
    yellowGradient: string;
    yellowGradientReverse: string;
  }

  interface PaletteOptions {
    systemPalette: SystemPaletteColorOptions;
    mainPalette: MainPaletteColorOptions;
    accentPalette: AccentPaletteColorOptions;
    gradientsPalette: GradientsPaletteColorOptions;
  }
  interface Palette {
    systemPalette: SystemPaletteColor;
    mainPalette: MainPaletteColor;
    accentPalette: AccentPaletteColor;
    gradientsPalette: GradientsPaletteColor;
  }

  // Update typography types
  interface TypographyVariants {
    buttonText: React.CSSProperties;
    buttonTextBold: React.CSSProperties;
    buttonTextSmall: React.CSSProperties;
    buttonTextSmallSecondary: React.CSSProperties;
    bodyText: React.CSSProperties;
    inputFields: React.CSSProperties;
    h5Secondary: React.CSSProperties;
  }
  interface TypographyVariantsOptions {
    buttonText?: React.CSSProperties;
    buttonTextSmall?: React.CSSProperties;
    buttonTextSmallSecondary?: React.CSSProperties;
    buttonTextBold?: React.CSSProperties;
    bodyText?: React.CSSProperties;
    inputFields?: React.CSSProperties;
    h5Secondary?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    buttonText: true;
    buttonTextBold: true;
    buttonTextSmall: true;
    buttonTextSmallSecondary: true;
    bodyText: true;
    inputFields: true;
    h5Secondary: true;
  }
}
