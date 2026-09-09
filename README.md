# Daneshwari H Patil — Enhanced Portfolio Site

A modern, fully-responsive single-page portfolio showcasing expertise in **AI, Data Analytics, Digital Marketing & Business Strategy**. Built with vanilla HTML/CSS/JavaScript featuring scroll-reveal animations, interactive components, and Google Forms integration.

## ✨ Features

### 🎨 Design & UX
- **Dark Midnight Theme** with cyan accent colors
- **Smooth scroll-reveal animations** for all sections
- **Responsive design** that works on all devices (mobile, tablet, desktop)
- **Parallax scrolling effects** on hero floating cards
- **Magnetic button effects** that follow your cursor on desktop
- **Accessible** with WCAG compliance and keyboard navigation
- **Performance optimized** with no build step required

### 📱 Interactive Sections
- **Fixed Navigation** with scroll-aware styling and mobile menu
- **Hero Section** with floating stat cards and scroll cue
- **Timeline** for professional experience with visual indicators
- **Skills Grid** with icons and hover effects
- **Services Cards** showcasing offerings
- **Featured Projects** with detailed case studies
- **Education Cards** with year indicators
- **Filterable Certifications** (filter by category: AI, Cloud, Analytics, Marketing)
- **Achievement Badges** with icons and descriptions
- **Contact Form** with validation and Google Forms integration

### 📝 Form Features
- **Client-side validation** with error messages
- **Real-time error clearing** on focus
- **Success/error notifications** with auto-hide
- **Loading state** with spinner animation
- **Google Forms integration** (no-CORS mode)
- **Accessible form fields** with labels and aria attributes

### ⚡ Performance & Accessibility
- **IntersectionObserver API** for efficient scroll animations
- **Throttled/debounced events** for smooth scrolling
- **Lazy animation rendering** (respects `prefers-reduced-motion`)
- **ARIA labels** and semantic HTML
- **Keyboard accessible** navigation
- **Screen reader friendly**

## 📁 Project Structure

```
site/
├── index.html              # Main HTML with semantic structure
├── assets/
│   ├── css/
│   │   └── styles.css      # All styling (1000+ lines, well-organized)
│   └── js/
│       └── script.js       # All behavior & interactivity (600+ lines)
└── README.md               # This file

GOOGLE_FORMS_SETUP.md       # Google Forms integration guide
```

## 🚀 Quick Start

### Running Locally

No build step required! Just serve the `site/` folder with any static server:

```bash
# Python 3
cd site/
python3 -m http.server 8000

# Node.js (if installed)
cd site/
npx serve .

# Or use any other static server
```

Then open **http://localhost:8000** in your browser.

> ⚠️ **Note:** Opening `index.html` directly via `file://` may restrict some features (e.g., form submissions). Always use a local server.

### Deploying to GitHub Pages

The site is ready to deploy as-is to any static host:

1. Push the `site/` folder contents to your GitHub Pages repo
2. Ensure the `assets/` folder is alongside `index.html`
3. GitHub Pages will serve it automatically

```bash
# From your repo root
cp -r site/* .
git add .
git commit -m "Deploy portfolio"
git push
```

## 🔧 Configuration & Customization

### Text & Content

Edit content directly in `index.html`:

```html
<h1 class="hero__title">Your Title Here</h1>
<p class="hero__subtitle">Your subtitle...</p>
```

### Data-Driven Sections

Edit arrays in `site/assets/js/script.js` (around line 50-150):

```javascript
const experience = [
    {
        title: 'Your Job Title',
        company: 'Your Company',
        period: 'Date Range',
        description: 'Description'
    },
    // ... more items
];

const skills = [
    { name: 'Skill Name', icon: '📊' },
    // ... more skills
];

const certifications = [
    {
        name: 'Certification Name',
        category: 'ai', // or 'cloud', 'analytics', 'marketing'
        issuer: 'Issuer Name',
        year: 2024
    },
    // ... more certs
];
```

### Colors & Design Tokens

Edit CSS variables in `site/assets/css/styles.css` (`:root` section):

```css
:root {
    --color-bg: #0a0e27;              /* Background */
    --color-accent: #00d9ff;          /* Accent (cyan) */
    --color-accent-dark: #00a8cc;     /* Darker accent */
    --color-text: #e8eaf6;            /* Text color */
    /* ... more tokens ... */
}
```

### Styling Sections

Each section has its own CSS block (well-commented):

- `/* ======== Navigation ======== */`
- `/* ======== Hero Section ======== */`
- `/* ======== Timeline / Experience ======== */`
- `/* ======== Skills Section ======== */`
- `/* ======== Services Section ======== */`
- `/* ======== Projects Section ======== */`
- `/* ======== Education Section ======== */`
- `/* ======== Certifications Section ======== */`
- `/* ======== Achievements Section ======== */`
- `/* ======== Contact Form ======== */`

### Favicon

Replace the inline SVG in `index.html` `<head>`:

```html
<link rel="icon" href="path/to/your/favicon.png" type="image/png">
```

## 📋 Google Forms Integration

### Setup (Quick)

1. Get your Google Form entry IDs and form URL
2. Open `site/assets/js/script.js` and find `GOOGLE_FORMS_CONFIG` (line ~20)
3. Replace with your values:

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

**👉 See [GOOGLE_FORMS_SETUP.md](./GOOGLE_FORMS_SETUP.md) for detailed instructions**

### How It Works

