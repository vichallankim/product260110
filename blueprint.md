# Project Blueprint: Lotto Number Generator with Theme Toggle

## Overview
This project is a simple web application that generates a set of 6 unique lotto numbers (from 1 to 45). It also includes a theme toggle feature, allowing users to switch between light and dark modes.

## Detailed Outline

### `index.html`
- **Structure**: Basic HTML5 document with `head` and `body`.
- **Title**: "Lotto Number Generator".
- **CSS Link**: Links `style.css` for styling.
- **JavaScript Link**: Links `main.js` for functionality.
- **Main Container (`.container`)**:
    - Houses the `theme-toggle` button, `h1` title, `generate-btn` button, and `lotto-numbers-container`.
    - `theme-toggle` button:
        - `id="theme-toggle"`
        - `class="theme-toggle"`
        - Contains a `span` for an icon (☀️/🌙) and a `span` for text ("Light Mode"/"Dark Mode").
- **Heading**: `h1` with text "Lotto Number Generator".
- **Generate Button**: `button` with `id="generate-btn"` and text "Generate Numbers".
- **Lotto Numbers Container**: `div` with `id="lotto-numbers"` and `class="lotto-numbers-container"`. This is where the generated numbers will be displayed.

### `style.css`
- **Basic Styles**: Sets `font-family`, centers content, sets minimum height, and removes default margins for the `body`.
- **Theme Variables**: Defines CSS custom properties (`--background-color`, `--text-color`, `--container-bg`, `--button-bg`, etc.) for both light and dark modes.
- **Dark Mode (`body.dark-mode`)**: Overrides the CSS variables for dark mode, providing a dark color scheme.
- **Container Styling**: Styles the main `.container` with background, padding, border-radius, box-shadow, and a relative position for the theme toggle.
- **Heading Styling**: Styles `h1`.
- **Button Styling**: Styles general `button` elements, including `hover` effects.
- **Lotto Numbers Container Styling**: Uses flexbox for displaying lotto numbers.
- **Lotto Number Styling**: Styles individual `.lotto-number` elements (circular shape, font size, etc.).
- **Theme Toggle Button Styling (`.theme-toggle`)**:
    - **Positioning**: Absolute positioning for the top-right corner of the container.
    - **Appearance**: Background, border, color, padding, border-radius, font size, cursor.
    - **Layout**: Uses flexbox for icon and text.
    - **Hover Effect**: Changes background on hover.
    - **Icon/Text**: Styles the `icon` span and hides the `text` span by default, showing it on wider screens via a media query.

### `main.js`
- **Lotto Number Generation**:
    - Event listener on `generate-btn` click.
    - Clears previous numbers.
    - Generates 6 unique random numbers between 1 and 45 using a `Set`.
    - Sorts the numbers.
    - Creates `div` elements for each number, adds `lotto-number` class, sets text content, and appends to `lotto-numbers-container`.
- **Theme Toggle Functionality**:
    - **Elements**: Gets references to `theme-toggle` button and `document.body`.
    - **Icons/Text**: Defines `lightModeIcon` (☀️), `darkModeIcon` (🌙), `lightModeText` ("Light Mode"), and `darkModeText` ("Dark Mode").
    - **`applyTheme(isDarkMode)` function**:
        - Adds/removes `dark-mode` class from `body`.
        - Updates the icon and text within the `theme-toggle` button based on the `isDarkMode` parameter.
    - **Initial Theme Load**:
        - Checks `localStorage` for a saved 'theme' preference.
        - Calls `applyTheme` based on the saved preference, defaulting to light mode if no preference is found.
    - **Toggle Event Listener**:
        - On `theme-toggle` button click:
            - Determines the current mode.
            - Toggles the theme using `applyTheme`.
            - Stores the new theme preference ('light' or 'dark') in `localStorage`.