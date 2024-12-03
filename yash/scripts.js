function handleAccordion(accordionId) {
    document.querySelectorAll(`#${accordionId} .at-title`).forEach(header => {
        header.addEventListener('click', () => {
            const content = header.closest('.at-item-border').querySelector('.at-tab');

            // Check if the content is already open
            const isOpen = content.classList.contains('active');

            // Close all contents in the current accordion
            document.querySelectorAll(`#${accordionId} .at-tab`).forEach(item => {
                item.classList.remove('active');
                item.style.maxHeight = null;
            });

            document.querySelectorAll(`#${accordionId} .at-title`).forEach(item => {
                item.classList.remove('active');
            });

            // If the content was not open, open it
            if (!isOpen) {
                content.classList.add('active');
                content.style.maxHeight = content.scrollHeight + "px";
                header.classList.add('active');
            }
        });
    });
}

// Initialize both accordions
// Initialize accordions
handleAccordion('accordion1');
handleAccordion('accordion2');

// Select elements for the menu
const menuBtn = document.querySelector('.menu-btn');
const closeBtn = document.querySelector('.close-btn');
const navlinks = document.querySelector('.nav-links');

// Add event listener for the menu button
menuBtn.addEventListener('click', () => {
    navlinks.classList.add('active'); // Show menu
});

// Add event listener for the close button
closeBtn.addEventListener('click', () => {
    navlinks.classList.remove('active'); // Hide menu
});

// Stop animations after 5 seconds
setTimeout(() => {
    const radiusAnimation = document.getElementById('radiusAnimation');
    const colorAnimation = document.getElementById('colorAnimation');

    if (radiusAnimation) {
        radiusAnimation.setAttribute('repeatCount', '0');
    }

    if (colorAnimation) {
        colorAnimation.setAttribute('repeatCount', '0');
    }
}, 5000); // 5000 milliseconds = 5 seconds
