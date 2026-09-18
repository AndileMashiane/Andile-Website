# Website Architecture & UI Specification: Andile Mashiane Portfolio

**Target User:** Recruiters, Art Directors, Creative Directors, and Technical Leads looking for a high-caliber 3D Artist, Animator, and Technical Generalist.  
**Primary Goal:** Highlight both artistic fidelity (animation, lookdev, modeling) and technical precision (rigging, retopology, pipeline efficiency).

---

## 1. Global Visual Identity & Typography Design

### 1.1 Color Palette
- **Background (Dark Mode Default):** `#0E1117` (Deep Charcoal Blue)
- **Card / Container Surface:** `#161B22` (Subtle Slate Gray)
- **Primary Accent / Brand Color:** `#00F2FE` (Electric Cyan - highlights buttons, active filters, key UI accents)
- **Secondary Accent:** `#7928CA` (Neon Purple - subtle gradients, hover states)
- **Primary Text:** `#F0F6FC` (Off-white, 90% opacity for optimal contrast)
- **Muted Text / Metadata:** `#8B949E` (Neutral Mid-Gray)
- **Borders & Dividers:** `#30363D` (Subtle hairline borders)

### 1.2 Typography System
- **Display / Heading Font:** `Syne` or `Space Grotesk` (Google Fonts) — Sans-Serif, bold, modern geometric aesthetic.
- **Body Font:** `Inter` or `Plus Jakarta Sans` (Google Fonts) — Highly readable, clean corporate/technical sans-serif.
- **Code / Technical Specs Font:** `JetBrains Mono` or `Fira Code` — Used for poly counts, frame rates, rig specifications, and software tags.

#### Font Hierarchy Specifications
| Element | Font Family | Weight | Size (Desktop) | Line Height | Color |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Hero Title (H1)** | Syne / Space Grotesk | Extra Bold (800) | `48pt` / `64px` | `1.1` | `#F0F6FC` |
| **Section Title (H2)** | Syne / Space Grotesk | Bold (700) | `28pt` / `37px` | `1.2` | `#F0F6FC` |
| **Card Header (H3)** | Inter | SemiBold (600) | `18pt` / `24px` | `1.3` | `#00F2FE` |
| **Subheadings / Tags (H4)**| JetBrains Mono | Medium (500) | `12pt` / `16px` | `1.4` | `#8B949E` |
| **Body Paragraphs** | Inter | Regular (400) | `11pt` / `15px` | `1.6` | `#F0F6FC` |
| **Technical Data Labels** | JetBrains Mono | Light (300) | `10pt` / `13px` | `1.4` | `#8B949E` |

---

## 2. Navigation Header (Fixed/Sticky UI)

### 2.1 Component Structure
- **Left Alignment:** Brand Logo / Name Signature
  - **Text:** `ANDILE MASHIANE` (Font: Syne, Weight 700, Size `14pt`, Letter-spacing `0.1em`).
  - **Sub-tagline:** `3D ARTIST & ANIMATOR` (Font: JetBrains Mono, Size `9pt`, Color `#8B949E`).
- **Right Alignment:** Navigation Links & Primary CTA
  - **Links:** `[Work]`, `[Pipeline & Skills]`, `[Experience]`, `[About]`
  - **Primary Call to Action Button:** `[Get in Touch]` (Style: Electric Cyan outline button, hover fill).

---

## 3. Section-by-Section Breakdown

### SECTION 1: Hero Section & Showreel Focus

#### Visual Layout & UI Structure
Full-screen viewport layout featuring immediate visual impact, dual CTAs, and a hero video showcase.

#### Copy & UI Elements
* **Kicker Badge:** `[AVAILABLE FOR FREELANCE & PERMANENT ROLES]` (Pill badge with green pulsing indicator dot).
* **Headline (H1):** 
  > **Creating High-Impact 3D Characters, Rigs & Cinematic Animations.**
* **Sub-headline:** 
  > Versatile 3D Generalist specializing in character performance, technical rigging, low/high-poly modeling, and production-ready asset pipelines across feature animation and commercials.
* **CTAs:**
  1. `[Watch 2026 Reel ➔]` (Primary Button: Solid Cyan `#00F2FE` with dark text, smoothly scrolls to player).
  2. `[Download Resume PDF]` (Secondary Button: Border outline `#30363D`, text `#F0F6FC`).

#### Video Asset Specification
* **Component:** High-Definition HTML5 Embedded Video Player / Vimeo Pro Embed (Frameless, Custom Controls).
* **Video Title:** `Andile_Mashiane_Showreel_2026.mp4`
* **Aspect Ratio:** 16:9 widescreen.
* **Features:** 4K video resolution support, auto-mute thumbnail preview on load, custom overlay play button.

---

### SECTION 2: Featured Portfolio Grid & Project Breakdowns

#### Filter Bar Controls
- **Filter Pills (Interactive):** `All Projects` (Default Selected) | `3D Animation` | `Rigging & Tech` | `3D Modeling & Texturing` | `Motion & Commercial`

#### Card Item Breakdown (Grid Layout)
Each project card displays high-resolution visuals paired with clear technical metadata.

```
+-------------------------------------------------------+
|  [PROJECT THUMBNAIL / AUTOPLAY GIF]                  |
|                                                       |
+-------------------------------------------------------+
|  Category Tag: RIGGING & ANIMATION                    |
|  Project Title: Feature Character Deformation Rig     |
|  Software Stack: [Maya] [Substance 3D] [Blender]      |
|  Short Description: Custom facial & body rig featuring|
|  optimized weight painting & corrective blendshapes.  |
|  CTA: [View Breakdown & Wireframes ➔]                 |
+-------------------------------------------------------+
```

