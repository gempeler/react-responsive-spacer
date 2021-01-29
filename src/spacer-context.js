import React from "react";

export const SpacerStateContext = React.createContext();

export const SpacerProvider = ({
  children,
  breakpoints = {
    mb: "0px",
    sm: "520px",
    md: "750px",
    lg: "900px",
    xl: "1280px",
    xxl: "1440px",
  },
}) => {
  return (
    <SpacerStateContext.Provider value={breakpoints}>
      {children}
    </SpacerStateContext.Provider>
  );
};
