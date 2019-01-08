import styled from "@emotion/styled";
import withExtendedTheme from "./withExtendedTheme";
import { BaseTheme } from "./ThemeProvider";

export type ButtonTheme = {
  buttonPadding: string;
  buttonBorderRadius: string;
  buttonBoxShadow: string;
  buttonHoverBoxShadow: string;
  buttonTransition: string;
  buttonBackgroundColor: string;
  buttonPrimaryBackgroundColor: string;
};

export type ButtonProps = {
  theme: ButtonTheme & BaseTheme;
  prominence?: "primary" | "default";
};

const buttonThemeExtension = (theme: BaseTheme): ButtonTheme => ({
  buttonPadding: ".8rem 2rem",
  buttonBorderRadius: "3px",
  buttonBoxShadow: "",
  buttonHoverBoxShadow: "",
  buttonTransition: "",
  buttonBackgroundColor: "",
  buttonPrimaryBackgroundColor: ""
});

const Button = styled.button(
  // base styles
  ({ theme }: ButtonProps) => ({
    display: "inline-block",
    padding: theme.buttonPadding,
    fontFamily: theme.fontStack,
    borderRadius: theme.buttonBorderRadius,
    boxShadow: theme.buttonBoxShadow,
    transition: theme.buttonTransition,
    ":hover": {
      boxShadow: theme.buttonHoverBoxShadow
    }
  }),
  // prominence styles
  ({ theme, prominence }: ButtonProps) => {
    switch (prominence) {
      case "primary":
        return {
          backgroundColor: theme.buttonPrimaryBackgroundColor
        };
      default:
        return {};
    }
  }
);

export default withExtendedTheme<ButtonProps, ButtonTheme>(
  buttonThemeExtension,
  Button
);
