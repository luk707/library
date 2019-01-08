import React, { Component } from "react";
import { ThemeContext } from "@emotion/core";

export type BaseTheme = {
  fontStack: string;
};

type ThemeProviderProps = {
  theme: BaseTheme;
};

class ThemeProvider extends Component<ThemeProviderProps> {
  render() {
    return (
      <ThemeContext.Provider value={this.props.theme}>
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export default ThemeProvider;
