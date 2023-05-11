// Function to scroll to the bottom of the page
function scrollToBottom() {
  const scrollHeight = document.body.scrollHeight;
  const duration = 1000; // Animation duration in milliseconds
  const start = performance.now(); // Get the current timestamp

  // Use requestAnimationFrame() to animate
  requestAnimationFrame(function animateScroll(timestamp) {
    const elapsed = timestamp - start; // Calculate the elapsed time
    const progress = Math.min(elapsed / duration, 1); // Calculate the progress
    const scrollY = progress * scrollHeight; // Calculate the target scroll position
    window.scrollTo(0, scrollY); // Scroll to the target position

    if (progress < 1) {
      // If the animation is not finished, continue animating
      requestAnimationFrame(animateScroll);
    } else {
      // If the animation is finished, show the content
      document.querySelector('.main-content').classList.add('hidden');
      document.querySelector('.content').classList.remove('hidden');
    }
  });
}
function scrollToNextPage() {
  document.querySelector('.page1').style.transform = 'translateY(-100%)';
  document.querySelector('.page2').style.transform = 'translateY(0)';
}
