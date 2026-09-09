# 🎯 Quick Customization Guide

Fast reference for common customization tasks.

## 🎨 Change Colors

Edit `:root` variables in `site/assets/css/styles.css` (lines 1-40):

```css
:root {
    /* Main Colors */
    --color-bg: #0a0e27;              /* Dark background */
    --color-accent: #00d9ff;          /* Bright cyan */
    --color-accent-dark: #00a8cc;     /* Darker cyan */
    --color-text: #e8eaf6;            /* Light text */
    --color-text-secondary: #b0b9d4;  /* Secondary text */
    --color-text-tertiary: #8892b0;   /* Tertiary text */
    --color-success: #4ade80;         /* Green (success) */
    --color-error: #f87171;           /* Red (error) */
}
```

### Quick Color Themes

**Ocean Blue Theme:**
```css
--color-accent: #0088ff;
--color-accent-dark: #0066cc;
```

**Purple Theme:**
```css
--color-accent: #a78bfa;
--color-accent-dark: #8b5cf6;
```

**Green Theme:**
```css
--color-accent: #10b981;
--color-accent-dark: #059669;
```

## 📝 Edit Content

### Hero Section
File: `site/index.html` (lines 90-110)

```html
<h1 class="hero__title">Your Headline</h1>
<p class="hero__subtitle">Your subtitle text</p>
```

### Experience Timeline
File: `site/assets/js/script.js` (lines 50-65)

```javascript
const experience = [
    {
        title: 'Your Job Title',
        company: 'Company Name',
        period: 'Jan 2024 - Present',
        description: 'What you did here...'
    }
];
```

### Skills
File: `site/assets/js/script.js` (lines 67-76)

```javascript
const skills = [
    { name: 'Your Skill', icon: '📊' },  // Change icon (any emoji)
];
```

### Services
File: `site/assets/js/script.js` (lines 78-98)

```javascript
const services = [
    {
        title: 'Service Name',
        description: 'Service description...',
        icon: '📊'
    }
];
```

### Certifications
File: `site/assets/js/script.js` (lines 110-145)

```javascript
const certifications = [
    {
        name: 'Certification Name',
        category: 'ai',  // or 'cloud', 'analytics', 'marketing'
        issuer: 'Issuer',
        year: 2024
    }
];
```

### Education
File: `site/assets/js/script.js` (lines 100-108)

```javascript
const education = [
    {
        degree: 'Master of Science',
        field: 'Your Field',
        institution: 'University Name',
        year: '2018'
    }
];
```

### Achievements
File: `site/assets/js/script.js` (lines 147-158)

```javascript
const achievements = [
    {
        icon: '🏆',
        title: 'Achievement Title',
        description: 'Description'
    }
];
```

## 🔌 Configure Google Forms

File: `site/assets/js/script.js` (lines 20-30)

```javascript
const GOOGLE_FORMS_CONFIG = {
    url: 'https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse',
    fields: {
        name: 'entry.12345678',
        email: 'entry.87654321',
        phone: 'entry.11111111',
        subject: 'entry.22222222',
        message: 'entry.33333333'
    }
};
```

👉 **See [GOOGLE_FORMS_SETUP.md](./GOOGLE_FORMS_SETUP.md) for detailed instructions**

## 🖼️ Change Favicon

File: `site/index.html` (line 12)

Replace this:
```html
<link rel="icon" href="data:image/svg+xml,..." type="image/svg+xml">
```

With your favicon:
```html
<link rel="icon" href="assets/favicon.png" type="image/png">
```

## 📱 Adjust Spacing & Sizing

Edit `:root` spacing variables in `site/assets/css/styles.css`:

```css
:root {
    --space-md: 1rem;      /* Base spacing */
    --space-lg: 1.5rem;    /* Larger spacing */
    --space-xl: 2rem;      /* Extra large */
    --space-2xl: 3rem;     /* 2x extra large */
    --space-3xl: 4rem;     /* 3x extra large */
    --space-4xl: 6rem;     /* 4x extra large */
}
```

Increase all spacing by 20%:
```css
--space-md: 1.2rem;
--space-lg: 1.8rem;
--space-xl: 2.4rem;
```

## 🎬 Adjust Animation Speed

Edit duration variables in `site/assets/css/styles.css`:

```css
:root {
    --duration-fast: 150ms;    /* 0.15 seconds */
    --duration-base: 300ms;    /* 0.3 seconds */
    --duration-slow: 500ms;    /* 0.5 seconds */
}
```

**Faster animations (snappier):**
```css
--duration-fast: 100ms;
--duration-base: 200ms;
--duration-slow: 300ms;
```

