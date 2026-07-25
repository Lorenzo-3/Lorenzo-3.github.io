# English Site Humanization Worksheet

This is the single editing surface for the English side of the site.

Edit this file by hand. When you are finished, ask Codex to apply it to the
site. Codex will update the relevant English HTML/CSS/JS files, then the final
English copy can be translated into Italian.

## How To Edit

For every field:

- Leave `[KEEP]` unchanged to keep the current site copy or behavior.
- Replace `[KEEP]` with your new text to change it.
- Write `[REMOVE]` to remove that item.
- Write `[ADD: your text]` in optional fields to add something.
- Informal notes are welcome. They do not need to be polished; Codex can turn
  them into site copy while preserving your voice.

Do not edit the `ID` values. They identify where each decision belongs.

---

# 0. Overall Direction

These answers set the voice used across every page.

## ID: GLOBAL.VOICE

- Personality in three to five words: `[KEEP: warm, curious, precise, slightly playful]`
- Formality from 1 (casual) to 5 (formal): `[KEEP: 3]`
- Playfulness from 1 (none) to 5 (very playful): `[KEEP: 3]`
- Technical depth from 1 (general audience) to 5 (specialist): `[KEEP: 3]`
- Use first-person singular ("I"): `[KEEP: yes]`
- Use occasional emoticons such as `:3`: `[KEEP: only in rare playful details]`
- Words/phrases that sound like me:
  - `[ADD: :3]`
  - `[ADD: ]`
  - `[ADD: ]`
- Words/phrases I dislike:
  - `[ADD: ]`
  - `[ADD: ]`
  - `[ADD: ]`
- Sites/people whose writing tone I like:
  - `[ADD: ]`

## ID: GLOBAL.AUDIENCE

- Primary visitor: `[KEEP: researchers, technical recruiters, students, and potential collaborators]`
- What I want them to understand in ten seconds: `[ADD: that I am Specialized in my field but also have a soul and passions]`
- What I want them to feel: `[ADD: intrigued]`
- Main action I want them to take: `[KEEP: explore a project or contact me]`

## ID: GLOBAL.PERSONAL_FACTS

Only add things you are comfortable publishing.

- Current city/region: `[KEEP: Italy, Rome]`
- Current studies/status: `[KEEP: Computer Science MSc student at Sapienza University]`
- Current interests outside computer science: `[ADD: Statistics, Psychology, Physics, Biology, Philosophy]`
- Hobbies worth mentioning: `[ADD: writing music, classical guitar, 3D modeling, drawing, photography, tv series and movies, videogames]`
- A small personal detail visitors may remember: `[ADD: i like silly things]`
- A belief or principle that guides how I work: `[ADD: ]`
- Something I am currently learning badly/slowly/happily: `[ADD: ]`

## ID: GLOBAL.VISUAL_PERSONALITY

- Profile image:
  - Current state: `/assets/profile.jpg` is referenced but missing.
  - Decision: `[KEEP: add a real casual portrait later]`
  - Desired alt text: `[ADD: ]`
- Keep the animated graph background: `[KEEP: yes]`
- Keep the current warm yellow/teal/maroon palette: `[KEEP: yes]`
- Cards should feel:
  `[KEEP: clean, but selected sections may become less résumé-like]`
- Add a handwritten/signature-like element: `[ADD: no / describe it]`
- Add small doodles or sketches: `[ADD: yes, small happy dog doodle]`
- Add a tiny LM-logo easter egg: `[ADD: yes, small ":3" speech bubble]`
- Add a custom 404 page: `[ADD: no / describe its tone]`
- Other visual idea: `[ADD: ]`

---

# 1. Shared Site Elements

These appear on many or all English pages.

## ID: SHARED.NAV

- Brand text: `[KEEP: LM]`
- Navigation labels:
  - Home: `[KEEP]`
  - About: `[KEEP]`
  - Projects: `[KEEP]`
  - Notes: `[KEEP]`
  - Contact: `[KEEP]`
  - Playground: `[KEEP]`
- Theme-toggle tooltip: `[KEEP: Toggle theme]`
- Language control style: `[KEEP: flag buttons]`

## ID: SHARED.STATUS_META

The site currently repeats `Based in Italy · Last updated: April 2026`.

