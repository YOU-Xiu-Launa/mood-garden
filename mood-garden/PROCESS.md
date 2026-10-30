# Process Log — Mood Garden

> Complete this log with your real observations before submission. Do not invent a user-test result.

## 1. Starting idea

I wanted to create a small interactive experience that turns a personal mood check-in into a garden. Rather than showing a score or requiring a long journal entry, the project lets users adjust feelings and grow a flower that represents the feeling that is most present.

## 2. Intended user and interaction

The intended user is a student or young adult who wants a brief, low-pressure moment of reflection. The user adjusts mood sliders, grows a flower, selects it, and tends to it with Water, Feed, or Sunlight. The garden responds with growth, sway, glow, particles, and short messages. Users can open a reflection prompt or reset the scene.

## 3. Iteration decisions

- I reorganised the controls into clearer stages: “Check in with yourself” and “Tend to your garden”.
- I used a two-column mood slider grid to make the control panel easier to scan.
- I made the growth sequence more legible: a small root glow appears, the stem grows from the soil, leaves open, and the flower head blooms afterwards.
- I added gentle, continuous plant sway with different timing for each plant. Hovering, focusing, or selecting a plant makes it more noticeable.
- I made flower selection more explicit and added short in-scene messages after care actions.
- I added reduced-motion styling and responsive layouts.

## 4. User trial

**Tester:** [Use a first name, role, or anonymous description only with permission.]

**Date / context:** [When and where you tested it.]

**Task:** [Ask the tester to adjust a mood, grow and select a flower, use a care action, and reset the garden before you explain the interface.]

**Observation:** [Record what they did, where they hesitated, what they understood, and any words they used.]

**Change based on observation:** [Describe one specific improvement made after the test.]

**If no change was made:** [Explain what the observation showed and why the existing design was kept.]

## 5. AI tools and decisions

ChatGPT was used to help draft and refine HTML, CSS, JavaScript, and documentation. I reviewed the suggestions and should record my actual choices here.

- **Suggestion I kept:** [What was suggested and why it helped.]
- **Suggestion I changed or rejected:** [What I changed or rejected and why.]

## 6. Limitations and next steps

- Mood values are reflective prompts, not a mental-health assessment.
- Flowers are not saved after refreshing the page.
- Further refinements should be based on an actual user trial, particularly whether users understand how to select a flower and what each care action does.

## 7. Before submission

- [ ] Ask at least one other person to try the experience before explaining it.
- [ ] Record actual observations and a design decision above.
- [ ] Add a screenshot to the README.
- [ ] Test the public repository and live page, if published.
- [ ] Confirm all assets are included and no secrets or personal data are committed.
- [ ] Keep a visible commit history showing development.


## v6 visual refinement
- Replaced the evenly spaced flower-row approach with an irregular, overlapping meadow composition. Flower scale and depth vary, and flowers gather in loose clusters.
- The number of each flower type follows the relative proportions of the five mood sliders.
- Reversed the SVG stem paths so the stroke animation begins at the soil and travels upward. Leaves unfurl after the stem begins; blooms open last.
- Restored the original night-garden atmosphere and kept Grow as the full-width primary action.
- No new user-test results are claimed; add observations after a real person tries this version.
