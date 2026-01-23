export const DB = {
  appTitle: "NIR Rengøring",
  home: {
    title: "Vælg emne",
    items: [
      { id: "kontaktpunkter", title: "Kontaktpunkter", subtitle: "De 5 punkter (trumfer altid)", icon: "🧤" },
      { id: "urenhedstyper", title: "Urenhedstyper", subtitle: "Fedt, støv, pletter m.m.", icon: "🧽" },
      { id: "rengoringsmetoder", title: "Rengøringsmetoder", subtitle: "Ren→uren, oppe→ned", icon: "🧼" },
      { id: "profiler", title: "Hygiejne- og kvalitetsprofiler", subtitle: "NIR / INSTA 800 relation", icon: "📋" },
      { id: "insta800", title: "INSTA 800", subtitle: "Rengøring efter behov", icon: "📏" },
    ],
  },

  sections: {
    kontaktpunkter: {
      title: "Kontaktpunkter",
      intro:
        "Kontaktpunkter er overflader, der berøres ofte og derfor har særlig betydning for smittespredning",
      items: [
        { id: "borde", title: "Borde", text: "Kontaktpunkter er de vandrette flader på borde inkl. 3 cm af berøringsfladen på undersiden af bordets tilgængelige sider.", image: "images/cleantable.webp" },
        { id: "greb", title: "Greb", text: "Greb eller områder omkring greb (gribeområder), der berøres med kropsdele fx hænder/underarme. \nPå en stationær eller mobil afskærmning (udtræksvæg eller foldevæg) er kontaktpunkter de Områder på afskærmningen, der berøres med hænderne (gribeområde)", image: "images/greb.webp" },
        { id: "leje", title: "Leje", text: "Kontaktpunkter på seng er fra sengerammen og op, dvs. sengehest, sengegavle og den synlige del af sengerammen\nKontaktpunkter på operations- og undersøgelsesleje er liggeflade og kanter på liggeflader, der berøres af kropsdele fx hænder/underarme Kontaktpunkter på behandlerstole, vugge og kuvøse er, hvad der berøres af kropsdele fx hænder/underarme Kontaktpunkter på sidde- og babyvægt, stuebundne kørestole, stole og sofaer er ligge- og siddeflade, ryglæn, armlæn og kanter", image: "images/leje.webp" },
        { id: "sanitet", title: "Sanitet", text: "Kontaktpunkter på toilet, toiletforhøjer og bækkenstol er siddeflade, kropsnær del af cisternen, toiletbræt og evt. låg og armlæn På vasken er kanten af vasken et gribeområde og derfor et kontaktpunkt", image: "images/sanitet.webp" },
        { id: "teknisk-udstyr", title: "Teknisk udstyr", text: "Kontaktpunkter er, hvor kropsdele fx hænder/underarme berører det tekniske apparatur", image: "images/teknisk udstyr.webp" },
      ],
    },

    urenhedstyper: {
      title: "Urenhedstyper",
      intro: "Urenhedstyper bruges til at vurdere, hvilken rengøringsmetode der er nødvendig.",
      items: [
        { id: "pletter", title: "Pletter + Humanbiologisk materiale", text: "Tørre fastsiddende eller våde pletter fx skjolder, rande, taperester, fingermærker, spild/sprøjt med fx kaffe, olie, humanbiologisk materiale samt mindre ophobninger af kalk og rust", image: "images/pletter.webp" },
        { id: "stov", title: "Støv", text: "Fine mindre partikler, der kan danne et lag på kontaktpunkter og overflader og som kan hvirvles op", image: "images/rengøringdust.webp" },
        { id: "affald", title: "Affald og løst snavs", text: "Mindre partikler, som ikke hvirvles op, fx blade, madrester, papirstumper, grus, sand, jord, fibre, hår, hudskæl, spindelvæv, insekter", image: "images/affald.webp" },
      ],
    },

    rengoringsmetoder: {
      title: "Rengøringsmetoder",
      intro: "En rengøringsmetode skal kunne løsne, fange og transportere urenheder væk. Efter udført rengøring skal overfladen være synligt ren",
       items: [
        { id: "vad", title: "Våd", text: "Våd rengøring med ren klud eller moppe og rent vand tilsat rengøringsmiddel, med mekanisk bearbejdning af overfladen og eftertørring med ren tør klud eller moppe.<br><br>Under våd gulvvask skal der bruges så meget vand at gulvet ikke selv når at tørre, for så sætter snavset sig fast igen.<br><br>Efter optørring af det beskidte vand skal gulvet være helt tørt inden for 2 minutter.", image: "" },
        { id: "fugtig", title: "Fugtig", text: "Fugtig rengøring dvs overtørring med en forfugtig ren klud/engangsklud tilsat rengøringsmiddel med mekanisk bearbejdning af overfladen. Hvis der er behov for eftertørring er kluden for våd", image: "" },
        { id: "tor", title: "Tør", text: "Tørmopning af gulve med tørmopper.", image: "" },
        { id: "stovsugning", title: "Støvsugning", text: "Støvsugere, der anvendes på hospitaler, skal være udstyret med effektiv HEPA-filtrering.<br>Støvsugning skal helst undgås på hospitaler og må ikke bruges i patientrelateret rum unden aftale med ledelsen ", image: "" },
      ],
    },

    profiler: {
      title: "Hygiejne- og kvalitetsprofiler",
      intro:
        "Hygiejneprofiler hører under NIR. Kvalitetsprofiler kan kobles til INSTA 800.",
      items: [
        { id: "hygiejneprofil-1", title: "Hygiejneprofil 1", text: "Skriv…", image: "" },
        { id: "kvalitetsprofil-1", title: "Kvalitetsprofil 1", text: "Skriv…", image: "" },
      ],
    },

    insta800: {
      title: "INSTA 800",
      intro:
        "INSTA 800 beskriver rengøring efter behov/tilstand - men kontaktpunkter er altid faste.",
      items: [
        { id: "kort", title: "Kort forklaring", text: "Skriv…", image: "" },
      ],
    },
  },
};