- Keep `Based in Italy`: `[KEEP: yes]`
- Replacement location text: `[KEEP: Based in Italy]`
- Keep repeated "Last updated" labels: `[KEEP: yes]`
- Replacement/update policy:
  `[KEEP: use the actual month when a page receives a meaningful update]`

## ID: SHARED.FOOTER

- Current: `© 2026 Lorenzo Marinelli`
- Replacement: `[KEEP]`
- Optional second footer line:
  `[ADD: e.g. Hand-built in Rome. The graph in the background is alive.]`
- Optional source-code link label: `[ADD: ]`

## ID: SHARED.BUTTONS

- `See projects`: `[KEEP]`
- `About me`: `[KEEP]`
- `Contact`: `[KEEP]`
- `More details`: `[KEEP]`
- `Interactive demo`: `[KEEP]`
- `Open experiment`: `[KEEP]`
- General button tone:
  `[KEEP: direct and clear; personality belongs mainly in surrounding copy]`

## ID: SHARED.INTERACTION_VOICE

This controls dynamic messages inside JavaScript: loading, success, errors,
empty states, tips, and status readouts.

- Error-message tone: `[KEEP: calm, direct, useful, silly]`
- Success-message tone: `[KEEP: concise with occasional warmth]`
- Loading-message tone: `[KEEP: factual]`
- Empty-state tone: `[KEEP: inviting rather than sterile]`
- May dynamic messages include rare jokes/emoticons: `[KEEP: yes, very rarely]`
- Extra guidance: `[ADD: ]`

---

# 2. Homepage

Source: `index.html`

## ID: HOME.SEO

- Browser title: `[KEEP: Lorenzo Marinelli]`
- Search description:
  `[KEEP: Lorenzo Marinelli — Computer Science student at Sapienza University. Projects, notes, and contact.]`

## ID: HOME.HERO

- Name: `[KEEP: Lorenzo Marinelli]`
- Current kicker: `Computer Science @ Sapienza University · Italy`
- New kicker: `[KEEP]`
- Current main line: `I build practical solutions for [rotating technical areas].`
- New main line: `[KEEP]`
- Rotating areas:
  `[KEEP: Graph ML, Computer Vision, Bioinformatics, Data Analysis, Deep Learning, Reinforcement Learning, Large Language Models, Dynamic Systems]`
- Optional human introduction below the main line:
  `[ADD: ]`
- Primary button: `[KEEP: See projects]`
- Secondary button: `[KEEP: About me]`

## ID: HOME.OPEN_TO

- Section heading: `[KEEP: Open to]`
- Internships/thesis text:
  `[KEEP: Adversarial Learning, Graph ML, Bioinformatics, Data Analysis, Machine Learning Security.]`
- Collaboration text:
  `[KEEP: research prototypes and open-source projects.]`
- Optional less-formal closing line: `[ADD: Don't be scared to contact me :3]`

## ID: HOME.NOW

- Section heading: `[KEEP: Now]`
- Current:
  `Currently drowning in exam preparation and polishing personal projects, but I enjoy it. Mostly. ;-;`
- New current-status text: `[KEEP]`
- Should this include a date such as "June 2026": `[ADD: yes]`
- Optional current obsession: `[ADD: Small language models and self hosting]`
- Optional current frustration: `[ADD: ]`
- Optional current non-technical thing: `[ADD: writing music]`

## ID: HOME.HIGHLIGHTS

- Section heading: `[KEEP: Highlights]`
- Possible warmer heading: `[ADD: e.g. Things I keep coming back to]`
- Applied AI:
  `[KEEP: building and testing ML systems across vision, graphs, time series, reinforcement learning, and language-model-guided workflows.]`
- Data and scientific computing:
  `[KEEP: turning domain problems and messy datasets into reproducible analyses, visual summaries, and documented experiments.]`
- Research practice:
  `[KEEP: connecting coursework, thesis work, and personal projects through readable notes, demos, and practical evaluation.]`
- Optional fourth personal item: `[ADD: ]`

---

# 3. About Page

Source: `about/index.html`

## ID: ABOUT.HERO

- Kicker: `[KEEP: Background]`
- Heading: `[KEEP: About]`
- Current introduction:
  `I’m a Computer Science MSc student at Sapienza University, working across applied AI, data, and scientific computing.`
