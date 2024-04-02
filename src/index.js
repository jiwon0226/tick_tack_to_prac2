import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client"; //리액트의 라이브러리
import "./styles.css"; //컴포넌트 스타일

import App from "./App"; // App.js에서 만들어진 컴포넌트

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
