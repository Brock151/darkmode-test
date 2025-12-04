(function() {
    const currentTheme = localStorage.getItem('darkMode') || 'light';
    
    if (currentTheme === 'dark') {
        document.body.classList.add('dark-mode');
    }
    
    document.addEventListener('DOMContentLoaded', function() {
        addToggleButton();
    });
    
    function addToggleButton() {
        const navbar = document.querySelector('.navbar-nav');
        if (!navbar) return;
        
        const toggleBtn = document.createElement('button');
        toggleBtn.className = 'dark-mode-toggle';
        toggleBtn.innerHTML = localStorage.getItem('darkMode') === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode';
        toggleBtn.onclick = toggleDarkMode;
        
        navbar.parentElement.appendChild(toggleBtn);
    }
    
    function toggleDarkMode() {
        const isDark = document.body.classList.toggle('dark-mode');
        const theme = isDark ? 'dark' : 'light';
        localStorage.setItem('darkMode', theme);
        
        const btn = document.querySelector('.dark-mode-toggle');
        if (btn) {
            btn.innerHTML = isDark ? '☀️ Light Mode' : '🌙 Dark Mode';
        }
    }
})();