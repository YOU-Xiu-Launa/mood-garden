# Mood Garden 🌱

Mood Garden is a small interactive experience that turns a mood check-in into a living night garden. It is designed for students and anyone who wants a gentle, low-pressure moment to pause and reflect.

## Try it

1. Adjust Joy, Calm, Anxiety, Sadness, and Hope with the sliders.
2. Press **Grow a flower**. Watch the stem rise from the soil, then the leaves and petals unfold.
3. Hover over or click/tap a flower to select it.
4. Use **Water**, **Feed**, or **Sunlight** and watch the flower respond with particles, glow, movement, and a short message.
5. Choose **A thought to keep** for a reflection prompt, or **Reset garden** to start again.

Each mood has a different flower colour and silhouette. The garden also contains softly drifting fireflies, and plants sway gently even when you are not interacting.

## Run locally

No build tools or package installation are required. Download or clone the repository, then open `index.html` in a modern browser. Internet access is only needed for the optional Google Fonts; the experience itself runs locally.

## Files

- `index.html` — page structure and accessible controls
- `style.css` — responsive layout, garden atmosphere, and animations
- `script.js` — mood sliders, flower growth, care interactions, reflection dialog, and reset
- `PROCESS.md` — process notes and user-test record template

## Limitations

- Mood values are expressive prompts, not a clinical assessment.
- The garden is generated in the browser and is not saved after refresh.
- Flowers are 2D SVG illustrations rather than 3D models.
- The experience should be tested on the browser and screen size used for the final presentation.

## Screenshot / live demo

Add a screenshot of the final experience here. If you publish with GitHub Pages, add the live URL.

## Credits

- Concept, art direction, and final project decisions: project author.
- Google Fonts: DM Sans, DM Mono, and Playfair Display (optional web fonts).
- AI assistance: ChatGPT helped draft and refine code and documentation. The author should review, test, and revise the final work.


**v6 visual direction:** a layered, irregular meadow rather than a row/grid of flowers. Flower types are distributed by mood proportions; stems grow from the soil upward, then leaves unfurl and blooms open.
