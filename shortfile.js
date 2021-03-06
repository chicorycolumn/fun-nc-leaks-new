const arr = [
  {
    firstName: "Trycia",
    lastName: "Ryan",
    img_url: "http://lorempixel.com/640/480/people",
    job: {
      team: "models",
      title: "mission-critical",
      workplace: "Abernathy, Becker and Ferry"
    },
    username: "EarringSpecialEarnestDangerousMonster"
  },
  {
    firstName: "Gerson",
    lastName: "Buckridge",
    img_url: "http://lorempixel.com/640/480/people",
    job: { team: "ROI", title: "global", workplace: "Rath Group" },
    username: "MitchianJesterProfessorRubyCity"
  },
  {
    firstName: "Oren",
    lastName: "Christiansen",
    img_url: "http://lorempixel.com/640/480/people",
    job: { team: "schemas", title: "24/7", workplace: "Moen - Turner" },
    username: "CircularCitySalesmanPretentious"
  },
  {
    firstName: "Kailee",
    lastName: "Doyle",
    img_url: "http://lorempixel.com/640/480/people",
    job: {
      team: "infrastructures",
      title: "dot-com",
      workplace: "Fisher - Huel"
    },
    username: "MooseDangerousPretentious"
  },
  {
    firstName: "Ottilie",
    lastName: "Cummings",
    img_url: "http://lorempixel.com/640/480/people",
    job: {
      team: "paradigms",
      title: "value-added",
      workplace: "Harris, Price and McClure"
    },
    username: "PermutationShadesVikingLeema"
  },
  {
    firstName: "Imelda",
    lastName: "Rice",
    img_url: "http://lorempixel.com/640/480/people",
    job: {
      team: "methodologies",
      title: "B2B",
      workplace: "Fadel, Abbott and Lubowitz"
    },
    username: "FruityLeemaShadesPretentiousEarnest"
  },
  {
    firstName: "Tyler",
    lastName: "Strosin",
    img_url: "http://lorempixel.com/640/480/people",
    job: { team: "web-readiness", title: "efficient", workplace: "Hauck LLC" },
    username: "OathFlubberPretentiousAbsurdProfessor"
  },
  {
    firstName: "Steph",
    lastName: "Slater",
    img_url:
      "https://res.cloudinary.com/http-northcoders-com/image/upload/v1525190774/Steph_Sqaure_rlxgul.jpg",
    job: {
      workplace: "northcoders",
      team: "Talent & Partnerships",
      title: "Talent & Partnerships Coordinator"
    },
    username: ""
  },
  {
    firstName: "Haz",
    lastName: "Mallion",
    img_url: "",
    job: {
      workplace: "northcoders",
      team: "Classroom",
      title: "Community Manager"
    },
    username: "MissMallion"
  },
  {
    firstName: "Lewis",
    lastName: "Thiel",
    img_url: "http://lorempixel.com/640/480/people",
    job: {
      team: "partnerships",
      title: "proactive",
      workplace: "Tromp, Cruickshank and Weimann"
    },
    username: "CircularCityEarnest"
  },
  {
    firstName: "Darlene",
    lastName: "Herman",
    img_url: "http://lorempixel.com/640/480/people",
    job: {
      team: "synergies",
      title: "dot-com",
      workplace: "Lemke, Tremblay and Stokes"
    },
    username: "CircularOathProfessorEarnest"
  },
  {
    firstName: "Alanis",
    lastName: "Herman",
    img_url: "http://lorempixel.com/640/480/people",
    job: {
      team: "functionalities",
      title: "proactive",
      workplace: "Pfeffer LLC"
    },
    username: "AbsurdFishfingerFriendly"
  },
  {
    firstName: "Vel",
    lastName: "Georgieva",
    img_url: "",
    job: { workplace: "northcoders", team: "Classroom", title: "Mentor" },
    username: "popcorn"
  },
  {
    firstName: "Efren",
    lastName: "Beer",
    img_url: "http://lorempixel.com/640/480/people",
    job: {
      team: "systems",
      title: "synergistic",
      workplace: "Rodriguez Group"
    },
    username: "PretentiousFishfingerMusicalShadesMonster"
  },
  {
    firstName: "Rahsaan",
    lastName: "White",
    img_url: "http://lorempixel.com/640/480/people",
    job: {
      team: "schemas",
      title: "transparent",
      workplace: "Heathcote, Monahan and Waelchi"
    },
    username: "DangerousVikingAbsurdConsolidate"
  },
  {
    firstName: "Tom",
    lastName: "Simmons",
    img_url: "",
    job: { workplace: "northcoders", team: "Classroom", title: "Mentor" },
    username: "tomosim"
  },
  {
    firstName: "Rachel",
    lastName: "Kuphal",
    img_url: "http://lorempixel.com/640/480/people",
    job: { team: "platforms", title: "real-time", workplace: "Funk - Huel" },
    username: "ProfessorGreenFlubberMitchian"
  },
  {
    firstName: "Hannah",
    lastName: "Morissette",
    img_url: "http://lorempixel.com/640/480/people",
    job: { team: "technologies", title: "frictionless", workplace: "Metz LLC" },
    username: "MooseGreenEarringPermutationOath"
  },
  {
    firstName: "Hermann",
    lastName: "Spinka",
    img_url: "http://lorempixel.com/640/480/people",
    job: { team: "models", title: "killer", workplace: "Towne - Conn" },
    username: "DangerousPretentiousEarring"
  },
  {
    firstName: "Hailee",
    lastName: "Smitham",
    img_url: "http://lorempixel.com/640/480/people",
    job: { team: "action-items", title: "strategic", workplace: "Rau Group" },
    username: "FriendlyDangerousPretentiousCity"
  },
  {
    firstName: "Shania",
    lastName: "Feil",
    img_url: "http://lorempixel.com/640/480/people",
    job: {
      team: "initiatives",
      title: "world-class",
      workplace: "Ebert, Schinner and Corkery"
    },
    username: "GreenMusicalFriendly"
  },
  {
    firstName: "Josefa",
    lastName: "Lockman",
    img_url: "http://lorempixel.com/640/480/people",
    job: {
      team: "architectures",
      title: "leading-edge",
      workplace: "Cummings - Mayer"
    },
    username: "EarnestCityMonsterMooseFriendly"
  },
  {
    firstName: "Herminio",
    lastName: "Buckridge",
    img_url: "http://lorempixel.com/640/480/people",
    job: { team: "experiences", title: "virtual", workplace: "Franecki LLC" },
    username: "PermutationFishfingerProfessor"
  },
  {
    firstName: "Mabelle",
    lastName: "Frami",
    img_url: "http://lorempixel.com/640/480/people",
    job: { team: "e-tailers", title: "viral", workplace: "Rosenbaum - Will" },
    username: "PeonineDangerousMooseAbsurdConsolidate"
  },
  {
    firstName: "Thalia",
    lastName: "Schuster",
    img_url: "http://lorempixel.com/640/480/people",
    job: { team: "ROI", title: "viral", workplace: "Renner - Romaguera" },
    username: "FishfingerJesterPeonineDangerous"
  },
  {
    firstName: "Lucy",
    lastName: "Adams",
    img_url: "https://info.northcoders.com/hubfs/Lucy.jpg",
    job: {
      workplace: "northcoders",
      team: "Growth",
      title: "Growth Executive"
    },
    username: ""
  },
  {
    firstName: "Lexus",
    lastName: "Jast",
    img_url: "http://lorempixel.com/640/480/people",
    job: { team: "ROI", title: "compelling", workplace: "Jenkins - Daniel" },
    username: "GreenMitchianFriendly"
  },
  {
    firstName: "Catharine",
    lastName: "Fritsch",
    img_url: "http://lorempixel.com/640/480/people",
    job: {
      team: "paradigms",
      title: "innovative",
      workplace: "Cruickshank, Beer and Olson"
    },
    username: "CityAbsurdButterSalesman"
  },
  {
    firstName: "Laron",
    lastName: "Lueilwitz",
    img_url: "http://lorempixel.com/640/480/people",
    job: { team: "methodologies", title: "wireless", workplace: "Rice Group" },
    username: "ShadesSpecialEarringNuttyPeonine"
  },
  {
    firstName: "Sam",
    lastName: "Mraz",
    img_url: "http://lorempixel.com/640/480/people",
    job: {
      team: "bandwidth",
      title: "next-generation",
      workplace: "Jenkins - Crooks"
    },
    username: "FishfingerButterFlubberMonster"
  },
  {
    firstName: "Mitchell",
    lastName: "Lloyd",
    img_url:
      "https://cdn2.hubspot.net/hubfs/3489321/Photos/Staff%20Photos/Mitch_Sqaure.jpg",
    job: { team: "Classroom", title: "Block Lead", workplace: "northcoders" },
    username: "dedekind561"
  },
  {
    firstName: "Shanon",
    lastName: "Howe",
    img_url: "http://lorempixel.com/640/480/people",
    job: { team: "initiatives", title: "back-end", workplace: "Durgan LLC" },
    username: "EarnestDangerousMonsterFriendly"
  },
  {
    firstName: "Merle",
    lastName: "Brown",
    img_url: "http://lorempixel.com/640/480/people",
    job: {
      team: "applications",
      title: "end-to-end",
      workplace: "Murray, Rodriguez and Von"
    },
    username: "ProfessorFlubberEarnestPeonine"
  },
  {
    firstName: "Princess",
    lastName: "Cassin",
    img_url: "http://lorempixel.com/640/480/people",
    job: {
      team: "partnerships",
      title: "enterprise",
      workplace: "Bosco Group"
    },
    username: "ConsolidateEarringPuppySalesman"
  },
  {
    firstName: "Vivien",
    lastName: "Veum",
    img_url: "http://lorempixel.com/640/480/people",
    job: { team: "content", title: "dot-com", workplace: "Ondricka LLC" },
    username: "NuttyMooseSpecial"
  },
  {
    firstName: "Gonzalo",
    lastName: "O'Reilly",
    img_url: "http://lorempixel.com/640/480/people",
    job: {
      team: "methodologies",
      title: "dynamic",
      workplace: "Keebler - Roob"
    },
    username: "CircularShadesConsolidateGreenViking"
  },
  {
    firstName: "Trenton",
    lastName: "Cremin",
    img_url: "http://lorempixel.com/640/480/people",
    job: {
      team: "paradigms",
      title: "global",
      workplace: "Cummings, Lemke and Mueller"
    },
    username: "LeemaMonsterVikingPralineProfessor"
  },
  {
    firstName: "Amina",
    lastName: "Prosacco",
    img_url: "http://lorempixel.com/640/480/people",
    job: {
      team: "methodologies",
      title: "one-to-one",
      workplace: "McGlynn Inc"
    },
    username: "PeonineCityFishfingerProfessorFriendly"
  },
  {
    firstName: "Favian",
    lastName: "Corkery",
    img_url: "http://lorempixel.com/640/480/people",
    job: {
      team: "synergies",
      title: "out-of-the-box",
      workplace: "Cole - Bins"
    },
    username: "NuttyMooseConsolidateFruity"
  },
  {
    firstName: "Susie",
    lastName: "Gulgowski",
    img_url: "http://lorempixel.com/640/480/people",
    job: { team: "mindshare", title: "sticky", workplace: "Conn and Sons" },
    username: "FriendlyAbsurdMonsterEarnest"
  },
  {
    firstName: "Karina",
    lastName: "Emard",
    img_url: "http://lorempixel.com/640/480/people",
    job: { team: "markets", title: "front-end", workplace: "Parker - Miller" },
    username: "MooseNuttyJester"
  },
  {
    firstName: "Sam",
    lastName: "Caine",
    img_url: "",
    job: {
      workplace: "northcoders",
      team: "Classroom",
      title: "Head of Classroom"
    },
    username: "icellusedkars"
  },
  {
    firstName: "Cathrine",
    lastName: "West",
    img_url: "http://lorempixel.com/640/480/people",
    job: {
      team: "metrics",
      title: "global",
      workplace: "Lockman, Bayer and Glover"
    },
    username: "DangerousMusicalViking"
  },
  {
    firstName: "Favian",
    lastName: "Muller",
    img_url: "http://lorempixel.com/640/480/people",
    job: { team: "ROI", title: "cross-platform", workplace: "Hickle and Sons" },
    username: "CircularFriendlyGreenJesterMusical"
  },
  {
    firstName: "Baby",
    lastName: "Becker",
    img_url: "http://lorempixel.com/640/480/people",
    job: {
      team: "portals",
      title: "bleeding-edge",
      workplace: "Hilll - Osinski"
    },
    username: "EarringGreenDangerous"
  },
  {
    firstName: "Anat",
    lastName: "Dean",
    img_url: "",
    job: { workplace: "northcoders", team: "Classroom", title: "Block Lead" },
    username: "anatdean"
  },
  {
    firstName: "Tamara",
    lastName: "Grady",
    img_url: "http://lorempixel.com/640/480/people",
    job: { team: "content", title: "sexy", workplace: "White - McCullough" },
    username: "ShadesGreenRubyNutty"
  },
  {
    firstName: "Cordie",
    lastName: "Kihn",
    img_url: "http://lorempixel.com/640/480/people",
    job: {
      team: "users",
      title: "real-time",
      workplace: "Schultz, Moen and Pollich"
    },
    username: "GreenVikingDangerousEarringConsolidate"
  },
  {
    firstName: "Liam",
    lastName: "Stokes",
    img_url: "http://lorempixel.com/640/480/people",
    job: {
      team: "platforms",
      title: "web-enabled",
      workplace: "Kassulke, Sanford and Cormier"
    },
    username: "CityFlubberButterProfessor"
  },
  {
    firstName: "Ruth",
    lastName: "Ng",
    img_url:
      "https://info.northcoders.com/hubfs/Photos/Staff%20Photos/Ruth_Sqaure.jpg",
    job: { workplace: "northcoders", team: "Growth", title: "Head of Growth" },
    username: "RuthYMNg"
  },
  {
    firstName: "Uriah",
    lastName: "Kuhn",
    img_url: "http://lorempixel.com/640/480/people",
    job: { team: "content", title: "world-class", workplace: "Altenwerth LLC" },
    username: "OathDangerousGreen"
  },
  {
    firstName: "Paul",
    lastName: "Rogerson",
    img_url: "",
    job: { workplace: "northcoders", team: "Classroom", title: "Block Lead" },
    username: "rogersop"
  },
  {
    firstName: "Levi",
    lastName: "Kunde",
    img_url: "http://lorempixel.com/640/480/people",
    job: {
      team: "applications",
      title: "dynamic",
      workplace: "McKenzie, Waters and Stroman"
    },
    username: "MusicalLeemaFishfingerEarringPermutation"
  },
  {
    firstName: "Estelle",
    lastName: "Parisian",
    img_url: "http://lorempixel.com/640/480/people",
    job: {
      team: "networks",
      title: "plug-and-play",
      workplace: "Donnelly LLC"
    },
    username: "RubyEarnestViking"
  },
  {
    firstName: "Paul",
    lastName: "Copley",
    img_url: "",
    job: { workplace: "northcoders", team: "Classroom", title: "Block Lead" },
    username: "P-Copley"
  },
  {
    firstName: "Noemi",
    lastName: "Romaguera",
    img_url: "http://lorempixel.com/640/480/people",
    job: { team: "infomediaries", title: "impactful", workplace: "Willms Inc" },
    username: "FruityMitchianAbsurd"
  },
  {
    firstName: "Gerhard",
    lastName: "Kulas",
    img_url: "http://lorempixel.com/640/480/people",
    job: {
      team: "technologies",
      title: "bricks-and-clicks",
      workplace: "Gorczany - Herman"
    },
    username: "PuppyProfessorButterMonsterPraline"
  },
  {
    firstName: "Josh",
    lastName: "Gray",
    img_url: "",
    job: { workplace: "northcoders", team: "Onboarding", title: "Mentor" },
    username: "ziziou91"
  },
  {
    firstName: "Donna",
    lastName: "Trantow",
    img_url: "http://lorempixel.com/640/480/people",
    job: {
      team: "partnerships",
      title: "one-to-one",
      workplace: "Heathcote Group"
    },
    username: "FriendlyVikingLeemaRuby"
  },
  {
    firstName: "Mark",
    lastName: "Luettgen",
    img_url: "http://lorempixel.com/640/480/people",
    job: {
      team: "deliverables",
      title: "world-class",
      workplace: "Runolfsson Group"
    },
    username: "ButterFruityPeonineProfessorCity"
  },
  {
    firstName: "Megane",
    lastName: "Durgan",
    img_url: "http://lorempixel.com/640/480/people",
    job: { team: "schemas", title: "visionary", workplace: "Rice Inc" },
    username: "FruityButterJesterMonster"
  },
  {
    firstName: "Robert",
    lastName: "Kertzmann",
    img_url: "http://lorempixel.com/640/480/people",
    job: {
      team: "users",
      title: "clicks-and-mortar",
      workplace: "Kautzer Inc"
    },
    username: "NuttyFlubberEarringDangerous"
  },
  {
    firstName: "Mauro",
    lastName: "Gestoso",
    image_url: "",
    job: { workplace: "northcoders", title: "tutor", team: "left" },
    username: "mmmauro"
  }
];

const newArr = arr.filter(person => person.job.workplace === "northcoders");
console.log(newArr);