#### Detailed Case Study Overlay / Modal Specs
When a visitor clicks a project, a full-screen dynamic case study modal slides in.

1. **Header Block:**
   - **Title:** e.g., *Stylized Creature Production & Rigging*
   - **Role:** 3D Generalist & Technical Rigging Artist
   - **Client/Studio:** Feature Animation Production / Independent
2. **Media Assets Showcase:**
   - **Embedded Video 1:** Animation Test / Keyframe Performance (`1080p 60fps Loop`).
   - **Interactive Image Comparison Slider:** Base Mesh Wireframe (Low-Poly) vs. Textured Render (Substance 3D Painter).
   - **Video 2 / Interactive GIF:** Maya Rigging Handles & Weight Painting Demonstration (showing mesh deformation quality).
3. **Technical Specs Sidebar:**
   - **Software:** Autodesk Maya, Substance 3D Painter, Blender
   - **Polycount:** 18,400 Triangles (Optimized for real-time/production pipeline)
   - **Texture Maps:** 4K PBR (Base Color, Normal, Roughness, Metallic, AO)
   - **Rigging Details:** Custom FK/IK Spine, Finger Driven Attributes, Corrective Shape Keys

---

### SECTION 3: Technical Pipeline & Software Capabilities

#### Visual Layout
Structured grid featuring dark cards with bright visual icons, displaying proficiencies clearly divided by production stage.

#### Card 1: 3D Modeling & Texturing
* **Header (H3):** 3D Modeling & LookDev
* **Icon:** 3D Cube Wireframe Icon
* **Core Capabilities List:**
  * High-Poly Sculpting & Low-Poly Retopology
  * Topology Optimization & Edge-Flow Management
  * UV Unwrapping & Efficient Texture Layout
  * PBR Texture Mapping (Substance 3D Painter)
* **Software Tags:** `Autodesk Maya` `Blender` `Substance 3D Painter`

#### Card 2: Animation & Rigging Systems
* **Header (H3):** Animation & Technical Rigging
* **Icon:** Skeleton / Joint Node Icon
* **Core Capabilities List:**
  * Keyframe Character Performance & Prop Animation
  * Character Rigging & Skinning / Weight Management
  * Custom FK/IK Switching & Deformation Systems
  * Animation Clean-up & Refinement
* **Software Tags:** `Autodesk Maya` `Blender`

#### Card 3: Motion Design & Compositing
* **Header (H3):** Motion Design & Post-Production
* **Icon:** Layers / Compositing Icon
* **Core Capabilities List:**
  * 2D/3D Motion Graphics Integration
  * Post-Production Compositing & Color Grading
  * Graphic Design for Commercial Campaigns
  * Production Asset Optimization
* **Software Tags:** `Adobe After Effects` `Photoshop` `Illustrator`

---

### SECTION 4: Professional Experience & History Timeline

#### Visual Layout
Vertical timeline with node markers highlighting career progression, studio affiliations, and key responsibilities.

```
[TIMELINE NODE]
 ├── 2024 - PRESENT
 │   └── THE BOILER ROOM
 │       Position: Multimedia Artist / 3D Artist / Animator (Permanent)
 │       Details:
 │       • Produced 3D models, textures, animations, and visual assets for commercial productions.
 │       • Solved complex technical pipeline issues across Maya and Blender workflows.
 │       • Prepared, cleaned up, and optimized digital assets for immediate studio pipeline integration.
 │
 ├── 2022 - 2024
 │   └── INDEPENDENT FREELANCE
 │       Position: Freelance 3D Artist / Animator / Multimedia Designer
 │       Details:
 │       • Contributed 3D models, character rigs, and animations to feature animation projects.
 │       • Delivered production-ready commercial assets under strict client deadlines.
 │       • Handled end-to-end asset pipelines from initial modeling to final textured renders.
 │
 ├── 2021 - 2022
 │   └── SUM OF 21 AT ETIKET ADVERTISING AGENCY
 │       Position: Multimedia Artist (Promoted from Multimedia Intern)
 │       Details:
 │       • Created 3D graphics, motion designs, and visual content for major client advertising campaigns.
 │       • Collaborated with agency creative directors to align assets with design briefs.
 │
 └── EDUCATION
     └── BOSTON MEDIA HOUSE
         Qualification: Diploma / Certificate in Multimedia & Animation
         Focus: Digital design, 3D production pipelines, character animation, and creative media.
```

---

### SECTION 5: Footer & Contact Section

#### Visual Layout
High-contrast footer featuring prominent call-to-action details and a clean inquiry form.

#### Copy & UI Elements
* **Header (H2):** **Let’s Build Something Exceptional Together.**
* **Sub-text:** *Open for feature film animation, commercial projects, technical rigging contracts, and permanent roles.*
* **Direct Email Link:** `andile.mashiane@email.com` (Click to copy to clipboard with toast notification).
* **Downloadable Asset Link:** `[Download Full Resume (PDF)]`

#### Contact Form UI Components
- **Field 1:** Name (Input Box)
- **Field 2:** Email Address (Input Box)
- **Field 3:** Project Type Dropdown (`Feature Animation`, `Commercial 3D Work`, `Rigging Contract`, `Full-time Employment`)
- **Field 4:** Message Box
- **Submit CTA:** `[Send Message ➔]`

#### Secondary Footer Bar
* **Social Links:** `[ArtStation]` | `[LinkedIn]` | `[Vimeo]` | `[GitHub / Sketchfab]`
* **Copyright Notice:** `© 2026 Andile Mashiane. All rights reserved.`
