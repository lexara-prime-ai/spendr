// DEBUGGING
const log = console.log;
// APP STYLES
class AppStyles {
    // METHOD TO IMPORT STYLE SHEETS
    static importStyleSheets() {
    
        // CREATE NEW LINK ELEMENT
        const favicon = document.createElement('link');
        favicon.rel = 'icon';
        favicon.type = 'image/x-icon';
        favicon.href = '../src/assets/images/icons/favicon.ico';
        // APPEND TO HEAD
        document.head.appendChild(favicon);

        // CREATE NEW LINK ELEMENT
        const link = document.createElement('link');
        // SET ATTRIBUTES
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = '../src/css/App.css';
        // APPEND TO HEAD
        document.head.appendChild(link);

        // CREATE NEW LINK ELEMENT
        const fonts = document.createElement('link');
        fonts.rel = 'stylesheet';
        fonts.type = 'text/css';
        fonts.href = '../src/assets/fontawesome/css/all.css';
        // APPEND TO HEAD
        document.head.appendChild(fonts);

        // CREATE NEW SCRIPT ELEMENT
        const fontScript = document.createElement('script');
        fontScript.src = '../src/assets/fontawesome/js/all.js';
        // APPEND TO BODY
        document.body.appendChild(fontScript);
    }
}

export default AppStyles.importStyleSheets();


