import React, { useState, useEffect } from "react";
import "./style.css";
import { LevelOverlay } from "../../Screens/LevelOverlay/LevelOverlay.jsx";
import { useAppContext } from "../../../context/DirectoryProvider.jsx";
import { Gear } from "../../Buttons/Gear/Gear.jsx";
import { InGameConfig } from "../../Screens/InGameConfig/InGameConfig.jsx";
import { Flechas } from "../../Frames/Flechas/Flechas.jsx";

// Import SVGs as React components (puedes ir agregando más si tienes para otros fondos/animales)
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

  const [animateIntro, setAnimateIntro] = useState(true);

  // Phrases mapping (TODOS LOS NIVELES DEL PDF)
  const phrases = {
    0: [ // Jungle
      ["MO-NO", "TI-GRE", "E-LE-FAN-TE"],
      ["EL MO-NO SAL-TA.", "EL TI-GRE RU-GE.", "EL E-LE-FAN-TE CA-MI-NA."],
      [
        "EL MO-NO SAL-TA DE RA-MA EN RA-MA MIENTRAS GRI-TA FUER-TE.",
        "EL TI-GRE RU-GE EN ME-DIO DE LA SEL-VA CUAN-DO VE UNA PRE-SA.",
        "EL E-LE-FAN-TE CA-MI-NA LEN-TA-MEN-TE POR EL RÍ-O CON SU TROM-PA AL-ZA-DA."
      ]
    ],
    1: [ // Escuela
      ["LÁ-PIZ", "MO-CHI-LA", "PA-PE-LO-TA"],
      ["TEN-GO UN LÁ-PIZ A-MA-RI-LLO.", "LA MO-CHI-LA ES GRAN-DE.", "LA PE-LO-TA RU-E-DA."],
      [
        "EL NI-ÑO U-SA UN LÁ-PIZ A-MA-RI-LLO PA-RA ES-CRI-BIR SU NOM-BRE.",
        "MI MO-CHI-LA ES-TÁ LLE-NA DE LI-BROS Y CO-LO-RES.",
        "LA PE-LO-TA RU-E-DA RÁ-PI-DO POR EL CAM-PO Y CA-E EN LA POR-TE-RÍ-A."
      ]
    ],
    2: [ // Beach (Alimentos adaptados + playa)
      ["MA-NZA-NA", "PAN", "PEZ"],
      ["QUIE-RO UNA MA-NZA-NA.", "EL PAN ES-TÁ CA-LIEN-TE.", "EL PEZ NA-DA."],
      [
        "LA NI-ÑA CO-ME UNA MA-NZA-NA RO-JA POR-QUE TIE-NE HAM-BRE.",
        "EL PAN RE-CIÉN HOR-NEA-DO HUE-LE DE-LI-CIO-SO Y ES-TÁ SUA-VE.",
        "EL PEZ NA-DA RÁ-PI-DO EN EL MAR MIENTRAS ES-QUI-VA LAS O-LAS."
      ]
    ],
    3: [ // Casa y familia
      ["MA-MÁ", "CA-MA", "PA-PÁ"],
      ["MA-MÁ CO-CI-NA.", "LA CA-MA ES-TÁ TEN-DI-DA.", "MI PA-PÁ DUER-ME."],
      [
        "MI MA-MÁ CO-CI-NA AR-ROZ MIENTRAS YO LA A-YU-DO.",
        "LA CA-MA TIE-NE UNA CO-BI-JA RO-JA Y MU-CHOS CO-JI-NES.",
        "MI PA-PÁ DUER-ME TRAN-QUI-LO EN SU CUAR-TO."
      ]
    ],
    4: [ // Cuerpo e higiene
      ["MA-NOS", "CE-PI-LLO", "PI-ES"],
      ["LÁ-VA-TE LAS MA-NOS.", "U-SO EL CE-PI-LLO DE DIEN-TES.", "MIS PIES COR-REN."],
      [
        "DE-BE-MOS LA-VAR-NOS LAS MA-NOS AN-TES DE CO-MER PA-RA NO EN-FER-MAR-NOS.",
        "CA-DA MA-ÑA-NA U-SO MI CE-PI-LLO DE DIEN-TES CON PAS-TA DE MEN-TA.",
        "MIS PIES CO-RREN RÁ-PI-DO CUAN-DO JU-E-GO EN EL PAR-QUE."
      ]
    ],
    5: [ // Transporte
      ["A-VIÓN", "BI-CI-CLE-TA", "BAR-CO"],
      ["EL A-VIÓN VUE-LA.", "LA BI-CI-CLE-TA ES A-ZUL.", "EL BAR-CO NA-VE-GA."],
      [
        "EL A-VIÓN DES-PE-GA DES-DE LA PIS-TA Y SU-BE EN-TRE LAS NU-BES.",
        "EL NI-ÑO MON-TA SU BI-CI-CLE-TA EN EL PAR-QUE CA-DA TAR-DE.",
        "EL BAR-CO NA-VE-GA LEN-TO POR EL MAR HAS-TA LLE-GAR A PUER-TO."
      ]
    ],
    6: [ // Juego y parque
      ["PE-LO-TA", "CO-LUM-PIO", "RE-SBA-LA-DI-LLA"],
      ["LAN-ZA LA PE-LO-TA.", "ME SU-BO AL CO-LUM-PIO.", "BA-JA POR LA RE-SBA-LA-DI-LLA."],
      [
        "JU-GA-MOS CON LA PE-LO-TA Y CO-RRE-MOS TO-DOS JUNTOS.",
        "EL NI-ÑO SU-BE AL CO-LUM-PIO Y SE BA-LAN-CEA MUY A-LTO.",
        "LA NI-ÑA BA-JA POR LA RE-SBA-LA-DI-LLA Y RÍ-E CON A-LE-GRÍ-A."
      ]
    ]
  };

  // Backgrounds mapping (ahora solo 3, puedes agregar SVGs para los demás)
  const backgrounds = {
    0: JungleBackground,
    1: StadiumBackground,
    2: BeachBackground,
    3: JungleBackground,  // placeholder
    4: StadiumBackground, // placeholder
    5: BeachBackground,   // placeholder
    6: JungleBackground   // placeholder
  };

  // Animals mapping (igual: placeholders para los que falten)
  const animals = {
    0: JungleAnimal,
    1: StadiumAnimal,
    2: BeachAnimal,
    3: JungleAnimal,
    4: StadiumAnimal,
    5: BeachAnimal,
    6: JungleAnimal
  };

  // Audios intro
  const intro_audio = [
    "/sounds/nature.mp3",
    "/sounds/cheering.mp3",
    "/sounds/waves_crashing.mp3"
  ];
  const audio = new Audio(intro_audio[state.level % 3]);
  audio.play()
    .then(() => console.log("Intro audio played successfully"))
    .catch((err) => console.error("Intro Audio playback failed:", err));

  const currentPhrase =
    phrases[level]?.[difficulty - 1]?.[subLevel - 1] || "FRA-SE NO DIS-PO-NI-BLE";

  const BackgroundSVG = backgrounds[level] || JungleBackground;
  const AnimalSVG = animals[level] || JungleAnimal;

  useEffect(() => {
    const timer = setTimeout(() => setAnimateIntro(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="level-container">
      <BackgroundSVG className="background-svg" />

      <Gear className="gear-instance" onClick={handleGearClick} />

      <div
        className={`level-animal ${animateIntro ? "intro" : ""}`}
        onAnimationEnd={() => setAnimateIntro(false)}
      >
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
