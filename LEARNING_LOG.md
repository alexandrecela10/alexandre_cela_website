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

## Next Steps
- Main Value Proposition section
- Side Value Propositions
- Call to Action
- Supporting content sections
