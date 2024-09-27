const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        burger.classList.toggle('toggle');
    });
}

const skills = [
    'Python', 'C', 'MySQL', 'TensorFlow', 'PyTorch', 'Scikit-learn',
    'Natural Language Processing', 'Computer Vision', 'Deep Learning',
    'Machine Learning', 'Data Analysis', 'Neural Networks',
    'Reinforcement Learning', 'Big Data', 'SQL', 'NoSQL',
    'Docker', 'Git', 'AWS', 'Azure', 'Kubernetes'
];

const projects = [
    { 
        name: 'Face Recognition System', 
        description: 'Developed a real-time face recognition system using deep learning techniques. The system can identify multiple faces in a video stream, with applications in security and user authentication.',
        image: 'images/face-recognition-system.jpg'
    },
    { 
        name: 'AI-Powered Personal Assistant', 
        description: 'Created a sophisticated personal assistant using natural language processing and machine learning, capable of understanding context and performing complex tasks.',
        image: 'images/ai-personal-assistant.jpg'
    },
    { 
        name: 'Autonomous Drone Navigation', 
        description: 'Implemented an AI system for autonomous drone navigation using computer vision and reinforcement learning. The drone can navigate complex environments and avoid obstacles in real-time.',
        image: 'images/autonomous-drone-navigation.jpg'
    },
    { 
        name: 'Medical Image Analysis', 
        description: 'Developed a deep learning model for analyzing medical images, specifically for detecting abnormalities in X-rays and MRI scans. The system aids in early diagnosis of various conditions.',
        image: 'images/medical-image-analysis.jpg'
    },
    { 
        name: 'Natural Language Processing Chatbot', 
        description: 'Built an advanced chatbot using NLP techniques, capable of understanding and generating human-like responses. The chatbot can be integrated into various platforms for customer support.',
        image: 'images/nlp-chatbot.jpg'
    },
    { 
        name: 'Predictive Maintenance System', 
        description: 'Created a predictive maintenance system using IoT sensors and machine learning algorithms to forecast equipment failures and optimize maintenance schedules in industrial settings.',
        image: 'images/predictive-maintenance-system.jpg'
    }
];

const populateSkills = () => {
    const skillsContainer = document.getElementById('skills-container');
    skills.forEach((skill, index) => {
        const skillElement = document.createElement('div');
        skillElement.classList.add('skill-item');
        skillElement.innerHTML = `
            <span>${skill}</span>
            <div class="skill-bar" style="width: 0%;"></div>
        `;
        skillElement.style.animation = `fadeIn 0.5s ease forwards ${index * 0.1}s`;
        skillsContainer.appendChild(skillElement);

        // Animate skill bar after a delay
        setTimeout(() => {
            const skillBar = skillElement.querySelector('.skill-bar');
            skillBar.style.width = `${Math.random() * 50 + 50}%`; // Random width between 50% and 100%
        }, 500 + index * 100);
    });
}

const populateProjects = () => {
    const projectsContainer = document.querySelector('.projects-container');
    if (!projectsContainer) {
        console.error('Projects container not found');
        return;
    }
    
    // Clear existing content
    projectsContainer.innerHTML = '';
    
    projects.forEach((project, index) => {
        const projectElement = document.createElement('div');
        projectElement.classList.add('project-item');
        projectElement.innerHTML = `
            <img src="${project.image}" alt="${project.name}" class="project-image">
            <div class="project-info">
                <h3>${project.name}</h3>
                <p>${project.description}</p>
                <a href="#" class="project-link">Learn More</a>
            </div>
        `;
        projectElement.style.animation = `fadeIn 0.5s ease forwards ${index * 0.1}s`;
        projectsContainer.appendChild(projectElement);
        
        // Check if the image loaded successfully
        const img = projectElement.querySelector('img');
        img.onerror = () => {
            console.error(`Failed to load image for project: ${project.name}`);
            img.src = 'path/to/placeholder-image.jpg'; // Replace with a placeholder image
        };
    });
}

const checkScroll = () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (sectionTop < windowHeight * 0.75) {
            section.classList.add('visible');
        }
    });
}

const parallaxEffect = () => {
    const parallaxElements = document.querySelectorAll('.parallax');
    let ticking = false;

    function updateParallax() {
        const scrollPosition = window.pageYOffset;
        parallaxElements.forEach(element => {
            const speed = element.dataset.speed || 0.5;
            const rect = element.getBoundingClientRect();
            const elementTop = rect.top + scrollPosition;
            const elementBottom = elementTop + rect.height;
            
            if (scrollPosition >= elementTop - window.innerHeight && scrollPosition <= elementBottom) {
                const yPos = (scrollPosition - elementTop) * speed;
                element.style.transform = `translateY(${yPos}px)`;
            }
        });
        ticking = false;
    }

    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                updateParallax();
                ticking = false;
            });
            ticking = true;
        }
    });
}

const dynamicTyping = () => {
    const element = document.querySelector('.dynamic-text');
    const texts = ['AI Engineer', 'Machine Learning Expert', 'Problem Solver', 'Innovator'];
    let index = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentText = texts[index];
        if (isDeleting) {
            element.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            element.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
        }

        if (!isDeleting && charIndex === currentText.length) {
            isDeleting = true;
            setTimeout(type, 1500);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            index = (index + 1) % texts.length;
            setTimeout(type, 500);
        } else {
            setTimeout(type, isDeleting ? 50 : 100);
        }
    }

    type();
}

