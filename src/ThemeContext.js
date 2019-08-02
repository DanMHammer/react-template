//Simple example of using context to pass css values

import { createContext } from "react";

const ThemeContext = createContext(["green", () => {}]);

export default ThemeContext;
