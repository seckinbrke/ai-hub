const spacing = (factor: number) => factor * 8;

export const theme = {
  colors: {
    main: {
      primary: '#252739',
      secondary: '#FF6862',
      black: '#000000',
      white: '#FFFFFF',
    },
    background: {
      base: '#151623',
      secondary: '#171717',
      overlay: 'rgba(46, 38, 68, 0.85)',
    },
    text: {
      base: '#FFFFFF',
      secondary: '#777777',
      disabled: '#717171',
      orange: '#E89005',
    },
    grey: {
      50: '#F0F1F3',
      100: '#D1D4DA',
      200: '#BDBDBD',
      300: '#AAAAAA',
      500: '#B5B5B5',
      base: '#697488',
      600: '#8F8F8F',
      700: '#737373',
      main: '#36383C',
    },
    warning: {
      50: '#FEF7E8',
      base: '#F8AA1C',
      700: '#97670F',
    },
    error: {
      50: '#FFEFEF',
      base: '#D42111',
      700: '#D13333',
    },
    success: {
      50: '#EBF6ED',
      base: '#00B700',
      700: '#05751F',
      pastel: 'rgba(0, 140, 32, 0.08)',
    },
    gradients: {
      generalGradient: ['#A0FFD1', '#6FC1C9'],
    },
    alerts: [
      {
        card: '#171717',
        label: '#FFFFFF',
        overlay: 'rgba(0,0,0,0.4)',
      },
      {
        card: '#171717',
        label: '#FFFFFF',
        overlay: 'rgba(0,0,0,0.4)',
      },
    ],
  },
  font: {
    extraBold: 'Poppins-Black',
    semiBold: 'Poppins-Semibold',
    bold: 'Poppins-Bold',
    black: 'Poppins-Black',
    heavy: 'Poppins-Heavy',
    light: 'Poppins-Light',
    ultraLight: 'Poppins-Ultralight',
    medium: 'Poppins-Medium',
    regular: 'Poppins-Regular',
    thin: 'Poppins-Thin',
  },
  spacing,
};
