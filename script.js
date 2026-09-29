document.addEventListener('DOMContentLoaded', () => {
    const mobileToggle = document.querySelector('.mobile-nav-toggle');
    const navContainer = document.querySelector('.nav-container');

    // Create backdrop element if it doesn't exist
    let backdrop = document.querySelector('.nav-backdrop');
    if (!backdrop) {
        backdrop = document.createElement('div');
        backdrop.className = 'nav-backdrop';
        document.body.appendChild(backdrop);
    }

    function openMenu() {
        if (mobileToggle && navContainer) {
            mobileToggle.classList.add('active');
            mobileToggle.setAttribute('aria-expanded', 'true');
            navContainer.classList.add('active');
            backdrop.classList.add('active');
            document.body.classList.add('nav-open');
        }
    }

    function closeMenu() {
        if (mobileToggle && navContainer) {
            mobileToggle.classList.remove('active');
            mobileToggle.setAttribute('aria-expanded', 'false');
            navContainer.classList.remove('active');
            backdrop.classList.remove('active');
            document.body.classList.remove('nav-open');
        }
    }

    if (mobileToggle && navContainer) {
        mobileToggle.setAttribute('aria-expanded', 'false');

        mobileToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            const isOpen = navContainer.classList.contains('active');
            if (isOpen) {
                closeMenu();
            } else {
                openMenu();
            }
        });

        // Close on clicking backdrop
        backdrop.addEventListener('click', closeMenu);

        // Close menu when clicking any nav link
        const navLinks = document.querySelectorAll('.nav-links a, .lang-btn');
        navLinks.forEach(link => {
            link.addEventListener('click', closeMenu);
        });

        // Close menu on Escape key press
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && navContainer.classList.contains('active')) {
                closeMenu();
            }
        });
    }
});
