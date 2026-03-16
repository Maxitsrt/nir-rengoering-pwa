// questions.js
//
// Saadan tilfoejer du flere spoergsmaal:
// 1) Kopier et objekt i QUESTIONS-arrayet.
// 2) Saet spoergsmaalsteksten.
// 3) Tilfoej 2-10 svarmuligheder i "answers"-arrayet.
// 4) Tilfoej indeks(er) for de rigtige svar i "correct".
//    Indekser starter ved 0. Eksempel: [1] betyder, at kun svar #2 er korrekt.
// 5) Tilfoej en "explanation"-tekst, som forklarer efter brugeren har tjekket svaret.
//
// Example:
// {
//   question: "Hvorfor boer mikrofiberklude ikke vaere for vaade?",
//   answers: ["A", "B", "C", "D"],
//   correct: [0, 2],
//   explanation: "Forklaring..."
// }

export const QUESTIONS = [
  {
    question: "Hvorfor bør mikrofiberklude ikke være for våde?",
    answers: [
      "Det reducerer kapillæreffekten",
      "Kluden rengør bedre, når den er gennemblødt",
      "Kluden kan ikke opsamle snavs effektivt",
      "Den efterlader mere vand på overflader"
    ],
    correct: [0, 2, 3],
    explanation:
      "Hvis en mikrofiberklud er for våd, reduceres kapillæreffekten, og kluden opsamler snavs dårligere. Den kan også efterlade overflader for våde."
  },
  {
    question: "Vælg 2 grunde til at rengøre fra rene områder mod snavsede områder.",
    answers: [
      "Det reducerer krydskontaminering",
      "Det sparer batteri på støvsugeren",
      "Det beskytter patientsikkerheden",
      "Det gør alle kemikalier stærkere"
    ],
    correct: [0, 2],
    explanation:
      "Rengøring fra rene til snavsede områder hjælper med at undgå spredning af mikroorganismer og understøtter infektionsforebyggelse."
  },
  {
    question: "Hvilket udsagn om HEPA-filtre i hospitalsstøvsugere er korrekt?",
    answers: [
      "De opfanger meget fine partikler og reducerer recirkulation",
      "De er kun nødvendige i kontormiljøer",
      "De virker bedre, når de er synligt tilstoppede",
      "De fjerner behovet for regelmæssig vedligeholdelse"
    ],
    correct: [0],
    explanation:
      "HEPA-filtre hjælper med at opfange meget fine partikler. Filtre skal stadig kontrolleres og udskiftes regelmæssigt."
  },
  {
    question: "Vælg 3 korrekte udsagn om håndhygiejne for rengøringspersonale.",
    answers: [
      "Udfør håndhygiejne før rene opgaver",
      "Udfør håndhygiejne efter handsker er taget af",
      "Spring håndhygiejne over, hvis der er brugt handsker",
      "Brug sæbe og vand, når hænderne er synligt snavsede",
      "Alkoholbaseret hånddesinfektion virker på synligt beskidte hænder"
    ],
    correct: [0, 1, 3],
    explanation:
      "Handsker erstatter ikke håndhygiejne. Brug sæbe og vand, når hænderne er synligt beskidte, og brug derefter hånddesinfektion efter behov."
  },
  {
    question: "Hvad bruges et overfladeaktivt stof (tensid) primært til i rengøringsmidler?",
    answers: [
      "At reducere overfladespænding og løsne snavs",
      "At desinficere alle overflader permanent",
      "At få vand til at fordampe med det samme",
      "At erstatte mekanisk rengøring helt"
    ],
    correct: [0],
    explanation:
      "Tensider reducerer overfladespændingen i vand, så vandet lettere kan sprede sig og hjælpe med at løsne fedt og snavs fra overflader."
  },
  {
    question: "Vælg 2 gode principper for brug af kemikalier i rengøring.",
    answers: [
      "Følg produktets anvisning for dosering",
      "Bland tilfældige kemikalier for at øge effekten",
      "Overhold den anbefalede virketid",
      "Brug det stærkeste produkt til alle opgaver"
    ],
    correct: [0, 2],
    explanation:
      "Korrekt dosering og virketid er afgørende. Tilfældig blanding af kemikalier kan være farlig og kan skade overflader eller danne skadelige dampe."
  },
  {
    question: "Hvorfor er mekanisk bearbejdning vigtig under rengøring?",
    answers: [
      "Det hjælper med at løsne og fjerne fastsiddende snavs",
      "Det er kun nødvendigt på glas",
      "Det kan erstatte alle rengøringsmidler i alle tilfælde",
      "Det forhindrer alle infektioner alene"
    ],
    correct: [0],
    explanation:
      "Mekanisk bearbejdning, som fx aftørring med korrekt tryk og bevægelse, er vigtig for at fjerne snavs og mikroorganismer fra overflader."
  },
  {
    question: "Vælg 2 tegn på, at en klud eller moppe bør skiftes.",
    answers: [
      "Den er synligt snavset",
      "Den er lige åbnet fra en ren pakke",
      "Den har været brugt i et kontamineret område",
      "Den ser stadig ren ud efter en lille overflade"
    ],
    correct: [0, 2],
    explanation:
      "Snavsede tekstiler eller tekstiler der har været brugt i kontaminerede områder bør udskiftes for at undgå at sprede snavs og mikroorganismer til nye overflader."
  }
];
