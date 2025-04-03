// Wait for DOM to be fully loaded before executing JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // 1. Change text content dynamically
    const textChangerBtn = document.getElementById('text-changer');
    const changeableText = document.getElementById('changeable-text');
    
    textChangerBtn.addEventListener('click', function() {
        const messages = [
            "Text has been changed!",
            "JavaScript is powerful!",
            "You can create dynamic content easily.",
            "Web development is fun!",
            "Keep learning and coding!"
        ];
        
        const randomIndex = Math.floor(Math.random() * messages.length);
        changeableText.textContent = messages[randomIndex];
    });
    
    // 2. Modify CSS styles via JavaScript
    const styleChangerBtn = document.getElementById('style-changer');
    const styleDemo = document.getElementById('style-demo');
    let styleChanged = false;
    
    styleChangerBtn.addEventListener('click', function() {
        if (styleChanged) {
            styleDemo.style.backgroundColor = '#f0f0f0';
            styleDemo.style.color = '#333';
            styleDemo.style.border = '1px solid #ccc';
            styleDemo.style.transform = 'scale(1)';
        } else {
            styleDemo.style.backgroundColor = '#4a6fa5';
            styleDemo.style.color = 'white';
            styleDemo.style.border = '2px solid #ff6b6b';
            styleDemo.style.transform = 'scale(1.05)';
            styleDemo.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
        }
        styleChanged = !styleChanged;
    });
    
    // 3. Add or remove an element when a button is clicked
    const toggleBtn = document.getElementById('toggle-btn');
    const toggleElement = document.getElementById('toggle-element');
    const toggleContainer = document.getElementById('toggle-container');
    let elementVisible = true;
    
    toggleBtn.addEventListener('click', function() {
        if (elementVisible) {
            toggleElement.classList.remove('visible');
            toggleElement.classList.add('hidden');
        } else {
            // Create a new element if we want to demonstrate adding
            // Or just show the existing one
            toggleElement.classList.remove('hidden');
            toggleElement.classList.add('visible');
        }
        elementVisible = !elementVisible;
    });
});