- Form data is sent via `fetch` with `mode: 'no-cors'` (fire-and-forget)
- Google Forms doesn't return CORS headers, but the submission still succeeds server-side
- Responses appear in your Google Form automatically
- The contact form shows a success message to the user

## 🎨 Code Organization

### JavaScript (`script.js`)

```
1. Configuration & Constants
   - Google Forms config
   - Reduced motion preference
   
2. Data Arrays
   - experience, skills, services, education, certifications, achievements
   
3. Utility Functions
   - el() - Create DOM from HTML string
   - debounce() - Performance optimization
   - throttle() - Scroll event optimization
   - validateEmail() - Email validation
   - showFieldError() / clearFieldError() - Form error handling
   - submitToGoogleForms() - Form submission
   
4. Rendering Functions
   - renderTimeline() - Experience section
   - renderSkills() - Skills grid
   - renderServices() - Services cards
   - renderEducation() - Education cards
   - renderCertifications() - Certifications + filters
   - renderAchievements() - Achievement badges
   
5. Event Handlers
   - handleCertFilter() - Certification filtering
   - handleNavToggle() - Mobile menu
   - handleNavScroll() - Nav scroll styling
   - handleNavHighlight() - Active section highlighting
   - handleScrollReveal() - Reveal animations
   - handleMagneticButtons() - Button cursor effect
   - handleParallax() - Parallax scrolling
   - handleFormSubmission() - Form validation & submission
   
6. Initialization
   - init() - Called on DOMContentLoaded
```

### CSS (`styles.css`)

```
1. Design Tokens
   - Colors, typography, spacing, shadows, animations
   
2. Base Styles & Resets
   - Normalize, accessibility, reduced motion
   
3. Typography
   - Headings, paragraphs, links
   
4. Layout & Container
   - Main layout, responsive sections
   
5. Component Sections (in order of appearance)
   - Navigation
   - Background Effects
   - Hero Section
   - Buttons
   - Section Headers
   - Timeline / Experience
   - Skills
   - Services
   - Projects
   - Education
   - Certifications
   - Achievements
   - Contact Form
   - Footer
   
6. Animations
   - Reveal on scroll
   - Bounce animation
   - Spin animation
   
7. Responsive Breakpoints
   - 1024px, 768px, 480px
```

## 📱 Responsive Breakpoints

- **Desktop**: 1200px+ (full layout)
- **Tablet**: 768px - 1024px (adjusted grid, stacked sections)
- **Mobile**: < 768px (single column, mobile menu, touch-friendly)
- **Small Mobile**: < 480px (further optimizations)

## ♿ Accessibility Features

- ✅ Semantic HTML (`<nav>`, `<main>`, `<section>`, `<footer>`)
- ✅ ARIA labels (`aria-label`, `aria-expanded`, `aria-required`)
- ✅ Focus visible styles on all interactive elements
- ✅ Skip to main content link
- ✅ Keyboard navigation (Tab, Enter, Escape)
- ✅ Form field labels with associations
- ✅ Error messages with `role="alert"`
- ✅ Respects `prefers-reduced-motion` media query

## 🎯 Browser Support

- ✅ Chrome/Edge 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

**Requirements:**
- CSS Grid & Flexbox support
- ES6+ JavaScript (const, arrow functions, template literals)
- IntersectionObserver API
- Fetch API

## 🔍 Performance

- **No build step** - Pure HTML/CSS/JS
- **Fast animations** - 60fps scroll reveal with throttling
- **Optimized selectors** - Efficient DOM queries
- **Minimal reflows** - Debounced/throttled events
- **No external dependencies** - Vanilla code only
- **Lazy animations** - Respects `prefers-reduced-motion`

## 📊 File Sizes (Approximate)

- `index.html` - 14 KB
- `styles.css` - 28 KB
- `script.js` - 23 KB
- **Total** - ~65 KB (uncompressed)

## 🐛 Troubleshooting

### Form submissions not working?
1. Check browser console (F12) for errors
2. Verify Google Forms entry IDs are correct
3. Ensure you're using a local server (not `file://`)
4. Check [GOOGLE_FORMS_SETUP.md](./GOOGLE_FORMS_SETUP.md)

### Animations not showing?
1. Check if `prefers-reduced-motion` is enabled in OS
2. Verify JavaScript is enabled
3. Check browser console for errors

### Mobile menu not working?
1. Check if JavaScript loaded correctly
2. Verify `.nav__toggle` button is visible on small screens
3. Check z-index conflicts in CSS

### Styles not loading?
1. Ensure `assets/css/styles.css` path is correct
2. Check browser network tab (F12) for 404 errors
3. Verify CSS file is in the same directory as HTML

## 📚 Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern layout (Grid, Flexbox), animations, transitions
- **JavaScript (ES6+)** - Vanilla JS, no frameworks
- **Google Forms API** - Form submission backend
- **IntersectionObserver API** - Efficient animations
- **Fetch API** - HTTP requests

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Credits

Built with ❤️ by [Daneshwari H Patil](https://github.com/daneshwariipatil200125)

---

## 📞 Contact

- **Email**: daneshwari@example.com
- **Phone**: +91 9876 543 210
- **LinkedIn**: [Your Profile](https://linkedin.com)
- **GitHub**: [@daneshwariipatil200125](https://github.com/daneshwariipatil200125)

---

**Last Updated**: September 2024
**Version**: 2.0 (Enhanced with Google Forms Integration)