const createSpheres = () => {
    const container = document.getElementById('sphere-container');
    const sphereCount = 10;
    const colors = ['#6c5ce7', '#00b894', '#fdcb6e', '#e17055', '#74b9ff'];

    for (let i = 0; i < sphereCount; i++) {
        const sphere = document.createElement('div');
        sphere.classList.add('sphere');
        sphere.style.width = `${Math.random() * 100 + 50}px`;
        sphere.style.height = sphere.style.width;
        sphere.style.left = `${Math.random() * 100}vw`;
        sphere.style.top = `${Math.random() * 100}vh`;
        
        // Assign a random color from the colors array
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        sphere.style.background = `radial-gradient(circle at 30% 30%, ${randomColor}66, ${randomColor}1A 30%, ${randomColor}00 70%)`;
        sphere.style.boxShadow = `inset 0 0 20px ${randomColor}33, 0 0 20px ${randomColor}1A`;
        
        container.appendChild(sphere);
    }
}

const animateSpheres = () => {
    const spheres = document.querySelectorAll('.sphere');
    let scrollPosition = window.pageYOffset;

    spheres.forEach((sphere, index) => {
        const speed = 0.05 + (index / spheres.length) * 0.05;
        const yPos = scrollPosition * speed;
        const xPos = Math.sin(scrollPosition * 0.001 + index) * 50;
        sphere.style.transform = `translate3d(${xPos}px, ${yPos}px, 0)`;
        
        // Remove the opacity change to keep spheres visible
        sphere.style.opacity = 0.7;
    });
}

const animateSocialIcons = () => {
    const socialIcons = document.querySelectorAll('.social-icons a');
    socialIcons.forEach((icon, index) => {
        icon.style.opacity = '0';
        icon.style.transform = 'translateY(20px)';
        setTimeout(() => {
            icon.style.transition = 'all 0.5s ease';
            icon.style.opacity = '1';
            icon.style.transform = 'translateY(0)';
        }, index * 200);
    });
}

const checkbox = document.getElementById('checkbox');
const body = document.body;

// Function to set the theme
const setTheme = (isDark) => {
    body.classList.toggle('light-theme', !isDark);
    body.classList.toggle('dark-theme', isDark);
    localStorage.setItem('isDarkTheme', isDark);
}

// Check for saved theme preference or use default (dark)
const savedTheme = localStorage.getItem('isDarkTheme');
const initialState = savedTheme !== null ? JSON.parse(savedTheme) : true;
setTheme(initialState);
checkbox.checked = initialState;

// Event listener for theme switch
checkbox.addEventListener('change', () => {
    setTheme(checkbox.checked);
});

// Update your existing updateThemeColors function
const updateThemeColors = () => {
    const isDark = body.classList.contains('dark-theme');
    document.documentElement.style.setProperty('--primary-color', isDark ? 'var(--primary-color-dark)' : 'var(--primary-color-light)');
    document.documentElement.style.setProperty('--secondary-color', isDark ? 'var(--secondary-color-dark)' : 'var(--secondary-color-light)');
    document.documentElement.style.setProperty('--text-color', isDark ? 'var(--text-color-dark)' : 'var(--text-color-light)');
    document.documentElement.style.setProperty('--background-color', isDark ? 'var(--background-color-dark)' : 'var(--background-color-light)');
    document.documentElement.style.setProperty('--accent-color', isDark ? 'var(--accent-color-dark)' : 'var(--accent-color-light)');
    document.documentElement.style.setProperty('--highlight-color', isDark ? 'var(--highlight-color-dark)' : 'var(--highlight-color-light)');
}

// Call updateThemeColors whenever the theme changes
checkbox.addEventListener('change', updateThemeColors);

// Initial call to set the correct colors
updateThemeColors();

const app = () => {
    navSlide();
    populateSkills();
    createSpheres();
    parallaxEffect();
    dynamicTyping();
    animateSocialIcons();
    populateProjects();
    
    window.addEventListener('scroll', () => {
        checkScroll();
        animateSpheres();
    });
    
    checkScroll();
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Dynamic header that changes on scroll
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Cursor effects
const customCursor = document.querySelector('.custom-cursor');
let cursorX = 0;
let cursorY = 0;
let targetX = 0;
let targetY = 0;

document.addEventListener('mousemove', (e) => {
    targetX = e.clientX;
    targetY = e.clientY;
});

function updateCursor() {
    const dx = targetX - cursorX;
    const dy = targetY - cursorY;
    
    cursorX += dx * 0.1;
    cursorY += dy * 0.1;
    
    customCursor.style.left = `${cursorX}px`;
    customCursor.style.top = `${cursorY}px`;
    
    requestAnimationFrame(updateCursor);
}

updateCursor();

// Add hover effect to interactive elements
const interactiveElements = document.querySelectorAll('a, button, .project-item, .skill-item');

interactiveElements.forEach(elem => {
    elem.addEventListener('mouseenter', () => {
        customCursor.classList.add('hover');
    });
    elem.addEventListener('mouseleave', () => {
        customCursor.classList.remove('hover');
    });
});

// Hide default cursor
document.body.style.cursor = 'none';
interactiveElements.forEach(elem => {
    elem.style.cursor = 'none';
});

// Interactive form elements with validation feedback
const form = document.querySelector('form');
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const inputs = form.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            if (!input.value) {
                input.classList.add('error');
            } else {
                input.classList.remove('error');
            }
        });
    });
}

// Initialize the app when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', app);

document.addEventListener('DOMContentLoaded', () => {
    const downloadButton = document.querySelector('.cta-button[download]');
    if (downloadButton) {
        downloadButton.addEventListener('click', () => {
            console.log('CV download initiated');
            // You could add analytics tracking here
        });
    }
});
