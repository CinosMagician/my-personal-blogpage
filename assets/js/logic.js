const modeToggleBtn = document.getElementById('modeChange');
const body = document.body;
let isDark = false;

modeToggleBtn.addEventListener('click', function() {
    body.classList.toggle('darkMode');
    isDark = !isDark;
    if (isDark){
        modeToggleBtn.textContent = '☀️'
    }
    else {
        modeToggleBtn.textContent = '🌑'
    }
});