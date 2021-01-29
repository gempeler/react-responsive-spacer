import React from "react";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import { useContext } from "react";

const StyledYSpacer = styled.div`
  height: ${(props) => props.y + "px"};
`;

const StyledXSpacer = styled.div`
  width: ${(props) => props.x + "px"};
`;

const defaultBreakpoints = {
  mb: "0px",
  sm: "420px",
  md: "768px",
  lg: "1024px",
  xl: "1366px",
  xxl: "1440px",
};

export const SpacerStateContext = React.createContext(defaultBreakpoints);

export const SpacerProvider = ({
  children,
  breakpoints = defaultBreakpoints,
}) => {
  return (
    <SpacerStateContext.Provider value={breakpoints}>
      {children}
    </SpacerStateContext.Provider>
  );
};

export const YSpacer = ({
  mb = 0,
  sm = mb,
  md = sm,
  lg = md,
  xl = lg,
  xxl = xl,
}) => {
  const breakpoints = useContext(SpacerStateContext);

  const is_mb = useMediaQuery({
    query: `(min-width: ${breakpoints.mb})`,
  });

  const is_sm = useMediaQuery({
    query: `(min-width: ${breakpoints.sm})`,
  });

  const is_md = useMediaQuery({
    query: `(min-width: ${breakpoints.md})`,
  });

  const is_lg = useMediaQuery({
    query: `(min-width: ${breakpoints.lg})`,
  });

  const is_xl = useMediaQuery({
    query: `(min-width: ${breakpoints.xl})`,
  });

  const is_xxl = useMediaQuery({
    query: `(min-width: ${breakpoints.xxl})`,
  });

  if (is_xxl) {
    return <StyledYSpacer y={xxl} />;
  }
  if (is_xl) {
    return <StyledYSpacer y={xl} />;
  }
  if (is_lg) {
    return <StyledYSpacer y={lg} />;
  }
  if (is_md) {
    return <StyledYSpacer y={md} />;
  }
  if (is_sm) {
    return <StyledYSpacer y={sm} />;
  }
  if (is_mb) {
    return <StyledYSpacer y={mb} />;
  }

  return <div></div>;
};

export const XSpacer = ({
  mb = 0,
  sm = mb,
  md = sm,
  lg = md,
  xl = lg,
  xxl = xl,
}) => {
  const breakpoints = useContext(SpacerStateContext);

  const is_mb = useMediaQuery({
    query: `(min-width: ${breakpoints.mb})`,
  });

  const is_sm = useMediaQuery({
    query: `(min-width: ${breakpoints.sm})`,
  });

  const is_md = useMediaQuery({
    query: `(min-width: ${breakpoints.md})`,
  });

  const is_lg = useMediaQuery({
    query: `(min-width: ${breakpoints.lg})`,
  });

  const is_xl = useMediaQuery({
    query: `(min-width: ${breakpoints.xl})`,
  });

  const is_xxl = useMediaQuery({
    query: `(min-width: ${breakpoints.xxl})`,
  });

  if (is_xxl) {
    return <StyledXSpacer x={xxl} />;
  }
  if (is_xl) {
    return <StyledXSpacer x={xl} />;
  }
  if (is_lg) {
    return <StyledXSpacer x={lg} />;
  }
  if (is_md) {
    return <StyledXSpacer x={md} />;
  }
  if (is_sm) {
    return <StyledXSpacer x={sm} />;
  }
  if (is_mb) {
    return <StyledXSpacer x={mb} />;
  }

  return <div></div>;
};