**Slower animations (more elegant):**
```css
--duration-fast: 200ms;
--duration-base: 500ms;
--duration-slow: 800ms;
```

## 🔤 Change Fonts

Edit font variables in `site/assets/css/styles.css`:

```css
:root {
    --font-family-base: 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    --font-family-mono: 'Fira Code', monospace;
}
```

### Popular Google Fonts

Add to `site/index.html` `<head>`:

```html
<!-- Poppins (Modern) -->
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet">

<!-- Raleway (Elegant) -->
<link href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;600;700&display=swap" rel="stylesheet">

<!-- Inter (Minimal) -->
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

Then update in CSS:
```css
--font-family-base: 'Poppins', sans-serif;
```

## 🎯 Hide/Show Sections

To hide a section, add `display: none;` to its CSS or comment out in HTML:

**Hide the Projects section:**
```html
<!-- <section id="projects" class="projects" role="region">
    ...
</section> -->
```

Or in CSS:
```css
#projects {
    display: none;
}
```

## 📧 Update Contact Info

File: `site/index.html` (lines 400-420)

```html
<div class="contact__info-item">
    <h3>Email</h3>
    <a href="mailto:your@email.com">your@email.com</a>
</div>
<div class="contact__info-item">
    <h3>Phone</h3>
    <a href="tel:+911234567890">+91 1234 567 890</a>
</div>
<div class="contact__info-item">
    <h3>Follow</h3>
    <div class="social-links">
        <a href="https://linkedin.com/in/yourprofile" class="social-link">LinkedIn</a>
        <a href="https://twitter.com/yourprofile" class="social-link">Twitter</a>
        <a href="https://github.com/yourprofile" class="social-link">GitHub</a>
    </div>
</div>
```

## 🌐 Update Navigation Links

File: `site/index.html` (lines 25-35)

```html
<ul class="nav__menu">
    <li><a href="#hero" class="nav__link">Home</a></li>
    <li><a href="#experience" class="nav__link">Experience</a></li>
    <!-- Add more sections here -->
</ul>
```

## 🎨 Change Border Radius (Roundness)

Edit radius variables in `site/assets/css/styles.css`:

```css
:root {
    --radius-sm: 0.375rem;    /* Slightly rounded */
    --radius-md: 0.5rem;      /* Standard */
    --radius-lg: 1rem;        /* More rounded */
    --radius-xl: 1.5rem;      /* Very rounded */
}
```

**For sharp corners:**
```css
--radius-sm: 0;
--radius-md: 0.25rem;
--radius-lg: 0.5rem;
--radius-xl: 0.75rem;
```

## 🌙 Adjust Opacity & Transparency

Edit background colors in CSS to be more/less transparent:

```css
/* Original (50% opacity) */
background: rgba(16, 21, 45, 0.5);

/* More transparent (30%) */
background: rgba(16, 21, 45, 0.3);

/* Less transparent (70%) */
background: rgba(16, 21, 45, 0.7);

/* Opaque (100%) */
background: rgba(16, 21, 45, 1);
```

## 📱 Adjust Mobile Breakpoint

Edit media queries in `site/assets/css/styles.css`:

```css
/* Current: Mobile at 768px */
@media (max-width: 768px) { ... }

/* For larger phones (change to 820px) */
@media (max-width: 820px) { ... }

/* For smaller phones (change to 640px) */
@media (max-width: 640px) { ... }
```

## 🔄 Change Section Padding

Edit section padding in `site/assets/css/styles.css` (line ~150):

```css
section {
    padding: var(--space-4xl) 0;  /* Top & bottom padding */
}
```

Adjust:
```css
section {
    padding: var(--space-3xl) 0;  /* Smaller padding */
    /* or */
    padding: var(--space-4xl) 0;  /* Larger padding */
}
```

---

## 💡 Tips

- **Always test locally** before deploying: `python3 -m http.server 8000`
- **Check the browser console** (F12) for any errors
- **Use DevTools** to inspect and test changes in real-time
- **Keep backups** of original files before major changes
- **Test on mobile** using DevTools device emulation or real devices

## 📚 Related Files

- [README.md](./README.md) - Full documentation
- [GOOGLE_FORMS_SETUP.md](./GOOGLE_FORMS_SETUP.md) - Google Forms setup guide
- `site/index.html` - HTML structure
- `site/assets/css/styles.css` - All styling
- `site/assets/js/script.js` - All JavaScript behavior

---

**Need more help?** Check the main [README.md](./README.md) for detailed information.