- New introduction: `[KEEP]`
- Current second paragraph:
  `This page is the background behind the projects: how I study, what I tend to build, and the tools I reach for when turning an idea into something testable.`
- New second paragraph: `[KEEP]`
- Optional paragraph about me outside work/study: `[ADD: i like playing and writing music, 3d modelling and taking pictures, i sometimes like to play videogames and watch tv series and movies]`

## ID: ABOUT.EDUCATION

- Heading: `[KEEP: Education]`
- Keep education facts as written: `[KEEP: yes]`
- Optional personal context about the degree path: `[ADD: ]`

## ID: ABOUT.CURRENT_DIRECTION

- Heading: `[KEEP: Current direction]`
- Possible warmer heading: `[ADD: What I’m curious about lately]`
- Applied AI item: `[KEEP]`
- Scientific data work item: `[KEEP]`
- Reliable experiments item: `[KEEP]`
- Readable outputs item: `[KEEP]`
- Replacement/additional items: `[ADD: ]`

## ID: ABOUT.WORKING_STYLE

- Kicker: `[KEEP: Working style]`
- Heading: `[KEEP: Small experiments, clear evaluation]`
- Current paragraph:
  `I like starting from the question and the data before choosing the model. The implementation matters because a good experiment should be easy to rerun, inspect, compare, and explain after the first result looks promising.`
- New paragraph: `[KEEP]`
- A real example of this working style: `[ADD: ]`
- A mistake or habit I have learned from: `[ADD: ]`

## ID: ABOUT.TOOLS

- Kicker: `[KEEP: Tools]`
- Heading: `[KEEP: Core toolkit]`
- Possible warmer heading: `[ADD: e.g. Tools I reach for]`
- Keep current technical tool list: `[KEEP: yes]`
- Tools I genuinely enjoy using: `[ADD: ]`
- Tool I have a complicated relationship with: `[ADD: ]`

## ID: ABOUT.DOMAINS

- Kicker: `[KEEP: Domains]`
- Heading: `[KEEP: Where I apply it]`
- Keep current domain list: `[KEEP: yes]`
- Domain I am most excited by right now: `[ADD: Adversarial Learning]`
- Why it interests me personally: `[ADD: I believe in the future there will be an explosion of research in this field, since there are a lot of things we still don't understand about how models work, and adversarial attacks are a great way to explore these unknown areas.]`

## ID: ABOUT.SMALL_PERSONAL_SECTION

- Add a small personal section: `[ADD: no]`
- Heading: `[ADD: Outside the terminal / Small facts / etc.]`
- Content:
  - `[ADD: ]`
  - `[ADD: ]`
  - `[ADD: ]`

---

# 4. Projects Index

Source: `projects/index.html`

## ID: PROJECTS.HERO

- Kicker: `[KEEP: Selected work]`
- Heading: `[KEEP: Projects]`
- Current intro:
  `A tidy overview of some of the things I’ve built, studied, and tested.`
- New intro: `[KEEP]`
- Optional note explaining that some projects are messy/unfinished:
  `[ADD: ]`

## ID: PROJECTS.CARD_STYLE

The cards currently use labels such as `Task`, `Why`, `Work`, `Output`, and
`Outcome`.

- Keep that structure on every card: `[KEEP: yes]`
- Or replace selected labels with:
  - `The question`: `[ADD: ]`
  - `What surprised me`: `[ADD: ]`
  - `What went wrong`: `[ADD: ]`
  - `What I would try next`: `[ADD: ]`
- General project-card voice: `[KEEP: clear summary first, personal detail second]`

## ID: PROJECTS.THESIS_CARD

- Title: `[KEEP: Bachelor’s thesis]`
- Current summary:
  `Can a model suggest likely missing links between proteins, so researchers have better candidates to inspect? It combines protein sequence information with a known interaction network, with a NOTCH2-focused case study.`
- New summary: `[KEEP]`
- Why I chose this topic: `[ADD: ]`
- What surprised me: `[ADD: ]`
- What was difficult: `[ADD: ]`
- What I would do next: `[ADD: ]`

## ID: PROJECTS.UAV_CARD

