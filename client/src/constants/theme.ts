type colors = {
   primary:string;
   secondary: string,
   tertiary: string,
   light:string,
   white:string,
   dark:string
} 

type fonts = {
    regular:string,
    medium:string,
    bold:string
}

type sizes= {
    xSmall: number,
    small: number,
    medium: number,
    large: number,
    xLarge: number,
    xxLarge: number,
}



const COLORS : colors = {
    primary : "#002B5B",
    secondary : "#2B4865",
    tertiary  : "#256D85",
    light : "#8FE3CF",
    white : "#F3F4F8",
    dark:"#20262E"
}

const FONTS : fonts = {
    regular : "DMRegular",
    medium : "DMMedium",
    bold : "DMBold", 
}

const SIZES :sizes = {
    xSmall: 10,
    small: 12,
    medium: 16,
    large: 20,
    xLarge: 24,
    xxLarge: 32,
};

const SHADOWS = {
    small: {
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 2,
    },
    medium: {
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 5.84,
      elevation: 5,
    },
  };

export { COLORS , FONTS, SIZES, SHADOWS }
