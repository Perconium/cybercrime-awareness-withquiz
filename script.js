document.getElementById('glitch-btn').addEventListener('click', function() {
    // Apply jitter effect to the entire body
    document.body.classList.toggle('jitter');

    // Change colors
    let originalColors = [document.body.style.color, document.body.style.backgroundColor];
    document.body.style.color = getRandomColor();
    document.body.style.backgroundColor = getRandomColor();

    // Show glitch message
    const glitchEffect = document.getElementById('glitch-effect');
    glitchEffect.style.display = 'block';

    // Revert colors and remove jitter after 3 seconds
    setTimeout(function() {
        document.body.classList.remove('jitter');
        document.body.style.color = originalColors[0];
        document.body.style.backgroundColor = originalColors[1];
        glitchEffect.style.display = 'none';
    }, 3000); // Glitch effect lasts for 3 seconds
});

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
document.getElementById('glitch-button').addEventListener('click', function() {
    // Show the modal
    document.getElementById('myModal').style.display = 'block';
});

document.getElementById('close-modal').addEventListener('click', function() {
    // Hide the modal
    document.getElementById('myModal').style.display = 'none';
});

// Close the modal when the user clicks anywhere outside of the modal
window.onclick = function(event) {
    if (event.target === document.getElementById('myModal')) {
        document.getElementById('myModal').style.display = 'none';
    }
}