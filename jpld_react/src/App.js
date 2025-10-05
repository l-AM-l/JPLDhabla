import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DirectoryProvider, { useAppContext } from "./context/DirectoryProvider.jsx";

// Pages
import { PantallaDeInicio } from "./components/Pages/PantallaDeInicio/PantallaDeInicio.jsx";
import { SelectorJugadores } from "./components/Pages/Selector_Jugadores/Selector_Jugadores.jsx";
import { LevelSelector } from "./components/Pages/LevelSelector/LevelSelector.jsx";
import { Level } from "./components/Pages/Level/Level.jsx";

function AppContent() {
  const { state } = useAppContext();

  useEffect(() => {
    const raw = state?.settings?.letterSize ?? 0.5;
    const scale = 0.75 + raw * 0.5; // map 0–1 → 0.75–1.25
    document.documentElement.style.setProperty("--font-scale", scale.toFixed(2));
    console.log("Font scale applied:", scale);
  }, [state?.settings?.letterSize]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<PantallaDeInicio />} />
        <Route path="/selector_jugadores" element={<SelectorJugadores />} />
        <Route path="/level_selector" element={<LevelSelector />} />
        <Route path="/level" element={<Level />} />
      </Routes>
    </Router>
  );
}

export default function App() {
  return (
    <DirectoryProvider>
      <AppContent />
    </DirectoryProvider>
  );
}
