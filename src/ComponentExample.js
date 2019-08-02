import React, { useContext } from "react";
import ThemeContext from "./ThemeContext";
import ErrorBoundary from "./ErrorBoundary";

const ComponentExample = () => {
  const [theme] = useContext(ThemeContext);

  return (
    <div>
      <h1 style={{ color: theme }}>Hello World!</h1>
    </div>
  );
};

export default function ComponentExampleWithErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <ComponentExample {...props} />
    </ErrorBoundary>
  );
}
