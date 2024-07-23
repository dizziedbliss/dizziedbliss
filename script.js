const canvas = document.getElementById('scribble');
const ctx = canvas.getContext('2d');

// Adjust canvas size to match its container
canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;

let drawing = false;

canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mouseup', stopDrawing);
canvas.addEventListener('mousemove', draw);

function startDrawing(e) {
    drawing = true;
    draw(e); // Draw a point on click
}

function stopDrawing() {
    drawing = false;
    ctx.beginPath(); // Reset path
}

function draw(e) {
    if (!drawing) return;

    ctx.lineWidth = 5; // Line thickness
    ctx.lineCap = 'round'; // Round line ends
    ctx.strokeStyle = '#000'; // Line color

    // Calculate mouse position relative to canvas
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    ctx.lineTo(x, y); // Draw a line to the current position
    ctx.stroke(); // Apply the stroke
    ctx.beginPath(); // Reset the path
    ctx.moveTo(x, y); // Move to the current position
}

