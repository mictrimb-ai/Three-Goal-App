# Three-Goal App Roadmap

A small web app that shows one quote on each page load and lets a person set and complete exactly three goals for the day.

Status: ✅ complete · 📍 next · ⬜ planned. This is a working plan: update it when testing or a better product decision changes the route.

## Milestones

### 1. Repository and page foundation ✅

- Keep the app in Git and review focused changes before committing.
- Build semantic HTML with a quote, three labeled goal textboxes, and three labeled completion checkboxes.

### 2. Responsive interface ✅

- Keep the page readable at wide and narrow widths.
- Keep each goal label with its textbox, and each checkbox with its label.
- Check label clicks, keyboard focus, and horizontal overflow.

These checks remain relevant when later features change the page.

### 3. One quote per page load ✅

- Store verified quote–author pairs together.
- Select one pair at random on each load; repeats are allowed.
- Show its text and author together; keep a useful HTML fallback.

Checkpoint: [`fd31510`](https://github.com/mictrimb-ai/Three-Goal-App/commit/fd31510b22f7aa6204991da47a758e3abdd76103).

### 4. Local development setup ✅

- Serve the existing files from localhost and verify that HTML, CSS, and JavaScript still load.
- Use this setup to test browser storage in milestone 6.

### 5. Three-goal interaction 📍

- Read the values and checked states of all three goal rows in JavaScript.
- Respond to edits and completion changes.
- Decide what blank goals and edits to completed goals should mean before enforcing a rule.

### 6. Save and restore goals ⬜

- Save goal text and completion states in browser storage.
- Restore them on reload without breaking random quote selection.
- Handle missing or unusable stored data without losing access to the page.

**Learning checkpoint:** after this milestone, try a small independent project using the same HTML, CSS, JavaScript, and Git skills with less guidance. Use what that exercise reveals to adjust how we finish this app.

### 7. Daily behavior ⬜

- Decide what should happen to yesterday's goals when the local date changes.
- Implement and test that choice, including a simulated day change.
- Preserve exactly three goal slots.

### 8. First release ⬜

- Check keyboard use, narrow screens, missing JavaScript, and the main goal flows.
- Write a README with setup instructions and known limitations.
- Deploy to static hosting if desired, then verify the hosted page.

## How we keep this useful

- At each completed checkpoint, update the status and name one next action.
- New ideas are welcome; record why they serve the app and where they fit before adding them.
- Add accounts, a backend, a quote API, analytics, or a framework only when a demonstrated need calls for one.
