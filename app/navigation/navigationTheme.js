import { DefaultTheme } from "@react-navigation/native";
import colors from "../config/colors";

const navigationTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: colors.primary,
        background: colors.white,
        // text: colors.primary,
    },
}

export default navigationTheme