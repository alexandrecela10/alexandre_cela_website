# Learning Log - Personal Website Project

This file tracks key concepts and principles learned while building this website.

---

## Session 1: Project Setup & Personal Intro Section
**Date:** 2025-10-19

### Git & Version Control

**What is Git?**
Think of Git as a "save game" system for your code. It lets you:
- Track every change you make
- Go back to previous versions if something breaks
- Work on new features without affecting the main site

**Commands Learned:**
```bash
git init                    # Creates a new Git repository
git add .                   # Stages all files for commit
git add -A                  # Stages all changes (including deletions)
git commit -m "message"     # Saves a snapshot with a description
```

**Principle:** Commit often, especially after completing a working feature. Each commit is a safe point you can return to.

---

### HTML Structure

**Key Elements:**
- `<!DOCTYPE html>` - Tells browser this is HTML5
- `<head>` - Contains metadata (title, links to CSS)
- `<body>` - Contains visible content
- `<section>` - Divides page into logical sections
- `<div>` - Generic container for grouping elements

**Principle:** HTML is the skeleton. It defines WHAT content exists, not HOW it looks.

---

### CSS Styling

**1. Flexbox (Modern Layout System)**
```css
display: flex;              /* Makes items sit in a row */
gap: 60px;                  /* Space between items */
align-items: center;        /* Vertically centers items */
flex-direction: column;     /* Stacks items vertically */
```

**Why Flexbox?** It makes layouts flexible and responsive without complex calculations.

**2. CSS Transitions (Smooth Animations)**
```css
transition: transform 0.3s ease;  /* Smooth animation over 0.3 seconds */
transform: scale(1.05);           /* Makes element 5% bigger */
```

**Principle:** Transitions make interactions feel polished. Always specify the property, duration, and easing.

**3. Media Queries (Responsive Design)**
```css
@media (max-width: 768px) {  /* When screen is smaller than 768px */
    flex-direction: column;   /* Stack items vertically */
}
```

**Why 768px?** This is a common breakpoint for tablets. Below this, we optimize for mobile.

**4. CSS Gradients**
```css
background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
```

**Principle:** Gradients add depth and visual interest without images.

---

### JavaScript Basics

**1. DOM Manipulation**
```javascript
document.querySelector('.intro-section');  // Finds first matching element
```

**What is the DOM?** Document Object Model - it's how JavaScript "sees" your HTML.

**2. Event Listeners**
```javascript
document.addEventListener('DOMContentLoaded', function() {
    // Code runs after page fully loads
});
```

**Principle:** Always wait for DOM to load before manipulating elements.

**3. setTimeout (Delayed Execution)**
```javascript
setTimeout(() => {
    introSection.style.opacity = '1';
}, 100);
```

**Why delay?** Gives browser time to render, making animations smoother.

---

### File Organization Principle

**Single Responsibility:**
- `index.html` - Structure only
- `styles.css` - All visual styling
- `script.js` - All interactivity
- `.gitignore` - Tells Git what to ignore

**Why separate?** Easier to find and fix issues. Change styling without touching HTML.

---

### Design Principles Applied

**1. Visual Hierarchy**
- Largest text (h1) = Most important
- Color highlights draw attention
- Spacing creates breathing room

**2. Responsive Design**
- Desktop: Photo and text side-by-side
- Mobile: Stacked vertically
- Always test both!

**3. User Experience**
- Smooth animations (not jarring)
- Hover effects provide feedback
- Clean, uncluttered layout

---

---

## Session 2: Main Value Proposition Section
**Date:** 2025-10-19

### CSS Grid Layout

**What is CSS Grid?**
A powerful 2D layout system for creating rows and columns. Different from Flexbox (which is 1D).

```css
display: grid;
grid-template-columns: repeat(3, 1fr);  /* 3 equal columns */
gap: 40px;                               /* Space between grid items */
```

**Key Concepts:**
- `1fr` = "1 fraction" of available space
- `repeat(3, 1fr)` = shorthand for "1fr 1fr 1fr"
- Grid automatically wraps items into rows

**When to use Grid vs Flexbox?**
- **Grid:** When you need both rows AND columns (like a card layout)
- **Flexbox:** When you need items in a single row OR column

**Principle:** Grid is perfect for card layouts, galleries, and structured content.

---

### CSS Transform Property

**What is Transform?**
Changes an element's position, size, or rotation without affecting document flow.

```css
transform: translateY(-5px);  /* Moves element up 5 pixels */
transform: scale(1.05);       /* Makes element 5% bigger */
```

**Why use Transform instead of changing position?**
- Smoother animations (uses GPU)
- Doesn't trigger layout recalculations
- Better performance

**Common transforms:**
- `translateX()` / `translateY()` - Move horizontally/vertically
- `scale()` - Resize
- `rotate()` - Spin element

---

### Intersection Observer API

**What is it?**
JavaScript API that detects when an element enters or leaves the viewport (visible screen area).

```javascript
const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Element is visible!
            entry.target.classList.add('visible');
        }
    });
}, options);

observer.observe(element);  // Start watching this element
```

**Key Options:**
- `threshold: 0.2` - Trigger when 20% of element is visible
- `rootMargin: '0px 0px -100px 0px'` - Adjust trigger zone

**Why use it?**
- Animate elements as user scrolls
- Lazy load images
- Track user engagement
- Better than scroll event listeners (more performant)

**Principle:** Scroll animations make the site feel dynamic and engaging.

---

### CSS Classes for State Management

**Pattern: Using classes to trigger animations**

```css
.value-section {
    opacity: 0;                    /* Hidden by default */
    transform: translateY(30px);   /* Positioned below */
}

.value-section.visible {
    opacity: 1;                    /* Fade in */
    transform: translateY(0);      /* Move to normal position */
}
```

**How it works:**
1. Element starts hidden and moved down
2. JavaScript adds `.visible` class when scrolled into view
3. CSS transition smoothly animates the change

**Principle:** Separate structure (HTML), appearance (CSS), and behavior (JavaScript). JavaScript only adds/removes classes; CSS handles the visual changes.

---

### Responsive Grid

**Making grids work on mobile:**

```css
.value-details {
    grid-template-columns: repeat(3, 1fr);  /* Desktop: 3 columns */
}

@media (max-width: 768px) {
    .value-details {
        grid-template-columns: 1fr;  /* Mobile: 1 column (stacked) */
    }
}
```

**Principle:** Always design for mobile. Test how your layout collapses on smaller screens.

---

### Design Pattern: Card Hover Effects

**Creating interactive cards:**

```css
.value-item {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.value-item:hover {
    transform: translateY(-5px);              /* Lift up */
    box-shadow: 0 10px 30px rgba(0,0,0,0.1); /* Add shadow */
}
```

**Why this works:**
- Provides visual feedback
- Makes interface feel responsive
- Subtle enough not to distract

**Principle:** Hover effects should enhance, not distract. Keep them subtle and smooth.

---

## Next Steps
- Side Value Propositions section
- Call to Action
- Supporting content sections (Case Studies, Testimonials, Articles)
