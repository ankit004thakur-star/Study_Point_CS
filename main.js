// ==================== MAIN JAVASCRIPT FILE ====================

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

// ==================== INITIALIZATION ====================
function initializeApp() {
    renderTopics();
    setupEventListeners();
    setupSmoothScroll();
    setupMobileMenu();
}

// ==================== RENDER TOPICS ====================
function renderTopics() {
    const topicsGrid = document.getElementById('topicsGrid');
    
    if (!topicsGrid) return;
    
    topicsGrid.innerHTML = '';
    
    studyTopics.forEach(topic => {
        const card = document.createElement('div');
        card.className = 'topic-card';
        card.innerHTML = `
            <div class="topic-icon">${topic.icon}</div>
            <h3>${topic.title}</h3>
            <p>${topic.description}</p>
            <p style="font-size: 0.9rem; color: var(--text-tertiary); margin-bottom: 1.5rem;">
                ${topic.shortContent}
            </p>
            <a href="#" class="topic-link" data-topic-id="${topic.id}">
                Learn More →
            </a>
        `;
        
        card.addEventListener('click', function(e) {
            e.preventDefault();
            loadTopicContent(topic.id);
        });
        
        const link = card.querySelector('.topic-link');
        link.addEventListener('click', function(e) {
            e.preventDefault();
            loadTopicContent(topic.id);
        });
        
        topicsGrid.appendChild(card);
    });
}

// ==================== LOAD TOPIC CONTENT ====================
function loadTopicContent(topicId) {
    const topic = studyTopics.find(t => t.id === topicId);
    
    if (!topic) return;
    
    // Hide topics section and show content area
    document.getElementById('topics').parentElement.style.display = 'none';
    const contentArea = document.getElementById('content-area');
    contentArea.classList.remove('hidden');
    
    // Update content
    document.getElementById('contentTitle').textContent = topic.title;
    document.getElementById('contentBody').innerHTML = topic.content;
    
    // Generate and populate table of contents
    generateTableOfContents();
    
    // Scroll to content area
    setTimeout(() => {
        contentArea.scrollIntoView({ behavior: 'smooth' });
    }, 100);
}

// ==================== BACK TO TOPICS ====================
function backToTopics() {
    const contentArea = document.getElementById('content-area');
    contentArea.classList.add('hidden');
    document.getElementById('topics').parentElement.style.display = 'block';
    document.getElementById('topics').scrollIntoView({ behavior: 'smooth' });
}

// ==================== GENERATE TABLE OF CONTENTS ====================
function generateTableOfContents() {
    const contentBody = document.getElementById('contentBody');
    const toc = document.getElementById('tableOfContents');
    
    if (!contentBody || !toc) return;
    
    // Get all h3 headings from content
    const headings = contentBody.querySelectorAll('h3');
    
    toc.innerHTML = '<h4>Contents</h4><ul>';
    
    headings.forEach((heading, index) => {
        const id = `heading-${index}`;
        heading.id = id;
        
        const listItem = document.createElement('li');
        const link = document.createElement('a');
        link.href = `#${id}`;
        link.textContent = heading.textContent;
        link.className = index === 0 ? 'active' : '';
        
        link.addEventListener('click', function(e) {
            e.preventDefault();
            heading.scrollIntoView({ behavior: 'smooth' });
            updateActiveTocLink(link);
        });
        
        listItem.appendChild(link);
        toc.querySelector('ul').appendChild(listItem);
    });
    
    toc.innerHTML += '</ul>';
    
    // Update active link on scroll
    window.addEventListener('scroll', updateActiveTocOnScroll);
}

// ==================== UPDATE ACTIVE TOC LINK ====================
function updateActiveTocLink(link) {
    document.querySelectorAll('#tableOfContents a').forEach(a => {
        a.classList.remove('active');
    });
    link.classList.add('active');
}

// ==================== UPDATE ACTIVE TOC ON SCROLL ====================
function updateActiveTocOnScroll() {
    const contentBody = document.getElementById('contentBody');
    if (!contentBody) return;
    
    const headings = contentBody.querySelectorAll('h3');
    let activeId = null;
    
    headings.forEach(heading => {
        const rect = heading.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= 200) {
            activeId = heading.id;
        }
    });
    
    document.querySelectorAll('#tableOfContents a').forEach(a => {
        a.classList.remove('active');
        if (a.getAttribute('href') === `#${activeId}`) {
            a.classList.add('active');
        }
    });
}

