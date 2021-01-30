import { YSpacer, SpacerProvider } from "./library";

function App() {
  const defaultBreakpoints = {
    mb: "0px",
    sm: "500px",
    md: "900px",
    lg: "1024px",
    xl: "1366px",
    xxl: "1440px",
  };

  return (
    <div>
      <SpacerProvider breakpoints={defaultBreakpoints}>
        <div>Hallo</div>
        <YSpacer mb={50} sm={100} md={200}></YSpacer>
        <div>Welt</div>
      </SpacerProvider>
    </div>
  );
}

export default App;
