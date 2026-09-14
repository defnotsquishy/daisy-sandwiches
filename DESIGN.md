---
version: alpha
colors:
  primary: "#F6C515"
  cream: "#F4EEDC"
  paper: "#FFFCF4"
  charcoal: "#20201D"
  daisy-yellow: "#F6C515"
  leaf-green: "#59694A"
  rule: "#C8BEA8"
  muted-ink: "#6A655B"
typography:
  display:
    fontFamily: '"Iowan Old Style", "Palatino Linotype", Georgia, serif'
    lineHeight: "0.96"
  body:
    fontFamily: '"Avenir Next", "Segoe UI", Arial, sans-serif'
    lineHeight: "1.6"
rounded:
  control: "0.25rem"
  media: "0.5rem"
spacing:
  xs: "0.5rem"
  sm: "0.75rem"
  md: "1rem"
  lg: "1.5rem"
  xl: "2.5rem"
  section: "clamp(4.5rem, 9vw, 8rem)"
components:
  primary-button:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.charcoal}"
    rounded: "{rounded.control}"
  secondary-button:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.charcoal}"
    rounded: "{rounded.control}"
---

## Overview

Daisy is a brand-led local-business site for commuters, nearby residents, office organisers and event planners. It should feel like a well-kept station counter with the warmth of a family kitchen: quick to read, practical, personal and unmistakably rooted at Godalming Station. The memorable device is a restrained railway-ticket treatment: compact uppercase utility text, clipped yellow information strips and perforated rules at important transitions.

The register is editorial brand expression supported by practical navigation. It must never resemble a generic cafe template, a SaaS landing page, or a faux-luxury restaurant site.

Runtime ownership follows model B: the hand-maintained custom properties in `app/globals.css` are canonical. This file mirrors those values and records their intended use.

## Colors

Cream is the page ground, paper is the quiet reading surface, and charcoal carries nearly all text. Daisy yellow is the single expressive accent and the primary action colour. Leaf green is reserved for factual availability and small supporting moments. Rule and muted ink support editorial hierarchy without lowering body-text contrast.

## Typography

The display role uses an old-style serif with visible personality and tight leading. It is reserved for primary headings and pull quotes. The body role uses a familiar humanist/system sans for navigation, copy, labels and menu data. Two roles only; hierarchy comes from scale, weight, spacing and case.

## Layout

The content width is 74rem with a narrower 46rem reading measure. Sections use generous vertical space, but the first viewport keeps menu, call and catering actions immediately visible. Desktop compositions favour uneven columns and offset captions. Mobile collapses to a single clear reading order with a restrained bottom action bar.

Breakpoints are 48rem for tablet/navigation changes and 70rem for wide editorial compositions.

## Elevation & Depth

The site is flat by default. Depth comes from photography, overlap and tonal surfaces, not card shadows. Interactive elements may shift by one pixel on press; no decorative drop shadows.

## Shapes

Controls use a crisp 0.25rem radius and media uses 0.5rem. Large pill shapes and soft dashboard cards are out of character. Ticket notches and dashed perforation are used sparingly at section boundaries.

## Components

Primary buttons are Daisy yellow with a charcoal border and text. Secondary buttons are transparent with a charcoal border. Both share height, padding, typography, focus treatment and pressed motion. Media uses shared responsive picture markup with explicit dimensions. Site facts, menu data and contact details come from one content module.

## Do's and Don'ts

Do lead with real Daisy photography, concrete language and local facts. Do use asymmetry to create editorial rhythm while preserving fast scanning. Do keep menu prices and business-controlled information centralised.

Do not use gradients, glass effects, floating card grids, excessive rounding, fake metrics, decorative icons, generic food stock or unverified claims. Do not make every section centered or repeat the same three-column composition.
