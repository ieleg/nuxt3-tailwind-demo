/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {},
    colors: {
      /* 主色 */
      theme: '#DF1948',
      theme2: '#F36A8B',
      theme4: '#FFB0C3',
      /* 危险1 */
      danger1: '#F52E2E',
      danger2: '#F75A5A',
      /* 成功色 */
      success: '#0FBD6A',
      /* 辅助1 */
      sub1: '#455EE1',
      /* 字体重要1 */
      text1: '#151523',
      text1_2: '#43434E',
      text2: '#777985',
      tipDark: '#B8C2D2',
      tipLine: '#EAECEF',
      divideLine: '#E1E3F0',
      headerbg: '#F3F4FB',
      white: '#ffffff',
      black: '#000000',
      transparent: 'transparent',
      currentColor: 'currentColor',
    },
    fontFamily: {
      'DIN': ['DIN']
    },
    transitionTimingFunction: {
      slow: 'cubic-bezier(0.17, 0.67, 0.83, 0.67)',
      'ease-linear': 'linear',
      'ease-in': 'cubic-bezier(0.4, 0, 1, 1)',
      'ease-out': 'cubic-bezier(0, 0, 0.2, 1)',
      'ease-in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',

    },
    borderRadius: {
      none: '0px',
      sm: '2px',
      DEFAULT: '4px',
      md: '6px',
      lg: '8px',
      xl: '12px',
      '2xl': '16px',
      '3xl': '24px',
      full: '9999px',
    },
    columns: {
      auto: 'auto',
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
      6: '6',
      7: '7',
      8: '8',
      9: '9',
      10: '10',
      11: '11',
      12: '12',
      '3xs': '256px',
      '2xs': '288px',
      xs: '320px',
      sm: '384px',
      md: '448px',
      lg: '512px',
      xl: '576px',
      '2xl': '672px',
      '3xl': '768px',
      '4xl': '896px',
      '5xl': '1024px',
      '6xl': '1152px',
      '7xl': '1280px',
    },
    fontSize: {
      xs: ['12px', { lineHeight: '16px' }],
      xsHeight: ['12px', { lineHeight: '20px' }],
      sm: ['14px', { lineHeight: '20px' }],
      B: ['13px', { lineHeight: '20px' }],
      Bold: ['16px', { lineHeight: '20px' }],
      base: ['16px', { lineHeight: '24px' }],
      lg: ['18px', { lineHeight: '28px' }],
      xl: ['20px', { lineHeight: '28px' }],
      '2xl': ['24px', { lineHeight: '32px' }],
      '3xl': ['30px', { lineHeight: '36px' }],
      '4xl': ['36px', { lineHeight: '36px' }],
      '5xl': ['48px', { lineHeight: '1' }],
      '6xl': ['60px', { lineHeight: '1' }],
      '7xl': ['72px', { lineHeight: '1' }],
      '8xl': ['96px', { lineHeight: '1' }],
      '9xl': ['144px', { lineHeight: '1' }],
    },
    lineHeight: {
      none: '1',
      tight: '1.25',
      snug: '1.375',
      normal: '1.5',
      relaxed: '1.625',
      loose: '2',
      3: '12px',
      4: '16px',
      5: '20px',
      6: '24px',
      7: '28px',
      8: '32px',
      9: '36px',
      10: '40px',
    },
    maxWidth: {
      none: 'none',
      0: '0px',
      xs: '320px',
      sm: '384px',
      md: '448px',
      lg: '512px',
      xl: '576px',
      '2xl': '672px',
      '3xl': '768px',
      '4xl': '896px',
      '5xl': '1024px',
      '6xl': '1152px',
      '7xl': '1280px',
      full: '100%',
      min: 'min-content',
      max: 'max-content',
      fit: 'fit-content',
      prose: '65ch',
    },
    spacing: {
      px: '1px',
      0: '0',
      0.5: '2px',
      1: '4px',
      1.5: '6px',
      2: '8px',
      2.5: '10px',
      3: '12px',
      3.5: '14px',
      4: '16px',
      4.5: '18px',
      5: '20px',
      5.5: '22px',
      6: '24px',
      7: '28px',
      7.5: '30px',
      8: '32px',
      8.5: '34px',
      9: '36px',
      10: '40px',
      11: '44px',
      12: '48px',
      14: '56px',
      15: '60px',
      16: '64px',
      20: '80px',
      24: '96px',
      28: '112px',
      30: '120px',
      32: '128px',
      36: '144px',
      40: '160px',
      44: '176px',
      45.5: '182px',
      48: '192px',
      50: '200px',
      52: '208px',
      56: '224px',
      60: '240px',
      64: '256px',
      72: '288px',
      80: '320px',
      96: '384px',
    },
  },
  plugins: [],
  content: [
    './pages/**/*.vue',
    './components/**/*.vue',
    './app.vue',
  ],
}