- Title: `[KEEP: UAV Anomaly Detection & Localization]`
- Current summary:
  `A computer-vision pipeline for large drone images that spots unusual target areas and turns them into regions that can be checked or classified.`
- New summary: `[KEEP]`
- Origin story: `[ADD: ]`
- What surprised me: `[ADD: ]`
- What was difficult: `[ADD: ]`
- What I would do next: `[ADD: ]`

## ID: PROJECTS.LORENZ_CARD

- Title: `[KEEP: Lorenz Attractor Forecasting]`
- Current summary:
  `A small forecasting study on a chaotic system: can a model predict the next movement, and how quickly do tiny mistakes grow when predictions are fed back into the model?`
- New summary: `[KEEP]`
- Why I am still fond of it: `[ADD: ]`
- What surprised me: `[ADD: ]`
- What went wrong: `[ADD: ]`

## ID: PROJECTS.ELECTIONS_CARD

- Title: `[KEEP: EU Elections 2019 Data Analysis]`
- Current summary:
  `Exploratory analysis of the 2019 European elections: data cleaning, hypothesis checks, and visual summaries.`
- New summary: `[KEEP]`
- Personal context/story: `[ADD: ]`
- What I learned: `[ADD: ]`

## ID: PROJECTS.RLNAV_CARD

- Title: `[KEEP: RL-Nav v1 — Oracle-Guided RL for Partial-Observation Navigation]`
- Current summary:
  `Exam project combining reinforcement learning and LLM-based guidance for navigation in a stochastic PyBullet environment.`
- New summary: `[KEEP]`
- What made this interesting: `[ADD: ]`
- What failed or remained difficult: `[ADD: ]`
- What I would try next: `[ADD: ]`

## ID: PROJECTS.BLENDER_CARD

- Title: `[KEEP: Synthetic Dataset Generation in Blender]`
- Current summary:
  `Small synthetic-data pipeline for generating labeled images with domain randomization for YOLO-style training.`
- New summary: `[KEEP]`
- Why I built it: `[ADD: ]`
- Fun or frustrating detail: `[ADD: ]`

## ID: PROJECTS.WEB_CARD

- Title: `[KEEP: Small Web / API Projects]`
- Current summary:
  `Lightweight backend/API work and small apps focused on turning functionality into something usable and testable.`
- New summary: `[KEEP]`
- Personal note about hand-building this site: `[ADD: ]`
- Favorite small web project and why: `[ADD: ]`

## ID: PROJECTS.PLAYGROUND_CARD

- Title: `[KEEP: Playground]`
- Current summary:
  `A growing space for browser-native simulations, visual explainers, and small tools that are useful to explore but not necessarily large enough for standalone project pages.`
- New summary: `[KEEP]`
- Why I keep making these experiments: `[ADD: ]`

---

# 5. Detailed Project Pages

## ID: PROJECT_DETAIL.LORENZ

Source: `projects/lorenz/index.html`

- Kicker: `[KEEP: Interactive demo]`
- Title: `[KEEP: Lorenz Attractor Forecasting]`
- Current intro:
  `A small visual demo connected to my experiments with LSTMs, derivative-aware outputs, and rolling forecasts on a chaotic dynamical system.`
- New intro: `[KEEP]`
- `Live attractor` section rewrite/addition: `[KEEP]`
- `Project notes` section rewrite/addition: `[KEEP]`
- `What I learned` section rewrite/addition: `[KEEP]`
- Current personal section heading: `An early recurrent-data experiment`
- New personal section heading: `[KEEP]`
- Personal section rewrite/addition: `[KEEP]`
- Extra memory or anecdote: `[ADD: ]`

## ID: PROJECT_DETAIL.THESIS

Source: `projects/thesis-gnn-protein-interactions/index.html`

- Kicker: `[KEEP: Interactive thesis summary]`
- Title: `[KEEP]`
- Current intro:
  `A web-native summary of my bachelor’s thesis: predicting missing protein-protein interactions by combining protein language-model embeddings with graph neural networks.`
