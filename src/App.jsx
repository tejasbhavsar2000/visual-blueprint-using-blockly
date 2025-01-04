import "./App.css";
import React, { useState } from "react";
import { ThemeProvider } from "./components/theme-provider";
import Home from "./components/pages/home";
import { Toaster } from "./components/ui/sonner";

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Home />
      <Toaster />
    </ThemeProvider>
  );
}
