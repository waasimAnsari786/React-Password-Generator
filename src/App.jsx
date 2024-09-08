import React from "react";
import "./App.css";
import { PasswordProvider } from "./components/PasswordContext";
import PasswordGenerator from "./components/PasswordGenerator";

export default function App() {
  return (
    <>
      <PasswordProvider>
        <PasswordGenerator />
      </PasswordProvider>
    </>
  );
}