- New intro: `[KEEP]`
- Why I chose the thesis: `[ADD: ]`
- The moment the project started making sense: `[ADD: ]`
- The most frustrating part: `[ADD: ]`
- The result I care about most and why: `[ADD: ]`
- Personal context for the NOTCH2 case study: `[ADD: ]`
- Make technical sections less formal: `[KEEP: no]`
- Rewrite scope by section:
  - Pipeline overview: `[KEEP]`
  - Dataset: `[KEEP]`
  - Architecture: `[KEEP]`
  - Results: `[KEEP]`
  - Topology bias: `[KEEP]`
  - NOTCH2 case study: `[KEEP]`
  - Limitations/future work: `[KEEP]`
- Optional personal closing section: `[ADD: ]`

## ID: PROJECT_DETAIL.UAV

Source: `projects/uav-anomaly-detection/index.html`

- Kicker: `[KEEP: Interactive demo]`
- Title: `[KEEP]`
- Current intro:
  `A compact project page for the anomaly-detection pipeline: from the original aerial image to anomaly map, thresholded mask, and localization-ready output.`
- New intro: `[KEEP]`
- Why I built/worked on it: `[ADD: ]`
- What made the data difficult: `[ADD: ]`
- The messiest failure mode: `[ADD: ]`
- What I learned about post-processing: `[ADD: ]`
- Rewrite scope by section:
  - Pipeline explorer: `[KEEP]`
  - Stage explanation: `[KEEP]`
  - Why this approach is interesting: `[KEEP]`
  - AE/VAE model view: `[KEEP]`
  - Pipeline structure: `[KEEP]`
  - What I learned: `[KEEP]`
- Optional personal closing section: `[ADD: ]`

---

# 6. Notes Page

Source: `notes/index.html`

## ID: NOTES.HERO

- Kicker: `[KEEP: Learning log]`
- Heading: `[KEEP: Notes]`
- Current intro:
  `Short writeups, experiments, updates and technical references.`
- New intro: `[KEEP]`
- Set expectations about unfinished/short notes: `[ADD: ]`

## ID: NOTES.STRUCTURE

- Keep `Pinned notes`: `[KEEP: yes]`
- Rename `All notes`: `[KEEP]`
- Add a `Desk scraps` or short-updates section: `[ADD: no / desired name]`
- Add a `Things I learned the hard way` section: `[ADD: no / desired name]`
- Notes should feel:
  `[KEEP: informal enough to publish before they are perfect]`

## ID: NOTES.CURRENT_ENTRY

- Current title:
  `NVIDIA DLI course on adversarial machine learning and model security`
- Keep title: `[KEEP: yes]`
- Current description:
  `Compact reference for robustness, model security, and evaluation under adversarial pressure.`
- New description: `[KEEP]`
- Personal takeaway/opinion: `[ADD: ]`

## ID: NOTES.NEW_ENTRIES

Add rough ideas here. They can be one sentence.

- `[ADD: ]`
- `[ADD: ]`
- `[ADD: ]`
- `[ADD: ]`
- `[ADD: ]`

---

# 7. Contact Page

Source: `contact/index.html`

## ID: CONTACT.HERO

- Kicker: `[KEEP: Contact]`
- Heading: `[KEEP: Let’s connect]`
- Current intro:
  `Email is by far the best way to reach me, especially for project questions, research ideas, internships, or collaboration proposals.`
- New intro: `[KEEP]`
- Optional welcoming/informal line: `[ADD: ]`
- Primary button: `[KEEP: Send email]`
- Secondary button: `[KEEP: See projects first]`

## ID: CONTACT.EMAIL

- Kicker: `[KEEP: Primary channel]`
- Heading: `[KEEP: Email]`
- Current guidance:
  `For anything that needs context, send a concise email with the goal, links, and any useful constraints. I usually reply faster when the message has a clear ask.`
- New guidance: `[KEEP]`
- Topics I especially enjoy hearing about: `[ADD: ]`
- Topics/messages I cannot help with: `[ADD: ]`

## ID: CONTACT.LINK_LABELS

- Email subtitle: `[KEEP: Best for direct messages]`
- GitHub subtitle: `[KEEP: Code and project history]`
- LinkedIn subtitle: `[KEEP: Professional profile]`
- Telegram subtitle: `[KEEP: Quick informal contact]`

## ID: CONTACT.MESSAGE_GUIDE

- Keep `Context` and `Goal` cards: `[KEEP: yes]`
- Context copy: `[KEEP]`
- Goal copy: `[KEEP]`
- Optional reassuring line for people who do not have a polished message:
  `[ADD: ]`

