// Main Game Loop
function mainLoop() {
    // Update game state
    update();
    // Render the current state
    render();
    // Call the next frame
    requestAnimationFrame(mainLoop);
}

// Start the game loop
mainLoop();