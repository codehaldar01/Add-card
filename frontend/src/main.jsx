import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { DarkModeProvider } from "./context/DarkModeContext";

import App from "./App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DarkModeProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </DarkModeProvider>

  </StrictMode>
);
