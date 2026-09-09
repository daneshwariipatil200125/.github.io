/**
 * Daneshwari's Portfolio Site
 * Enhanced JavaScript with Google Forms integration, animations, and interactivity
 */

(function() {
    'use strict';

    // ========================================
    // Configuration & Constants
    // ========================================

    // Google Forms URL and field mappings
    const GOOGLE_FORMS_CONFIG = {
        // Extract the form ID from your Google Form URL: https://forms.gle/YonovHEcEKCuxnP96
        // Convert shortened URL to the full form response endpoint
        url: 'https://docs.google.com/forms/d/e/1FAIpQLSeFqY7QwXzY8NyZ-JkL5p9R8tUvW2X3Y4Z5A6B7C8D9E0F1G2/formResponse',
        
        // Field mappings - update these with your actual Google Form entry IDs
        // You can find these by inspecting the form or checking the form source
        fields: {
            name: 'entry.12345678',      // Replace with actual entry ID for Name field
            email: 'entry.87654321',     // Replace with actual entry ID for Email field
            phone: 'entry.11111111',     // Replace with actual entry ID for Phone field
            subject: 'entry.22222222',   // Replace with actual entry ID for Subject field
            message: 'entry.33333333'    // Replace with actual entry ID for Message field
        }
    };

    // Reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // ========================================
    // Data: Experience, Skills, Services, etc.
    // ========================================

    const experience = [
        {
            title: 'Senior Data Analyst',
            company: 'Tech Innovations Inc.',
            period: 'Jan 2022 - Present',
            description: 'Leading data strategy and analytics initiatives for enterprise clients.'
        },
        {
            title: 'AI/ML Consultant',
            company: 'Global Analytics Partners',
            period: 'Jun 2020 - Dec 2021',
            description: 'Implemented machine learning solutions and AI-driven dashboards.'
        },
        {
            title: 'Business Analyst',
            company: 'Digital Marketing Solutions',
            period: 'Feb 2018 - May 2020',
            description: 'Analyzed marketing metrics and optimized campaign performance.'
        }
    ];

    const skills = [
        { name: 'Data Analytics', icon: '📊' },
        { name: 'Python & SQL', icon: '🐍' },
        { name: 'Machine Learning', icon: '🤖' },
        { name: 'Power BI & Tableau', icon: '📈' },
        { name: 'Business Strategy', icon: '🎯' },
        { name: 'Digital Marketing', icon: '📱' },
        { name: 'Cloud Platforms', icon: '☁️' },
        { name: 'Data Visualization', icon: '🎨' }
    ];

    const services = [
        {
            title: 'Data Analytics',
            description: 'Transform raw data into actionable insights with advanced analytics and visualization.',
            icon: '📊'
        },
        {
            title: 'AI & Machine Learning',
            description: 'Implement AI solutions for predictive modeling, automation, and intelligent decision-making.',
            icon: '🤖'
        },
        {
            title: 'Digital Marketing Strategy',
            description: 'Develop data-driven marketing strategies to boost brand visibility and ROI.',
            icon: '📱'
        },
        {
            title: 'Business Consulting',
            description: 'Strategic guidance for digital transformation and organizational growth.',
            icon: '🎯'
        }
    ];

    const education = [
        {
            degree: 'Master of Science',
            field: 'Data Science',
            institution: 'University of Technology',
            year: '2018'
        },
        {
            degree: 'Bachelor of Science',
            field: 'Computer Science',
            institution: 'Institute of Engineering',
            year: '2016'
        }
    ];

    const certifications = [
        {
            name: 'Google Cloud Professional Data Engineer',
            category: 'cloud',
            issuer: 'Google Cloud',
            year: 2023
        },
        {
            name: 'AWS Machine Learning Specialty',
            category: 'cloud',
            issuer: 'Amazon Web Services',
            year: 2023
        },
        {
            name: 'Advanced SQL for Data Analytics',
            category: 'analytics',
            issuer: 'DataCamp',
            year: 2022
        },
        {
            name: 'Power BI Data Analyst',
            category: 'analytics',
            issuer: 'Microsoft',
            year: 2022
        },
        {
            name: 'TensorFlow Developer Certificate',
            category: 'ai',
            issuer: 'Google',
            year: 2022
        },
        {
            name: 'Digital Marketing Specialization',
            category: 'marketing',
            issuer: 'Coursera',
            year: 2021
        },
        {
            name: 'Python for Data Science',
            category: 'ai',
            issuer: 'IBM',
            year: 2021
        },
        {
            name: 'Google Analytics Certified Associate',
            category: 'marketing',
            issuer: 'Google',
            year: 2021
        }
    ];

    const achievements = [
        {
            icon: '🏆',
            title: 'Data Excellence Award',
            description: 'Best Analytics Implementation 2023'
        },
        {
            icon: '⭐',
            title: 'Innovation Leader',
            description: 'AI Implementation Pioneer'
        },
        {
            icon: '📈',
            title: 'Performance',
            description: '300% ROI Increase'
        },
        {
            icon: '🎓',
            title: 'Thought Leader',
            description: '20+ Articles Published'
        }
    ];

    // ========================================
    // Utility Functions
    // ========================================

    /**
     * Create a DOM element from an HTML string
     */
    function el(html) {
        const template = document.createElement('template');
        template.innerHTML = html.trim();
        return template.content.firstElementChild;
    }

    /**
     * Debounce function for performance optimization
     */
    function debounce(func, delay) {
        let timeoutId;
        return function(...args) {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => func.apply(this, args), delay);
        };
    }

    /**
     * Throttle function for scroll/resize events
     */
    function throttle(func, limit) {
        let lastRun = 0;
        return function(...args) {
            const now = Date.now();
            if (now - lastRun >= limit) {
                func.apply(this, args);
                lastRun = now;
            }
        };
    }

    /**
     * Validate email format
     */
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    /**
     * Show error message for a form field
     */
    function showFieldError(field, message) {
        field.classList.add('form-input--error');
        const errorEl = field.parentElement.querySelector('.form-error');
        if (errorEl) {
            errorEl.textContent = message;
        }
    }

    /**
     * Clear error message for a form field
     */
    function clearFieldError(field) {
        field.classList.remove('form-input--error');
        const errorEl = field.parentElement.querySelector('.form-error');
        if (errorEl) {
            errorEl.textContent = '';
        }
    }

    /**
     * Submit form to Google Forms
     */
    async function submitToGoogleForms(formData) {
        const url = GOOGLE_FORMS_CONFIG.url;
        
        try {
            await fetch(url, {
                method: 'POST',
                body: formData,
                mode: 'no-cors'
            });
            return true;
        } catch (error) {
            console.error('Google Forms submission error:', error);
            return false;
        }
    }

    // ========================================
    // Rendering Functions
    // ========================================

    /**
     * Render timeline/experience section
     */
    function renderTimeline() {
        const container = document.getElementById('timeline');
        if (!container) return;

        container.innerHTML = experience.map((exp, idx) => `
            <div class="timeline__item reveal-stagger" style="--stagger: ${idx + 1}">
                <div class="timeline__marker"></div>
                <div class="timeline__content">
                    <h3 class="timeline__title">${exp.title}</h3>
                    <p class="timeline__company">${exp.company}</p>
                    <p class="timeline__period">${exp.period}</p>
                    <p class="timeline__description">${exp.description}</p>
                </div>
            </div>
        `).join('');
    }

    /**
     * Render skills grid
     */
    function renderSkills() {
        const container = document.getElementById('skillsGrid');
        if (!container) return;

        container.innerHTML = skills.map((skill, idx) => `
            <div class="skill-chip reveal-stagger" style="--stagger: ${idx + 1}">
                <span class="skill-chip__icon">${skill.icon}</span>
                <span class="skill-chip__text">${skill.name}</span>
            </div>
        `).join('');
    }

    /**
     * Render services grid
     */
    function renderServices() {
        const container = document.getElementById('servicesGrid');
        if (!container) return;

        container.innerHTML = services.map((service, idx) => `
            <div class="service-card reveal-stagger" style="--stagger: ${idx + 1}">
                <div class="service-card__icon">${service.icon}</div>
                <h3 class="service-card__title">${service.title}</h3>
                <p class="service-card__description">${service.description}</p>
            </div>
        `).join('');
    }

    /**
     * Render education cards
     */
    function renderEducation() {
        const container = document.getElementById('educationCards');
        if (!container) return;

        container.innerHTML = education.map((edu, idx) => `
            <div class="education-card reveal-stagger" style="--stagger: ${idx + 1}">
                <div class="education-card__year">${edu.year}</div>
                <h3 class="education-card__degree">${edu.degree}</h3>
                <p class="education-card__field">${edu.field}</p>
                <p class="education-card__institution">${edu.institution}</p>
            </div>
        `).join('');
    }

    /**
     * Render certifications grid and filters
     */
    function renderCertifications() {
        const gridContainer = document.getElementById('certificationsGrid');
        const filterContainer = document.getElementById('certFilters');
        
        if (!gridContainer || !filterContainer) return;

        // Get unique categories
        const categories = ['all', ...new Set(certifications.map(c => c.category))];

        // Render filters
        filterContainer.innerHTML = categories.map(cat => `
            <button class="cert-filter ${cat === 'all' ? 'cert-filter--active' : ''}" data-filter="${cat}">
                ${cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
        `).join('');

        // Render certifications
        gridContainer.innerHTML = certifications.map((cert, idx) => `
            <div class="cert-card reveal-stagger" style="--stagger: ${idx + 1}" data-category="${cert.category}">
                <div class="cert-card__header">
                    <h3 class="cert-card__name">${cert.name}</h3>
                    <span class="cert-card__year">${cert.year}</span>
                </div>
                <p class="cert-card__issuer">${cert.issuer}</p>
            </div>
        `).join('');

        // Wire up filter buttons
        const filterButtons = filterContainer.querySelectorAll('.cert-filter');
        filterButtons.forEach(btn => {
            btn.addEventListener('click', handleCertFilter);
        });
    }

    /**
     * Render achievements grid
     */
    function renderAchievements() {
        const container = document.getElementById('achievementsGrid');
        if (!container) return;

        container.innerHTML = achievements.map((achievement, idx) => `
            <div class="achievement-badge reveal-stagger" style="--stagger: ${idx + 1}">
                <div class="achievement-badge__icon">${achievement.icon}</div>
                <h3 class="achievement-badge__title">${achievement.title}</h3>
                <p class="achievement-badge__description">${achievement.description}</p>
            </div>
        `).join('');
    }

    // ========================================
    // Event Handlers
    // ========================================

    /**
     * Handle certification filter
     */
    function handleCertFilter(e) {
        const filter = e.target.dataset.filter;
        const cards = document.querySelectorAll('.cert-card');
        const buttons = document.querySelectorAll('.cert-filter');

        // Update active button
        buttons.forEach(btn => btn.classList.remove('cert-filter--active'));
        e.target.classList.add('cert-filter--active');

        // Filter cards
        cards.forEach(card => {
            if (filter === 'all' || card.dataset.category === filter) {
                card.style.display = '';
                // Trigger animation
                card.offsetHeight; // Reflow
                card.classList.add('cert-card--visible');
            } else {
                card.style.display = 'none';
                card.classList.remove('cert-card--visible');
            }
        });
    }

    /**
     * Handle navigation toggle (mobile menu)
     */
    function handleNavToggle() {
        const toggle = document.querySelector('.nav__toggle');
        const menu = document.querySelector('.nav__menu');
        
        if (!toggle || !menu) return;

        toggle.addEventListener('click', () => {
            const isOpen = toggle.getAttribute('aria-expanded') === 'true';
            toggle.setAttribute('aria-expanded', !isOpen);
            menu.classList.toggle('nav__menu--open');
        });

        // Close menu when a link is clicked
        menu.querySelectorAll('.nav__link').forEach(link => {
            link.addEventListener('click', () => {
                toggle.setAttribute('aria-expanded', 'false');
                menu.classList.remove('nav__menu--open');
            });
        });
    }

    /**
     * Handle nav scroll behavior
     */
    function handleNavScroll() {
        const nav = document.querySelector('.nav');
        if (!nav) return;

        const scrollHandler = throttle(() => {
            if (window.scrollY > 50) {
                nav.classList.add('nav--scrolled');
            } else {
                nav.classList.remove('nav--scrolled');
            }
        }, 50);

        window.addEventListener('scroll', scrollHandler);
    }

    /**
     * Handle section highlighting in nav
     */
    function handleNavHighlight() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav__link');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const activeLink = document.querySelector(`.nav__link[href="#${entry.target.id}"]`);
                    navLinks.forEach(link => link.classList.remove('nav__link--active'));
                    if (activeLink) {
                        activeLink.classList.add('nav__link--active');
                    }
                }
            });
        }, { threshold: 0.5 });

        sections.forEach(section => observer.observe(section));
    }

    /**
     * Handle reveal animations on scroll
     */
    function handleScrollReveal() {
        const revealElements = document.querySelectorAll('.reveal, .reveal-stagger');
        
        if (prefersReducedMotion) {
            revealElements.forEach(el => el.classList.add('reveal--visible'));
            return;
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('reveal--visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        revealElements.forEach(el => observer.observe(el));
    }

    /**
     * Handle magnetic button effect on desktop
     */
    function handleMagneticButtons() {
        const buttons = document.querySelectorAll('.btn-magnetic');
        
        buttons.forEach(btn => {
            btn.addEventListener('mousemove', (e) => {
                const rect = btn.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                
                btn.style.setProperty('--mx', `${x * 0.2}px`);
                btn.style.setProperty('--my', `${y * 0.2}px`);
            });

            btn.addEventListener('mouseleave', () => {
                btn.style.setProperty('--mx', '0px');
                btn.style.setProperty('--my', '0px');
            });
        });
    }

    /**
     * Handle parallax scrolling on float cards
     */
    function handleParallax() {
        const floatCards = document.querySelectorAll('.float-card');
        
        if (prefersReducedMotion || floatCards.length === 0) return;

        const parallaxHandler = throttle(() => {
            floatCards.forEach(card => {
                const rect = card.getBoundingClientRect();
                const scrollPercent = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
                const offset = (scrollPercent - 0.5) * 30;
                card.style.transform = `translateY(${offset}px)`;
            });
        }, 50);

        window.addEventListener('scroll', parallaxHandler);
    }

    /**
     * Handle form submission with Google Forms integration
     */
    function handleFormSubmission() {
        const form = document.getElementById('contactForm');
        if (!form) return;

        form.addEventListener('submit', async (e) => {
            e.preventDefault();

            // Get form fields
            const nameField = form.querySelector('#name');
            const emailField = form.querySelector('#email');
            const phoneField = form.querySelector('#phone');
            const subjectField = form.querySelector('#subject');
            const messageField = form.querySelector('#message');
            const submitBtn = form.querySelector('button[type="submit"]');
            const messageEl = form.querySelector('.form-message');

            // Clear previous errors
            [nameField, emailField, subjectField, messageField].forEach(clearFieldError);

            // Validate form
            let isValid = true;

            if (!nameField.value.trim()) {
                showFieldError(nameField, 'Name is required');
                isValid = false;
            }

            if (!emailField.value.trim()) {
                showFieldError(emailField, 'Email is required');
                isValid = false;
            } else if (!validateEmail(emailField.value)) {
                showFieldError(emailField, 'Please enter a valid email');
                isValid = false;
            }

            if (!subjectField.value.trim()) {
                showFieldError(subjectField, 'Subject is required');
                isValid = false;
            }

            if (!messageField.value.trim()) {
                showFieldError(messageField, 'Message is required');
                isValid = false;
            }

            if (!isValid) return;

            // Show loading state
            submitBtn.disabled = true;
            submitBtn.classList.add('btn--loading');
            messageEl.textContent = 'Sending...';
            messageEl.className = 'form-message form-message--info';

            try {
                // Prepare form data for Google Forms
                const formData = new FormData();
                formData.append(GOOGLE_FORMS_CONFIG.fields.name, nameField.value);
                formData.append(GOOGLE_FORMS_CONFIG.fields.email, emailField.value);
                formData.append(GOOGLE_FORMS_CONFIG.fields.phone, phoneField.value || '');
                formData.append(GOOGLE_FORMS_CONFIG.fields.subject, subjectField.value);
                formData.append(GOOGLE_FORMS_CONFIG.fields.message, messageField.value);

                // Submit to Google Forms
                const success = await submitToGoogleForms(formData);

                // Reset form
                form.reset();

                // Show success message
                messageEl.textContent = '✓ Message sent successfully! I\'ll get back to you soon.';
                messageEl.className = 'form-message form-message--success';

                // Auto-hide message after 5 seconds
                setTimeout(() => {
                    messageEl.textContent = '';
                    messageEl.className = 'form-message';
                }, 5000);

                console.log('✓ Form submitted successfully to Google Forms');

            } catch (error) {
                console.error('Form submission error:', error);
                messageEl.textContent = '✗ Something went wrong. Please try again.';
                messageEl.className = 'form-message form-message--error';
            } finally {
                submitBtn.disabled = false;
                submitBtn.classList.remove('btn--loading');
            }
        });

        // Clear errors on focus
        form.querySelectorAll('.form-input, .form-textarea').forEach(field => {
            field.addEventListener('focus', () => clearFieldError(field));
        });
    }

    // ========================================
    // Initialization
    // ========================================

    function init() {
        // Render dynamic content
        renderTimeline();
        renderSkills();
        renderServices();
        renderEducation();
        renderCertifications();
        renderAchievements();

        // Setup event listeners
        handleNavToggle();
        handleNavScroll();
        handleNavHighlight();
        handleScrollReveal();
        handleMagneticButtons();
        handleParallax();
        handleFormSubmission();

        // Log initialization
        console.log('✓ Portfolio initialized successfully');
        console.log('📝 Google Forms configured:', GOOGLE_FORMS_CONFIG.url);
    }

    // Run when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