// ==================== SETUP EVENT LISTENERS ====================
function setupEventListeners() {
    // Contact form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
    }
    
    // Navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                closeMobileMenu();
            }
        });
    });
}

// ==================== HANDLE FORM SUBMISSION ====================
function handleFormSubmit(e) {
    e.preventDefault();
    
    const name = e.target.querySelector('input[type="text"]').value;
    const email = e.target.querySelector('input[type="email"]').value;
    const message = e.target.querySelector('textarea').value;
    
    // Show success message
    const successMsg = document.createElement('div');
    successMsg.style.cssText = `
        background-color: var(--success);
        color: white;
        padding: 1rem;
        border-radius: 8px;
        margin-top: 1rem;
        text-align: center;
    `;
    successMsg.textContent = '✓ Thank you for your message! We\'ll get back to you soon.';
    
    e.target.appendChild(successMsg);
    
    // Reset form
    e.target.reset();
    
    // Remove success message after 5 seconds
    setTimeout(() => {
        successMsg.remove();
    }, 5000);
    
    // Here you would typically send the data to a backend
    console.log('Form submitted:', { name, email, message });
}

// ==================== SETUP SMOOTH SCROLL ====================
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            e.preventDefault();
            
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ==================== MOBILE MENU ====================
function setupMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('navLinks');
    
    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
        
        // Close menu when a link is clicked
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', closeMobileMenu);
        });
    }
}

function closeMobileMenu() {
    const navLinks = document.getElementById('navLinks');
    if (navLinks) {
        navLinks.classList.remove('active');
    }
}

// ==================== SCROLL ANIMATIONS ====================
function observeScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'slideInLeft 0.6s ease-out forwards';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.topic-card').forEach(card => {
        observer.observe(card);
    });
}

// ==================== DARK MODE TOGGLE ====================
function initializeDarkMode() {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDarkMode = localStorage.getItem('darkMode') === 'true' || prefersDark;
    
    if (isDarkMode) {
        document.documentElement.style.colorScheme = 'dark';
    } else {
        document.documentElement.style.colorScheme = 'light';
    }
    
    // Listen for system preference changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        document.documentElement.style.colorScheme = e.matches ? 'dark' : 'light';
    });
}

// ==================== UTILITY FUNCTIONS ====================

/**
 * Format text for display (capitalize first letter, trim whitespace)
 */
function formatText(text) {
    return text.charAt(0).toUpperCase() + text.slice(1).trim();
}

/**
 * Get all topics as an array
 */
function getAllTopics() {
    return studyTopics;
}

/**
 * Get a specific topic by ID
 */
function getTopicById(topicId) {
    return studyTopics.find(t => t.id === topicId);
}

/**
 * Search topics by keyword
 */
function searchTopics(keyword) {
    const lowerKeyword = keyword.toLowerCase();
    return studyTopics.filter(topic => 
        topic.title.toLowerCase().includes(lowerKeyword) ||
        topic.description.toLowerCase().includes(lowerKeyword) ||
        topic.shortContent.toLowerCase().includes(lowerKeyword)
    );
}

/**
 * Get random topic (useful for "Random Topic" feature)
 */
function getRandomTopic() {
    return studyTopics[Math.floor(Math.random() * studyTopics.length)];
}

// ==================== PAGE VISIBILITY HANDLER ====================
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        // Page is hidden, pause animations/videos if needed
        console.log('Page hidden');
    } else {
        // Page is visible again
        console.log('Page visible');
    }
});

// ==================== PERFORMANCE MONITORING ====================
window.addEventListener('load', function() {
    if (window.performance && window.performance.timing) {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        console.log('Page Load Time: ' + pageLoadTime + 'ms');
    }
});

// Initialize dark mode on page load
initializeDarkMode();

// Observe scroll animations when topics are rendered
setTimeout(observeScrollAnimations, 500);
