
// Lightbox Elements
const viewer = document.getElementById('viewer');
const viewImage = document.getElementById('viewimg');
const viewCaption = document.getElementById('viewcaption');


// Select All Artwork Buttons
const artworkButtons = document.querySelectorAll('[data-img]');


// Open Lightbox
artworkButtons.forEach(button => {

    button.addEventListener('click', () => {

        // Get image and title from HTML data attributes
        viewImage.src = button.dataset.img;
        viewCaption.textContent = button.dataset.title;

        // Show Lightbox
        viewer.classList.add('open');

        // Update accessibility
        viewer.setAttribute('aria-hidden', 'false');

        // Prevent background scrolling
        document.body.style.overflow = 'hidden';

    });

});


// Close Lightbox Function
function hideLightbox() {

    viewer.classList.remove('open');

    viewer.setAttribute('aria-hidden', 'true');

    document.body.style.overflow = '';

}


// Close Button
const closeButton = document.getElementById('close');

closeButton.addEventListener('click', hideLightbox);


// Close When Clicking Outside the Image
viewer.addEventListener('click', event => {

    if (event.target === viewer) {
        hideLightbox();
    }

});


// Close With ESC Key
document.addEventListener('keydown', event => {

    if (event.key === 'Escape') {
        hideLightbox();
    }

});
