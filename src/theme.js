import { extendTheme } from "@chakra-ui/react";

const theme = {
  config: {
    initialColorMode: "light",
    useSystemColorMode: true,
  },
  styles: {
    globlal: {
      body: {
        ".Tarea": {
          display: "flex",
          "align-items": "center",
          "font-family": "'Manrope', sans-serif",
          gap: "2rem",
          padding: "3%",
          margin: "3%",
          "border-radius": "10px",
        },
        ".Tarea:hover": {
          transform: "rotate(0.2deg)",
        },
        img: {
          "border-radius": "130px",
        },
      },
    },
  },
};

export default extendTheme(theme);
