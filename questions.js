// ============================================================
//  FRIENDS TRIVIA — QUESTION BANK
//  Scoring: Easy = 1 pt | Medium = 3 pts | Hard = 5 pts
//  Each question is tied to a specific episode for source verification.
// ============================================================

const QUESTIONS = [
  // ─────────── EASY (1 point) ───────────
  {
    id: 1, difficulty: "easy", points: 1,
    q: "What is the name of the coffee shop where the gang hangs out?",
    choices: ["Central Perk", "The Bean", "Java Joe's", "Cafe Reggio"],
    answer: 0,
    episode: "Recurring — established in S1E1 \"The Pilot.\""
  },
  {
    id: 2, difficulty: "easy", points: 1,
    q: "What is Joey's signature line for meeting women?",
    choices: ["Hey, baby.", "How you doin'?", "What's up?", "Lookin' good."],
    answer: 1,
    episode: "Recurring catchphrase, established and popularized in Seasons 4 and beyond."
  },
  {
    id: 3, difficulty: "easy", points: 1,
    q: "What is Phoebe's signature song that she performs at Central Perk?",
    choices: ["Smelly Cat", "Sticky Shoes", "Two of Them Kissed Last Night", "Crap Bag's Lullaby"],
    answer: 0,
    episode: "S2E6 — \"The One With the Baby on the Bus\" (first appearance); recurring afterward."
  },
  {
    id: 4, difficulty: "easy", points: 1,
    q: "What is the name of the Central Perk barista in love with Rachel?",
    choices: ["Gunther", "Gary", "Marcel", "Tag"],
    answer: 0,
    episode: "Recurring from Season 1 onward."
  },
  {
    id: 5, difficulty: "easy", points: 1,
    q: "What is Ross's profession?",
    choices: ["Anthropologist", "Paleontologist", "Archaeologist", "Geologist"],
    answer: 1,
    episode: "Established in S1E1 \"The Pilot\" and recurring throughout the series."
  },
  {
    id: 6, difficulty: "easy", points: 1,
    q: "Who shouts \"PIVOT! PIVOT! PIVOT!\" while moving a couch up a stairwell?",
    choices: ["Joey", "Chandler", "Ross", "Rachel"],
    answer: 2,
    episode: "S5E16 — \"The One With the Cop\""
  },
  {
    id: 7, difficulty: "easy", points: 1,
    q: "What is Janice's iconic three-word greeting?",
    choices: ["Hi, sweetie!", "OH. MY. GOD!", "Look at you!", "Chandler, my love!"],
    answer: 1,
    episode: "Recurring across all 10 seasons; popularized from S1E5 \"The One With the East German Laundry Detergent.\""
  },
  {
    id: 8, difficulty: "easy", points: 1,
    q: "What is Rachel running away from in the very first episode?",
    choices: ["Her family", "Her wedding to Barry", "Her parents' divorce", "Her job"],
    answer: 1,
    episode: "S1E1 — \"The Pilot\""
  },
  {
    id: 9, difficulty: "easy", points: 1,
    q: "Who lives across the hall from Monica and Rachel for most of the series?",
    choices: ["Ross and Phoebe", "Chandler and Joey", "Janice and Mr. Heckles", "Gunther and Marcel"],
    answer: 1,
    episode: "Established in S1E1 \"The Pilot\" — Apt. 19 (Chandler & Joey) across from Apt. 20 (Monica)."
  },
  {
    id: 10, difficulty: "easy", points: 1,
    q: "What pet does Ross briefly own in Season 1?",
    choices: ["A cat named Felix", "A monkey named Marcel", "A turtle named Toby", "An iguana named Iggy"],
    answer: 1,
    episode: "Introduced in S1E10 — \"The One With the Monkey\"; recurring through Season 1."
  },
  {
    id: 11, difficulty: "easy", points: 1,
    q: "On Joey's soap opera Days of Our Lives, what is the name of the doctor he plays?",
    choices: ["Dr. Drake Ramoray", "Dr. Stryker", "Dr. Frank Garner", "Dr. Lazlo"],
    answer: 0,
    episode: "First appearance S2E11 — \"The One With the Lesbian Wedding\"; recurring."
  },
  {
    id: 12, difficulty: "easy", points: 1,
    q: "What is the name of Ross's first wife?",
    choices: ["Emily", "Carol", "Julie", "Rachel"],
    answer: 1,
    episode: "Established in S1E1 \"The Pilot\"; recurring throughout."
  },
  {
    id: 13, difficulty: "easy", points: 1,
    q: "In what city does the show take place?",
    choices: ["Los Angeles", "Chicago", "New York City", "Boston"],
    answer: 2,
    episode: "Series-long setting — established from S1E1 \"The Pilot.\""
  },
  {
    id: 14, difficulty: "easy", points: 1,
    q: "What is the name of Phoebe's twin sister?",
    choices: ["Ursula", "Olivia", "Penelope", "Regina"],
    answer: 0,
    episode: "First appears in S1E17 \"The One With Two Parts, Part 1\" (Ursula Buffay, played by Lisa Kudrow)."
  },
  {
    id: 15, difficulty: "easy", points: 1,
    q: "What was Ross's famous defense after sleeping with the copy-shop girl?",
    choices: ["I was drunk.", "We were on a break!", "She came on to me.", "I thought we broke up."],
    answer: 1,
    episode: "S3E15 — \"The One Where Ross and Rachel Take a Break\"; line repeated across the series."
  },
  {
    id: 16, difficulty: "easy", points: 1,
    q: "Who marries Monica?",
    choices: ["Richard", "Pete", "Chandler", "Tom"],
    answer: 2,
    episode: "S7E23/24 — \"The One With Monica and Chandler's Wedding\""
  },
  {
    id: 17, difficulty: "easy", points: 1,
    q: "How does Ross's FIRST wedding to Emily famously go wrong?",
    choices: ["He's late", "He says \"I, Ross, take thee… Rachel\" at the altar", "Rachel objects", "Emily runs away"],
    answer: 1,
    episode: "S4E24 — \"The One With Ross's Wedding, Part 2\""
  },
  {
    id: 18, difficulty: "easy", points: 1,
    q: "What is the name of Ross and Rachel's daughter?",
    choices: ["Emma", "Ella", "Erica", "Olivia"],
    answer: 0,
    episode: "Born in S8E23 — \"The One Where Rachel Has a Baby.\""
  },
  {
    id: 19, difficulty: "easy", points: 1,
    q: "Who plays Ross Geller?",
    choices: ["Matt LeBlanc", "Matthew Perry", "David Schwimmer", "Tom Selleck"],
    answer: 2,
    episode: "Series-long casting fact."
  },
  {
    id: 20, difficulty: "easy", points: 1,
    q: "Who plays Monica Geller?",
    choices: ["Jennifer Aniston", "Courteney Cox", "Lisa Kudrow", "Téa Leoni"],
    answer: 1,
    episode: "Series-long casting fact."
  },

  // ─────────── MEDIUM (3 points) ───────────
  {
    id: 21, difficulty: "medium", points: 3,
    q: "What field does Chandler work in for most of the series — a job no one can ever explain?",
    choices: ["Data reconfiguration and statistical analysis", "Computer programming", "Accounting", "Marketing consulting"],
    answer: 0,
    episode: "Recurring across the series; the gang famously can't define it in S4E12 \"The One With the Embryos.\""
  },
  {
    id: 22, difficulty: "medium", points: 3,
    q: "In the lightning-round trivia game, what word does Rachel invent when guessing Chandler's job?",
    choices: ["Transponster", "Statistician", "Numberologist", "Officeworker"],
    answer: 0,
    episode: "S4E12 — \"The One With the Embryos\""
  },
  {
    id: 23, difficulty: "medium", points: 3,
    q: "What does Ross dress up as to teach Ben about Hanukkah?",
    choices: ["A dreidel", "The Holiday Armadillo", "A menorah", "Maccabee the Brave"],
    answer: 1,
    episode: "S7E10 — \"The One With the Holiday Armadillo\""
  },
  {
    id: 24, difficulty: "medium", points: 3,
    q: "What does Ross call his (notoriously bad) keyboard music style?",
    choices: ["The Sound", "Wordless Wonders", "Synthwave Ross", "Lasers"],
    answer: 0,
    episode: "S4E7 — \"The One Where Chandler Crosses the Line\""
  },
  {
    id: 25, difficulty: "medium", points: 3,
    q: "Where do Ross and Rachel accidentally get married?",
    choices: ["Atlantic City", "Las Vegas", "Niagara Falls", "Reno"],
    answer: 1,
    episode: "S5E23/24 — \"The One in Vegas, Part 2\""
  },
  {
    id: 26, difficulty: "medium", points: 3,
    q: "What was originally going to be the title of Phoebe's signature song?",
    choices: ["Smelly Dog", "Stinky Cat", "Cat from the Alley", "Hairy Tom"],
    answer: 0,
    episode: "Behind-the-scenes fact about S2E6 \"The One With the Baby on the Bus\"; the writer Betsy Borns based it on her own smelly dog."
  },
  {
    id: 27, difficulty: "medium", points: 3,
    q: "Who plays Monica's much-older boyfriend, Richard Burke, the ophthalmologist?",
    choices: ["Tom Selleck", "Gary Oldman", "Robert De Niro", "Bruce Willis"],
    answer: 0,
    episode: "First appearance S2E15 — \"The One Where Ross and Rachel… You Know.\""
  },
  {
    id: 28, difficulty: "medium", points: 3,
    q: "Who plays Janice — Chandler's nasally-voiced on-and-off girlfriend?",
    choices: ["Maggie Wheeler", "Lauren Tom", "Aisha Tyler", "Anita Barone"],
    answer: 0,
    episode: "Recurring across all 10 seasons."
  },
  {
    id: 29, difficulty: "medium", points: 3,
    q: "What does Joey famously refuse to do, even for the people he loves?",
    choices: ["Share food", "Lend money", "Help move furniture", "Watch his diet"],
    answer: 0,
    episode: "S10E9 — \"The One With the Birth Mother\" (\"Joey doesn't share food!\")"
  },
  {
    id: 30, difficulty: "medium", points: 3,
    q: "Whose family recipe does Phoebe spend an episode trying to recover, only to discover it's a famous brand?",
    choices: ["Nestlé Toll House chocolate chip cookies", "Pillsbury sugar cookies", "Oreo's", "Jell-O pudding"],
    answer: 0,
    episode: "S7E3 — \"The One With Phoebe's Cookies\""
  },
  {
    id: 31, difficulty: "medium", points: 3,
    q: "What is the name of the woman Ross marries in London?",
    choices: ["Emily", "Elizabeth", "Mona", "Julie"],
    answer: 0,
    episode: "S4E23/24 — \"The One With Ross's Wedding\""
  },
  {
    id: 32, difficulty: "medium", points: 3,
    q: "What is Chandler's middle name?",
    choices: ["Muriel", "Marlon", "Maurice", "Maximus"],
    answer: 0,
    episode: "Established as canon: Chandler Muriel Bing."
  },
  {
    id: 33, difficulty: "medium", points: 3,
    q: "Who lives in the apartment downstairs from Monica and Rachel and complains about noise (until his death)?",
    choices: ["Mr. Heckles", "Mr. Treeger", "Mr. Geller", "Ugly Naked Guy"],
    answer: 0,
    episode: "Introduced S1E14 \"The One With the Candy Hearts\"; dies in S2E3 \"The One Where Heckles Dies.\""
  },
  {
    id: 34, difficulty: "medium", points: 3,
    q: "Who plays Phoebe's husband, Mike Hannigan?",
    choices: ["Paul Rudd", "Hank Azaria", "Jon Favreau", "Bruce Willis"],
    answer: 0,
    episode: "Recurring from Season 9 onward."
  },
  {
    id: 35, difficulty: "medium", points: 3,
    q: "What does Ross try to whiten that goes catastrophically wrong before a date?",
    choices: ["His shoes", "His teeth", "His hair", "His shirt"],
    answer: 1,
    episode: "S6E8 — \"The One With Ross's Teeth\""
  },
  {
    id: 36, difficulty: "medium", points: 3,
    q: "How do the boys win Monica and Rachel's apartment in Season 4?",
    choices: ["By winning a trivia game about how well they know each other", "In a poker game", "By drawing names from a hat", "Through a coin flip"],
    answer: 0,
    episode: "S4E12 — \"The One With the Embryos\""
  },
  {
    id: 37, difficulty: "medium", points: 3,
    q: "Who does Phoebe carry as a surrogate, giving birth to triplets?",
    choices: ["Her brother Frank Jr. and his wife Alice", "Monica and Chandler", "Ross and Susan", "Rachel and Tag"],
    answer: 0,
    episode: "Pregnancy revealed S4E11 — \"The One With Phoebe's Uterus\"; triplets born S5E3 \"The One Hundredth.\""
  },
  {
    id: 38, difficulty: "medium", points: 3,
    q: "How many times is Ross divorced by the end of the series?",
    choices: ["Once", "Twice", "Three times", "Four times"],
    answer: 2,
    episode: "Carol (S1), Emily (S5), Rachel/Vegas (S6). Running gag throughout."
  },
  {
    id: 39, difficulty: "medium", points: 3,
    q: "Who is \"Ugly Naked Guy\"?",
    choices: ["A neighbor across the street the gang watches through the window", "Joey's understudy", "A regular at Central Perk", "Mr. Heckles' nickname"],
    answer: 0,
    episode: "Recurring throughout the series; his apartment is later rented by Ross in Season 5."
  },
  {
    id: 40, difficulty: "medium", points: 3,
    q: "Who pees on Monica's leg after she's stung by a jellyfish?",
    choices: ["Chandler", "Joey", "Ross", "Rachel"],
    answer: 0,
    episode: "S4E1 — \"The One With the Jellyfish\""
  },
  {
    id: 41, difficulty: "medium", points: 3,
    q: "Who puts a raw turkey on his head to make Monica laugh?",
    choices: ["Chandler", "Joey", "Ross", "Mr. Geller"],
    answer: 1,
    episode: "S5E8 — \"The One With All the Thanksgivings\""
  },
  {
    id: 42, difficulty: "medium", points: 3,
    q: "How many pages was Rachel's letter to Ross?",
    choices: ["18 pages, front and back", "10 pages", "25 pages", "8 pages"],
    answer: 0,
    episode: "S4E1 — \"The One With the Jellyfish\""
  },
  {
    id: 43, difficulty: "medium", points: 3,
    q: "What's the name of the Geller family Thanksgiving football game?",
    choices: ["The Geller Bowl", "The Turkey Toss", "The Family Cup", "The Geller-Greene Game"],
    answer: 0,
    episode: "S3E9 — \"The One With the Football\""
  },
  {
    id: 44, difficulty: "medium", points: 3,
    q: "What brand offers Rachel a dream job in Paris near the end of the series?",
    choices: ["Bloomingdale's", "Ralph Lauren", "Louis Vuitton", "Saks Fifth Avenue"],
    answer: 2,
    episode: "Final-season arc — culminates in S10E17/18 \"The Last One.\""
  },
  {
    id: 45, difficulty: "medium", points: 3,
    q: "What are the names of Phoebe's triplets?",
    choices: ["Frank Jr. Jr., Leslie, and Chandler", "Joey, Rachel, and Phoebe Jr.", "Frank, Alice, and Leslie", "Emma, Erica, and Jack"],
    answer: 0,
    episode: "S5E3 — \"The One Hundredth\""
  },

  // ─────────── HARD (5 points) ───────────
  {
    id: 46, difficulty: "hard", points: 5,
    q: "What is Joey's full legal name?",
    choices: ["Joey Tribbiani Jr.", "Joseph Francis Tribbiani Jr.", "Joey Anthony Tribbiani", "Joseph Michael Tribbiani"],
    answer: 1,
    episode: "Established and referenced multiple times across the series."
  },
  {
    id: 47, difficulty: "hard", points: 5,
    q: "What is Chandler's mother's name?",
    choices: ["Nora Tyler Bing", "Helen Bing", "Carla Bing", "Susan Bing"],
    answer: 0,
    episode: "First major appearance S1E11 — \"The One With Mrs. Bing\" (played by Morgan Fairchild)."
  },
  {
    id: 48, difficulty: "hard", points: 5,
    q: "Who plays Chandler's drag-queen father, Charles Bing / Helena Handbasket?",
    choices: ["Kathleen Turner", "Susan Sarandon", "Jessica Lange", "Glenn Close"],
    answer: 0,
    episode: "First appearance S7E22 — \"The One With Chandler's Dad.\""
  },
  {
    id: 49, difficulty: "hard", points: 5,
    q: "Where do Chandler and Monica first meet?",
    choices: ["At Central Perk", "At a Thanksgiving dinner during Chandler's freshman year (1987)", "At Ross and Carol's wedding", "At a college party"],
    answer: 1,
    episode: "S5E8 — \"The One With All the Thanksgivings\" (the flashbacks episode)."
  },
  {
    id: 50, difficulty: "hard", points: 5,
    q: "How does Chandler lose a toe in a Thanksgiving flashback?",
    choices: ["Monica accidentally drops a knife on his foot", "A turkey accident", "He drops a frozen turkey", "A fireworks mishap"],
    answer: 0,
    episode: "S5E8 — \"The One With All the Thanksgivings\""
  },
  {
    id: 51, difficulty: "hard", points: 5,
    q: "What is the name of Joey's detective character on the show \"Mac and C.H.E.E.S.E.\"?",
    choices: ["Mac Machiavelli", "Ken Adams", "Joey Stalin", "Drake Ramoray Jr."],
    answer: 0,
    episode: "S6E20 — \"The One With Mac and C.H.E.E.S.E.\""
  },
  {
    id: 52, difficulty: "hard", points: 5,
    q: "Who is Estelle Leonard?",
    choices: ["Joey's agent", "Phoebe's grandmother", "Ross's professor", "Chandler's coworker"],
    answer: 0,
    episode: "Recurring from Season 1 onward; played by June Gable. Dies off-screen in Season 10."
  },
  {
    id: 53, difficulty: "hard", points: 5,
    q: "What is the name of Joey's stuffed penguin?",
    choices: ["Hugsy", "Wuzzy", "Penn", "Mr. Pencil"],
    answer: 0,
    episode: "First appearance S4E10 — \"The One With the Girl from Poughkeepsie\"; recurring afterward."
  },
  {
    id: 54, difficulty: "hard", points: 5,
    q: "What is the title of the final episode of the series?",
    choices: ["The Last One", "The One Where They All End Up Together", "The Final One", "The Finale"],
    answer: 0,
    episode: "S10E17/18 — \"The Last One\" (aired May 6, 2004)."
  },
  {
    id: 55, difficulty: "hard", points: 5,
    q: "What's the final line of the series — Rachel's announcement to Ross?",
    choices: ["\"I got off the plane.\"", "\"We were on a break.\"", "\"I love you, Ross.\"", "\"Where's Emma?\""],
    answer: 0,
    episode: "S10E17/18 — \"The Last One\""
  },
  {
    id: 56, difficulty: "hard", points: 5,
    q: "Who co-created Friends with David Crane and Kevin S. Bright?",
    choices: ["Marta Kauffman", "Larry David", "James Burrows", "Greg Daniels"],
    answer: 0,
    episode: "Series-long creator credit."
  },
  {
    id: 57, difficulty: "hard", points: 5,
    q: "What name does Phoebe legally change her name to in Season 10?",
    choices: ["Princess Consuela Banana-Hammock", "Regina Phalange", "Phoebe Bing", "Princess Sparkle"],
    answer: 0,
    episode: "S10E14 — \"The One With Princess Consuela\""
  },
  {
    id: 58, difficulty: "hard", points: 5,
    q: "What name does Mike then jokingly choose for himself in retaliation?",
    choices: ["Crap Bag", "Phoebe Buffay", "Just Mike", "Mike Hannigan-Buffay"],
    answer: 0,
    episode: "S10E14 — \"The One With Princess Consuela\""
  },
  {
    id: 59, difficulty: "hard", points: 5,
    q: "How many sisters does Joey have?",
    choices: ["Three", "Five", "Seven", "Eight"],
    answer: 2,
    episode: "Established in S3E11 — \"The One Where Chandler Can't Remember Which Sister.\""
  },
  {
    id: 60, difficulty: "hard", points: 5,
    q: "What names do Monica and Chandler give the twins they adopt in the finale?",
    choices: ["Jack and Erica", "Emma and Ben", "Frank and Alice", "Ross and Rachel"],
    answer: 0,
    episode: "S10E17/18 — \"The Last One\""
  },
  {
    id: 61, difficulty: "hard", points: 5,
    q: "Which actress plays Rachel's younger sister Jill?",
    choices: ["Reese Witherspoon", "Christina Applegate", "Drew Barrymore", "Cameron Diaz"],
    episode: "S6E13 — \"The One With Rachel's Sister\"",
    answer: 0
  },
  {
    id: 62, difficulty: "hard", points: 5,
    q: "Which actress plays Rachel's OTHER sister, Amy?",
    choices: ["Christina Applegate", "Reese Witherspoon", "Sarah Jessica Parker", "Heather Locklear"],
    answer: 0,
    episode: "S9E8 — \"The One With Rachel's Other Sister\""
  },
  {
    id: 63, difficulty: "hard", points: 5,
    q: "Which actress plays Ross's second wife, Emily?",
    choices: ["Helen Baxendale", "Helena Bonham Carter", "Kate Beckinsale", "Minnie Driver"],
    answer: 0,
    episode: "Recurring S4 — first appearance S4E16 \"The One With the Fake Party.\""
  },
  {
    id: 64, difficulty: "hard", points: 5,
    q: "Who plays Joey's nemesis-turned-roommate Janine, the Australian dancer?",
    choices: ["Elle Macpherson", "Nicole Kidman", "Naomi Watts", "Toni Collette"],
    answer: 0,
    episode: "Recurring S6 — first appearance S6E4 \"The One Where Joey Loses His Insurance.\""
  },
  {
    id: 65, difficulty: "hard", points: 5,
    q: "What real-life A-list actor plays movie star Richard Crosby, Joey's drunken co-star in the wedding-finale arc?",
    choices: ["Gary Oldman", "Brad Pitt", "George Clooney", "Sean Penn"],
    answer: 0,
    episode: "S7E23/24 — \"The One With Monica and Chandler's Wedding\""
  }
];
