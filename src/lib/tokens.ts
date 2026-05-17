export const C = {
  // Backgrounds
  cream:       '#fefcf9',
  creamMid:    '#f5f2ec',
  creamBorder: '#e4dfd6',

  // Brand
  navy:        '#1a3a6b',
  navyLight:   '#2a5298',
  navyPale:    '#eef3fb',

  // Accent
  red:         '#c0392b',
  redPale:     '#fdf3f2',

  // Utility
  white:       '#ffffff',
  navyUl:      '#b5d4f4',  // link underline on cream backgrounds

  // Text
  ink:         '#1a1a18',
  inkMid:      '#3a3a38',
  inkMuted:    '#6b6b67',
  inkFaint:    '#9b9b95',
} as const;

export type ColorKey = keyof typeof C;
