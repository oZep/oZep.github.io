document.addEventListener('DOMContentLoaded', function() {
    var scrollToElements = document.querySelectorAll('[data-scroll-to]');
  
    scrollToElements.forEach(function(element) {
      element.addEventListener('click', function(event) {
        event.preventDefault();
  
        var targetId = this.getAttribute('href');
        var targetElement = document.querySelector(targetId);
  
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  });
  