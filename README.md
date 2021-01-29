<<<<<<< HEAD

# react-responsive-spacer

## Information

<table>
<tr>
<td>Package</td><td>react-responsive-spacer</td>
</tr>
<tr>
<td>Description</td>
<td>React spacer component for responsive design</td>
</tr>
<tr>
<td>Browser Version</td>
<td>>= IE11*</td>
</tr>
</tr>
</table>

A simple and easy way to add space between react components

## Install

```console
$ npm install react-responsive-responsive --save
```

## Example Usage

### Basic Usage

This is the basic way to use this module

```jsx
import React from "react";
import { YSpacer } from "react-responsive-spacer";

function App() {
  return (
    <div>
      <YSpacer mb={30}></YSpacer>
      <div>Hello</div>
      <YSpacer mb={30} md={50} xxl={100}></YSpacer>
      <div>What's Up ?</div>
      <div style={{ display: "flex" }}>
        <span>First</span>
        <XSpacer mb={24} md={100}></XSpacer>
        <span>Second</span>
      </div>
    </div>
  );
}

export default App;
```

### With SpaceProvider

You can also pass `breakpoints` to the YSpace and XSpace components through a React [Context](https://reactjs.org/docs/context.html).

```jsx
import { YSpacer, XSpacer, SpacerProvider } from "react-responsive-spacer";

function App() {
  const breakpoints = {
    mb: "0px",
    sm: "600px",
    md: "700px",
    lg: "800px",
    xl: "900px",
    xxl: "1000px",
  };

  return (
    <SpacerProvider breakpoints={breakpoints}>
      <div>
        <YSpacer mb={30}></YSpacer>
        <div>HALLO</div>
        <YSpacer mb={30} xxl={100}></YSpacer>
        <div>Wie geht's?</div>
        <div style={{ display: "flex" }}>
          <span>First</span>
          <XSpacer mb={24} md={100}></XSpacer>
          <span>Second</span>
        </div>
      </div>
    </SpacerProvider>
  );
}

export default App;
```

## API

### Properties

For every breakpoint you can pass a value

```jsx
<YSpacer mb={30} sm={45} md={80} lg={90} xl={100} xxl={110}></YSpacer>
```

Values are the space in Pixel. mb={30} will become `'30px'`.

Breakpoints are defined using minWidth.

The default values for the breakpoints are:

```jsx
const defaultBreakpoints = {
  mb: "0px",
  sm: "420px",
  md: "768px",
  lg: "1024px",
  xl: "1366px",
  xxl: "1440px",
};
```

Using the default breakpoint values sm={45} translates to:

```jsx

@media only screen (min-width: 420px){

...

}
```

### Have fun

That's it! Now you can create space between your components specific to breakpoints.
