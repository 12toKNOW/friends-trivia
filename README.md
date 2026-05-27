# The Friends Trivia Challenge

A 65-question Friends trivia quiz with sourced episode citations for every answer. Built as a single-page HTML app — no build step, no dependencies — drop it on GitHub Pages and play.

## Files

- **`index.html`** — the full quiz app (HTML, CSS, and JS all in one file)
- **`questions.js`** — the question bank, sorted by difficulty with episode citations
- **`SOURCES.md`** — a readable source document listing every question, answer, and episode reference
- **`build-sources.js`** — Node script that regenerates `SOURCES.md` from `questions.js` (only needed if you edit questions)

## Scoring

| Difficulty | Points each | Count | Max |
|------------|-------------|-------|-----|
| Easy       | 1           | 20    | 20  |
| Medium     | 3           | 25    | 75  |
| Hard       | 5           | 20    | 100 |
| **Total**  |             | **65**| **195** |

## How to put this on GitHub Pages

1. **Create a new GitHub repo** (e.g. `friends-trivia`). Keep it public.
2. **Upload these four files** to the root of the repo (`index.html`, `questions.js`, `SOURCES.md`, `README.md`). You can drag-and-drop them into the GitHub web UI if you don't want to use git on the command line.
3. **Enable GitHub Pages**: go to **Settings → Pages**, set Source to **Deploy from a branch**, pick the `main` branch and the `/ (root)` folder, then click Save.
4. **Wait ~30 seconds**, then visit `https://<your-username>.github.io/friends-trivia/`. That's your live trivia site.

You can share that URL directly. No server, no database, no cost.

## Editing the questions

Open `questions.js` in any text editor. Each entry has this shape:

```js
{
  id: 1, difficulty: "easy", points: 1,
  q: "What is the name of the coffee shop where the gang hangs out?",
  choices: ["Central Perk", "The Bean", "Java Joe's", "Cafe Reggio"],
  answer: 0,                          // 0 = first choice (A), 3 = last (D)
  episode: "Recurring — established in S1E1 \"The Pilot.\""
}
```

After editing, regenerate the source document if you want it to stay in sync:

```bash
node build-sources.js
```

Then commit and push — GitHub Pages will redeploy automatically.

## A note on sources

Episode citations follow the standard Season×Episode format used by Wikipedia, IMDb, and the major Friends fan archives. Where a fact is established across the series (apartment layouts, recurring catchphrases, casting facts) rather than in a single episode, the source line says so. Where a recurring gag spans many episodes (Janice's catchphrase, "How you doin'?", Smelly Cat), the citation points to the first major appearance — the episode that established the joke.

If you spot an error, just edit `questions.js` and regenerate `SOURCES.md`.

---

*No affiliation with Friends, NBC, or Warner Bros. Trivia only — all character names and episode references belong to their respective owners.*
