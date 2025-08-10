document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM Content Loaded. Initializing theme toggle.');

    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const htmlElement = document.documentElement; // This refers to the <html> tag

    if (themeToggleBtn && themeIcon && htmlElement) {
        console.log('Theme toggle elements found.');
    } else {
        console.error('One or more theme toggle elements not found:', { themeToggleBtn, themeIcon, htmlElement });
        // Exit if elements are not found to prevent further errors
        return;
    }

    // Function to set the theme
    const setTheme = (theme) => {
        console.log('Setting theme to:', theme);
        htmlElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        if (theme === 'dark') {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
            console.log('Icon changed to sun.');
        } else {
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
            console.log('Icon changed to moon.');
        }
    };

    // Check for saved theme preference or default to light
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        console.log('Found saved theme:', savedTheme);
        setTheme(savedTheme);
    } else {
        console.log('No saved theme found. Defaulting to light theme.');
        // Default to light theme if no preference is saved
        setTheme('light');
    }

    // Event listener for the theme toggle button
    themeToggleBtn.addEventListener('click', () => {
        console.log('Theme toggle button clicked.');
        const currentTheme = htmlElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
    });
});




        // Theme Toggle Functionality
        document.addEventListener('DOMContentLoaded', function() {
            const themeToggleBtn = document.getElementById('theme-toggle');
            const sunIcon = document.getElementById('sun-icon');
            const moonIcon = document.getElementById('moon-icon');

            // Check for saved theme preference, otherwise use system preference
            if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                document.documentElement.classList.add('dark');
                sunIcon.classList.remove('hidden');
                moonIcon.classList.add('hidden');
            } else {
                document.documentElement.classList.remove('dark');
                sunIcon.classList.add('hidden');
                moonIcon.classList.remove('hidden');
            }

            // Toggle theme
            themeToggleBtn.addEventListener('click', function() {
                document.documentElement.classList.toggle('dark');
                sunIcon.classList.toggle('hidden');
                moonIcon.classList.toggle('hidden');

                // Save preference
                localStorage.theme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
            });

            // Mobile menu functionality
            const menuBtn = document.getElementById('menu-btn');
            const mobileMenu = document.getElementById('mobile-menu');
            if (menuBtn && mobileMenu) {
                menuBtn.addEventListener('click', () => {
                    mobileMenu.classList.toggle('hidden');
                });
            }
        });
