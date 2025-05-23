import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  colors: {
    // 添加自定义颜色
    gray: {
      // 覆盖默认的灰色系
      50: "#f9f9f9", // 示例：非常浅的灰色 (亮色模式下可能用到)
      100: "#ededed",
      200: "#d3d3d3",
      300: "#b3b3b3",
      400: "#a0a0a0",
      500: "#898989",
      600: "#6c6c6c",
      700: "#202020", // 示例：开始变深的灰色 (暗色模式背景)
      800: "#121212", // 示例：更深的灰色 (暗色模式卡片等)
      900: "#080808", // 示例：最深的灰色
    },
    // 可以添加或覆盖其他颜色
  },
});
export default theme;
