const modeToggleBtn = document.getElementById('modeChange');
const body = document.body;
let isDark = localStorage.getItem('isDark') === 'true';

// Runs Function when Dark mode button is pressed
modeToggleBtn.addEventListener('click', toggleDarkMode);

function toggleDarkMode() {
    // Toggles the class darkMode which houses our color changes
    body.classList.toggle('darkMode');
    // Changes isDark to equal to not the current value of isDark, making a toggle.
    isDark = !isDark;
    // Stores isDark to localStorage so that when we change page it will still be dark/refreshing the page
    localStorage.setItem('isDark', isDark.toString());
    // If statement checks to see if isDark is true or not, and changes the emoticon used for the button for user clarity.
    if (isDark){
        modeToggleBtn.textContent = '☀️'
    }
    else {
        modeToggleBtn.textContent = '🌑'
    }
}
// If check to see if the page is meant to be in dark mode and runs the function to update the page accordingly as well as set the correct local value as refreshing or moving would break this.
if (isDark) {
    toggleDarkMode();
    isDark = !isDark;
    localStorage.setItem('isDark', isDark.toString());
    modeToggleBtn.textContent = '☀️'
}

