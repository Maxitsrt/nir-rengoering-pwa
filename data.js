export const DB = {
  appTitle: "NIR Rengøring",
  home: {
    title: "Vælg emne",
    items: [
      { id: "kontaktpunkter", title: "Kontaktpunkter", subtitle: "Borde, Greb, Leje, Sanitet, Teknisk udstyr", icon: "hand" },
      { id: "urenhedstyper", title: "Urenhedstyper", subtitle: "Pletter(Humanbiologisk materiale), Støv, Affald", icon: "dirty" },
      { id: "rengoringsmetoder", title: "Rengøringsmetoder", subtitle: "Våd, Fugtig, Tør, Støvsugning", icon: "mop" },
      { id: "profiler", title: "Hygiejne- og kvalitetsprofiler", subtitle: "NIR / INSTA 800 relation", icon: "control" },
      { id: "handhygiejne", title: "Håndhygiejne", subtitle: "NIR / INSTA 800 relation", icon: "clean_hands" },
      { id: "isolationsstuer", title: "Isolationsstuer", subtitle: "ISO Daglig rengøring, ISO Slutrengøring", icon: "clean_hands" },
      { id: "insta800", title: "INSTA 800", subtitle: "Rengøring efter behov", icon: "measure" },
      { id: "quiz", title: "Quiz", subtitle: "Test din viden om rengøring på hospitaler", icon: "quiz" },   
      
    ],
  },

  sections: {
    kontaktpunkter: {
      title: "Kontaktpunkter",
      intro:
        "Kontaktpunkter er overflader, der berøres ofte og derfor har særlig betydning for smittespredning",
      items: [
        { id: "borde", title: "Borde", text: "Kontaktpunkter er de vandrente flader på borde inkl. 3 cm af berøringsfladen på undersiden af bordets tilgængelige sider.", image: "images/cleantable.webp", icon: "table" },
        { id: "greb", title: "Greb", text: "Greb eller områder omkring greb (gribeområder), der berøres med kropsdele fx hænder/underarme. \nPå en stationær eller mobil afskærmning (udtræksvæg eller foldevæg) er kontaktpunkter de Områder på afskærmningen, der berøres med hænderne (gribeområde)", image: "images/greb.webp", icon: "hand" },
        { id: "leje", title: "Leje", text: "Kontaktpunkter på seng er fra sengerammen og op, dvs. sengehest, sengegavle og den synlige del af sengerammen\nKontaktpunkter på operations- og undersøgelsesleje er liggeflade og kanter på liggeflader, der berøres af kropsdele fx hænder/underarme Kontaktpunkter på behandlerstole, vugge og kuvøse er, hvad der berøres af kropsdele fx hænder/underarme Kontaktpunkter på sidde- og babyvægt, stuebundne kørestole, stole og sofaer er ligge- og siddeflade, ryglæn, armlæn og kanter", image: "images/leje.webp", icon: "leje" },
        { id: "sanitet", title: "Sanitet", text: "Kontaktpunkter på toilet, toiletforhøjer og bækkenstol er siddeflade, kropsnær del af cisternen, toiletbræt og evt. låg og armlæn På vasken er kanten af vasken et gribeområde og derfor et kontaktpunkt", image: "images/sanitet.webp", icon: "sanitet" },
        { id: "teknisk-udstyr", title: "Teknisk udstyr", text: "Kontaktpunkter er, hvor kropsdele fx hænder/underarme berører det tekniske apparatur", image: "images/teknisk udstyr.webp", icon: "teknisk-udstyr" },
      ],
    },

    urenhedstyper: {
      title: "Urenhedstyper",
      intro: "Urenhedstyper bruges til at vurdere, hvilken rengøringsmetode der er nødvendig.",
      items: [
        { id: "pletter", title: "Pletter + Humanbiologisk materiale", text: "Tørre fastsiddende eller våde pletter fx skjolder, rande, taperester, fingermærker, spild/sprøjt med fx kaffe, olie, humanbiologisk materiale samt mindre ophobninger af kalk og rust", image: "images/pletter.webp", icon: "dirty" },
        { id: "stov", title: "Støv", text: "Fine mindre partikler, der kan danne et lag på kontaktpunkter og overflader og som kan hvirvles op", image: "images/rengøringdust.webp", icon: "dust" },
        { id: "affald", title: "Affald og løst snavs", text: "Mindre partikler, som ikke hvirvles op, fx blade, madrester, papirstumper, grus, sand, jord, fibre, hår, hudskæl, spindelvæv, insekter", image: "images/affald.webp", icon: "dirty" },
      ],
    },

    rengoringsmetoder: {
      title: "Rengøringsmetoder",
      intro: "En rengøringsmetode skal kunne løsne, fange og transportere urenheder væk. Efter udført rengøring skal overfladen være synligt ren",
      items: [
        { id: "vad", title: "Våd", text: "Våd rengøring med ren klud eller moppe og rent vand tilsat rengøringsmiddel, med mekanisk bearbejdning af overfladen og eftertørring med ren tør klud eller moppe.<br><br>Under våd gulvvask skal der bruges så meget vand at gulvet ikke selv når at tørre, for så sætter snavset sig fast igen.<br><br>Efter optørring af det beskidte vand skal gulvet være helt tørt inden for 2 minutter.", image: "", icon: "mop" },
        { id: "fugtig", title: "Fugtig", text: "Fugtig rengøring dvs overtørring med en forfugtig ren klud/engangsklud tilsat rengøringsmiddel med mekanisk bearbejdning af overfladen. Hvis der er behov for eftertørring er kluden for våd", image: "", icon: "mop" },
        { id: "tor", title: "Tør", text: "Tørmopning af gulve med tørmopper.", image: "", icon: "mop" },
        { id: "stovsugning", title: "Støvsugning", text: "Støvsugere, der anvendes på hospitaler, skal være udstyret med effektiv HEPA-filtrering.<br>Støvsugning skal helst undgås på hospitaler og må ikke bruges i patientrelateret rum unden aftale med ledelsen ", image: "", icon: "vacuum-cleaner" },
      ],
    },

    profiler: {
      title: "Hygiejne- og kvalitetsprofiler",
      intro: "Hygiejneprofiler anvendes i NIR og har fokus på smitteforebyggelse, patientnærhed og kontaktpunkter.<br><br>Kvalitetsprofiler anvendes i relation til INSTA 800 og beskriver niveauet for synlig renhed.<br><br>I dag prioriterer NIR primært hygiejne i patientnære områder, mens rengøring af øvrige områder planlægges ud fra lokale kvalitetsstandarder og risikovurdering.",
      items: [
        { id: "hygiejneprofil-1", title: "Hygiejne/Kvalitets profil 5", text: "• Operationsstue<br>• Speciallaboratorium (har ofte højere niveau)<br>• Sterilproduktion/pakning/opbevaring", image: "", icon: "control" },
        { id: "kvalitetsprofil-1", title: "Hygiejne/Kvalitets profil 4", text: "• Bad og/eller toilet, puslerum<br>• Fødestue<br>• Gang ved operation<br>• Kirurgisk håndvask/lægevask<br>• Køkken<br>• Laboratorier<br>• Prøvetagningsrum inkl. donortapning<br>• Rent depot, linneddepot, medicinrum, uniformsautomat<br>• Skyllerum (rent)<br>• Sengestue<br>• Svømmebassin inkl. birum<br>• Undersøgelses- og behandlingsrum inkl. træning/terapi<br>", image: "", icon: "control" },
        { id: "kvalitetsprofil-1", title: "Hygiejne/Kvalitets profil 3", text: "• Gang på kliniske afsnit<br>• Kapel, 6-timersstue og morsrum, kølerum<br>• Kontorer i kliniske afsnit<br>• Omklædningsrum for personale og patienter<br>• Opholdsstue og legestue for patienter inkl. spisestue<br>• Personalerum i kliniske afsnit<br>• Rengøringsrum<br>• Samtalerum<br>• Sektionsstue<br>• Skyllerum (urent)<br>• Spisestue til personale<br>• Vagtværelser<br>• Venteværelse ved kliniske områder", image: "", icon: "control" },
      ],
    },

    handhygiejne: {
      title: "Håndhygiejne",
      intro: "Håndhygiejne er den vigtigste enkeltstående procedure til at afbryde smitteveje ved risiko for kontaktsmitte, herunder indirekte kontaktsmitte via berøring af overflader og fælles kontaktpunkter",
      infoBoxes: [
        {
          title: "Hvornår skal du lave håndhygiejne?",
          text: "Før rene opgaver og efter urene opgaver.<br><br>Før og efter brug af handsker<br><br>Ved synligt forurenede hænder<br><br>Før og efter kontakt med patienter<br><br>Kontakt med kontaktpunkter i patientnære områder<br><br>Ved synlig forurening af hænderne<br><br>Når du har mødt ind på arbejde<br><br>Ved skift af patientenhed<br><br>Efter hver toilet besøg<br><br>Efter hver klude skift",
        },
        {
          title: "Hvordan",
          text: "Brug hånddesinfektion på tørre rene hænder.<br><br>Vask med sæbe og vand ved synlig forurening eller fugtige hænder."
        },
        {
          title: "Varighed",
          text: "Med vand og sæbe 40-60 sekunder.<br><br>Kun håndsprit, Gnid hænderne grundigt, til de er helt tørre og husk det skal kun på hænderner og ikke på gulvet."
        }
      ],
      items: [
        // { id: "kort", title: "Kort forklaring", text: "", image: "", icon: "" },
      ],
    },

    isolationsstuer: {
      title: "Isolationsstuer",
      intro:
        "Patienter kan være isoleret for at beskytte omgivelserne mod smitte (kildeisolation) eller for at beskytte patienten mod smitterisiko fra omgivelserne (beskyttelsesisolation).<br><br>Man beskytter medpatienter og personale mod smitte i tilfælde, hvor patienten har en smitsom sygdom og/eller hvor patienten er inficeret eller koloniseret med resistente mikroorganismer.",
      items: [
        { id: "isodaglig", title: "ISO Daglig rengøring", text: "• Rengøringspersonalet informeres om, hvilken isolationsrengøring, der skal foretages, herunder desinfektion.<br><br>• Der bruges de samme personlige værnemidler som sundhedspersonalet anvender.<br><br>• Værnemidler påtages i rent område.<br><br>• Rengøringsvogn placeres uden for isolationsstuen.<br><br>• Kun nødvendigt udstyr og klude/rengøringsmidler medtages. Klude pakkes i ren plastpose, der placeres i rent område på isolationsstuen, fx et rent procedurebord.<br><br>• Daglig rengøring af kontaktpunkter og overflader.<br><br>• Efterfulgt af desinfektion af kontaktpunkter med egnet desinfektionsmiddel.<br><br>• Præfabrikerede éngangsklude samt én gangs-desinfektionsklude er en metode, der kan anvendes i stedet for flergangsklude.<br><br>• Rengøring af gulv.<br><br>• Rengøringsudstyr anvendt på stuen rengøres og desinficeres inden stuen forlades.<br><br>• Værnemidler aftages i urent område, når stuen forlades.<br><br>• Håndhygiejne udføres, når isolationsstuen forlades. Hånddesinfektion er ikke altid tilstrækkeligt, og derfor anbefales håndvask efterfuldt af hånddesinfektion ved tilfælde af mavetarminfektion, fx med norovirus og C. difficile.", image: "", icon: "measure" },
        { id: "isoslut", title: "ISO Slutrengøring", text: "Hvad er INSTA 800?", image: "", icon: "measure" },
      ],
    },

    insta800: {
      title: "INSTA 800",
      intro:
        "DS/INSTA 800 er en fælles nordisk standard for måling og vurdering af rengøringskvalitet, der sikrer et ensartet sprog og dokumentation af rengøringsniveauet mellem kunde og leverandør.",
      items: [
        { id: "hvad", title: "Hvad er INSTA 800?", text: "Fælles sprog: Minimerer misforståelser om, hvad 'rent' betyder, og reducerer risiko.<br><br>Objektive målinger: Rengøringen bedømmes ud fra visuel kontrol af objektgrupper (inventar, gulv, væg, loft).<br><br>Anvendelse: Kan bruges i alle bygninger (kontorer, skoler, hospitaler) uanset rengøringsmetode.", image: "", icon: "measure" },
        { id: "kontrolleret", title: "Hvad bliver kontrolleret?", text: "Hvad er INSTA 800?", image: "", icon: "measure" },
        { id: "vs", title: "INSTA 800 vs NIR", text: "Hvad er INSTA 800?", image: "", icon: "measure" },
      ],
    },

    quiz: {
      title: "Quiz",
      intro:
        "Tag en Quiz og find ud af hvor meget du ved om rengøreing på et hospital",
      items: [
        { id: "hvad", title: "Hvad er INSTA 800?", text: "Fælles sprog: Minimerer misforståelser om, hvad 'rent' betyder, og reducerer risiko.<br><br>Objektive målinger: Rengøringen bedømmes ud fra visuel kontrol af objektgrupper (inventar, gulv, væg, loft).<br><br>Anvendelse: Kan bruges i alle bygninger (kontorer, skoler, hospitaler) uanset rengøringsmetode.", image: "", icon: "measure" },
        { id: "kontrolleret", title: "Hvad bliver kontrolleret?", text: "Hvad er INSTA 800?", image: "", icon: "measure" },
        { id: "vs", title: "INSTA 800 vs NIR", text: "Hvad er INSTA 800?", image: "", icon: "measure" },
      ],
    },
  },
};


