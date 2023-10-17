import { extendTheme } from '@mui/joy/styles';

const theme = extendTheme({
  "colorSchemes": {
    "light": {
      "palette": {
        "primary": {
            "50": '#f2f1f0',
            "100": '#d8d6d4',
            "200": '#b9b5b1',
            "300": '#9b948e',
            "400": '#7d736b',
            "500": '#4E4A47',
            "600": '#3a3633',
            "700": '#292420',
            "800": '#18120d',
            "900": '#090906',
        },
        "warning": {
          "50": "#f0f9ff",
          "100": "#e0f2fe",
          "200": "#bae6fd",
          "300": "#7dd3fc",
          "400": "#38bdf8",
          "500": "#0ea5e9",
          "600": "#0284c7",
          "700": "#0369a1",
          "800": "#075985",
          "900": "#0c4a6e"
        },
        "background": {
          "default": "#E9E9E9", // This sets the default background color for light mode
          "paper": "#f5f5f5",
          "surface": "rgba(217, 217, 217, 0.2)"   // This sets the background color for components in light mode
        },
      }
    }
  },
  fontFamily: {
    display: 'Univers Next W04 620 Cond Bold', // Replace with your font's name, applies to `h1`–`h4`
  },
});

export default theme;
