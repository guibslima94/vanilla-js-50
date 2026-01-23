const body = document.body;
const sliderContainer = document.querySelector('.slider-container');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');

let activeSlide = 0;
let slides = [];
let images = [];

// API key is loaded from config.js (not committed to git)
// Make sure config.js exists and defines UNSPLASH_ACCESS_KEY
if (typeof UNSPLASH_ACCESS_KEY === 'undefined') {
    console.error('Error: UNSPLASH_ACCESS_KEY is not defined. Please create config.js from config.js.example');
    // Fallback to empty string - will cause API to fail gracefully
    var UNSPLASH_ACCESS_KEY = '';
}

// Fetch random photos from Unsplash API directly
async function fetchUnsplashImages() {
    try {
        const response = await fetch(
            `https://api.unsplash.com/photos/random?count=5&orientation=landscape&client_id=${UNSPLASH_ACCESS_KEY}`
        );

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        images = Array.isArray(data) ? data : [data];
        createSlides();
        initializeSlider();
    } catch (error) {
        console.error('Error fetching images from Unsplash:', error);
        // Fallback to default images if API fails
        useDefaultImages();
    }
}

// Create slide elements dynamically
function createSlides() {
    // Clear existing slides (except buttons)
    const existingSlides = sliderContainer.querySelectorAll('.slide');
    existingSlides.forEach(slide => slide.remove());

    // Create new slides with Unsplash images
    images.forEach((photo, index) => {
        const slide = document.createElement('div');
        slide.className = index === 0 ? 'slide active' : 'slide';
        slide.style.backgroundImage = `url('${photo.urls.full}')`;
        sliderContainer.insertBefore(slide, leftBtn);
    });

    // Update slides NodeList
    slides = document.querySelectorAll('.slide');
}

// Fallback to default images if API fails
function useDefaultImages() {
    const defaultImages = [
        'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',
        'https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80',
        'https://images.unsplash.com/photo-1495467033336-2effd8753d51?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',
        'https://images.unsplash.com/photo-1522735338363-cc7313be0ae0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2689&q=80',
        'https://images.unsplash.com/photo-1559087867-ce4c91325525?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',
    ];

    // Clear existing slides
    const existingSlides = sliderContainer.querySelectorAll('.slide');
    existingSlides.forEach(slide => slide.remove());

    // Create slides with default images
    defaultImages.forEach((url, index) => {
        const slide = document.createElement('div');
        slide.className = index === 0 ? 'slide active' : 'slide';
        slide.style.backgroundImage = `url('${url}')`;
        sliderContainer.insertBefore(slide, leftBtn);
    });

    slides = document.querySelectorAll('.slide');
    initializeSlider();
}

// Initialize slider functionality
function initializeSlider() {
    setBgToBody();

    rightBtn.addEventListener('click', () => {
        activeSlide++;

        if (activeSlide > slides.length - 1) {
            activeSlide = 0;
        }

        setBgToBody();
        setActiveSlide();
    });

    leftBtn.addEventListener('click', () => {
        activeSlide--;

        if (activeSlide < 0) {
            activeSlide = slides.length - 1;
        }

        setBgToBody();
        setActiveSlide();
    });
}

function setBgToBody() {
    if (slides[activeSlide]) {
        body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
    }
}

function setActiveSlide() {
    slides.forEach(slide => {
        slide.classList.remove('active');
    });

    if (slides[activeSlide]) {
        slides[activeSlide].classList.add('active');
    }
}

// Start fetching images when page loads
fetchUnsplashImages();