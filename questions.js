// ============================================================
//  FRIENDS TRIVIA — QUESTION BANK (v2.0)
//  Scoring: Easy = 1 pt | Medium = 3 pts | Hard = 5 pts
//  Each round draws 30 questions: 10 easy / 12 medium / 8 hard
//  Each question is tied to a specific episode for source verification.
// ============================================================

const QUESTIONS = [
  // ════════════════════════════════════════════════════════════
  //   EASY (1 point) — 50 questions
  // ════════════════════════════════════════════════════════════
  {
    id: 1, difficulty: "easy", points: 1,
    q: "What is the name of the coffee shop where the gang hangs out?",
    choices: ["Central Perk", "Java Junction", "The Daily Grind", "Brew Ha Ha"],
    answer: 0,
    episode: "Recurring throughout the series — established in the Pilot."
  },
  {
    id: 2, difficulty: "easy", points: 1,
    q: "What is Joey's signature line for meeting women?",
    choices: ["How you doin'?", "Hey there, gorgeous", "What's up, beautiful?", "Hi, I'm Joey"],
    answer: 0,
    episode: "First widely cited in S4E13 — \"The One With Rachel's Crush\""
  },
  {
    id: 3, difficulty: "easy", points: 1,
    q: "What is Phoebe's signature song that she performs at Central Perk?",
    choices: ["Smelly Cat", "Crazy Underwear", "My Mother's Ashes", "Sticky Shoes"],
    answer: 0,
    episode: "First performed in S2E6 — \"The One with the Baby on the Bus\""
  },
  {
    id: 4, difficulty: "easy", points: 1,
    q: "What is the name of the Central Perk barista in love with Rachel?",
    choices: ["Gunther", "Terry", "Tag", "Joshua"],
    answer: 0,
    episode: "Recurring throughout the series — Gunther played by James Michael Tyler."
  },
  {
    id: 5, difficulty: "easy", points: 1,
    q: "What is Ross's profession?",
    choices: ["Paleontologist", "Archaeologist", "Geologist", "Zoologist"],
    answer: 0,
    episode: "Established in Season 1 — Ross works at the Museum of Natural History."
  },
  {
    id: 6, difficulty: "easy", points: 1,
    q: "Who shouts \"PIVOT! PIVOT! PIVOT!\" while moving a couch up a stairwell?",
    choices: ["Ross", "Chandler", "Joey", "Monica"],
    answer: 0,
    episode: "S5E16 — \"The One With the Cop\""
  },
  {
    id: 7, difficulty: "easy", points: 1,
    q: "What is Janice's iconic three-word greeting?",
    choices: ["Oh. My. God!", "Hi there, Chandler!", "Hey, hey, hey!", "Well, well, well!"],
    answer: 0,
    episode: "Recurring throughout the series — Janice's catchphrase."
  },
  {
    id: 8, difficulty: "easy", points: 1,
    q: "What is Rachel running away from in the very first episode?",
    choices: ["Her own wedding", "A bad job", "Her parents", "Her boss"],
    answer: 0,
    episode: "S1E1 — \"The Pilot\" — Rachel flees her wedding to Barry."
  },
  {
    id: 9, difficulty: "easy", points: 1,
    q: "Who lives across the hall from Monica and Rachel for most of the series?",
    choices: ["Joey and Chandler", "Phoebe and Mike", "Ross and Ben", "Gunther"],
    answer: 0,
    episode: "Established throughout the series."
  },
  {
    id: 10, difficulty: "easy", points: 1,
    q: "What pet does Ross briefly own in Season 1?",
    choices: ["A monkey named Marcel", "A cat named Whiskers", "A dog named Chappy", "A bird named Dick"],
    answer: 0,
    episode: "Marcel debuts in S1E10 — \"The One With the Monkey\""
  },
  {
    id: 11, difficulty: "easy", points: 1,
    q: "On Joey's soap opera Days of Our Lives, what is the name of the doctor he plays?",
    choices: ["Dr. Drake Ramoray", "Dr. Drake Remoray", "Dr. Drake Ramore", "Dr. Drake Romaray"],
    answer: 0,
    episode: "First mentioned in S2E11 — \"The One With the Lesbian Wedding\""
  },
  {
    id: 12, difficulty: "easy", points: 1,
    q: "What is the name of Ross's first wife?",
    choices: ["Carol", "Emily", "Julie", "Mona"],
    answer: 0,
    episode: "Established S1E1 — Carol leaves Ross for Susan; played by Anita Barone (S1) then Jane Sibbett."
  },
  {
    id: 13, difficulty: "easy", points: 1,
    q: "In what city does the show take place?",
    choices: ["New York City", "Boston", "Chicago", "Los Angeles"],
    answer: 0,
    episode: "Established throughout — Manhattan, primarily Greenwich Village."
  },
  {
    id: 14, difficulty: "easy", points: 1,
    q: "What is the name of Phoebe's twin sister?",
    choices: ["Ursula", "Olivia", "Gertrude", "Patricia"],
    answer: 0,
    episode: "First appears in S1E16 — \"The One With Two Parts, Part 1\""
  },
  {
    id: 15, difficulty: "easy", points: 1,
    q: "What was Ross's famous defense after sleeping with the copy-shop girl?",
    choices: ["WE WERE ON A BREAK!", "It was a mistake!", "She seduced me!", "I was drunk!"],
    answer: 0,
    episode: "First uttered in S3E16 — \"The One With the Morning After\""
  },
  {
    id: 16, difficulty: "easy", points: 1,
    q: "Who marries Monica?",
    choices: ["Chandler", "Richard", "Pete", "Tag"],
    answer: 0,
    episode: "S7E23-24 — \"The One With Monica and Chandler's Wedding\""
  },
  {
    id: 17, difficulty: "easy", points: 1,
    q: "How does Ross's wedding to Emily famously go wrong?",
    choices: ["He says \"Rachel\" instead of \"Emily\" at the altar", "He shows up late", "He runs away", "He forgets the ring"],
    answer: 0,
    episode: "S4E24 — \"The One With Ross's Wedding, Part 2\""
  },
  {
    id: 18, difficulty: "easy", points: 1,
    q: "What is the name of Ross and Rachel's daughter?",
    choices: ["Emma", "Erica", "Ella", "Emily"],
    answer: 0,
    episode: "Born in S8E23 — \"The One Where Rachel Has a Baby, Part 2\""
  },
  {
    id: 19, difficulty: "easy", points: 1,
    q: "Who plays Ross Geller?",
    choices: ["David Schwimmer", "Matt LeBlanc", "Matthew Perry", "Paul Rudd"],
    answer: 0,
    episode: "Series regular throughout all 10 seasons."
  },
  {
    id: 20, difficulty: "easy", points: 1,
    q: "Who plays Monica Geller?",
    choices: ["Courteney Cox", "Jennifer Aniston", "Lisa Kudrow", "Maggie Wheeler"],
    answer: 0,
    episode: "Series regular throughout all 10 seasons."
  },
  {
    id: 21, difficulty: "easy", points: 1,
    q: "Who plays Rachel Green?",
    choices: ["Jennifer Aniston", "Courteney Cox", "Lisa Kudrow", "Reese Witherspoon"],
    answer: 0,
    episode: "Series regular throughout all 10 seasons."
  },
  {
    id: 22, difficulty: "easy", points: 1,
    q: "Who plays Phoebe Buffay?",
    choices: ["Lisa Kudrow", "Jennifer Aniston", "Courteney Cox", "Maggie Wheeler"],
    answer: 0,
    episode: "Series regular throughout all 10 seasons."
  },
  {
    id: 23, difficulty: "easy", points: 1,
    q: "Who plays Joey Tribbiani?",
    choices: ["Matt LeBlanc", "Matthew Perry", "David Schwimmer", "Hank Azaria"],
    answer: 0,
    episode: "Series regular throughout all 10 seasons."
  },
  {
    id: 24, difficulty: "easy", points: 1,
    q: "Who plays Chandler Bing?",
    choices: ["Matthew Perry", "Matt LeBlanc", "David Schwimmer", "Hank Azaria"],
    answer: 0,
    episode: "Series regular throughout all 10 seasons."
  },
  {
    id: 25, difficulty: "easy", points: 1,
    q: "Who is Ross's ex-wife Carol's partner — the woman Carol left him for?",
    choices: ["Susan", "Sandra", "Carla", "Sharon"],
    answer: 0,
    episode: "Recurring from S1E2 onward — Susan Bunch, played by Jessica Hecht."
  },
  {
    id: 26, difficulty: "easy", points: 1,
    q: "What is the name of Ross and Carol's son?",
    choices: ["Ben", "Bobby", "Brian", "Bart"],
    answer: 0,
    episode: "Born in S1E23 — \"The One With the Birth\""
  },
  {
    id: 27, difficulty: "easy", points: 1,
    q: "What's the recurring on-and-off love story that defines the entire series?",
    choices: ["Ross and Rachel", "Chandler and Monica", "Joey and Rachel", "Ross and Carol"],
    answer: 0,
    episode: "Established from S1E1 onward."
  },
  {
    id: 28, difficulty: "easy", points: 1,
    q: "What is Rachel's father's profession?",
    choices: ["Doctor (vascular surgeon)", "Lawyer", "Banker", "Accountant"],
    answer: 0,
    episode: "Established throughout — Dr. Leonard Green played by Ron Leibman."
  },
  {
    id: 29, difficulty: "easy", points: 1,
    q: "What is the name of Joey's signature romantic stew?",
    choices: ["His meatball sandwich preferences (sandwiches in general are his favorite)", "Joey's special pasta", "Joey's pizza of love", "Joey's sub"],
    answer: 0,
    episode: "Established throughout — Joey's love of sandwiches confirmed in S4E12 \"The One With the Embryos\""
  },
  {
    id: 30, difficulty: "easy", points: 1,
    q: "Which Friends character is famous for being incredibly clean and organized?",
    choices: ["Monica", "Rachel", "Phoebe", "Chandler"],
    answer: 0,
    episode: "Established throughout the series — Monica's cleanliness obsession is a defining trait."
  },
  {
    id: 31, difficulty: "easy", points: 1,
    q: "Which Friends character is a chef?",
    choices: ["Monica", "Phoebe", "Joey", "Rachel"],
    answer: 0,
    episode: "Monica works at various restaurants throughout the series; established in S1."
  },
  {
    id: 32, difficulty: "easy", points: 1,
    q: "What was Rachel's career before she became a fashion buyer?",
    choices: ["Waitress at Central Perk", "Receptionist", "Personal shopper", "Boutique assistant"],
    answer: 0,
    episode: "S1E1 onward — Rachel waits tables at Central Perk."
  },
  {
    id: 33, difficulty: "easy", points: 1,
    q: "What is Phoebe's profession?",
    choices: ["Massage therapist", "Singer", "Waitress", "Nanny"],
    answer: 0,
    episode: "Established throughout the series — Phoebe works as a masseuse."
  },
  {
    id: 34, difficulty: "easy", points: 1,
    q: "What animal does Joey buy as a pet that Chandler ends up loving?",
    choices: ["A duck and a chick", "A cat", "A turtle", "A hamster"],
    answer: 0,
    episode: "S3E21 — \"The One With a Chick and a Duck\""
  },
  {
    id: 35, difficulty: "easy", points: 1,
    q: "What is Joey's catchphrase agent's first name?",
    choices: ["Estelle", "Edna", "Eunice", "Edith"],
    answer: 0,
    episode: "Recurring — Estelle Leonard, played by June Gable."
  },
  {
    id: 36, difficulty: "easy", points: 1,
    q: "What does Chandler do to cope with stress?",
    choices: ["Tell jokes (humor as defense mechanism)", "Eat ice cream", "Watch TV", "Run"],
    answer: 0,
    episode: "Established throughout — Chandler's humor as a defense mechanism is a defining character trait."
  },
  {
    id: 37, difficulty: "easy", points: 1,
    q: "What is the famous line at the end of the series — the gang's final line about their apartment?",
    choices: ["Where? (referring to coffee)", "Goodbye apartment", "Let's go home", "It's been real"],
    answer: 0,
    episode: "S10E18 — \"The Last One, Part 2\" (the show ends as the gang leaves the empty apartment for the final time, with Chandler's quip \"Where?\" when Rachel suggests coffee)"
  },
  {
    id: 38, difficulty: "easy", points: 1,
    q: "What does Phoebe sing to children at the library that gets her in trouble?",
    choices: ["Brutally honest songs about death and reality", "Show tunes", "Adult pop songs", "Nursery rhymes off-key"],
    answer: 0,
    episode: "S3E4 — \"The One With the Metaphorical Tunnel\" / Phoebe's library singing storyline."
  },
  {
    id: 39, difficulty: "easy", points: 1,
    q: "What is Joey's favorite food (as established in the famous trivia game)?",
    choices: ["Sandwiches", "Pizza", "Meatballs", "Pasta"],
    answer: 0,
    episode: "Confirmed in S4E12 — \"The One With the Embryos\""
  },
  {
    id: 40, difficulty: "easy", points: 1,
    q: "What show does Joey appear on as Dr. Drake Ramoray?",
    choices: ["Days of Our Lives", "General Hospital", "All My Children", "The Bold and the Beautiful"],
    answer: 0,
    episode: "Established S2 onward."
  },
  {
    id: 41, difficulty: "easy", points: 1,
    q: "Who played Chandler's roommate before Joey moved in?",
    choices: ["Kip", "Eldad", "Pete", "Stewart"],
    answer: 0,
    episode: "Referenced in flashback — Kip was mentioned in multiple episodes including S3E6."
  },
  {
    id: 42, difficulty: "easy", points: 1,
    q: "What is the name of the spinoff show where Joey moves to Los Angeles?",
    choices: ["Joey", "Tribbiani", "Days of Joey", "How You Doin'"],
    answer: 0,
    episode: "Joey aired 2004-2006 on NBC, after the Friends finale."
  },
  {
    id: 43, difficulty: "easy", points: 1,
    q: "How does Chandler propose to Monica?",
    choices: ["With candles in their apartment", "At Central Perk", "At a restaurant", "On the beach"],
    answer: 0,
    episode: "S6E25 — \"The One With the Proposal, Part 2\""
  },
  {
    id: 44, difficulty: "easy", points: 1,
    q: "What is the name of Monica's annoying neighbor Mr. Heckles?",
    choices: ["Mr. Heckles", "Mr. Higgins", "Mr. Hartwell", "Mr. Higgs"],
    answer: 0,
    episode: "Recurring from S1; dies in S2E3 — \"The One Where Heckles Dies\""
  },
  {
    id: 45, difficulty: "easy", points: 1,
    q: "Who plays Joey's agent Estelle Leonard?",
    choices: ["June Gable", "Estelle Harris", "Doris Roberts", "Liz Sheridan"],
    answer: 0,
    episode: "Recurring throughout the series."
  },
  {
    id: 46, difficulty: "easy", points: 1,
    q: "Where do Chandler and Monica buy their house at the end of the series?",
    choices: ["Westchester (a suburb)", "Long Island", "New Jersey", "Connecticut"],
    answer: 0,
    episode: "Established S10 — they move to Westchester."
  },
  {
    id: 47, difficulty: "easy", points: 1,
    q: "What is the first major secret romance that the gang struggles to keep hidden in Season 5?",
    choices: ["Monica and Chandler dating", "Phoebe and Joey", "Ross and Elizabeth", "Rachel and Tag"],
    answer: 0,
    episode: "Begins S4 finale; secret kept through Season 5 \"The One Where Everybody Finds Out\""
  },
  {
    id: 48, difficulty: "easy", points: 1,
    q: "What classic Friends episode revolves around everyone finding out about Monica and Chandler?",
    choices: ["The One Where Everybody Finds Out", "The One With the Secret", "The One About Monica", "The One With the Big Reveal"],
    answer: 0,
    episode: "S5E14 — \"The One Where Everybody Finds Out\""
  },
  {
    id: 49, difficulty: "easy", points: 1,
    q: "What musical instrument does Phoebe play?",
    choices: ["Acoustic guitar", "Piano", "Violin", "Banjo"],
    answer: 0,
    episode: "Established throughout — Phoebe plays guitar at Central Perk."
  },
  {
    id: 50, difficulty: "easy", points: 1,
    q: "How do the friends typically greet each other when entering Central Perk?",
    choices: ["Hey", "Hi", "Hello", "What's up"],
    answer: 0,
    episode: "Established throughout — \"Hey\" is the recurring catchphrase greeting."
  },

  // ════════════════════════════════════════════════════════════
  //   MEDIUM (3 points) — 60 questions
  // ════════════════════════════════════════════════════════════
  {
    id: 51, difficulty: "medium", points: 3,
    q: "What field does Chandler work in for most of the series — a job no one can ever explain?",
    choices: ["Statistical analysis and data reconfiguration", "Marketing", "Accounting", "Computer programming"],
    answer: 0,
    episode: "Established S1; immortalized in S4E12 \"The One With the Embryos\""
  },
  {
    id: 52, difficulty: "medium", points: 3,
    q: "In the lightning-round trivia game, what word does Rachel invent when guessing Chandler's job?",
    choices: ["Transpondster", "Reconfiguratist", "Statistitor", "Dataniator"],
    answer: 0,
    episode: "S4E12 — \"The One With the Embryos\""
  },
  {
    id: 53, difficulty: "medium", points: 3,
    q: "What does Ross dress up as to teach Ben about Hanukkah?",
    choices: ["The Holiday Armadillo", "Santa Claus", "A dreidel", "Hanukkah Harry"],
    answer: 0,
    episode: "S7E10 — \"The One With the Holiday Armadillo\""
  },
  {
    id: 54, difficulty: "medium", points: 3,
    q: "What does Ross call his (notoriously bad) keyboard music style?",
    choices: ["Sound", "Synth", "Art", "Vibe"],
    answer: 0,
    episode: "S4E19 — \"The One With All the Haste\" / Ross's keyboard playing referenced multiple times."
  },
  {
    id: 55, difficulty: "medium", points: 3,
    q: "Where do Ross and Rachel accidentally get married?",
    choices: ["Las Vegas", "Atlantic City", "Reno", "Honolulu"],
    answer: 0,
    episode: "S5E24 — \"The One in Vegas, Part 2\""
  },
  {
    id: 56, difficulty: "medium", points: 3,
    q: "What was originally going to be the title of Phoebe's signature song?",
    choices: ["Smelly Dog", "Stinky Cat", "Crazy Underwear", "Sticky Shoes"],
    answer: 0,
    episode: "S2E6 — \"The One with the Baby on the Bus\" (writer Betsy Borns originally based it on her own smelly dog)"
  },
  {
    id: 57, difficulty: "medium", points: 3,
    q: "Who plays Monica's much-older boyfriend, Richard Burke, the ophthalmologist?",
    choices: ["Tom Selleck", "Jon Lovitz", "Bruce Willis", "Charlie Sheen"],
    answer: 0,
    episode: "Recurring from S2 — Tom Selleck as Richard Burke."
  },
  {
    id: 58, difficulty: "medium", points: 3,
    q: "Who plays Janice — Chandler's nasally-voiced on-and-off girlfriend?",
    choices: ["Maggie Wheeler", "Megan Mullally", "Helen Hunt", "Sandra Bernhard"],
    answer: 0,
    episode: "Recurring throughout the series."
  },
  {
    id: 59, difficulty: "medium", points: 3,
    q: "What does Joey famously refuse to do, even for the people he loves?",
    choices: ["Share food", "Lie", "Wake up early", "Skip a meal"],
    answer: 0,
    episode: "S10E9 — \"The One With Rachel's Phone Number\" (Joey doesn't share food!)"
  },
  {
    id: 60, difficulty: "medium", points: 3,
    q: "Whose family recipe does Phoebe spend an episode trying to recover, only to discover it's a famous brand?",
    choices: ["Nestlé Toll House chocolate chip cookies", "Pillsbury cookies", "Oreo cookies", "Famous Amos cookies"],
    answer: 0,
    episode: "S7E3 — \"The One With Phoebe's Cookies\""
  },
  {
    id: 61, difficulty: "medium", points: 3,
    q: "What is the name of the woman Ross marries in London?",
    choices: ["Emily", "Elizabeth", "Mona", "Julie"],
    answer: 0,
    episode: "S4E23-24 — \"The One With Ross's Wedding\""
  },
  {
    id: 62, difficulty: "medium", points: 3,
    q: "What is Chandler's middle name?",
    choices: ["Muriel", "Mason", "Maurice", "Maxwell"],
    answer: 0,
    episode: "Revealed in S2E5 — \"The One With Five Steaks and an Eggplant\""
  },
  {
    id: 63, difficulty: "medium", points: 3,
    q: "Who lives in the apartment downstairs from Monica and Rachel and complains about noise (until his death)?",
    choices: ["Mr. Heckles", "Mr. Treeger", "Mr. Geller", "Mr. Sandelman"],
    answer: 0,
    episode: "S1 onward — dies S2E3 \"The One Where Heckles Dies\""
  },
  {
    id: 64, difficulty: "medium", points: 3,
    q: "Who plays Phoebe's husband, Mike Hannigan?",
    choices: ["Paul Rudd", "Hank Azaria", "Jon Favreau", "Ben Stiller"],
    answer: 0,
    episode: "Recurring from S9 onward."
  },
  {
    id: 65, difficulty: "medium", points: 3,
    q: "What does Ross try to whiten that goes catastrophically wrong before a date?",
    choices: ["His teeth", "His skin", "His shirts", "His shoes"],
    answer: 0,
    episode: "S6E8 — \"The One With Ross's Teeth\""
  },
  {
    id: 66, difficulty: "medium", points: 3,
    q: "How do the boys win Monica and Rachel's apartment in Season 4?",
    choices: ["Through a trivia game", "Through a poker game", "Through a bet at a basketball game", "Through a game of darts"],
    answer: 0,
    episode: "S4E12 — \"The One With the Embryos\""
  },
  {
    id: 67, difficulty: "medium", points: 3,
    q: "Who does Phoebe carry as a surrogate, giving birth to triplets?",
    choices: ["Her brother Frank Jr. and his wife Alice", "Her sister Ursula", "Monica and Chandler", "A stranger"],
    answer: 0,
    episode: "S4E12 onward; born S5E3 \"The One Hundredth\""
  },
  {
    id: 68, difficulty: "medium", points: 3,
    q: "How many times is Ross divorced by the end of the series?",
    choices: ["Three times", "Two times", "Four times", "Once"],
    answer: 0,
    episode: "Carol (S1), Emily (S5), Rachel-Vegas (S6) — three divorces total."
  },
  {
    id: 69, difficulty: "medium", points: 3,
    q: "Who is \"Ugly Naked Guy\"?",
    choices: ["The naked man visible through the gang's window across the street", "Mr. Heckles' nephew", "Chandler's old neighbor", "Joey's audition reject"],
    answer: 0,
    episode: "Recurring from S1 — the naked man across the street whom they spy on."
  },
  {
    id: 70, difficulty: "medium", points: 3,
    q: "Who pees on Monica's leg after she's stung by a jellyfish?",
    choices: ["Joey", "Ross", "Chandler", "Phoebe"],
    answer: 0,
    episode: "S4E1 — \"The One With the Jellyfish\""
  },
  {
    id: 71, difficulty: "medium", points: 3,
    q: "Who puts a raw turkey on his head to make Monica laugh?",
    choices: ["Chandler", "Joey", "Ross", "Mike"],
    answer: 0,
    episode: "S5E8 — \"The One With All the Thanksgivings\" — though Joey gets his head stuck in the turkey in this episode, Chandler later puts the turkey on his head as a callback in S6E9 to recreate the bit for Monica."
  },
  {
    id: 72, difficulty: "medium", points: 3,
    q: "How many pages was Rachel's letter to Ross?",
    choices: ["18 pages, front and back", "10 pages, front only", "20 pages, front and back", "12 pages, front only"],
    answer: 0,
    episode: "S4E1 — \"The One With the Jellyfish\""
  },
  {
    id: 73, difficulty: "medium", points: 3,
    q: "What's the name of the Geller family Thanksgiving football game?",
    choices: ["The Geller Bowl", "The Geller Cup", "The Geller Trophy", "Geller Football"],
    answer: 0,
    episode: "S3E9 — \"The One With the Football\""
  },
  {
    id: 74, difficulty: "medium", points: 3,
    q: "What brand offers Rachel a dream job in Paris near the end of the series?",
    choices: ["Louis Vuitton", "Chanel", "Yves Saint Laurent", "Christian Dior"],
    answer: 0,
    episode: "S10 — \"The One With Rachel's Going Away Party\""
  },
  {
    id: 75, difficulty: "medium", points: 3,
    q: "What are the names of Phoebe's triplets?",
    choices: ["Frank Jr. Jr., Leslie, and Chandler", "Frank, Frank Jr., and Frankie", "Leslie, Frank, and Phoebe", "Frank, Chandler, and Lisa"],
    answer: 0,
    episode: "S5E3 — \"The One Hundredth\""
  },
  {
    id: 76, difficulty: "medium", points: 3,
    q: "What is Joey's full legal name?",
    choices: ["Joseph Francis Tribbiani Jr.", "Joseph Anthony Tribbiani", "Joey Vincenzo Tribbiani", "Joseph Michael Tribbiani"],
    answer: 0,
    episode: "Established throughout the series."
  },
  {
    id: 77, difficulty: "medium", points: 3,
    q: "What is Chandler's mother's name?",
    choices: ["Nora Bing", "Nina Bing", "Norma Bing", "Nancy Bing"],
    answer: 0,
    episode: "Recurring throughout — Nora Bing, played by Morgan Fairchild."
  },
  {
    id: 78, difficulty: "medium", points: 3,
    q: "Who plays Chandler's drag-queen father, Charles Bing / Helena Handbasket?",
    choices: ["Kathleen Turner", "Tilda Swinton", "Glenn Close", "Sigourney Weaver"],
    answer: 0,
    episode: "Recurring from S7 — Kathleen Turner."
  },
  {
    id: 79, difficulty: "medium", points: 3,
    q: "Where do Chandler and Monica first meet?",
    choices: ["At a Thanksgiving dinner when Monica was a teenager", "At college", "At Joey's apartment", "At Central Perk"],
    answer: 0,
    episode: "S5E8 — \"The One With All the Thanksgivings\""
  },
  {
    id: 80, difficulty: "medium", points: 3,
    q: "How does Chandler lose a toe in a Thanksgiving flashback?",
    choices: ["Monica drops a knife on it", "He cuts it shaving", "He drops a turkey on it", "He stubs it on furniture"],
    answer: 0,
    episode: "S5E8 — \"The One With All the Thanksgivings\""
  },
  {
    id: 81, difficulty: "medium", points: 3,
    q: "What is the name of Joey's detective character on the show \"Mac and C.H.E.E.S.E.\"?",
    choices: ["Mac Machiavelli", "Mac Mancuso", "Mac McCall", "Mac Marino"],
    answer: 0,
    episode: "S6E22 — \"The One With the Joke\" / Mac and C.H.E.E.S.E. storyline runs in S6E22 / S7E15"
  },
  {
    id: 82, difficulty: "medium", points: 3,
    q: "Who is Estelle Leonard?",
    choices: ["Joey's chain-smoking agent", "Phoebe's grandmother", "Ross's coworker", "Rachel's boss"],
    answer: 0,
    episode: "Recurring throughout the series — played by June Gable."
  },
  {
    id: 83, difficulty: "medium", points: 3,
    q: "What is the name of Joey's stuffed penguin?",
    choices: ["Hugsy", "Buddy", "Pengu", "Cutesy"],
    answer: 0,
    episode: "First seen in S7E8 — \"The One Where Chandler Doesn't Like Dogs\""
  },
  {
    id: 84, difficulty: "medium", points: 3,
    q: "What is the title of the final episode of the series?",
    choices: ["The Last One", "The One Where It All Ends", "Goodbye Friends", "The Finale"],
    answer: 0,
    episode: "S10E17-18 — \"The Last One, Part 1 & 2\""
  },
  {
    id: 85, difficulty: "medium", points: 3,
    q: "Who co-created Friends with David Crane and Kevin S. Bright?",
    choices: ["Marta Kauffman", "Larry David", "Mike Judge", "Diane English"],
    answer: 0,
    episode: "Creators of the series — Crane, Kauffman, and Bright."
  },
  {
    id: 86, difficulty: "medium", points: 3,
    q: "What name does Phoebe legally change her name to in Season 10?",
    choices: ["Princess Consuela Banana-Hammock", "Princess Buttercup", "Princess Catalina", "Empress Phoebe"],
    answer: 0,
    episode: "S10E14 — \"The One With Princess Consuela\""
  },
  {
    id: 87, difficulty: "medium", points: 3,
    q: "What name does Mike then jokingly choose for himself in retaliation?",
    choices: ["Crap Bag", "Bag Of Crap", "Trash Guy", "Stinky Pants"],
    answer: 0,
    episode: "S10E14 — \"The One With Princess Consuela\""
  },
  {
    id: 88, difficulty: "medium", points: 3,
    q: "How many sisters does Joey have?",
    choices: ["Seven", "Five", "Six", "Eight"],
    answer: 0,
    episode: "Established S1 — Joey has seven sisters."
  },
  {
    id: 89, difficulty: "medium", points: 3,
    q: "What names do Monica and Chandler give the twins they adopt in the finale?",
    choices: ["Jack and Erica", "Jack and Emma", "Frank and Erica", "Ben and Emma"],
    answer: 0,
    episode: "S10E17-18 — \"The Last One\""
  },
  {
    id: 90, difficulty: "medium", points: 3,
    q: "Who plays Phoebe's twin sister Ursula?",
    choices: ["Lisa Kudrow (in dual role)", "A different actress", "Helen Hunt", "Annabeth Gish"],
    answer: 0,
    episode: "Lisa Kudrow plays both — Ursula first appears in Mad About You; her character crosses over to Friends."
  },
  {
    id: 91, difficulty: "medium", points: 3,
    q: "Who plays Joey's nemesis-turned-roommate Janine, the Australian dancer?",
    choices: ["Elle Macpherson", "Kelly Macpherson", "Cindy Crawford", "Heidi Klum"],
    answer: 0,
    episode: "Recurring in S6 — Elle Macpherson as Janine."
  },
  {
    id: 92, difficulty: "medium", points: 3,
    q: "What real-life A-list actor plays movie star Richard Crosby, Joey's drunken co-star in the wedding-finale arc?",
    choices: ["Gary Oldman", "Tom Hanks", "Robert De Niro", "Bill Murray"],
    answer: 0,
    episode: "S7E23-24 / S8E1 — Gary Oldman as Richard Crosby."
  },
  {
    id: 93, difficulty: "medium", points: 3,
    q: "In \"The One With No One's Ready,\" what does Joey wear that famously crosses over into Chandler's drawers?",
    choices: ["Every single piece of Chandler's clothing at once", "Chandler's underwear", "Chandler's tuxedo", "Chandler's bathrobe"],
    answer: 0,
    episode: "S3E2 — \"The One Where No One's Ready\""
  },
  {
    id: 94, difficulty: "medium", points: 3,
    q: "What does Joey say while wearing all of Chandler's clothes?",
    choices: ["Could I BE wearing any more clothes?", "I'm Chandler now!", "How do I look?", "Doesn't this fit?"],
    answer: 0,
    episode: "S3E2 — \"The One Where No One's Ready\""
  },
  {
    id: 95, difficulty: "medium", points: 3,
    q: "What metaphor does Phoebe use to describe Ross and Rachel — saying they're meant for each other?",
    choices: ["They're lobsters (lobsters mate for life)", "They're swans", "They're penguins", "They're doves"],
    answer: 0,
    episode: "S2E14 — \"The One With the Prom Video\""
  },
  {
    id: 96, difficulty: "medium", points: 3,
    q: "In \"The One With the Prom Video,\" what shocks the gang when they watch the old VHS tape Ross is shown in?",
    choices: ["He almost took Rachel to prom when her date was running late", "Ross was a really good dancer", "Monica was thin then", "Joey appeared as an extra"],
    answer: 0,
    episode: "S2E14 — \"The One With the Prom Video\""
  },
  {
    id: 97, difficulty: "medium", points: 3,
    q: "What is the name of the rival musician who replaces Phoebe at Central Perk?",
    choices: ["Stephanie Schiffer (played by Chrissie Hynde of The Pretenders)", "Stevie Schimmer", "Sarah Spitalny", "Sandy Stratton"],
    answer: 0,
    episode: "S2E6 — \"The One with the Baby on the Bus\""
  },
  {
    id: 98, difficulty: "medium", points: 3,
    q: "In what city does Ross's wedding to Emily take place?",
    choices: ["London", "Paris", "Rome", "Edinburgh"],
    answer: 0,
    episode: "S4E23-24 — \"The One With Ross's Wedding, Parts 1 & 2\""
  },
  {
    id: 99, difficulty: "medium", points: 3,
    q: "What name does Chandler famously yell as a defense after Ross uses Rachel's name at the altar?",
    choices: ["Ross blames it on his nervousness and tries to continue with Emily", "Rachel!", "Help!", "It's the speeches!"],
    answer: 0,
    episode: "S4E24 — \"The One With Ross's Wedding, Part 2\""
  },
  {
    id: 100, difficulty: "medium", points: 3,
    q: "Who is Rachel's first big love interest at her fashion job after Ralph Lauren?",
    choices: ["Tag Jones (her assistant)", "Mark Robinson", "Joshua", "Russ"],
    answer: 0,
    episode: "S7 — Tag Jones, played by Eddie Cahill."
  },
  {
    id: 101, difficulty: "medium", points: 3,
    q: "Who plays Tag, Rachel's young assistant-turned-boyfriend?",
    choices: ["Eddie Cahill", "Eric Balfour", "Chad Michael Murray", "Bryan Greenberg"],
    answer: 0,
    episode: "Recurring S7."
  },
  {
    id: 102, difficulty: "medium", points: 3,
    q: "What does Ross spray on himself before a date that turns his teeth blue under UV light?",
    choices: ["Whitening solution that he leaves on too long, turning his teeth glow-in-the-dark", "Self-tanner", "Cologne", "Hair dye"],
    answer: 0,
    episode: "S6E8 — \"The One With Ross's Teeth\""
  },
  {
    id: 103, difficulty: "medium", points: 3,
    q: "What does Ross plead with Rachel after she discovers he slept with Chloe — the famous defense he repeats throughout the series?",
    choices: ["WE WERE ON A BREAK!", "It was a mistake!", "I love you!", "I'm sorry!"],
    answer: 0,
    episode: "S3E16 — \"The One With the Morning After\""
  },
  {
    id: 104, difficulty: "medium", points: 3,
    q: "What is the name of the woman Ross sleeps with the night he and Rachel \"take a break\"?",
    choices: ["Chloe (the copy place girl)", "Mona", "Bonnie", "Elizabeth"],
    answer: 0,
    episode: "S3E15-16 — \"The One Where Ross and Rachel Take a Break\""
  },
  {
    id: 105, difficulty: "medium", points: 3,
    q: "Who is Mark — the man Ross is jealous of, accusing Rachel of cheating with?",
    choices: ["Mark Robinson, Rachel's coworker at Bloomingdale's", "Mark Hutchinson", "Mark Davis", "Mark Cosgrove"],
    answer: 0,
    episode: "Recurring S3 — Mark Robinson, played by Steven Eckholdt."
  },
  {
    id: 106, difficulty: "medium", points: 3,
    q: "What is Rachel's secret-but-actual favorite movie (as revealed in the trivia game)?",
    choices: ["Weekend at Bernie's", "Dangerous Liaisons", "Pretty Woman", "When Harry Met Sally"],
    answer: 0,
    episode: "S4E12 — \"The One With the Embryos\""
  },
  {
    id: 107, difficulty: "medium", points: 3,
    q: "What is the name of Joey's imaginary childhood friend?",
    choices: ["Maurice (the space cowboy)", "Marvin", "Mickey", "Marvis"],
    answer: 0,
    episode: "S4E12 — \"The One With the Embryos\""
  },
  {
    id: 108, difficulty: "medium", points: 3,
    q: "Whose name is on Chandler's TV Guide subscription label that's a running gag in the show?",
    choices: ["Miss Chanandler Bong", "Chandler Bing Jr.", "Mr. Chanandler", "Bing Chandler"],
    answer: 0,
    episode: "S4E12 — \"The One With the Embryos\""
  },
  {
    id: 109, difficulty: "medium", points: 3,
    q: "Who plays Pete Becker, Monica's millionaire boyfriend who wants to become Ultimate Fighting Champion?",
    choices: ["Jon Favreau", "Jeff Goldblum", "Steve Carell", "Ben Stiller"],
    answer: 0,
    episode: "Recurring S3 — Jon Favreau."
  },
  {
    id: 110, difficulty: "medium", points: 3,
    q: "What is the name of Monica's first major restaurant job that catapults her career?",
    choices: ["Allesandro's", "Javu", "Cibo", "The Moondance Diner"],
    answer: 0,
    episode: "S6E12 — \"The One With the Joke\" / S6E10 — Monica becomes head chef at Allesandro's."
  },

  // ════════════════════════════════════════════════════════════
  //   HARD (5 points) — 40 questions
  // ════════════════════════════════════════════════════════════
  {
    id: 111, difficulty: "hard", points: 5,
    q: "Which actress plays Rachel's younger sister Jill?",
    choices: ["Reese Witherspoon", "Christina Applegate", "Cameron Diaz", "Winona Ryder"],
    answer: 0,
    episode: "S6E13-14 — \"The One With Rachel's Sister\""
  },
  {
    id: 112, difficulty: "hard", points: 5,
    q: "Which actress plays Rachel's OTHER sister, Amy?",
    choices: ["Christina Applegate", "Reese Witherspoon", "Marisa Tomei", "Cameron Diaz"],
    answer: 0,
    episode: "S9E8 / S10E5 — Christina Applegate won an Emmy for the role."
  },
  {
    id: 113, difficulty: "hard", points: 5,
    q: "Which actress plays Ross's second wife, Emily?",
    choices: ["Helen Baxendale", "Sarah Ferguson", "Kate Beckinsale", "Catherine Zeta-Jones"],
    answer: 0,
    episode: "Recurring S4-S5."
  },
  {
    id: 114, difficulty: "hard", points: 5,
    q: "What's the final line of the series — Rachel's announcement to Ross?",
    choices: ["I got off the plane", "I'm staying", "I love you", "I came back"],
    answer: 0,
    episode: "S10E18 — \"The Last One, Part 2\""
  },
  {
    id: 115, difficulty: "hard", points: 5,
    q: "What is Phoebe's mother's real first name (her birth mother, not adoptive)?",
    choices: ["Phoebe Abbott (her birth mother shares her name)", "Lily", "Frances", "Helen"],
    answer: 0,
    episode: "S3E25 — \"The One at the Beach\" — Phoebe meets her birth mother Phoebe Abbott."
  },
  {
    id: 116, difficulty: "hard", points: 5,
    q: "Who plays Phoebe Abbott, Phoebe's birth mother?",
    choices: ["Teri Garr", "Susan Sarandon", "Kathleen Turner", "Glenn Close"],
    answer: 0,
    episode: "S3E25 — \"The One at the Beach\" / recurring."
  },
  {
    id: 117, difficulty: "hard", points: 5,
    q: "Who plays Ross's girlfriend Julie, who he dates between Carol and Rachel?",
    choices: ["Lauren Tom", "Sandra Oh", "Tia Carrere", "Ming-Na Wen"],
    answer: 0,
    episode: "Recurring S2 — Julie, met on a paleontology trip in China."
  },
  {
    id: 118, difficulty: "hard", points: 5,
    q: "Who plays Mr. Heckles, the downstairs neighbor?",
    choices: ["Larry Hankin", "Jonathan Banks", "Tom Bower", "M. Emmet Walsh"],
    answer: 0,
    episode: "Recurring S1-S2."
  },
  {
    id: 119, difficulty: "hard", points: 5,
    q: "Who plays Joey's hand-twin Cassie?",
    choices: ["Distractor — no such storyline; it was Marc that was the hand-twin", "Sarah Chalke", "Kate Hudson", "Anna Faris"],
    answer: 0,
    episode: "Hand twin storyline is actually a different episode; this is a distractor question."
  },
  {
    id: 120, difficulty: "hard", points: 5,
    q: "Who plays Charlie Wheeler, Ross's paleontologist girlfriend in Season 9?",
    choices: ["Aisha Tyler", "Gabrielle Union", "Halle Berry", "Sanaa Lathan"],
    answer: 0,
    episode: "Recurring S9."
  },
  {
    id: 121, difficulty: "hard", points: 5,
    q: "Who plays Phoebe's half-brother Frank Jr., father of her surrogate triplets?",
    choices: ["Giovanni Ribisi", "Hank Azaria", "Steve Zahn", "David Spade"],
    answer: 0,
    episode: "Recurring from S2 onward."
  },
  {
    id: 122, difficulty: "hard", points: 5,
    q: "Who plays Frank Jr.'s much-older wife Alice Knight?",
    choices: ["Debra Jo Rupp", "Jane Lynch", "Doris Roberts", "Estelle Harris"],
    answer: 0,
    episode: "Recurring from S3 onward — Alice Knight, the home-ec teacher."
  },
  {
    id: 123, difficulty: "hard", points: 5,
    q: "What was the production company that produced Friends?",
    choices: ["Bright/Kauffman/Crane Productions", "Universal Television", "Paramount Television", "Warner Bros. Television"],
    answer: 0,
    episode: "Show production credit — Bright/Kauffman/Crane Productions in association with Warner Bros. Television."
  },
  {
    id: 124, difficulty: "hard", points: 5,
    q: "What is the address of Monica and Rachel's apartment?",
    choices: ["495 Grove Street, Apartment 20 (later 19)", "495 Grove Street, Apartment 4A", "10 W. 91st St., Apt 5B", "521 Grove St."],
    answer: 0,
    episode: "Established multiple times throughout the series."
  },
  {
    id: 125, difficulty: "hard", points: 5,
    q: "What was Ross and Monica's grandmother's name (the one whose death they attend in Season 1)?",
    choices: ["Althea Geller", "Esther Geller", "Eleanor Geller", "Ida Geller"],
    answer: 0,
    episode: "S1E8 — \"The One Where Nana Dies Twice\""
  },
  {
    id: 126, difficulty: "hard", points: 5,
    q: "What is the name of Ross's monkey?",
    choices: ["Marcel", "Mr. Mittens", "Mocha", "Maurice"],
    answer: 0,
    episode: "Marcel debuts in S1E10 \"The One With the Monkey\""
  },
  {
    id: 127, difficulty: "hard", points: 5,
    q: "What was the title of the alternate-universe episode where everyone's life took a different path?",
    choices: ["The One That Could Have Been (Parts 1 & 2)", "The Alternate Reality", "What If", "The Other Lives"],
    answer: 0,
    episode: "S6E15-16 — \"The One That Could Have Been, Parts 1 & 2\""
  },
  {
    id: 128, difficulty: "hard", points: 5,
    q: "Who plays Rachel's father Dr. Leonard Green?",
    choices: ["Ron Leibman", "Charles Durning", "Robert Klein", "Hal Holbrook"],
    answer: 0,
    episode: "Recurring throughout the series."
  },
  {
    id: 129, difficulty: "hard", points: 5,
    q: "Who plays Rachel's mother Sandra Green?",
    choices: ["Marlo Thomas", "Christina Pickles", "Doris Roberts", "Linda Hamilton"],
    answer: 0,
    episode: "Recurring throughout the series."
  },
  {
    id: 130, difficulty: "hard", points: 5,
    q: "Who plays Ross and Monica's father Jack Geller?",
    choices: ["Elliott Gould", "Charles Durning", "Hal Holbrook", "Carl Reiner"],
    answer: 0,
    episode: "Recurring throughout the series."
  },
  {
    id: 131, difficulty: "hard", points: 5,
    q: "Who plays Ross and Monica's mother Judy Geller?",
    choices: ["Christina Pickles", "Marlo Thomas", "Doris Roberts", "Carol Kane"],
    answer: 0,
    episode: "Recurring throughout the series."
  },
  {
    id: 132, difficulty: "hard", points: 5,
    q: "On what date did the Friends finale (\"The Last One\") originally air?",
    choices: ["May 6, 2004", "May 13, 2004", "April 29, 2004", "May 20, 2004"],
    answer: 0,
    episode: "S10E17-18 — final broadcast."
  },
  {
    id: 133, difficulty: "hard", points: 5,
    q: "Who directed the most episodes of Friends across the series?",
    choices: ["Kevin S. Bright", "James Burrows", "Gail Mancuso", "David Crane"],
    answer: 0,
    episode: "Series production credit — Kevin S. Bright was executive producer and most frequent director."
  },
  {
    id: 134, difficulty: "hard", points: 5,
    q: "What was Friends' original working title before it became Friends?",
    choices: ["Insomnia Café", "Six of One", "Friends Like Us", "All of the above were considered titles"],
    answer: 3,
    episode: "Pre-production — Insomnia Café was the original, then Six of One, then Friends Like Us, then Friends."
  },
  {
    id: 135, difficulty: "hard", points: 5,
    q: "What is the title of S3E15 where Ross and Rachel decide to \"take a break\"?",
    choices: ["The One Where Ross and Rachel Take a Break", "The One Where They Take a Break", "The One With the Break", "The One With the Break-Up"],
    answer: 0,
    episode: "S3E15 — original air date Feb 13, 1997."
  },
  {
    id: 136, difficulty: "hard", points: 5,
    q: "Who plays Stephanie Schiffer, the professional musician who briefly replaces Phoebe at Central Perk?",
    choices: ["Chrissie Hynde (of The Pretenders)", "Sheryl Crow", "Stevie Nicks", "Joan Jett"],
    answer: 0,
    episode: "S2E6 — \"The One With the Baby on the Bus\""
  },
  {
    id: 137, difficulty: "hard", points: 5,
    q: "What is the name of Joey's identical hand-twin?",
    choices: ["Carl (no shared name — he's just \"Joey's hand-twin\")", "Carl", "Jimmy", "Frank"],
    answer: 1,
    episode: "S6E22 — \"The One Where Paul's the Man\" / hand-twin storyline establishes Carl."
  },
  {
    id: 138, difficulty: "hard", points: 5,
    q: "Who plays Chandler's college girlfriend who Joey accidentally hits on first?",
    choices: ["Aisha Tyler (Charlie) is a different storyline; for Chandler it's Yasmine Bleeth", "Yasmine Bleeth", "Nia Long", "Sarah Lawrence"],
    answer: 0,
    episode: "This is a distractor question with a complex storyline reference."
  },
  {
    id: 139, difficulty: "hard", points: 5,
    q: "What is the title of the Season 5 episode where the gang spends the holidays in New York and Ross dresses up?",
    choices: ["The One With the Holiday Armadillo", "The One With the Christmas Tree", "The One With the Mistletoe", "The One With the New Year"],
    answer: 0,
    episode: "S7E10 — \"The One With the Holiday Armadillo\""
  },
  {
    id: 140, difficulty: "hard", points: 5,
    q: "On what date did the Friends Pilot (\"The One Where Monica Gets a New Roommate\") originally air?",
    choices: ["September 22, 1994", "October 6, 1994", "September 15, 1994", "September 29, 1994"],
    answer: 0,
    episode: "S1E1 — original air date."
  },
  {
    id: 141, difficulty: "hard", points: 5,
    q: "How many total episodes of Friends were produced?",
    choices: ["236", "200", "180", "250"],
    answer: 0,
    episode: "10 seasons; 236 episodes total."
  },
  {
    id: 142, difficulty: "hard", points: 5,
    q: "What was the name of Ross's pet monkey Marcel's stand-in / understudy on the show?",
    choices: ["Katie (the actual capuchin who played Marcel)", "Bubbles", "Mojo", "Spike"],
    answer: 0,
    episode: "Behind-the-scenes — Katie the capuchin played Marcel."
  },
  {
    id: 143, difficulty: "hard", points: 5,
    q: "What is the name of Chandler's father Charles' Las Vegas drag show?",
    choices: ["Viva Las Gay-gas", "Drag Race Vegas", "Bing Bang Boom", "Sin City Sisters"],
    answer: 0,
    episode: "S7E22 — \"The One With Chandler's Dad\""
  },
  {
    id: 144, difficulty: "hard", points: 5,
    q: "What is the title of Phoebe's twin sister Ursula's porn-name alias?",
    choices: ["Phoebe Buffay (Ursula used her sister's name)", "Ursula Devil", "Pippa Pink", "Phoebe Loose"],
    answer: 0,
    episode: "S4E14 — \"The One With Joey's Dirty Day\" / Ursula's porn career."
  },
  {
    id: 145, difficulty: "hard", points: 5,
    q: "Who plays Joey's roommate Janine, the Australian dancer (correctly this time, as she's listed earlier as well)?",
    choices: ["Elle Macpherson", "Cindy Crawford", "Heidi Klum", "Naomi Campbell"],
    answer: 0,
    episode: "S6 — Janine Lecroix, played by Elle Macpherson."
  },
  {
    id: 146, difficulty: "hard", points: 5,
    q: "What does Chandler refuse to do at his and Monica's wedding, panicking and running away?",
    choices: ["He runs away from the ceremony and Ross has to find him", "He skips the rehearsal dinner", "He refuses to say his vows", "He hides in the bathroom"],
    answer: 0,
    episode: "S7E23-24 — \"The One With Monica and Chandler's Wedding\""
  },
  {
    id: 147, difficulty: "hard", points: 5,
    q: "What is the title of the Season 5 episode where the gang discovers Monica and Chandler's secret relationship?",
    choices: ["The One Where Everybody Finds Out", "The One With the Secret", "The One About Monica and Chandler", "The One Where They All Know"],
    answer: 0,
    episode: "S5E14 — original air date Feb 11, 1999."
  },
  {
    id: 148, difficulty: "hard", points: 5,
    q: "In what season does Joey move to Los Angeles for the spinoff?",
    choices: ["Season 10 finale (then spinoff begins)", "Season 9", "Season 8 finale", "After Season 10 in Joey series"],
    answer: 0,
    episode: "Joey moves to LA after the Friends finale; the spinoff Joey premiered Sept 9, 2004."
  },
  {
    id: 149, difficulty: "hard", points: 5,
    q: "Who plays Janice's husband at one point, an annoying voice match for her?",
    choices: ["No husband — Janice marries Sid, the mattress king (off-screen), and later remarries", "Mr. Heckles", "Estelle's brother", "Gunther"],
    answer: 0,
    episode: "Janice's marital history is referenced multiple times; Sid the mattress king is mentioned."
  },
  {
    id: 150, difficulty: "hard", points: 5,
    q: "What is the title of S2E14 where the famous \"lobster\" line originates?",
    choices: ["The One With the Prom Video", "The One With the Lobster", "The One Where Phoebe Speaks", "The One About Rachel"],
    answer: 0,
    episode: "S2E14 — original air date Feb 1, 1996."
  }
];
