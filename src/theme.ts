import { createTheme, MantineColorsTuple } from "@mantine/core";

const silver: MantineColorsTuple = [
  "#f7f7f8",
  "#ececee",
  "#dcdde0",
  "#c8c9cc",
  "#b5b7bd",
  "#a3a7b3",
  "#8d919d",
  "#767a86",
  "#5f636e",
  "#484c57",
];

// Pinks from the brand swatches: #f9d5e5 (light) and #e96ba6 (main)
const pink: MantineColorsTuple = [
  "#fdf1f7",
  "#f9d5e5",
  "#f4b6d2",
  "#ef97bf",
  "#ec80b1",
  "#e96ba6",
  "#d95593",
  "#bf417d",
  "#a03268",
  "#7f2552",
];

// Mantine "dark" scheme recoloured to the navy of the logo
const dark: MantineColorsTuple = [
  "#e0e0e0",
  "#c8c9cc",
  "#a3a7b3",
  "#6f7690",
  "#2c3a6b",
  "#22305e",
  "#182348",
  "#111936",
  "#0d142c",
  "#0a1022",
];

export const theme = createTheme({
  colors: { silver, pink, dark },
  primaryColor: "pink",
  primaryShade: 5,
  fontFamily: "Inter, sans-serif",
  headings: { fontFamily: "Cormorant Garamond, serif" },
  defaultRadius: "md",
});
