# Process Log — Mood Garden

## 1. Project Overview

Mood Garden is an interactive digital experience that transforms a personal mood check-in into a visual garden. The project explores how interaction and generative visual elements can provide an alternative way for people to recognise and express their emotions.

Instead of presenting emotions as scores or requiring users to write lengthy reflections, Mood Garden allows users to adjust five mood sliders — Joy, Calm, Anxiety, Sadness, and Hope — and translate these feelings into a growing garden.

The central idea is that emotions are not fixed or isolated. They can coexist, change over time, and be given space without being judged.

## 2. Target Users and Design Goals

The intended audience is university students and young adults who may want a brief moment to pause and reflect during their daily routines.

The main design goals are:

**Emotional expression:** Provide a simple way to express different feelings through interactive sliders.
**Visual representation:** Translate abstract emotional states into flowers with different colours and visual characteristics.
**Gentle interaction:** Encourage users to engage with the garden through growing, watering, feeding, and sunlight actions.
**Personal reflection:** Create a quiet digital space that encourages users to acknowledge their feelings without evaluating them as positive or negative.

The experience is designed to feel calm and approachable rather than like a productivity tool or a mental-health assessment.

## 3. Interaction Design

The experience follows a simple interaction sequence:

1. Users begin by adjusting five sliders to represent their current emotional state.
2. They select **Grow a flower** to generate a garden based on the relative proportions of their selected moods.
3. Each mood is represented by a different flower colour and form.
4. Users can select individual flowers and interact with them through Water, Feed, and Sunlight.
5. The garden responds through visual animations, glowing effects, particles, and short messages.
6. Users can open a reflection prompt or reset the garden to begin again.

This structure connects emotional input with visual output and gives users an opportunity to explore their feelings through interaction.

## 4. Design Development and Iteration

Several design decisions were made during development to improve the visual experience and interaction flow.

### 4.1 Interface Structure

The interface was organised into two main sections: **Check in with yourself** and **Tend to your garden**. This creates a clearer distinction between expressing emotions and caring for the generated flowers.

A two-column slider layout was used to make the five emotional controls easier to scan. The Grow action was given greater visual prominence because it is the main step connecting the mood input to the garden.

### 4.2 Visual Direction

The visual direction developed around the atmosphere of a night garden. A darker blue-green background, layered landscape elements, soft lighting, and fireflies were used to create a sense of depth and quietness.

Rather than arranging flowers in a regular grid, the final composition uses an irregular meadow-like layout. Flower sizes, positions, and depths vary, allowing the garden to feel more organic.

### 4.3 Flower Generation and Animation

Each emotional category has its own flower colour and visual characteristics. The number of flowers generated reflects the relative proportions of the five mood sliders.

The growth animation was refined to make the process easier to follow. The stem grows upward from the soil first, followed by the opening of leaves and the blooming of the flower head.

Different plants also have slightly different sway speeds and timing. This creates continuous, gentle movement without making the garden feel overly mechanical.

### 4.4 Interaction Feedback

Flower selection was made more explicit through visual highlighting and short messages. Water, Feed, and Sunlight produce different particle effects and feedback messages.

These interactions are intended to make the garden feel responsive while keeping the interface simple and avoiding unnecessary complexity.

### 4.5 Accessibility and Responsiveness

Responsive layouts were added for smaller screens. A reduced-motion preference was also included to limit animation for users who prefer less movement.

## 5. User Testing and Evaluation

This section should be completed after an actual user has tried the experience.

**Tester:** Add a first name or anonymous description, with permission.

**Date and context:** Add the actual date and testing context.

**Task:** Ask the tester to adjust the mood sliders, grow a garden, select a flower, try one or more care actions, and reset the garden without explaining the interface beforehand.

**Observation:** Record what the tester did, where they hesitated, what they understood, and any comments they made.

**Design decision:** Describe a specific change made in response to the observation, or explain why the existing design was retained.

The purpose of this evaluation is to understand whether the interaction flow is clear and whether the visual feedback communicates the intended experience.

## 6. Use of AI Tools

ChatGPT was used as an AI-assisted development tool during the project. It helped with drafting and refining HTML, CSS, and JavaScript, as well as organising the project documentation.

AI suggestions were treated as references rather than final decisions. The project author reviewed the proposed code and made design decisions about the visual direction, interaction structure, flower composition, animations, and overall experience.

AI assistance supported the development process, but the final concept, design direction, and project decisions remain the responsibility of the project author.

## 7. Limitations and Future Development

There are several limitations in the current version:

Mood slider values are intended for personal reflection and should not be interpreted as psychological or clinical measurements.
The generated garden exists in the current browser session and is not saved after refreshing the page.
Flowers are created using 2D SVG illustrations rather than 3D models.
The current experience uses predefined visual categories and interaction responses.

Future development could explore saving previous gardens, allowing users to revisit changes in their emotional states, and introducing more varied flower forms and environmental responses.

Further user testing would also help evaluate the clarity of the controls, the meaning of the care actions, and the emotional experience of using the garden.

## 8. Final Reflection

Mood Garden began with the idea of turning an abstract emotional check-in into something visual and interactive. During development, the focus gradually shifted from simply generating flowers to creating a small environment that users could return to and care for.

One important design consideration was avoiding the idea that some emotions should be removed or corrected. By allowing different flowers to grow together, the garden suggests that joy, calm, anxiety, sadness, and hope can all exist in the same emotional landscape.

The project therefore uses a garden as a metaphor for emotional awareness: feelings need space, attention, and time, rather than immediate judgement.

## 9. Submission Checklist

Test the experience with at least one other person.
1. Record genuine observations and any design changes.
2. Add a screenshot of the final website to the README.
3. Check the website on the intended browser and screen size.
4. Test the published GitHub Pages version.
5. Check that all project files are included in the repository.
6. Review the commit history before submission.
