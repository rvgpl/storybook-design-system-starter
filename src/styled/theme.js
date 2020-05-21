import { mono, red } from "../tokens/colors";
import { primaryFont } from "../tokens/type";

export const defaultTheme = {
  primaryColor: red[300],
  primaryHoverColor: red[200],
  primaryActiveColor: red[100],
  textColorOnPrimary: mono[100],
  textColor: mono[600],
  textColorInverted: mono[100],
  primaryFont: primaryFont,
  disabled: mono[400],
  textOnDisabled: mono[300],
  textFieldBackground: mono[200],
  textFieldLabelColor: mono[500],
};

export const darkTheme = {
  primaryColor: mono[100],
  primaryHoverColor: mono[200],
  primaryActiveColor: mono[300],
  textColorOnPrimary: red[300],
  textColor: red[300],
  textColorInverted: mono[100],
  primaryFont: primaryFont,
  disabled: mono[400],
  textOnDisabled: mono[300],
  textFieldBackground: mono[200],
  textFieldLabelColor: mono[100],
};