---

# 8. Playground Index

Source: `playground/index.html`

## ID: PLAYGROUND.HERO

- Kicker: `[KEEP: Interactive map]`
- Heading: `[KEEP: Playground-WIP]`
- Current intro:
  `A browser-native map of some utilities + little experiments related to topics I find interesting. DESKTOP USE RECOMMENDED.`
- New intro: `[KEEP]`
- Small graph instruction: `[KEEP: edges mean the topics are related]`
- Optional explanation of why this page exists: `[ADD: ]`
- Optional permission for unfinished/weird experiments: `[ADD: ]`

## ID: PLAYGROUND.INDEX_LIST

- Kicker: `[KEEP: Live experiments]`
- Heading: `[KEEP: Fourteen sketches, one shared graph]`
- New heading: `[KEEP]`
- Keep concise experiment descriptions: `[KEEP: yes]`
- General rewrite direction: `[ADD: ]`

## ID: PLAYGROUND.POPUP

- Default kicker: `[KEEP: Theme node]`
- Default heading: `[KEEP: Select a node]`
- Current help:
  `Click any theme node to see how it connects to the current experiments and project work.`
- New help: `[KEEP]`
- Open button: `[KEEP: Open experiment]`

---

# 9. Individual Playground Experiments

For each experiment, the technical controls can remain unchanged. The fields
below target the personality-bearing intro, explanation, tips, and motivation.

## ID: EXPERIMENT.GRAPH_DIFFUSION

Source: `playground/graph-diffusion/index.html`

- Title: `[KEEP: Graph Signal Diffusion]`
- Current intro:
  `Click a node to inject a signal. Nearby nodes receive a weaker version of it at each hop. It is a small visual intuition for graph neighborhoods, message passing, and network effects.`
- New intro: `[KEEP]`
- `What this represents` rewrite/addition: `[KEEP]`
- `A shared graph language` rewrite/addition: `[KEEP]`
- Why I made it / personal note: `[ADD: ]`
- Dynamic interaction voice notes: `[ADD: ]`

## ID: EXPERIMENT.GNN_TOY

Source: `playground/gnn-toy/index.html`

- Title: `[KEEP: GNN Message Passing Toy]`
- Current intro:
  `Choose node features, apply one to three message-passing layers, and watch neighboring embeddings become smoother without leaving the browser.`
- New intro: `[KEEP]`
- `What changes per layer` rewrite/addition: `[KEEP]`
- `What the colors mean` rewrite/addition: `[KEEP]`
- Why I made it / personal note: `[ADD: ]`
- Dynamic interaction voice notes: `[ADD: ]`

## ID: EXPERIMENT.CLUSTERING

Source: `playground/clustering/index.html`

- Title: `[KEEP: Clustering Lab]`
- Current intro:
  `Add points in 2D, then compare how k-means, k-medoids, DBSCAN, Mean Shift, and agglomerative clustering turn the same geometry into different groups.`
- New intro: `[KEEP]`
- Result/explanation voice: `[KEEP: clear and educational]`
- Why I made it / personal note: `[ADD: ]`
- Dynamic interaction voice notes: `[ADD: ]`

## ID: EXPERIMENT.GRAVITY_ASSIST

Source: `playground/gravity-assist/index.html`

- Title: `[KEEP: Gravity Assist Sandbox]`
- Current intro:
  `Launch a probe through a small 2D solar system. Tune the launch and planetary gravity, then try to bend the trajectory toward the target planet.`
- New intro: `[KEEP]`
- Current instruction: `move the pointer, then launch toward the red target`
- New instruction: `[KEEP]`
- Why I made it / personal note: `[ADD: ]`
- Dynamic interaction voice notes: `[ADD: ]`

## ID: EXPERIMENT.FOURIER

Source: `playground/fourier/index.html`

- Title: `[KEEP: Fourier Transform Playground]`
- Current intro:
  `Add sine waves one by one, then watch the time waveform and frequency spectrum change as the sound becomes richer.`
- New intro: `[KEEP]`
- Current tip:
  `Harmonic 1 is the base pitch. Higher harmonics add brightness; phase changes the shape without moving the spectrum bar.`
