
document.getElementById('generate-btn').addEventListener('click', () => {
    console.log('Generate button clicked');
    const lottoNumbersContainer = document.getElementById('lotto-numbers');
    lottoNumbersContainer.innerHTML = '';
    const numbers = new Set();
    while (numbers.size < 6) {
        const randomNumber = Math.floor(Math.random() * 45) + 1;
        numbers.add(randomNumber);
    }
    for (const number of Array.from(numbers).sort((a, b) => a - b)) {
        const numberElement = document.createElement('div');
        numberElement.classList.add('lotto-number');
        numberElement.textContent = number;
        lottoNumbersContainer.appendChild(numberElement);
    }
});

// Theme Toggle Functionality
console.log('Theme toggle script loaded');

const themeToggleButton = document.getElementById('theme-toggle');
const body = document.body;

const lightModeIcon = '☀️';
const darkModeIcon = '🌙';
const lightModeText = 'Light Mode';
const darkModeText = 'Dark Mode';

function applyTheme(isDarkMode) {
    console.log(`Applying theme: ${isDarkMode ? 'dark' : 'light'}`);
    if (isDarkMode) {
        body.classList.add('dark-mode');
        themeToggleButton.querySelector('.icon').textContent = darkModeIcon;
        themeToggleButton.querySelector('.text').textContent = darkModeText;
    } else {
        body.classList.remove('dark-mode');
        themeToggleButton.querySelector('.icon').textContent = lightModeIcon;
        themeToggleButton.querySelector('.text').textContent = lightModeText;
    }
}

// Check for saved theme preference or default to light mode
const savedTheme = localStorage.getItem('theme');
console.log(`Saved theme from local storage: ${savedTheme}`);

if (savedTheme === 'dark') {
    applyTheme(true);
} else {
    applyTheme(false); // Default to light mode if no preference or 'light'
}

themeToggleButton.addEventListener('click', () => {
    console.log('Theme toggle button clicked');
    const isDarkMode = body.classList.contains('dark-mode');
    console.log(`Current isDarkMode: ${isDarkMode}`);
    if (isDarkMode) {
        applyTheme(false);
        localStorage.setItem('theme', 'light');
    } else {
        applyTheme(true);
        localStorage.setItem('theme', 'dark');
    }
});
