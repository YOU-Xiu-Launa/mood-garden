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

Mood Garden went through **nine iterations** during its development. Each version involved reviewing the existing design, identifying weaknesses, and refining the visual presentation or interaction experience. The process was not simply about adding more features, but about gradually finding a balance between visual atmosphere, usability, and meaningful interaction.

The development can be broadly divided into three stages:

### 4.1 Nine Iterations: From Initial Concept to Final Experience

**Iterations 1–3: Establishing the Foundation**

The first three iterations focused on turning the initial concept into a functional prototype. The basic interface structure, five emotional categories, mood sliders, and flower-generation mechanism were established.

The main challenge at this stage was translating abstract emotional states into a visual system that users could understand and interact with. The initial versions helped establish the core relationship between emotional input and the garden's visual output.

**Iterations 4–6: Exploring Visual Identity and Interaction**

The middle iterations focused on developing the visual identity and improving the interaction experience. Adjustments were made to the interface layout, colour palette, flower appearance, and feedback mechanisms.

The design gradually moved away from a conventional dashboard-like interface towards a more atmospheric garden environment. The care actions also became an important part of the experience, allowing users to interact with the flowers instead of simply viewing the generated garden.

**Iterations 7–9: Refining the Details**

The final three iterations focused on improving the overall quality and coherence of the experience.

Particular attention was given to creating a darker and more immersive garden atmosphere, making the flower arrangement feel less repetitive, and refining the movement of individual flowers. The Grow action was also given greater visual prominence to establish a clearer interaction hierarchy.

The relationship between the care actions and the garden was further considered, with Water, Feed, and Sunlight designed as supporting interactions within the overall garden experience.

Across these nine iterations, the project gradually developed from a basic emotional visualisation tool into a more complete interactive environment.

### 4.2 Interface Structure

The interface was organised into two main sections: **Check in with yourself** and **Tend to your garden**. This creates a clear distinction between expressing emotions and caring for the generated flowers.

A two-column slider layout was used to make the five emotional controls easier to scan. The Grow action was given greater visual prominence because it is the main step connecting mood input to the garden.

The interaction flow was designed to be straightforward:

1. Users adjust five sliders to represent their current emotional state.
2. They select Grow to generate a garden based on their mood proportions.
3. They select individual flowers to explore and interact with them.
4. They use Water, Feed, and Sunlight to care for the flowers.
5. They can open a reflection prompt or reset the garden to begin again.

### 4.3 Visual Direction

The visual direction developed around the atmosphere of a night garden. A darker blue-green background, layered landscape elements, soft lighting, and fireflies were used to create a sense of depth and quietness.

Rather than arranging flowers in a regular grid, the final composition uses an irregular meadow-like layout. Flower sizes, positions, and depths vary, allowing the garden to feel more organic.

The intention was to move beyond a typical interface design and create an environment that users could feel immersed in, even through a relatively simple web-based experience.

### 4.4 Flower Generation and Animation

Each emotional category has its own flower colour and visual characteristics. The number of flowers generated reflects the relative proportions of the five mood sliders.

The growth animation was refined to make the process easier to follow. The stem grows upward from the soil first, followed by the opening of leaves and the blooming of the flower head.

Different plants also have slightly different sway speeds and timing. This creates continuous, gentle movement without making the garden feel overly mechanical.

An important consideration was making the garden feel alive without introducing unnecessary visual distraction. The final direction therefore prioritises subtle, independent movement rather than excessive reactions to mouse hovering.

### 4.5 Interaction Feedback

Flower selection was made more explicit through visual highlighting and short messages. Water, Feed, and Sunlight produce different particle effects and feedback messages.

The Grow action serves as the primary interaction, while the three care actions provide additional ways for users to engage with the garden.

These interactions are intended to make the garden feel responsive while keeping the interface simple and avoiding unnecessary complexity.

### 4.6 Accessibility and Responsiveness

Responsive layouts were added for smaller screens so that the interface can adapt to different screen sizes.

A reduced-motion preference was also included to limit animation for users who prefer less movement. Interactive elements were designed with visible focus states to make keyboard interaction easier.

### 4.7 Reflection on the Iteration Process

Working through nine iterations helped me understand that a working prototype is not necessarily a well-designed experience. Some visual effects may look attractive individually but become distracting when combined. Similarly, adding more interactions does not automatically make an experience more meaningful.

One of the main challenges was deciding what to simplify and what to emphasise. For example, the garden needed enough visual detail to feel immersive, but too many decorative elements could compete with the flowers themselves. The interaction design also needed a clear hierarchy so that users could understand the main action without feeling overwhelmed by multiple controls.

The iterative process encouraged me to evaluate the project as a complete experience rather than focusing on individual features in isolation. Each revision helped clarify the relationship between emotional expression, visual generation, and interaction.

Ultimately, the nine iterations allowed Mood Garden to develop from an initial concept into a more coherent digital experience, with a stronger visual identity and a clearer interaction structure.

## 5. User Testing and Evaluation

This section should be completed after an actual user has tried the experience.

**Tester:** Add a first name or anonymous description, with permission.

**Date and context:** Add the actual date and testing context.

**Task:** Ask the tester to adjust the mood sliders, grow a garden, select a flower, try one or more care actions, and reset the garden without explaining the interface beforehand.

**Observation:** Record what the tester did, where they hesitated, what they understood, and any comments they made.

**Design decision:** Describe a specific change made in response to the observation, or explain why the existing design was retained.

The purpose of this evaluation is to understand whether the interaction flow is clear and whether the visual feedback communicates the intended experience.

## 6. Use of AI Tools

### 6.1 AI Tool Used

ChatGPT was used as an AI-assisted tool throughout the development of Mood Garden. It supported the development process, particularly in code drafting, debugging, interaction implementation, and documentation.

### 6.2 How AI Was Used

During development, ChatGPT assisted with:

**Code Development:** Providing suggestions and draft code for HTML structure, CSS styling, and JavaScript interactions.
**Debugging:** Helping identify potential coding issues and suggesting ways to improve functionality.
**Interaction Design:** Supporting the implementation of mood sliders, dynamic flower generation, flower selection, and garden care interactions.
**Visual Refinement:** Offering suggestions for layout, animation, and visual presentation.
**Documentation:** Assisting with the organisation and writing of project documentation.

### 6.3 Human Input and Decision-making

AI-generated suggestions were treated as references rather than final decisions. The project direction, emotional concept, visual preferences, feature selection, and final design decisions were determined and reviewed by the project creator.

Generated code and suggestions were adjusted according to the intended user experience. Not every suggestion was adopted, and the final implementation was reviewed through repeated development and refinement.

### 6.4 Critical Reflection

Using ChatGPT helped make the development process more efficient, especially when working with unfamiliar code or resolving technical problems. However, AI-generated code did not always fully match the intended visual style or interaction experience. Some suggestions required further adjustment and testing.

This process highlighted the importance of using AI as a supporting tool rather than relying on it to make design decisions. The final quality of the project depended on evaluating, modifying, and integrating AI-assisted outputs according to the original design goals.
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