- New tip: `[KEEP]`
- Why I made it / personal note: `[ADD: ]`
- Dynamic interaction voice notes: `[ADD: ]`

## ID: EXPERIMENT.SIGNAL_FILTERS

Source: `playground/signal-filters/index.html`

- Title: `[KEEP: Signal Filter Playground]`
- Current intro:
  `Route simple signals through classic audio filters, then compare the original waveform, filtered waveform, and frequency response.`
- New intro: `[KEEP]`
- Current instruction: `Choose a filter and press Hear filter to listen.`
- New instruction: `[KEEP]`
- Why I made it / personal note: `[ADD: ]`
- Dynamic interaction voice notes: `[ADD: ]`

## ID: EXPERIMENT.MLP

Source: `playground/mlp-lab/index.html`

- Title: `[KEEP: MLP Decision Boundary Lab]`
- Current intro:
  `Build a tiny neural net, switch activation functions, and watch its decision surface bend around a 2D dataset as training updates the weights.`
- New intro: `[KEEP]`
- Current instruction: `Choose a dataset, then train the network.`
- New instruction: `[KEEP]`
- Why I made it / personal note: `[ADD: ]`
- Dynamic interaction voice notes: `[ADD: ]`

## ID: EXPERIMENT.DIFFUSION_MODELS

Source: `playground/diffusion-models/index.html`

- Title: `[KEEP: Diffusion Model Denoising Toy]`
- Current intro:
  `Add noise to a generated image, then step backward through a simplified denoising process. It is a canvas intuition for generative diffusion models, not a trained model.`
- New intro: `[KEEP]`
- `Forward noise, reverse estimate` rewrite/addition: `[KEEP]`
- `Kitten sampler` rewrite/addition: `[KEEP]`
- `Forward diffusion` rewrite/addition: `[KEEP]`
- `Reverse denoising` rewrite/addition: `[KEEP]`
- Why kittens: `[ADD: ]`
- Notebook/export instruction tone: `[KEEP: technical and direct]`
- Dynamic interaction voice notes: `[ADD: ]`

## ID: EXPERIMENT.CONVOLUTION

Source: `playground/convolution-kernels/index.html`

- Title: `[KEEP: Convolution Kernel Playground]`
- Current intro:
  `Edit a small image kernel and apply it across every pixel. Try blur, sharpen, edge, emboss, and your own custom 5x5 filters.`
- New intro: `[KEEP]`
- Current tip:
  `Positive weights brighten matching neighborhoods. Negative weights subtract neighbors, which is why edge kernels reveal sudden changes.`
- New tip: `[KEEP]`
- Why I made it / personal note: `[ADD: ]`
- Dynamic interaction voice notes: `[ADD: ]`

## ID: EXPERIMENT.IMAGE_COLOR

Source: `playground/image-color-editor/index.html`

- Title: `[KEEP: Image Color Editor]`
- Current intro:
  `Load an image or use the generated sample, then shift hue, saturation, contrast, warmth, grayscale, inversion, and RGB channel order before saving the result as a PNG.`
- New intro: `[KEEP]`
- `What to notice` rewrite/addition: `[KEEP]`
- Current personal motivation:
  `I like art and color theory, and I kept needing quick color transformations without signing up for another account or fighting a bad free tool. This is the utility I wanted to have open.`
- New personal motivation: `[KEEP]`
- Dynamic interaction voice notes: `[ADD: ]`

## ID: EXPERIMENT.FILE_CONVERTER

Source: `playground/file-converter/index.html`

- Title: `[KEEP: File Converter, WIP]`
- Current intro:
  `Convert images, export audio as WAV, MP3, or FLAC, and transcode video to MP4, WebM, MOV, MKV, or AVI. Files stay local in the browser.`
- New intro: `[KEEP]`
- Keep privacy-first warning/explanation: `[KEEP: yes]`
- Current personal motivation ends with:
  `If you don’t want to take my word for it, you can always check the repository yourself :3 (or have an LLM inspect it for you…).`
- New personal motivation: `[KEEP]`
- Heavy-conversion warning tone: `[KEEP: direct and serious]`
- Dynamic interaction voice notes: `[ADD: ]`

## ID: EXPERIMENT.ANOMALY_NODE

Source: `playground/anomaly-node/index.html`

