import React, { Component } from "react";
import { ThemeContext } from "@emotion/core";
import { BaseTheme } from "./ThemeProvider";
import memo from "memoize-one";
import getDisplayName from "./getDisplayName";

// After hooks becomes available, it should be possible to ditch this higher order
// component and create a custom hook called useThemeExtension that would be responsible
// for pulling out the theme from context and spreading in the extended theme.
export default function withExtendedTheme<Props, ThemeExtension>(
  themeExtender: (baseTheme: BaseTheme) => ThemeExtension,
  WrappedComponent: any
) {
  // This is memoized to prevent re-render when props changes and theme hasn't. In most
  // realitic cases theme shouldn't change so re-rendering is not a problem here after
  // memoizing this function.
  const memoizedThemeExtender = memo((baseTheme: BaseTheme) => ({
    ...themeExtender(baseTheme),
    ...baseTheme
  }));
  return class ThemeExtended extends Component<Props> {
    static displayName = `ThemeExtended(${getDisplayName(WrappedComponent)})`;
    render() {
      return (
        <ThemeContext.Consumer>
          {(baseTheme: BaseTheme) => (
            <ThemeContext.Provider value={memoizedThemeExtender(baseTheme)}>
              <WrappedComponent {...this.props} />
            </ThemeContext.Provider>
          )}
        </ThemeContext.Consumer>
      );
    }
  };
}
