function volume_sphere(event) {
    // Prevent form submission from reloading the page
    if (event) event.preventDefault();

    // Get radius value from input field
    let radius = parseFloat(document.getElementById('radius').value);

    // Validate input and calculate volume
    let volume;
    if (isNaN(radius) || radius < 0) {
        volume = NaN;
    } else {
        volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
        volume = volume.toFixed(4); // Round to 4 decimal places
    }

    // Display result in the volume input field
    document.getElementById('volume').value = volume;

    return false; // Prevent default form action
}

// Attach the handler when DOM is ready
window.onload = function() {
    document.getElementById('MyForm').onsubmit = volume_sphere;
};
