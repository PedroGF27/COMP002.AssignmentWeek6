// 1. Write code to allow visitors of the page to customize it to their liking. There is a
// form on the page that accepts a name (to be used in a greeting when the user visits
// the page) and a color picker to allow the user to choose their preferred background
// color/foreground color combination. Write the necessary code to capture these values
// when the form is submitted (prevent the default action on the form submission button to
// achieve this) and store these values in localStorage (so that it persists on the user’s
// computer and their preferences are saved indefinitely). Next, write a function to apply
// the preferences if they have been set and call it each time the page loads. You may
// also want to call this function again when the user saves their preferences to
// immediately apply them. Make sure you also notify the user somehow that the preferences
// were saved.

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('preferences-form'); // assigns preferences-form to the constant variable form
    const notification = document.getElementById(''); // assigns the ID submit to constant variable notification
    const greeting = document.getElementById('greeting');// assigns the ID greeting to constant variable greeting

function savePreferences(event) { // defines a function names savePreferences. The event object is the event that triggered the function.
    event.preventDefault(); // prevents default action. This allows the form submission to be handled by javascript.
    const name = document.getElementById('name').value; // retrieves the current value of ID name. Then it is stored in the constant variable
    const bgColor = document.getElementById('background-color').value; // retrieves ID 'background-color' current value. Then is stored in variable bgColor
    const fgColor = document.getElementById('foreground-color').value; // retrieves ID 'foreground-color' current value then stores it in fgColor

    localStorage.setItem('name', name);
    localStorage.setItem('background-color', bgColor);
    localStorage.setItem('foreground-color', fgColor);
    
    applyPreferences(); // retrieves preferences from the localStorage and applies them to the web page.
    notification.style.display = 'block'; // used to style 'notification' element to make it more visible and tell the user that their preferences were saved.
    setTimeout(() => {
        notification.style.display = 'none';
    }, 2000); // hides the 'notification' element after 2 seconds
}

function applyPreferences() {
    const name = localStorage.getItem('name'); // retrieves 'name' from local storage
    const bgColor = localStorage.getItem('background-color'); // retrieves 'background-color' from local storage
    const fgColor = localStorage.getItem('foreground-color'); // retrieves 'foreground-color' from local storage

    if (name) {
        greeting.textContent = `Welcome, ${name}!`; // checks 'name' value and updates "greeting"
    }
    if (bgColor) {
        document.body.style.backgroundColor = bgColor; // Checks 'bgColor' value and sets background color accordingly
    }
    if (fgColor) {
        document.body.style.color = fgColor; // checks 'fgColor' value and sets foreground color accordingly. 
    }
}

applyPreferences();

form.addEventListener('submit', savePreferences);

});

var buttonPressed = document.getElementsByTagName("submit")[0];
buttonPressed.addEventListener('click', function (event) {
    alert("Preferences Saved!")
})
