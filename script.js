// Toggle navigation menu visibility
function toggleMenu() {
    const navMenu = document.querySelector('nav ul');
    navMenu.classList.toggle('visible');
}
document.getElementById('hamburgerIcon').addEventListener('click', toggleMenu);

// Smooth scrolling behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Filter projects
function filterProjects(category) {
    const projects = document.querySelectorAll('.project');
    projects.forEach(project => {
        if (category === 'all' || project.classList.contains(category)) {
            project.style.display = 'block';
        } else {
            project.style.display = 'none';
        }
    });
}
document.querySelectorAll('.filter-button').forEach(button => {
    button.addEventListener('click', () => filterProjects(button.dataset.category));
});

// Lightbox effect for project images
function openLightbox(imageSrc) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightboxImage');
    lightboxImage.src = imageSrc;
    lightbox.style.display = 'block';
}
function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}
document.querySelectorAll('.project img').forEach(image => {
    image.addEventListener('click', () => openLightbox(image.src));
});

// Form validation
function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    let isValid = true;

    if (!name) {
        isValid = false;
        console.log('Alert triggered: Missing name');
        alert('Please enter your name.');
    }
    if (!email) {
        isValid = false;
        console.log('Alert triggered: Missing email');
        alert('Please enter your email.');
    }
    if (!message) {
        isValid = false;
        console.log('Alert triggered: Missing message');
        alert('Please enter your message.');
    }
    return isValid;
}
document.getElementById('contactForm').addEventListener('submit', function(e) {
    if (!validateForm()) {
        e.preventDefault();
    }
});

// Provide real-time feedback
document.getElementById('contactForm').addEventListener('input', function(e) {
    const inputField = e.target;
    if (inputField.value === '') {
        inputField.classList.add('error');
    } else {
        inputField.classList.remove('error');
    }
});

// Testing and debugging
// Use console logs and debugging tools
document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
});

// Example: Logging project filter button clicks
document.querySelectorAll('.filter-button').forEach(button => {
    button.addEventListener('click', () => {
        console.log(`Filter button clicked: ${button.dataset.category}`);
    });
});