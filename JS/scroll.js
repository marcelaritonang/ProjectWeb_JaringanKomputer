function smoothScroll(design) {
    const element = document.getElementById(design);
    const elementPosition = element.getBoundingClientRect().top;
    const startingY = window.pageYOffset;
    const targetY = startingY + elementPosition;
    const totalDistance = Math.abs(startingY - targetY);
    let currentDistance = 0;
    let step = 20;
  
    function scrollAnimation() {
      const distance = Math.min(step, totalDistance - currentDistance);
      currentDistance += distance;
  
      window.scrollTo(0, startingY + currentDistance);
  
      if (currentDistance < totalDistance) {
        requestAnimationFrame(scrollAnimation);
      }
    }
  
    requestAnimationFrame(scrollAnimation);
  }