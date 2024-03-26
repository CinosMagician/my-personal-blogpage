const modeToggleBtn = document.getElementById('modeChange');
const body = document.body;
let isDark = localStorage.getItem('isDark') === 'true';

modeToggleBtn.addEventListener('click', toggleDarkMode);

function toggleDarkMode() {
    body.classList.toggle('darkMode');
    isDark = !isDark;
    localStorage.setItem('isDark', isDark.toString());
    if (isDark){
        modeToggleBtn.textContent = '☀️'
    }
    else {
        modeToggleBtn.textContent = '🌑'
    }
}

if (isDark) {
    toggleDarkMode();
    isDark = !isDark;
    localStorage.setItem('isDark', isDark.toString());
}

