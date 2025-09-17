import React, { useState, useEffect } from "react";
import "./style.css";
import { LevelOverlay } from "../../Screens/LevelOverlay/LevelOverlay.jsx";
import { useAppContext } from "../../../context/DirectoryProvider.jsx";
import { Gear } from "../../Buttons/Gear/Gear.jsx";
import { InGameConfig } from "../../Screens/InGameConfig/InGameConfig.jsx";
import { Flechas } from "../../Frames/Flechas/Flechas.jsx";

// Import SVGs as React components
import { ReactComponent as JungleBackground } from "../../../assets/jungle_back.svg";
import { ReactComponent as StadiumBackground } from "../../../assets/stadium_back.svg";
import { ReactComponent as BeachBackground } from "../../../assets/beach_back.svg";

import { ReactComponent as JungleAnimal } from "../../../assets/lion.svg";
import { ReactComponent as StadiumAnimal } from "../../../assets/soccer.svg";
import { ReactComponent as BeachAnimal } from "../../../assets/dolphin.svg";

export const Level = () => {
  const { state } = useAppContext();
  const { level = 0, difficulty = 1, subLevel = 1 } = state;

  const [showConfig, setShowConfig] = useState(false);
  const handleGearClick = () => setShowConfig((p) => !p);

  const [animateIntro, setAnimateIntro] = useState(true); // NEW

  // Phrases mapping
const phrases = {
  0: [
    // Easy
    [
      "RU-GE CO-MO UN LE-ÓN",
      "SAL-TA CO-MO UN MO-NO",
      "CA-MI-NA CO-MO UN E-LE-FAN-TE"
    ],
    // Medium
    [
      "RU-GE FUER-TE CO-MO UN LE-ÓN",
      "SAL-TA RÁ-PI-DO CO-MO UN MO-NO",
      "CA-MI-NA LEN-TO CO-MO UN E-LE-FAN-TE"
    ],
    // Hard
    [
      "RU-GE TAN FUER-TE QUE TO-DOS TE ES-CU-CHEN",
      "SAL-TA MUY AL-TO Y NO TO-QUES EL SUE-LO POR UN MO-MEN-TO",
      "CA-MI-NA MUY LEN-TO Y PE-SA-DO CO-MO UN E-LE-FAN-TE E-NOR-ME"
    ],
  ],
  1: [
    // Easy
    [
      "CO-RRE RÁ-PI-DO",
      "PA-TE-A LA PE-LO-TA",
      "SAL-TA LA VA-LLA"
    ],
    // Medium
    [
      "CO-RRE MÁS RÁ-PI-DO",
      "PA-TE-A FUER-TE",
      "SAL-TA MÁS AL-TO"
    ],
    // Hard
    [
      "CO-RRE SIN PA-RAR CO-MO UN CAM-PE-ÓN DE MA-RA-TÓN",
      "PA-TE-A CON TO-DA TU FUER-ZA HAS-TA QUE LA PE-LO-TA VUE-LE LE-JOS",
      "SAL-TA LO MÁ-XI-MO Y LLE-GA HAS-TA EL O-TRO LA-DO SIN TRO-PE-ZAR"
    ],
  ],
  2: [
    // Easy
    [
      "NA-DA CO-MO UN PEZ",
      "CA-MI-NA EN LA A-RE-NA",
      "CONS-TRU-YE UN CAS-TI-LLO"
    ],
    // Medium
    [
      "NA-DA MÁS LE-JOS",
      "CA-MI-NA MÁS RÁ-PI-DO",
      "CONS-TRU-YE MÁS GRAN-DE"
    ],
    // Hard
    [
      "NA-DA SIN PA-RAR HAS-TA QUE CRU-CES TO-DA LA PLA-YA",
      "CO-RRE EN LA A-RE-NA HAS-TA QUE TE DUE-LAN LAS PIER-NAS",
      "CONS-TRU-YE UN E-NOR-ME CAS-TI-LLO CON MU-CHAS TO-RRES Y PUEN-TES"
    ],
  ],
};




  // Backgrounds mapping
  const backgrounds = {
    0: JungleBackground,
    1: StadiumBackground,
    2: BeachBackground,
  };

  // Animals mapping
  const animals = {
    0: JungleAnimal,
    1: StadiumAnimal,
    2: BeachAnimal,
  };

  const currentPhrase =
    phrases[level%3]?.[difficulty - 1]?.[subLevel - 1] || "Frase no disponible";

  const BackgroundSVG = backgrounds[level] || JungleBackground;
  const AnimalSVG = animals[level] || JungleAnimal;


  useEffect(() => {
    // Show overlay after animal finishes flying in
    const timer = setTimeout(() => setAnimateIntro(false), 1000);
    return () => clearTimeout(timer);
  }, []);


  return (
    <div className="level-container">
      <BackgroundSVG className="background-svg" />

      <Gear className="gear-instance" onClick={handleGearClick} />

      <div className={`level-animal ${animateIntro ? "intro" : ""}`} onAnimationEnd={() => setAnimateIntro(false)}>
        <AnimalSVG className="animal-svg" />
      </div>


      <div className={`level-overlay ${animateIntro ? "" : "show"}`}>
        <LevelOverlay text={currentPhrase} />
      </div>


      <div className="back-button">
        <Flechas direction="left" to="/level_selector" />
      </div>

      <InGameConfig
        className={showConfig ? "open" : ""}
        onClose={() => setShowConfig(false)}
      />
    </div>
  );
};