- Title: `[KEEP: Anomaly Node Game]`
- Current intro:
  `One node in the background graph behaves slightly differently. Watch the motion, pulses, and signal response, then select the suspicious node.`
- New intro: `[KEEP]`
- Current tip:
  `Tip: wait for a signal wave. The anomaly often reacts a little too much.`
- New tip: `[KEEP]`
- Result-message tone: `[KEEP: playful but not distracting]`
- Why I made it / personal note: `[ADD: ]`
- Dynamic interaction voice notes: `[ADD: ]`

## ID: EXPERIMENT.COMPUTER_VISION

Source: `playground/computer-vision/index.html`

- Title: `[KEEP: Computer Vision Mini Lab]`
- Current intro:
  `Small visual toys around detection, saliency, reconstruction error, masks, and image intuition.`
- New intro: `[KEEP]`
- `What to notice` rewrite/addition: `[KEEP]`
- `From pixels to pipeline` rewrite/addition: `[KEEP]`
- Why I made it / personal note: `[ADD: ]`
- Dynamic interaction voice notes: `[ADD: ]`

## ID: EXPERIMENT.CIRCLE_OF_FIFTHS

Source: `playground/circle-of-fifths/index.html`

- Title: `[KEEP: Circle of Fifths Network]`
- Current intro:
  `A small interactive music-theory graph. Click a key to highlight its closest harmonic neighbors, relative minor, and a simple I–vi–IV–V progression.`
- New intro: `[KEEP]`
- Current sound note:
  `The sound is intentionally simple: plain synthesized triads, just enough to hear the relationship.`
- New sound note: `[KEEP]`
- Current personal motivation:
  `It uses the same graph idea as the data-science toys, but applied to harmony. Chords, keys, and progressions can all be treated as nodes and transitions. + I simply like music theory`
- New personal motivation: `[KEEP]`
- Dynamic interaction voice notes: `[ADD: ]`

---

# 10. Things That Are Usually Better Left Technical

Change these only when you have a specific reason:

- Accessibility labels such as canvas descriptions and control names.
- Algorithm names, metrics, dataset sizes, model names, and citations.
- Safety/privacy warnings in the file converter.
- Slider labels and values.
- Button labels whose meaning must remain immediately clear.
- The archived notebook export at `assets/old projects/lorenz.html`.

Global decision: `[KEEP: leave these technical unless another field explicitly changes them]`

---

# 11. New Optional Human Sections

These do not exist yet. Add only the ones you genuinely want.

## ID: OPTIONAL.CHANGELOG

- Add a tiny site changelog: `[ADD: no / yes]`
- Desired heading: `[ADD: Site log / Recently changed / etc.]`
- First entries:
  - `[ADD: ]`
  - `[ADD: ]`

## ID: OPTIONAL.SMALL_THINGS

- Add a section for unfinished or tiny work: `[ADD: no / yes]`
- Desired heading: `[ADD: Small things / Scraps / Half-built ideas / etc.]`
- Items:
  - `[ADD: ]`
  - `[ADD: ]`
  - `[ADD: ]`

## ID: OPTIONAL.FAVORITES

- Add favorites/recommendations: `[ADD: no / yes]`
- Books/papers/tools/music/etc. to mention:
  - `[ADD: ]`
  - `[ADD: ]`
  - `[ADD: ]`

## ID: OPTIONAL.FAILURES

- Add a section about failed experiments or lessons: `[ADD: no / yes]`
- Desired heading: `[ADD: ]`
- Stories:
  - `[ADD: ]`
  - `[ADD: ]`

## ID: OPTIONAL.EASTER_EGGS

- Add a subtle easter egg: `[ADD: no / yes]`
- Trigger: `[ADD: ]`
- Result/message: `[ADD: ]`

---

# 12. Final Implementation Preferences

- Apply only fields I explicitly changed: `[KEEP: yes]`
- Lightly edit my rough text for grammar while preserving voice:
  `[KEEP: yes]`
- Ask before making larger structural changes: `[KEEP: yes]`
- Translate finalized English copy into Italian afterward: `[KEEP: yes]`
- Italian translation tone:
  `[KEEP: natural Italian with the same personality, not literal word-for-word translation]`
- Anything else Codex should know before implementation:
  `[ADD: ]`

